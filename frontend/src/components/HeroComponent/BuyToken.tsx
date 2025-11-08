import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Input from '../ui/Input';
import Image from 'next/image';
import { OnlyNumber } from '@/utils/onlyNumber';
import { useBigMath } from '@/hooks/useBigMath';
import Button from '../ui/Button';

import MatamaskToken from '../commonComponents/MatamaskToken';
import { useBuyTokenMutation } from '@/hooks/useBuy';
import { useToast } from '@/hooks/useToast';
import { useDappContract } from '@/hooks/useContract';
import { WalletBalance } from '@/hooks/WalletBalance';

const BuyToken = ({ tokenPrice }: { tokenPrice: string }) => {
  const [activeField, setActiveField] = useState<'eth' | 'token' | null>(null);
  const [buyLoading, setbuyLoading] = useState(false);

  const contract = useDappContract();
  const buyTokenMutation = useBuyTokenMutation(contract);

  const [priceInEth, setPriceInEth, debouncePriceInEth] = useDebouncedValue('0', 400);
  const [tokenAmount, setTokenAmount, debounceTokenAmount] = useDebouncedValue('0', 400);
  const { loading, update } = useToast();
  const { symbol, formate } = WalletBalance();
  // --- conversions ---
  const ethToToken = useBigMath(debouncePriceInEth, tokenPrice, 'divide'); // ETH → Token
  const tokenToEth = useBigMath(debounceTokenAmount, tokenPrice, 'multiply'); // Token → ETH

  // --- input handlers ---
  const handleEthInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveField('eth');
    OnlyNumber(e, setPriceInEth, 5);
  }, []);

  const handleTokenInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveField('token');
    OnlyNumber(e, setTokenAmount, 10);
  }, []);

  // --- update Token when ETH changes ---
  useEffect(() => {
    if (activeField === 'eth') {
      // Prevent unnecessary updates
      if (ethToToken.toString() !== tokenAmount) {
        setTokenAmount(ethToToken.toString());
      }
    }
  }, [ethToToken, activeField]);

  // --- update ETH when Token changes ---
  useEffect(() => {
    if (activeField === 'token') {
      if (tokenToEth.toString() !== priceInEth) {
        setPriceInEth(tokenToEth.toString());
      }
    }
  }, [tokenToEth, activeField]);

  // --- buy handler ---
  const buyToken = useCallback(
    (price: string) => {
      console.log('hi');

      if (!buyTokenMutation) return;

      setbuyLoading(true);
      const toastId = loading({
        message: 'Purchasing token...',
        options: { position: 'bottom-right' },
      });

      buyTokenMutation.mutate(price, {
        onSuccess: () => {
          update(toastId, { type: 'success', message: 'Purchase successful!' });
          setbuyLoading(false);
          setPriceInEth('0');
          setTokenAmount('0');
        },
        onError: (err) => {
          update(toastId, { type: 'error', message: err?.message || 'Error purchasing' }),
            setbuyLoading(false);
        },
      });
    },
    [buyTokenMutation, debouncePriceInEth, loading, update],
  );

  // button details
  const myBalance = useMemo(() => Number(formate), [formate]);
  const isDisabled = Number(debounceTokenAmount) === 0 || myBalance < Number(debouncePriceInEth);
  const buttonTitle =
    Number(debounceTokenAmount) === 0
      ? 'Enter Amount'
      : myBalance < Number(debouncePriceInEth)
      ? 'Insufficient Amount'
      : 'Buy Now';

  const handleBlur = () => {
    if (Number(tokenAmount) < 1) return;
  };

  return (
    <div className="w-full flex flex-col  gap-6">
      <Button
        title={
          <div className="flex items-center justify-center gap-2">
            <Image src="/eth.svg" alt="eth" width={40} height={40} loading="eager" />
            <p className="text-20">Pay With ETH</p>
          </div>
        }
        handleClick={() => buyToken(tokenPrice)}
        othercss={'w-full px-3 py-2 text-base md:text-lg rounded-lg'}
      />
      <div className=" flex items-center justify-center py-1 w-full bg-[#f5f5f5] dark:bg-[#242429]">
        <p className="text-gray-500 dark:text-gray-400">ETH Balance:</p>
        {formate && (
          <p>
            {formate} {symbol}
          </p>
        )}
      </div>
      {/* -------------------------------input fiels ------------------------------ */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <p className="text-gray-500 dark:text-gray-400">ETH Amount</p>
          <Input
            type="text"
            value={priceInEth}
            handleChange={handleEthInput}
            inputClass="w-full"
            icon={<Icon icon="/eth.svg" title="ETH" />}
            placeholder={''}
          />
        </div>

        <div className="w-full">
          <p className="text-gray-500 dark:text-gray-400">Token Amount</p>
          <Input
            type="text"
            value={tokenAmount}
            handleChange={handleTokenInput}
            inputClass="w-full"
            icon={<Icon icon="/logo.png" title="SP" />}
            placeholder={''}
            onBlur={handleBlur}
          />
        </div>
      </div>
      {/* -------------------------------Confirmation Button ------------------------------ */}

      <Button
        title={buttonTitle}
        handleClick={() => buyToken(debouncePriceInEth)}
        disable={isDisabled}
        othercss={''}
        loading={buyLoading}
      />
      {/* ------add token to metamask  ---- */}

      <MatamaskToken />
    </div>
  );
};

export default React.memo(BuyToken);

const Icon = React.memo(({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <p>{title}</p>
      <Image src={icon} alt="icon" width={20} height={20} className="object-cover" />
    </div>
  );
});

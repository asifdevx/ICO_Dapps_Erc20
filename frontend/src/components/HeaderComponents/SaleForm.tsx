import { usePublicIcoData } from '@/hooks/usePublicIcoData';
import React from 'react';
import BoxTypeText from '../commonComponents/BoxTypeText';
import ProgressBar from '../commonComponents/ProgressBar';
import Button from '../ui/Button';
import Image from 'next/image';
import { WalletBalance } from '../../hooks/WalletBalance';
import { useAccount } from 'wagmi';

const SaleForm = () => {
  const { data } = usePublicIcoData();
  const { address } = useAccount();
  const { symbol, formate } = WalletBalance();
  if (!data || data === undefined) {
    return <p>Loading</p>;
  }
  return (
    <div className="w-full lg:w-[75%] text-black dark:text-white dark:text white flex flex-col items-center gap-5  bg-white/80 dark:bg-black/80 p-4 backdrop-blur-md shadow-lg">
      <BoxTypeText title="PreSale Now Live" />
      <h5 className="font-extrabold text-20 lg:text-26  font_gradient ">
        Token Sale <span className=""> Stage 1 - Buy SP Now</span>
      </h5>
      <p className="text-gray-500 dark:text-gray-400">Unit price increase</p>
      {/* custom progess bar  */}
     
      <ProgressBar data={data} />
      <div className="w-full bg-gray-400 h-[2px] rounded-full my-1" />
      <div className="w-full flex items-center justify-center gap-1">
        <BoxTypeText title="1" className="rounded-full" paraClass="text-xl" />
        <h4>{data.symbol} =</h4>
        <BoxTypeText
          title={<span>{data.tokenPrice} ETH </span>}
          paraClass="text-xl"
          className="!rounded-sm"
        />
      </div>
      <Button
        title={
          <div className="flex items-center justify-center gap-2">
            <Image src="/eth.svg" alt="eth" width={40} height={40} loading="eager" />
            <p className="text-20">Pay With ETH</p>
          </div>
        }
        othercss={'w-full px-3 py-2 text-base md:text-lg rounded-lg'}
      />
      {/* show ballance  */}
      {address ? (
        <div className=" flex items-center justify-center py-1 w-full ">
          <p className="text-gray-500 dark:text-gray-400">ETH Balance:</p>
          {formate && <p>{formate} {symbol}</p>}
        </div>
      ) : (
        <div className=" flex items-center py-1 w-full ">
          <p className="text-gray-500 dark:text-gray-400">Connect Wallet</p>
        </div>
      )}
    </div>
  );
};

export default SaleForm;

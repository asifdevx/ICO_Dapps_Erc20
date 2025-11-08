import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { usePublicIcoData } from '@/hooks/usePublicIcoData';
import { addTokenToMetaMask } from '@/hooks/addTokenToMetaMask';

const MatamaskToken = () => {
  const { data } = usePublicIcoData();
  const [loading, setLoading] = useState(false);

  const handleTokenToMetamask = useCallback(async () => {
    if (!data?.tokenAddr || !data?.symbol) return;

    setLoading(true);
    try {
      await addTokenToMetaMask({
        address: data.tokenAddr,
        decimals: data.tokenDecimals || 18,
        image:
          'https://crimson-odd-woodpecker-368.mypinata.cloud/ipfs/bafybeifvrh53ayzrwfxq5w5paih37oghyblhqn4lk5355fnb2gc7gzvn6q',
        symbol: data.symbol,
      });
    } finally {
      setLoading(false);
    }
  }, [data]);

  return (
    <Button
      title={
        <div className="flex items-center justify-between gap-2">
          <Image
            src="https://crimson-odd-woodpecker-368.mypinata.cloud/ipfs/bafybeifvrh53ayzrwfxq5w5paih37oghyblhqn4lk5355fnb2gc7gzvn6q"
            alt="logo"
            width={25}
            height={25}
            loading="lazy"
          />
          <p>Add Token To MetaMask</p>
        </div>
      }
      handleClick={handleTokenToMetamask}
      disable={loading}
      loading={loading}
      othercss={loading ? 'opacity-60 cursor-not-allowed' : ''}
    />
  );
};

export default React.memo(MatamaskToken);

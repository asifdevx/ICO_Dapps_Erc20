import { usePublicIcoData } from '@/hooks/usePublicIcoData';
import React from 'react';
import BoxTypeText from '../commonComponents/BoxTypeText';
import ProgressBar from '../commonComponents/ProgressBar';

import { WalletBalance } from '../../hooks/WalletBalance';
import { useAccount } from 'wagmi';

import BuyToken from './BuyToken';
import BuyTokenSkeleton from '../ui/skeleton';

const SaleForm = () => {
  const { data } = usePublicIcoData();
  const { address } = useAccount();

  
  if (!data || data === undefined) {
    return <BuyTokenSkeleton/>;
  }
  
  return (
    <div className="w-full sm:w-[80%] md:w-full xl:w-[75%]  text-black dark:text-white dark:text white flex flex-col items-center gap-5  bg-white/80 dark:bg-black/80 p-4 backdrop-blur-md dark:shadow-[0_0_12px_0_#c084fc] shadow-[0_0_9px_0_#60a5fa]">
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
        <h4>{data.symbol} = </h4>
        <BoxTypeText
          title={<span>{data.tokenPrice} ETH </span>}
          paraClass="text-xl"
          className="!rounded-sm"
        />
      </div>
     
      {/* show ballance  */}
      {address ? (     
        
        <BuyToken tokenPrice ={data.tokenPrice} />
        
      ) : (
        <div className=" flex items-center justify-center py-1 w-full bg-[#f5f5f5] dark:bg-[#242429]">
          <p className="text-gray-500 dark:text-gray-400">Connect Wallet</p>
        </div>
      )}
    </div>
  );
};

export default SaleForm;

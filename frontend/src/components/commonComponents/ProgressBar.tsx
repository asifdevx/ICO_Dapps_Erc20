
import { contractData } from "@/types";
import React, { useEffect, useState } from "react";

const ProgressBar = ({data}:{data:contractData}) => {
  const [progress, setProgress] = useState(0);
 
  const tokenPrice = Number(data?.tokenPrice || 0);
  const availableToken = Number(data?.tokenBalance || 0);
  const soldToken = Number(data?.soldAmount || 0);
  const totalToken = availableToken + soldToken;

  useEffect(() => {
    if (totalToken > 0) {
      setProgress(Math.min(100, (soldToken / totalToken) * 100));
    } else {
      setProgress(0);
    }
  }, [soldToken, totalToken]);

 
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start">
        <p className="text-gray-500 dark:text-gray-400">Current Price</p>
          <p className="font-extrabold">{tokenPrice} ETH</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-gray-500 dark:text-gray-400">Next Stage Price</p>
          <p className="font-extrabold">{tokenPrice * 3} ETH</p>
        </div>
      </div>

      <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-violet-400 to-purple-600 dark:from-violet-500 dark:to-purple-700 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <p className="text-gray-500 dark:text-gray-400">Total Raised:</p>
          <p className="font-extrabold">{tokenPrice * soldToken} ETH</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-purple-700 dark:text-purple-400 font-extrabold">
            {progress.toFixed(2)}%
          </p>
          <p className="text-gray-500 dark:text-gray-400">Complete</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(ProgressBar);

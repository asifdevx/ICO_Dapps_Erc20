import { ethers } from "ethers"
import { useQuery } from "@tanstack/react-query";

import icoAbi  from "../ABI/Ico_Dapp.json";

import { bigToStr } from "@/utils/convertion";

const RPC_URL = process.env.NEXT_PUBLIC_HOODI;
const SEPTUM_TOKEN = process.env.NEXT_PUBLIC_SEPTUM_TOKEN;
const ICO_DAPPS = process.env.NEXT_PUBLIC_ICO_DAPPS;

const fallbackProvider = new ethers.JsonRpcProvider(RPC_URL);





export const usePublicIcoData = () => {

 return useQuery(
   {
    queryKey: ["publicIcoData"],
    queryFn:async()=>{
        const icoContract = new ethers.Contract(ICO_DAPPS!,icoAbi,fallbackProvider);
        const [ tokenAddr, symbol, decimals, balance, ethPrice, sold ]= await icoContract.getContractInfo();

        const tokenDecimals = parseInt(decimals) || 18;

        const tokenBalance = bigToStr(balance,tokenDecimals);
        const tokenPrice = bigToStr(ethPrice,tokenDecimals);
        const soldAmount  = bigToStr(sold,tokenDecimals);
    
        return { tokenAddr, symbol, tokenDecimals, tokenBalance, tokenPrice, soldAmount };
    },
    refetchInterval: 30_000,

   }
   );
}
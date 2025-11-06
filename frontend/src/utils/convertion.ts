import { BigNumberish, ethers } from "ethers";

export const bigToStr = (big:BigNumberish,converstion:number)=>ethers.formatUnits(big,converstion);
import { useEffect, useMemo, useState } from "react";
import { ethers } from "ethers";
import tokenAbi from "../ABI/septum.json"
import dappsAbi from "../ABI/Ico_Dapp.json";
import { useToast } from "./useToast";

const toast = useToast();


export function useDappContract() {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const DAPP_ADDRESS = process.env.NEXT_PUBLIC_ICO_DAPPS!;

  useEffect(() => {
    const setup = async () => {
      try {
        if (!window.ethereum) throw new Error("MetaMask not found");
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        setSigner(signer);
      } catch (error: any) {
        toast.error(error.message || "Failed to connect wallet");
      }
    };
    setup();
  }, []);

  const contract = useMemo(() => {
    if (!signer || !DAPP_ADDRESS) return null;
    try {
      return new ethers.Contract(DAPP_ADDRESS, dappsAbi, signer);
    } catch (e) {
      console.error("Failed to create Dapp contract:", e);
      return null;
    }
  }, [signer, DAPP_ADDRESS]);

  return contract;
}

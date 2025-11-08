import { useToast } from "./useToast";

export const addTokenToMetaMask = async ({
  address,
  symbol,
  decimals,
  image,
}: {
  address: string;
  symbol: string;
  decimals: number;
  image?: string;
}) => {
  const { warning, success, error } = useToast();

  try {
    if (!window.ethereum) {
      warning({ message: "MetaMask not found" });
      return { success: false };
    }

    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          symbol,
          decimals,
          image,
        },
      },
    });

    if (wasAdded) {
      success({ message: `${symbol} added to MetaMask` });
      return { success: true };
    } else {
      error({ message: `User rejected adding ${symbol}` });
      return { success: false };
    }
  } catch (err: any) {
    error({ message: `Error adding token: ${err?.message || "Unknown error"}` });
    return { success: false };
  }
};

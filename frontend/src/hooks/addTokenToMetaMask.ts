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
    try {
      if (!window.ethereum) {
        alert("MetaMask not found");
        return false;
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
        console.log(`${symbol} added to MetaMask`);
        return true;
      } else {
        console.log(`User rejected adding ${symbol}`);
        return false;
      }
    } catch (error) {
      console.error("Error adding token:", error);
      return false;
    }
  };
  
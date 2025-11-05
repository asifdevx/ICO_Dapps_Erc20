
import { createEthContract } from '../../config/bsc.service';
import { io } from '../../index';


import { ethers } from 'ethers';

export async function startNFTListener() {
  const contract = await createEthContract();

  // contract.on('TokenListed', async (tokenId, seller, price, event) => {
  //   try {
  //     console.log(`🎨 New NFT Listed! Token ID: ${tokenId}, Seller: ${seller}, Price: ${price}`);
  //     const transformedNFT = await syncSingleNFT({
  //       tokenId: tokenId.toString(),
  //       address: seller,
  //     });
  //     io.emit('newNFTListed', transformedNFT);
  //   } catch (error) {
  //     console.error('❌ Error syncing new NFT:', error);
  //   }
  // });
  
}

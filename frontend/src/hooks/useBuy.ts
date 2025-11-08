import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ethers, Contract } from 'ethers';

export const useBuyTokenMutation = (contract?: Contract | null) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (totalAmount: string) => {
      if (!contract) throw new Error('Contract not connected');

      const tx = await contract.buyToken({ value: ethers.parseEther(totalAmount) });

      await tx.wait(1);
      await queryClient.invalidateQueries({ queryKey: ['publicIcoData'] });
      return tx;
    },
  });
};

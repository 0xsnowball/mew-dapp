import { Contract } from "ethers";
import { useMemo } from "react";
import { useChainId, useSigner } from "wagmi";
import CatABI from "../abis/CatABI.json";
import { ChainId, CAT_CONTRACT_ADDRESSES } from "../constants";

export function useContract(address: string, ABI: any): Contract | null {
  const { data: signer } = useSigner();
  return useMemo(() => {
    if (!address || !ABI || !signer) return null;

    try {
      return new Contract(address, ABI, signer);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, signer]);
}

export function useCatContract(): Contract | null {
  const chainId = useChainId();
  return useContract(CAT_CONTRACT_ADDRESSES[chainId as ChainId], CatABI);
}

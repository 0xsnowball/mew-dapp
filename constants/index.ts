export enum ChainId {
  MAINNET = 1,
  POLYGON = 137,
  OPTIMISM = 10,
  ARBITRUM = 42161,
  GOERLI = 5,
}

export const CAT_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "",
  [ChainId.POLYGON]: "",
  [ChainId.OPTIMISM]: "",
  [ChainId.ARBITRUM]: "",
  [ChainId.GOERLI]: "0xd054e5724d7d595b72abbb0c460e0221cd859c8f",
};

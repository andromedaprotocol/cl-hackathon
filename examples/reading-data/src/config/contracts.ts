/**
 * Contract Configuration
 *
 * Update the contract addresses here to point to your deployed contracts.
 * These addresses should be valid Andromeda ADO contract addresses on the configured chain.
 */

export const CONTRACT_CONFIG = {
  // CW721 NFT contract address
  // nft: "andr1nft_contract_address_here",
  nft: "andr145pcjgxylwuatrplkzlj3lzjej238hzdteeuza5ce6kzp4tuamus662p9z",

  // CW20 token contract address
  // token: "andr1token_contract_address_here"
  token: "andr18t0wlhyyjpupq0vfwwjcc9aks05vggwkpfsyev68tvr0d8tpa3qs5mcth0",
} as const;

// Type exports for type safety
export type ContractConfig = typeof CONTRACT_CONFIG;

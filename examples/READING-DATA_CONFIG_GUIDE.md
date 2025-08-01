# Example App Contract Configuration Guide

This guide explains how to configure the testing application's NFT and Token information pages. The only main adjustment required should be to update the contract addresses for your NFT or CW20 example.

## Configuration File Location

The contract addresses are configured in:
```
src/config/contracts.ts
```

## How to Update Contract Addresses

1. Open the configuration file at `src/config/contracts.ts`

2. Update the contract addresses with your deployed contract addresses:

```typescript
export const CONTRACT_CONFIG = {
  // Replace with your CW721 NFT contract address
  nft: "andr1abc123...",
  
  // Replace with your CW20 token contract address
  token: "andr1xyz789..."
};
```

The contract data will be automatically fetched from the blockchain when you view the pages.

## Contract Address Format

- Contract addresses should start with `andr1` for Andromeda contracts
- Make sure the addresses are valid for the chain you're connecting to

## Troubleshooting

If you see errors when viewing the pages:

1. **Check the contract address format**: Ensure it starts with `andr1`
2. **Verify the contract exists**: Use Andromeda's **Assets** tools to confirm
3. **Check the contract type**: 
   - NFT page requires a CW721 contract
   - Token page requires a CW20 contract
4. **Ensure correct chain**: The contract must exist on the chain specified in your environment. The default chain is configured for Andromeda's testnet chain. We highly recommend staying with the default chain for ease of use. If you want to use a different chain, it is configured via the `NEXT_PUBLIC_CHAIN_IDENTIFIER` environment variable

## Example Configuration

Here's a complete example with placeholder addresses:

```typescript
export const CONTRACT_CONFIG = {
  nft: "andr145pcjgxylwuatrplkzlj3lzjej238hzdteeuza5ce6kzp4tuamus662p9z",
  token: "andr18t0wlhyyjpupq0vfwwjcc9aks05vggwkpfsyev68tvr0d8tpa3qs5mcth0"
};
```

Remember to replace the placeholder addresses with your actual contract addresses! The pages will automatically fetch and display:
- For NFTs: Collection name, symbol, and token metadata
- For Tokens: Token name, symbol, decimals, total supply, and marketing info
# Seismic Smart Contract

This project deploys a `Lock` smart contract on Seismic Devnet. It locks 0.01 ETH until a specified `unlockTime`, after which the owner can withdraw the funds.

## Deployment Details
Deployed on Seismic Devnet:
- **Contract Address**: `0xE9f5e16A1FE4E192Ea6d91975f77058dbaE346d3`
- **Transaction Hash**: `0x4a16015105750412b5236a1875016570ea038690e442534cffdcc7407494ba07`
- **Unlock Time**: 1743231194 (March 26, 2025, 18:53:14 UTC)

## Usage
The contract is deployed and can be interacted with on Seismic Devnet. The owner can call `withdraw()` to retrieve the locked ETH after the unlock time.

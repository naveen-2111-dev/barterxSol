# BarterX Smart Contract ![BarterX](https://img.shields.io/badge/version-1.0.0-green)

## Overview
BarterX is a decentralized NFT marketplace where users can exchange NFTs for BarterX tokens. These tokens can then be used to purchase other assets available in the marketplace. This repository contains the smart contract implementation for BarterX.

## Features
- Exchanging NFTs for BarterX tokens
- Secure and transparent transactions using Ethereum smart contracts
- Token-based economy for purchasing assets

## Prerequisites
Before deploying the smart contract, ensure you have the following installed:
- Node.js & npm >= 22.11.0 & 11.2.0
- Hardhat >= 2.22.19
- Solidity ^0.8.28
- Sepolia ETH for deploying on the Sepolia testnet<br>

## Faucets for Sepolia ETH:<br>
- [Sepolia Ethereum Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)<br>
- [zkSync Era Sepolia](https://learnweb3.io/faucets/zksync_sepolia/)<br>
- [Bridge from zkSync Era Sepolia to sepoliaETH](https://portal.zksync.io/bridge/withdraw?network=sepolia)


## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/naveen-2111-dev/barterxSol.git
   cd barterxSol
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Compilation
To compile the smart contract<br>
*change package.json*
```sh
"type": "commonjs",
```
```sh
npx hardhat compile
```

## Deployment
To deploy the contract on Sepolia or another network, update `.env.example` with the appropriate `RPC_KEY` & `PRIVATE_KEY` settings and run:
```sh
npm run deploy
```
after deployment, for the deployed contract address check `/scripts/build/contract1/deployment.json`:<br>

```bash
{
  "address": "contractAddress",
  "chainId": 11155111
}
```


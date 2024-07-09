import abi from "../abi.json"

import { ethers } from "ethers"

export async function useCallContract() {
  const ethereum = (window).ethereum;

  const provider = new ethers.BrowserProvider(ethereum)

  //   await provider.send("wallet_addEthereumChain", [
  //     {
  //       chainId: "0x539",
  //       chainName: "devnet",
  //       nativeCurrency: {
  //         name: "ETH",
  //         symbol: "ETH",
  //         decimals: 18,
  //       },
  //       rpcUrls: ["http://127.0.0.1:7545"],
  //     },
  //   ]);


  // If you use testnet uncomment that code below and paste your chaidId
  //   await provider.send("wallet_switchEthereumChain", [
  //     { chainId: "0x1691" },
  //   ]);

  const contract = new ethers.Contract(
    "0x...", // Paste your contract address
    abi.abi,
    provider
  );


  return contract;

}

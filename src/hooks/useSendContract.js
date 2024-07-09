import abi from "../abi.json"

import { ethers } from "ethers"

export async function useSendContract() {
  const ethereum = (window).ethereum;
  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });

  const provider = new ethers.BrowserProvider(ethereum)
  const walletAddress = accounts[0]    // first account in MetaMask
  const signer = await provider.getSigner(walletAddress)

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
  //     { chainId: "0x1691" }, <--- your chainId
  //   ]);

  const contract = new ethers.Contract(
    "0x...", // Paste your contract address here
    abi.abi,
    signer
  );

  return contract;

}


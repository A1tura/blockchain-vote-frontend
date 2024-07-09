import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react"
import Button from "./button";
import { formatAddress } from "../utils/address";

import styles from "./css/connectButton.css"


export default function ConnectButton() {
    const [connected, setConnected] = useState();
    const [walletAddress, setWalletAddress] = useState();

    useEffect(() => {
        async function checkConnectedAccounts() {
            const accounts = await window.ethereum.request({method: 'eth_accounts'});       
            
            if (accounts.length != 0) {
                setConnected(true);
                setWalletAddress(accounts[0]);
            }
        }

        checkConnectedAccounts()

    });


    async function connectWallet() {
        if (!connected) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();

            setConnected(true);
            setWalletAddress(address);
        } else {
            // todo: disconnect account
        }
    }

    return (
        <>
            {!connected ?
                <Button text="Connect" onClick={connectWallet} /> :
                <Button text={formatAddress(walletAddress)} onClick={connectWallet} />
            }
        </>
    )
}
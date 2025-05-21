import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with direct credentials
const supabaseUrl = "";
const supabaseKey = "";

// Debug logging
console.log("Environment variables check:");
console.log(
  "NEXT_PUBLIC_SUPABASE_URL exists:",
  !!process.env.NEXT_PUBLIC_SUPABASE_URL
);
console.log(
  "NEXT_PUBLIC_SUPABASE_ANON_KEY exists:",
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials. Please check your .env file.");
  console.error("Current values:");
  console.error("URL:", supabaseUrl);
  console.error("Key:", supabaseKey ? "exists" : "missing");
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface WalletRecord {
  address: string;
}

export const storeWalletAddress = async (address: string) => {
  try {
    console.log("Storing wallet address:", address);

    // First check if wallet already exists
    const { data: existingWallet } = await supabase
      .from("verified_wallets")
      .select("id")
      .eq("address", address)
      .single();

    if (existingWallet) {
      console.log("Wallet already exists in database");
      return existingWallet;
    }

    // Insert new wallet
    console.log("Creating new wallet record");
    const { data, error } = await supabase
      .from("verified_wallets")
      .insert([{ address }])
      .select();

    if (error) throw error;

    console.log("Wallet address stored successfully:", data);
    return data;
  } catch (error) {
    console.error("Error storing wallet address:", error);
    throw new Error(
      `Failed to store wallet data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export const getWalletVerification = async (address: string) => {
  try {
    console.log("Checking if wallet is verified:", address);

    const { data, error } = await supabase
      .from("verified_wallets")
      .select("address")
      .eq("address", address)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // No data found
        console.log("Wallet not found in database:", address);
        return null;
      }
      throw error;
    }

    console.log("Wallet found in database:", data);
    return data;
  } catch (error) {
    console.error("Error checking wallet verification:", error);
    throw new Error(
      `Failed to check wallet verification: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

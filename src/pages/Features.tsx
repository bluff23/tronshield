import { Check, Download, Info, Shield } from "lucide-react";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Features = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-tronshield-red" />,
      title: "Wallet Security Analysis",
      description:
        "Comprehensive security scan of your Tron wallet, including transaction patterns, smart contract interactions, and potential vulnerabilities.",
    },
    {
      icon: <Check className="h-8 w-8 text-tronshield-red" />,
      title: "Multi-Factor Verification",
      description:
        "Optional signature verification from your wallet for deeper security scoring and enhanced trust verification.",
    },
    {
      icon: <Download className="h-8 w-8 text-tronshield-red" />,
      title: "Blockchain-Verified Certificates",
      description:
        "Generate tamper-proof security certificates stored on-chain or IPFS to prove your wallet has passed security checks.",
    },
    {
      icon: <Info className="h-8 w-8 text-tronshield-red" />,
      title: "Security Recommendations",
      description:
        "Personalized security guidance based on your wallet's activity and potential risk factors.",
    },
  ];

  const advancedFeatures = [
    {
      title: "Real-Time Transaction Analysis",
      description:
        "Our system analyzes your transaction history in real-time to identify potential security risks or suspicious patterns.",
    },
    {
      title: "Blacklist Integration",
      description:
        "Cross-references your wallet interactions against known blacklisted addresses and smart contracts.",
    },
    {
      title: "Risk Scoring Algorithm",
      description:
        "Proprietary algorithm that calculates a comprehensive security score based on multiple risk factors and behaviors.",
    },
    {
      title: "Security Badge",
      description:
        "Embed a verified security badge on your website or profile to demonstrate your wallet's security status.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Security Features
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                TronShield offers comprehensive security tools to keep your Tron
                wallet and assets protected.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Core Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our main security features provide comprehensive protection for
                your Tron wallet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="card-security">
                  <div className="security-icon-container">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Advanced Protection</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dive deeper into our advanced security features designed for
                maximum protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transaction Analysis */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Transaction Analysis
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Our advanced transaction analysis monitors your wallet
                  activity to identify potential security threats.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-tronshield-red mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Analyzes transaction patterns and anomalies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-tronshield-red mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Identifies suspicious smart contract interactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-tronshield-red mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Monitors for interactions with known malicious addresses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-tronshield-red mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Assesses risk level of recent transaction activity
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Transaction Analysis Sample
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div>
                        <p className="text-sm font-medium">Token Transfer</p>
                        <p className="text-xs text-gray-500">1,500 TRX</p>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Safe
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                      <div>
                        <p className="text-sm font-medium">
                          Contract Interaction
                        </p>
                        <p className="text-xs text-gray-500">500 TRX</p>
                      </div>
                      <span className="bg-red-100 text-tronshield-red text-xs px-2 py-1 rounded-full">
                        Suspicious
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Token Swap</p>
                        <p className="text-xs text-gray-500">2,000 TRX</p>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Safe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Features;

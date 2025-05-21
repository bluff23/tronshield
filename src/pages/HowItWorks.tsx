import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Enter Your Wallet Address",
      description:
        "Start by entering your TRON wallet address into our secure verification form.",
    },
    {
      number: 2,
      title: "Automated Security Analysis",
      description:
        "Our system immediately performs a comprehensive security analysis of your wallet.",
    },
    {
      number: 3,
      title: "Review Your Security Score",
      description:
        "Get an instant security score along with detailed risk assessment and recommendations.",
    },
    {
      number: 4,
      title: "Download Security Certificate",
      description:
        "Generate a blockchain-verified security certificate that proves your wallet's status.",
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
                How TronShield Works
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understand how we analyze and secure your Tron wallet in just a
                few simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-tronshield-red rounded-full text-white flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-lg text-gray-600">
                        {step.description}
                      </p>

                      {step.number === 1 && (
                        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <p className="text-sm text-gray-700 font-medium mb-2">
                            Example Wallet Address:
                          </p>
                          <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
                            TVHcQDskHR1iT6DsquJJbtn1mq2YqQKBHn
                          </code>
                        </div>
                      )}

                      {step.number === 2 && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium text-gray-700">
                            Our analysis includes:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-tronshield-red mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                Transaction pattern analysis
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-tronshield-red mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                Smart contract interaction audit
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-tronshield-red mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                Blacklisted address cross-referencing
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-tronshield-red mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                Security vulnerability detection
                              </span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {step.number === 3 && (
                        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-2xl font-bold">
                              95
                            </div>
                            <div className="ml-4">
                              <p className="font-medium">Security Score</p>
                              <p className="text-sm text-gray-600">Safe</p>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full mt-2">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {step.number === 4 && (
                        <div className="mt-4 flex flex-wrap gap-4">
                          <button className="inline-flex items-center px-4 py-2 bg-tronshield-red text-white rounded-md font-medium text-sm">
                            Download PDF Report
                          </button>
                          <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md font-medium text-sm">
                            Download JSON Certificate
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <Link
                  to="/wallet-check"
                  className="btn-primary inline-flex items-center"
                >
                  Check Your Wallet Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Technologies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our Security Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Advanced technology stack powering our wallet verification
                system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">
                  Blockchain Analytics
                </h3>
                <p className="text-gray-600">
                  Real-time analysis of on-chain data to identify patterns and
                  potential security risks within your wallet's transaction
                  history.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">
                  Smart Contract Auditing
                </h3>
                <p className="text-gray-600">
                  Automated scanning of smart contracts your wallet has
                  interacted with to detect potential security vulnerabilities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">
                  Risk Scoring Engine
                </h3>
                <p className="text-gray-600">
                  Proprietary algorithm that calculates your wallet's security
                  score based on multiple risk factors and behavior analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-tronshield-red">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Secure Your TRON Wallet?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Get a comprehensive security analysis and blockchain-verified
              certificate in just seconds.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/wallet-check"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-tronshield-red font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Verify Your Wallet Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;

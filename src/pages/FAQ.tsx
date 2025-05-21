import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is TronShield?",
      answer:
        "TronShield is a security platform designed to analyze and verify the safety of TRON wallets. Our service provides comprehensive security assessments, risk scoring, and recommendations to help users protect their digital assets.",
    },
    {
      question: "Is my wallet data stored?",
      answer:
        "No, your wallet data is never stored. We analyze it in memory and immediately discard it after generating your security report. Your privacy and data security are our top priorities.",
    },
    {
      question: "How accurate is the security score?",
      answer:
        "Our security scoring system is highly accurate, based on advanced algorithms that analyze multiple security factors. However, it should be considered as a helpful tool rather than a guarantee of absolute security. We continuously update our systems to improve accuracy.",
    },
    {
      question: "Is TronShield affiliated with TRON Foundation?",
      answer:
        "TronShield is an independent security platform specializing in TRON wallet security. We are not officially affiliated with the TRON Foundation, but we focus exclusively on providing security services for the TRON ecosystem.",
    },
  ];

  const technicalFaqs = [
    {
      question: "How is the security score calculated?",
      answer:
        "Our security score is calculated using a proprietary algorithm that examines multiple factors including transaction patterns, smart contract interactions, historical activity, and known risk factors. We analyze these data points to provide a comprehensive security assessment on a scale of 0-100.",
    },
    {
      question: "Can I verify another wallet?",
      answer:
        "Yes, you can verify any public TRON wallet address. Simply enter the address in our verification form and get instant results. There is no limit to how many different wallets you can verify.",
    },
    {
      question: "What makes a wallet 'high risk'?",
      answer:
        "A wallet may be flagged as high risk if it shows patterns of interaction with known scam addresses, suspicious smart contracts, unusual transaction patterns, or has received funds from blacklisted sources. Our system analyzes multiple risk factors to determine the overall risk level.",
    },
    {
      question: "Is this a full security audit?",
      answer:
        "No, this is a real-time security scoring tool designed to highlight potential risks and security concerns. While comprehensive, it's not a substitute for a full professional security audit which would involve more in-depth manual analysis.",
    },
  ];

  const certificateFaqs = [
    {
      question: "What is a blockchain-verified certificate?",
      answer:
        "A blockchain-verified certificate is a digital proof of your wallet's security status that is cryptographically signed and can be stored on-chain or on IPFS. This provides a tamper-proof record that your wallet passed security checks at a specific point in time.",
    },
    {
      question: "How long is my security certificate valid?",
      answer:
        "Security certificates are valid for 30 days from the date of issue. Since wallet security status can change over time based on new transactions and interactions, we recommend re-verifying your wallet regularly.",
    },
    {
      question: "Can I share my security certificate?",
      answer:
        "Yes, you can share your security certificate with others. It's designed to be publicly verifiable, allowing you to demonstrate the security status of your wallet to exchanges, business partners, or customers.",
    },
    {
      question:
        "What's the difference between the PDF report and JSON certificate?",
      answer:
        "The PDF report is a human-readable document containing your security assessment details and recommendations. The JSON certificate is a machine-readable format that contains cryptographic proofs for verification on blockchain networks or IPFS.",
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about TronShield and wallet
                security.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="w-full mb-12">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <h2 className="text-2xl font-bold mb-6">Technical Details</h2>
              <Accordion type="single" collapsible className="w-full mb-12">
                {technicalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <h2 className="text-2xl font-bold mb-6">Security Certificates</h2>
              <Accordion type="single" collapsible className="w-full">
                {certificateFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`certificate-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                If you couldn't find the answer to your question, feel free to
                contact our support team.
              </p>
              <Link
                to="#"
                className="btn-primary inline-flex items-center justify-center"
              >
                Contact Support <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Verify Wallet CTA */}
        <section className="py-12 bg-tronshield-red">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Ready to Check Your Wallet Security?
            </h2>
            <Link
              to="/wallet-check"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-tronshield-red font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Verify Your Wallet Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;

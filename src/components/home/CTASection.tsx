"use client";

import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
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
            <Shield className="h-5 w-5 mr-2" />
            Verify Your Wallet Now
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-bold rounded-lg border border-white hover:bg-white/10 transition-colors"
          >
            Learn How It Works <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

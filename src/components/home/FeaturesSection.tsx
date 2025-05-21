
import { Shield, Check, Download, Info } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-tronshield-red" />,
      title: "Real-Time Analysis",
      description: "Quick scan of your wallet's activity and interaction history to identify potential threats."
    },
    {
      icon: <Check className="h-8 w-8 text-tronshield-red" />,
      title: "Multi-Factor Checks",
      description: "Opt-in signature verification for deeper trust and comprehensive security assessment."
    },
    {
      icon: <Download className="h-8 w-8 text-tronshield-red" />,
      title: "Blockchain-Verified Certificate",
      description: "Receive a permanent proof-of-check that can be verified on-chain or via IPFS."
    },
    {
      icon: <Info className="h-8 w-8 text-tronshield-red" />,
      title: "Privacy-First Design",
      description: "No data stored. Everything is analyzed in-memory for maximum privacy protection."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Security Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protect your digital assets with our comprehensive security toolset.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-security">
              <div className="security-icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

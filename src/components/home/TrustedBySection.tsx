import { Users, Shield } from 'lucide-react';

const TrustedBySection = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-violet-400" />,
      title: "TOTAL WALLETS VERIFIED",
      value: "5,000,000+",
    },
    {
      icon: <Shield className="h-6 w-6 text-violet-400" />,
      title: "SECURITY SCORE AVERAGE",
      value: "98.5%",
    },
    {
      icon: <LightningBolt className="h-6 w-6 text-violet-400" />,
      title: "NETWORK RELIABILITY",
      value: "99.9%",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-violet-400" />,
      title: "CURRENT WAITLIST",
      value: "520,000+",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Thousands</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of users who trust TronShield for their secure and efficient crypto transactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-score">
              <div className="bg-violet-100 rounded-full p-3 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.title}</h3>
              <div className="text-3xl font-bold text-tronshield-dark">{stat.value}</div>
              <div className="w-16 h-1 bg-violet-500 mx-auto mt-4"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 italic">
            "TronShield has revolutionized the way I manage my crypto assets. I can finally trade with peace of mind."
          </p>
          <p className="mt-4 text-tronshield-dark font-medium">
            — Alex K., Crypto Trader
          </p>
        </div>
      </div>
    </section>
  );
};

// Custom icon components
const LightningBolt = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
  </svg>
);

const ClipboardList = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
    <path d="M9 12h6"></path>
    <path d="M9 16h6"></path>
    <path d="M9 8h1"></path>
  </svg>
);

export default TrustedBySection;

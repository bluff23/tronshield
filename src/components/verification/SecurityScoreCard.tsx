
interface SecurityScoreCardProps {
  score: number;
  riskLevel: 'Safe' | 'Moderate' | 'High Risk';
  walletAddress: string;
}

const SecurityScoreCard = ({ score, riskLevel, walletAddress }: SecurityScoreCardProps) => {
  // Determine color and width based on score
  const getScoreMeterColor = () => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-tronshield-red';
  };
  
  const getScoreTextColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-tronshield-red';
  };
  
  const getRiskBadgeColor = () => {
    if (riskLevel === 'Safe') return 'bg-green-100 text-green-700';
    if (riskLevel === 'Moderate') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-tronshield-red';
  };

  const formatWalletAddress = (address: string) => {
    if (address.length < 10) return address;
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Wallet Address</h3>
        <div className="flex items-center gap-2">
          <p className="text-lg font-mono">{formatWalletAddress(walletAddress)}</p>
          <button className="text-xs text-tronshield-red hover:underline">Copy</button>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Security Score</h3>
        <div className="flex items-baseline gap-2">
          <p className={`text-5xl font-bold ${getScoreTextColor()}`}>{score}</p>
          <p className="text-lg">/100</p>
        </div>
        
        <div className="mt-3">
          <div className="progress-meter">
            <div 
              className={getScoreMeterColor()} 
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Risk Level</h3>
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRiskBadgeColor()}`}>
            {riskLevel}
          </span>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-1">Last Scanned</h3>
        <p className="text-gray-700">{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default SecurityScoreCard;

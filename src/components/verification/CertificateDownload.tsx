
import { Download } from "lucide-react";

interface CertificateDownloadProps {
  walletAddress: string;
  score: number;
}

const CertificateDownload = ({ walletAddress, score }: CertificateDownloadProps) => {
  const handleDownloadPDF = () => {
    // Simulate download functionality
    alert(`Certificate download initiated for wallet ${walletAddress} with score ${score}`);
  };
  
  const handleDownloadJSON = () => {
    // Create certificate JSON data
    const certificateData = {
      walletAddress,
      score,
      timestamp: new Date().toISOString(),
      issuer: "TronShield",
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
    };
    
    // Create a downloadable JSON file
    const dataStr = JSON.stringify(certificateData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    // Create download link and trigger download
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tronshield-certificate-${walletAddress.substring(0, 6)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
      <h2 className="text-xl font-bold mb-2">Blockchain-Verified Certificate</h2>
      <p className="text-gray-600 mb-6">
        Download a verified certificate of your wallet's security assessment. 
        This certificate is valid for 30 days.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadPDF}
          className="btn-primary flex items-center justify-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF Report
        </button>
        
        <button
          onClick={handleDownloadJSON}
          className="btn-secondary flex items-center justify-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Download JSON Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateDownload;

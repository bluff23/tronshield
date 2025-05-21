
import { CheckCircle, XCircle } from "lucide-react";

interface Transaction {
  hash: string;
  date: string;
  type: string;
  status: 'safe' | 'suspicious';
  amount: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
  const formatTransactionHash = (hash: string) => {
    if (hash.length < 10) return hash;
    return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Recent Transactions</h2>
      
      {transactions.length === 0 ? (
        <p className="text-gray-500 italic">No recent transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 text-left text-sm font-medium text-gray-500">Hash</th>
                <th className="py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="py-3 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="py-3 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 text-sm font-mono">{formatTransactionHash(tx.hash)}</td>
                  <td className="py-4 text-sm">{tx.date}</td>
                  <td className="py-4 text-sm">{tx.type}</td>
                  <td className="py-4 text-sm">{tx.amount}</td>
                  <td className="py-4">
                    {tx.status === 'safe' ? (
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-xs text-green-700">Safe</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <XCircle className="h-4 w-4 text-tronshield-red mr-1" />
                        <span className="text-xs text-tronshield-red">Suspicious</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;

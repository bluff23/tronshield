
import { Check } from "lucide-react";

interface Recommendation {
  text: string;
  severity: 'low' | 'medium' | 'high';
}

interface SecurityRecommendationsProps {
  recommendations: Recommendation[];
}

const SecurityRecommendations = ({ recommendations }: SecurityRecommendationsProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-tronshield-red';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'High Priority';
      case 'medium':
        return 'Medium Priority';
      case 'low':
        return 'Low Priority';
      default:
        return 'Informational';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Security Recommendations</h2>
      
      {recommendations.length === 0 ? (
        <div className="flex items-center p-4 bg-green-50 rounded-lg">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-green-700">No security recommendations found. Your wallet appears secure!</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {recommendations.map((rec, index) => (
            <li key={index} className="border-l-4 pl-4" style={{ borderColor: getSeverityColor(rec.severity) }}>
              <div className="flex justify-between">
                <p className="text-gray-700">{rec.text}</p>
                <span className={`text-xs font-medium ${getSeverityColor(rec.severity)}`}>
                  {getSeverityText(rec.severity)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SecurityRecommendations;

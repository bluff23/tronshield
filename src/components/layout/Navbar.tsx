
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-tronshield-dark">
            <Shield className="h-6 w-6 text-tronshield-red" />
            <span>TronShield</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-gray-700 hover:text-tronshield-red font-medium">
            Features
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-tronshield-red font-medium">
            How It Works
          </Link>
          <Link to="/verification-status" className="text-gray-700 hover:text-tronshield-red font-medium">
            Verification Status
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-tronshield-red font-medium">
            FAQ
          </Link>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Link to="/wallet-check" className="btn-primary flex items-center">
            <Shield className="h-4 w-4 mr-2" /> 
            Wallet Security Check
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

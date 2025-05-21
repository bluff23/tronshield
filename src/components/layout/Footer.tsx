
import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Info } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-tronshield-dark">
              <Shield className="h-6 w-6 text-tronshield-red" />
              <span>TronShield</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Making Tron wallets secure and providing advanced protection for your digital assets.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-tronshield-dark mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-tronshield-red">Features</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-tronshield-red">How It Works</Link>
              </li>
              <li>
                <Link to="/verification-status" className="text-gray-600 hover:text-tronshield-red">Verification Status</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-tronshield-dark mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-tronshield-red">FAQ</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tronshield-red">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-tronshield-red">Security</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-tronshield-dark mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-tronshield-red">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-tronshield-red">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-tronshield-red">
                <Info className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              Contact: info@tronshield.com
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} TronShield. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-tronshield-red">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-tronshield-red">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VerificationResults from "./pages/VerificationResults";
import WalletCheck from "./pages/WalletCheck";
import { TronConnectProvider } from "./components/tron-connect";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TronConnectProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/wallet-check" element={<WalletCheck />} />
              <Route
                path="/verification-results/:walletAddress"
                element={<VerificationResults />}
              />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TronConnectProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;

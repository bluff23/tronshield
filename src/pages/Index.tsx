import CTASection from "../components/home/CTASection";
import FAQSection from "../components/home/FAQSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import TrustedBySection from "../components/home/TrustedBySection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TrustedBySection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

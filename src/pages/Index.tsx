import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CasesSection from "@/components/CasesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="problem"><ProblemSection /></div>
        <div id="process"><ProcessSection /></div>
        <div id="pricing"><PricingSection /></div>
        <div id="cases"><CasesSection /></div>
        <div id="faq"><FAQSection /></div>
        <div id="cta"><CTASection /></div>
      </main>
      <Footer />
    </>
  );
};

export default Index;

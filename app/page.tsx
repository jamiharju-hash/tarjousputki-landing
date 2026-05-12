import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IdealCustomer from "@/components/IdealCustomer";
import PilotSection from "@/components/PilotSection";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import ProofSection from "@/components/ProofSection";
import SolutionSection from "@/components/SolutionSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <IdealCustomer />
      <PricingSection />
      <PilotSection />
      <ProofSection />
      <ProcessSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

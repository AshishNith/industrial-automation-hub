import { Header } from "@/components/Header";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Technologies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Technologies & Expertise"
          subtitle="Industry-leading platforms and technologies powering our automation solutions"
        />
        <TechnologiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;

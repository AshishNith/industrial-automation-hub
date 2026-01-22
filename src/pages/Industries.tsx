import { Header } from "@/components/Header";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Industries We Serve"
          subtitle="Delivering automation excellence across diverse industrial sectors"
        />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;

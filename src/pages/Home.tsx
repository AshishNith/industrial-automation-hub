import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MapSection } from "@/components/MapSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <IndustriesSection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

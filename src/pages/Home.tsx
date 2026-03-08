import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MapSection } from "@/components/MapSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { TeamSection } from "@/components/TeamSection";
import { SEO } from "@/components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Industrial Automation & Engineering Solutions"
        description="A-Robotics Services provides cutting-edge industrial automation, PLC programming, robot integration, and engineering solutions for manufacturing excellence."
        keywords="industrial automation, robotics, PLC programming, SCADA, manufacturing automation, robot repair, A-Robotics"
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
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

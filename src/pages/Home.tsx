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
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "A-Robotics Services",
    "image": "https://aroboticsservices.in/favicon.png",
    "description": "A-Robotics Services is a leading industrial automation and engineering solutions company based in India, delivering custom automation systems, PLC programming, and robotic integrations.",
    "url": "https://aroboticsservices.in",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411026",
      "addressCountry": "IN"
    },
    "priceRange": "$$$"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Industrial Automation & Engineering Solutions"
        description="A-Robotics Services provides cutting-edge industrial automation, PLC programming, robot integration, and engineering solutions for manufacturing excellence."
        keywords="industrial automation, robotics, PLC programming, SCADA, manufacturing automation, robot repair, A-Robotics"
        canonicalPath="/"
        schema={homeSchema}
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

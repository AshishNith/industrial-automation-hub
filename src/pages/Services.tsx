import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Our Services"
          subtitle="Comprehensive industrial automation and engineering solutions tailored to your needs"
          breadcrumb={[{ label: "Services" }]}
        />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

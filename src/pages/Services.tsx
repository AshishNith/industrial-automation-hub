import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const Services = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aroboticsservices.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://aroboticsservices.in/services"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Industrial Automation Services & Robotics Integration"
        description="Comprehensive automation services including custom PLC & SCADA programming, electrical panel building, on-site robot repair, and factory relocations."
        keywords="industrial automation services, PLC programming services, SCADA design, robot repair service, electrical panel assembly India"
        canonicalPath="/services"
        schema={breadcrumbSchema}
      />
      <Header />
      <main>
        <PageHero 
          title="Our Services"
          subtitle="Comprehensive industrial automation and engineering solutions tailored to your needs"
          breadcrumb={[{ label: "Services" }]}
          showImage={true}
        />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

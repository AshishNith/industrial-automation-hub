import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { MapSection } from "@/components/MapSection";
import { SEO } from "@/components/SEO";

const Contact = () => {
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
        "name": "Contact Us",
        "item": "https://aroboticsservices.in/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | Sourcing & Automation Consultations"
        description="Get in touch with A-Robotics Services for a free automation consultation. Contact our Pune office for PLC programming, robot repair, or spare parts sourcing."
        keywords="contact industrial automation, robot repair consultation, custom panel quote Pune, spare parts request"
        canonicalPath="/contact"
        schema={breadcrumbSchema}
      />
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Get in touch with our engineering team for a consultation"
          breadcrumb={[{ label: "Contact" }]}
        />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

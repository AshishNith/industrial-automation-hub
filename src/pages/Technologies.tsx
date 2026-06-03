import { Header } from "@/components/Header";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const Technologies = () => {
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
        "name": "Technologies",
        "item": "https://aroboticsservices.in/technologies"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Industrial Automation Technologies | Siemens, FANUC, ABB, Allen-Bradley"
        description="Explore our technical expertise across leading PLC platforms (Siemens S7-1500, Allen-Bradley ControlLogix), SCADA systems, and robotic manipulators."
        keywords="Siemens PLC programming, FANUC robot integration, ABB IRC5 controller, KUKA KR C4 script, SCADA WinCC, Allen Bradley FactoryTalk"
        canonicalPath="/technologies"
        schema={breadcrumbSchema}
      />
      <Header />
      <main>
        <PageHero 
          title="Technologies & Expertise"
          subtitle="Industry-leading platforms and technologies powering our automation solutions"
          breadcrumb={[{ label: "Technologies" }]}
          showImage={true}
        />
        <TechnologiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;

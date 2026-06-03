import { Header } from "@/components/Header";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const Industries = () => {
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
        "name": "Industries We Serve",
        "item": "https://aroboticsservices.in/industries"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Industries Served | Automotive, Pharma, Food & Beverage"
        description="Delivering specialized automation engineering solutions across automotive assembly, pharmaceutical processing, cleanrooms, water treatment, and F&B plants."
        keywords="automotive manufacturing automation, pharmaceutical plant control, water treatment SCADA, food processing machinery India"
        canonicalPath="/industries"
        schema={breadcrumbSchema}
      />
      <Header />
      <main>
        <PageHero 
          title="Industries We Serve"
          subtitle="Delivering automation excellence across diverse industrial sectors"
          breadcrumb={[{ label: "Industries" }]}
          showImage={true}
        />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;

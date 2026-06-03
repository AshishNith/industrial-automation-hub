import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const About = () => {
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
        "name": "About Us",
        "item": "https://aroboticsservices.in/about"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | Industrial Automation Experts"
        description="Learn about A-Robotics Services, a premier industrial engineering firm in India. Discover our mission, experience, values, and our commitment to operational excellence."
        keywords="about industrial automation company, robotics engineering team, automation company profile, robotics expertise India"
        canonicalPath="/about"
        schema={breadcrumbSchema}
      />
      <Header />
      <main>
        <PageHero 
          title="About Us"
          subtitle="A leading industrial automation and engineering solutions company based in India"
          breadcrumb={[{ label: "About" }]}
          showImage={false}
        />
        <AboutSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

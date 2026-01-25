import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="About Us"
          subtitle="A leading industrial automation and engineering solutions company based in India"
          breadcrumb={[{ label: "About" }]}
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

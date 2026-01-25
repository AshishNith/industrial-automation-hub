import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Contact Us"
          subtitle="Get in touch with our engineering team for a consultation"
          breadcrumb={[{ label: "Contact" }]}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

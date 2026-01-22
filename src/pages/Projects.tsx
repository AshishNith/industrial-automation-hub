import { Header } from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Our Projects"
          subtitle="Real-world automation solutions delivering measurable results"
        />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;

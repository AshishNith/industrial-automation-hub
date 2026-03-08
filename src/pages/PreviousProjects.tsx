import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Wrench, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PreviousProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Automotive Assembly Line Automation",
      description: "Complete automation of automotive assembly line with robotic integration, quality control systems, and real-time monitoring.",
      client: "AutoTech Manufacturing Ltd.",
      location: "Mumbai, India",
      duration: "18 months",
      year: "2023-2024",
      team: 12,
      technologies: ["PLC Programming", "SCADA", "Robotics", "Vision Systems"],
      status: "Completed",
      image: "/api/placeholder/600/400",
      results: [
        "40% increase in production efficiency",
        "60% reduction in defects",
        "25% cost savings",
        "Zero safety incidents"
      ]
    },
    {
      id: 2,
      title: "Smart Factory IoT Implementation",
      description: "Implementation of comprehensive IoT solutions for predictive maintenance and real-time asset tracking in manufacturing facility.",
      client: "TechnoSteel Industries",
      location: "Pune, India",
      duration: "12 months",
      year: "2023",
      team: 8,
      technologies: ["IoT Sensors", "Cloud Integration", "Data Analytics", "Machine Learning"],
      status: "Completed",
      image: "/api/placeholder/600/400",
      results: [
        "30% reduction in downtime",
        "50% improvement in maintenance scheduling",
        "Real-time visibility across all operations",
        "15% energy savings"
      ]
    },
    {
      id: 3,
      title: "Food Processing Plant Upgrade",
      description: "Modernization of legacy food processing systems with new control systems, safety protocols, and efficiency improvements.",
      client: "FreshFood Processing Co.",
      location: "Bangalore, India",
      duration: "9 months",
      year: "2022-2023",
      team: 6,
      technologies: ["Process Control", "Safety Systems", "HMI/SCADA", "Temperature Control"],
      status: "Completed",
      image: "/api/placeholder/600/400",
      results: [
        "35% faster processing time",
        "100% compliance with food safety standards",
        "20% reduction in waste",
        "Improved traceability"
      ]
    },
    {
      id: 4,
      title: "Pharmaceutical Clean Room Automation",
      description: "Design and implementation of automated clean room systems with environmental controls and compliance monitoring.",
      client: "PharmaCorp Ltd.",
      location: "Hyderabad, India",
      duration: "15 months",
      year: "2022",
      team: 10,
      technologies: ["Clean Room Controls", "Environmental Monitoring", "Validation Systems", "GMP Compliance"],
      status: "Completed",
      image: "/api/placeholder/600/400",
      results: [
        "99.9% environmental compliance",
        "Reduced contamination risk by 80%",
        "Automated reporting and documentation",
        "FDA audit ready systems"
      ]
    },
    {
      id: 5,
      title: "Oil & Gas Pipeline Monitoring",
      description: "Advanced pipeline monitoring system with leak detection, pressure control, and emergency shutdown capabilities.",
      client: "PetroLine Infrastructure",
      location: "Gujarat, India",
      duration: "24 months",
      year: "2021-2022",
      team: 15,
      technologies: ["SCADA Systems", "Leak Detection", "Safety Instrumented Systems", "Remote Monitoring"],
      status: "Completed",
      image: "/api/placeholder/600/400",
      results: [
        "Zero pipeline incidents",
        "24/7 monitoring coverage",
        "50% faster emergency response",
        "Regulatory compliance achieved"
      ]
    },
    {
      id: 6,
      title: "Water Treatment Plant Automation",
      description: "Complete automation of municipal water treatment facility with quality monitoring and distribution control.",
      client: "City Municipal Corporation",
      location: "Chennai, India",
      duration: "18 months",
      year: "2021",
      team: 9,
      technologies: ["Water Quality Monitoring", "Process Automation", "SCADA", "Remote Control"],
      status: "Completed",
      image: "/api/placeholder/600/400",
      results: [
        "99.5% water quality standards met",
        "30% reduction in chemical usage",
        "Automated quality reporting",
        "Improved distribution efficiency"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Previous Projects"
          subtitle="Showcasing our successful automation implementations across various industries"
          breadcrumb={[{ label: "Previous Projects" }]}
        />

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <div className="grid gap-8 lg:gap-12">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="relative">
                      <div className="h-64 lg:h-full bg-muted flex items-center justify-center">
                        <div className="text-muted-foreground">
                          <Wrench className="w-16 h-16 mx-auto mb-4" />
                          <p className="text-sm">Project Image</p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="absolute top-4 right-4 bg-green-100 text-green-800 border-green-200"
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Project Details */}
                    <CardContent className="p-6 lg:p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      {/* Project Metadata */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year} • {project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>Team of {project.team}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium">Client:</span>
                          <span>{project.client}</span>
                        </div>
                      </div>

                      {/* Project Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Results:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <Link
                        to={`/contact?subject=Inquiry about ${encodeURIComponent(project.title)}`}
                      >
                        <Button variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors group">
                          Discuss this project
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PreviousProjects;
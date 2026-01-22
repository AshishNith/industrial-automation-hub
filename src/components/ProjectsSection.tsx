import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Automotive Assembly Line Automation",
    industry: "Automotive",
    challenge: "Manual assembly processes causing quality inconsistencies and production bottlenecks",
    solution: "Implemented PLC-controlled assembly stations with SCADA monitoring and robotic material handling",
    impact: "40% increase in throughput, significant reduction in defect rates",
  },
  {
    title: "Pharmaceutical Batch Control System",
    industry: "Pharmaceuticals",
    challenge: "Need for GMP-compliant batch processing with complete traceability",
    solution: "Designed and deployed ISA-88 compliant batch control with electronic batch records",
    impact: "Full regulatory compliance, reduced batch cycle time by 25%",
  },
  {
    title: "Water Treatment Plant Automation",
    industry: "Utilities",
    challenge: "Aging control systems with limited monitoring and manual operation",
    solution: "Complete SCADA upgrade with modern PLCs, VFDs, and remote monitoring capabilities",
    impact: "24/7 remote operation, 30% reduction in energy consumption",
  },
  {
    title: "Food Processing Line Integration",
    industry: "Food & Beverage",
    challenge: "Disconnected equipment and lack of production visibility",
    solution: "Integrated all processing equipment with centralized control and OEE monitoring",
    impact: "Real-time production insights, improved overall equipment effectiveness",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Work</span>
          <h2 className="section-title mt-2 mb-4">
            Solutions Snapshot
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into how we've helped clients transform their operations 
            through intelligent automation solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wide">
                      {project.industry}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-steel-dark uppercase tracking-wide">Challenge</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-steel-dark uppercase tracking-wide">Solution</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-semibold text-success uppercase tracking-wide">Impact</span>
                  <p className="text-sm text-foreground font-medium mt-1">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { 
  Factory, 
  Car, 
  Pill, 
  UtensilsCrossed, 
  Zap, 
  Droplets,
  Building
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Discrete and process manufacturing automation",
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Assembly lines, testing, and quality control",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "GMP-compliant automation and batch control",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    description: "Hygienic processing and packaging systems",
  },
  {
    icon: Zap,
    name: "Power & Energy",
    description: "Power generation and distribution control",
  },
  {
    icon: Droplets,
    name: "Water & Wastewater",
    description: "Treatment plants and pumping stations",
  },
  {
    icon: Building,
    name: "Infrastructure",
    description: "Building automation and heavy engineering",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Industries</span>
          <h2 className="section-title mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="section-subtitle mx-auto">
            Our automation expertise spans across diverse industries, delivering 
            customized solutions that meet sector-specific requirements and standards.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group bg-card border border-border rounded-lg p-5 md:p-6 text-center hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                <industry.icon className="w-6 h-6 md:w-7 md:h-7 text-steel-dark group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {industry.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

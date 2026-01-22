import { 
  Cpu, 
  Monitor, 
  Settings, 
  Zap, 
  Bot, 
  Wifi 
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Industrial Automation Solutions",
    description: "Complete automation systems for manufacturing processes, material handling, and production lines. Custom-engineered for maximum efficiency and reliability.",
    applications: "Assembly lines, packaging systems, process control",
  },
  {
    icon: Monitor,
    title: "PLC & SCADA Development",
    description: "Advanced programmable logic controllers and supervisory control systems. Real-time monitoring, data acquisition, and centralized control.",
    applications: "Factory automation, utilities, infrastructure",
  },
  {
    icon: Settings,
    title: "Control Panel Design & Manufacturing",
    description: "Custom-built electrical control panels meeting international standards. From design to installation, complete panel solutions.",
    applications: "MCC panels, PLC panels, drive panels",
  },
  {
    icon: Zap,
    title: "Electrical & Instrumentation",
    description: "Complete E&I services including wiring, installation, calibration, and commissioning. Precision instrumentation for critical processes.",
    applications: "Process industries, power plants, OEM machines",
  },
  {
    icon: Bot,
    title: "Robotics & Motion Control",
    description: "Industrial robotics integration, servo systems, and precision motion control. Boost productivity with automated material handling.",
    applications: "Welding, pick-and-place, CNC integration",
  },
  {
    icon: Wifi,
    title: "Industrial IoT & Smart Factory",
    description: "Connected manufacturing with IIoT sensors, cloud integration, and data analytics. Transform your facility into a smart factory.",
    applications: "Predictive maintenance, OEE monitoring, remote access",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-2 mb-4">
            Comprehensive Automation Solutions
          </h2>
          <p className="section-subtitle mx-auto">
            From concept to commissioning, we deliver end-to-end engineering solutions 
            that drive operational efficiency and productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-medium text-steel-dark uppercase tracking-wide">Applications:</span>
                <p className="text-sm text-muted-foreground mt-1">{service.applications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

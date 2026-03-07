import {
  ArrowRightLeft,
  Wrench,
  Code
} from "lucide-react";

const services = [
  {
    image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Robot Shifting Modification",
    description: "Relocating your plant or production line with multiple robots? A-Robotics Services ensures rapid uninstallation, safe transport, and seamless reinstallation for a quick start-up at any new location.",
    applications: "Plant relocation, line modification, robot reinstallation",
  },
  {
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Robot Repair Activity",
    description: "A-Robotics Services technicians repair and restore industrial robots from all leading manufacturers — Yaskawa Motoman, FANUC, ABB, KUKA, Panasonic, and more — with deep technical knowledge and precision.",
    applications: "Industrial robot maintenance, component repair, troubleshooting",
  },
  {
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Robot Programming",
    description: "We have Smart Robot Programmers. They will support for all kind of Programming related issues and for supporting in any new Project on All Application (SPOT, MIG, DISPENSING, HANDLING )",
    applications: "Spot welding, MIG welding, dispensing systems, material handling",
  },
  {
    image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "On Site Robot Repair Parts Repairing",
    description: "A-Robotics Services technicians repair industrial robots directly at your site. We carry essential spare parts and components, providing reliable on-site service and system support you can trust.",
    applications: "On-site maintenance, spare parts supply, field service",
  },
  {
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "PLC Programming Support",
    description: "Our expert will provide either our Office support on different make of the Microsoft, Siemens, Omron, Delta And Many More",
    applications: "PLC programming, system integration, technical support",
  },
  {
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Robot Programming Cycle Development/Optimization",
    description: "Our Experienced team Having good experience of Machine Programming And we will support for Machine Software like: Robot Studio, Robot Roboguide, Robotics And many more application and Programming systems",
    applications: "Cycle time optimization, programming software, automation efficiency",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">Our Services</span>
          <h2 className="section-title mt-4 mb-6">
            Comprehensive Robot Automation Solutions
          </h2>
          <p className="section-subtitle mx-auto text-lg">
            From robot installation to advanced programming, we deliver specialized engineering solutions
            that maximize your automation potential and operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-4">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide flex-shrink-0 mt-1">Applications:</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.applications}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to transform your industrial operations?</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

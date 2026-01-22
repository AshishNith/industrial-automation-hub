import { 
  Users, 
  Wrench, 
  HeadphonesIcon, 
  Clock, 
  ShieldCheck, 
  IndianRupee 
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineers",
    description: "Our team comprises certified automation professionals with hands-on experience across diverse industries.",
  },
  {
    icon: Wrench,
    title: "Custom-Built Solutions",
    description: "Every project is tailored to your specific requirements — no cookie-cutter approaches, only purpose-built systems.",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable After-Sales Support",
    description: "Comprehensive maintenance contracts, spare parts management, and 24/7 technical support when you need it.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description: "We understand that downtime costs money. Our project management ensures timely commissioning every time.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance Focus",
    description: "Strict adherence to international standards, safety norms, and industry best practices in every project.",
  },
  {
    icon: IndianRupee,
    title: "Cost-Effective Engineering",
    description: "Optimized designs and local manufacturing expertise deliver exceptional value without compromising quality.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding gradient-industrial">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-2 mb-4">
            Engineering Excellence You Can Trust
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Partner with a team that combines technical expertise with a commitment 
            to your success.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

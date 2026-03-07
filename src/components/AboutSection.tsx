import { Target, Lightbulb, Handshake, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "30+", label: "Industry Clients" },
];

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every solution is meticulously designed and tested to deliver flawless performance under real-world industrial conditions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve with cutting-edge technologies, from AI-driven predictive maintenance to IIoT integration.",
  },
  {
    icon: Handshake,
    title: "Client-Centric Approach",
    description:
      "Your goals are our blueprint. We work as an extension of your team, from concept through to commissioning and beyond.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "Our solutions consistently deliver 30-50% efficiency gains, reduced downtime, and rapid return on investment.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-[1]">
        {/* Top: Intro + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          {/* Left — Text */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              About Us
            </span>
            <h2 className="section-title mt-3 mb-6">
              Engineering the Future of{" "}
              <span className="text-gradient-industrial">
                Industrial Automation
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Based in India, we are a leading industrial automation and
              engineering solutions company dedicated to helping manufacturers
              achieve operational excellence through customized automation
              systems and control solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From concept to commissioning, our team of experienced engineers
              delivers end-to-end automation solutions tailored to your specific
              industry requirements. We combine deep technical expertise with a
              client-centric approach to ensure every project meets the highest
              standards of quality, safety, and performance.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors group"
            >
              Learn more about our approach
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative rounded-2xl p-6 md:p-8 text-center border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Decorative gradient line at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded-full gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="block text-4xl md:text-5xl font-heading font-bold text-foreground mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Core Values
            </span>
            <h3 className="section-title mt-3 text-2xl md:text-3xl lg:text-4xl">
              What Sets Us Apart
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-2xl p-7 border border-border bg-card hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-accent/15 flex items-center justify-center mb-6 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                <h4 className="font-heading font-bold text-lg text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle hover bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-[3px] rounded-full gradient-accent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

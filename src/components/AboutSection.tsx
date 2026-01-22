import { CheckCircle, Award, Users, Shield } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "15+ Years of Excellence",
    description: "Proven track record delivering complex automation projects across India",
  },
  {
    icon: Users,
    title: "Expert Engineering Team",
    description: "Certified automation engineers with deep industry experience",
  },
  {
    icon: Shield,
    title: "Quality & Compliance",
    description: "Adherence to international standards and safety norms",
  },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "ISA Certified Automation Professionals",
  "Siemens Solution Partner",
  "Allen-Bradley System Integrator",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2 mb-6">
              Your Trusted Partner in <span className="text-gradient-industrial">Industrial Automation</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Based in India, we are a leading industrial automation and engineering solutions company, 
              dedicated to helping manufacturers achieve operational excellence through customized 
              automation systems and control solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              From concept to commissioning, our team of experienced engineers delivers end-to-end 
              automation solutions tailored to your specific industry requirements. We combine deep 
              technical expertise with a client-centric approach to ensure every project meets the 
              highest standards of quality, safety, and performance.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-industrial flex gap-5 items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

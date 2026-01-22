import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial automation facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/85 to-industrial-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90 font-medium">Leading Automation Partner in India</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Industrial Automation & <span className="text-accent">Engineering Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            End-to-end automation solutions for manufacturing, process control, and smart factory integration. 
            Trusted by leading industries across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Talk to an Engineer
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">15+</div>
              <div className="text-sm text-primary-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">500+</div>
              <div className="text-sm text-primary-foreground/70">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">50+</div>
              <div className="text-sm text-primary-foreground/70">Industry Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

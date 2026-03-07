import {
  Factory,
  Car,
  Pill,
  UtensilsCrossed,
  Zap,
  Droplets,
  Building
} from "lucide-react";
import { useEffect, useRef } from "react";

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
];

export function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (containerRef.current) {
        // Find all cards by our custom class
        const cards = containerRef.current.querySelectorAll('.industry-card');
        const centerX = window.innerWidth / 2;

        // Define a maximum distance for scaling effect (ensure it doesn't drop off too fast)
        const maxDistance = Math.max(window.innerWidth / 1.5, 800);

        cards.forEach((card) => {
          const el = card as HTMLElement;
          const rect = el.getBoundingClientRect();

          // Get the center of the card. Because scale transform is from origin center,
          // the center X coordinate remains unchanged after scale is applied, making it stable.
          const cardCenterX = rect.left + rect.width / 2;

          // How far from the center is this card?
          const distance = Math.abs(centerX - cardCenterX);

          // Calculate ratio (1 at center, 0 at max boundary)
          const ratio = Math.max(0, 1 - distance / maxDistance);

          // Easing logic for perspective vision:
          // scale smoothly from 0.85 at edges up to 1.15 at center
          const scale = 0.9 + (ratio * 0.25);
          // Opacity drops to 0.4 max at the edges
          const opacity = 0.4 + (ratio * 0.6);
          // Blur only kicks in drastically when the card is close to the absolute edge (ratio < 0.6)
          const blurValue = Math.max(0, (0.6 - ratio) * 6);

          el.style.transform = `scale(${scale})`;
          el.style.opacity = opacity.toString();
          el.style.filter = `blur(${blurValue}px)`;

          // Z-index ensures the center card stays above the others
          el.style.zIndex = Math.round(ratio * 10).toString();
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Kick off the loop
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="industries" className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Industries</span>
          <h2 className="section-title mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="section-subtitle mx-auto">
            Our automation expertise spans across diverse industries, delivering
            customized solutions that meet sector-specific requirements and standards.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll with Perspective */}
      <div
        className="relative w-full py-12 -my-12 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        {/* Ref container used for calculating positions */}
        <div ref={containerRef} className="flex animate-scroll-left gap-6 md:gap-8 pr-6 md:pr-8 w-max">
          {/* First set of industries */}
          {industries.map((industry, index) => (
            <div
              key={`first-${industry.name}-${index}`}
              className="industry-card group bg-card border border-border shadow-md rounded-xl p-8 text-center hover:border-primary/50 flex-shrink-0 w-[280px] md:w-[320px] transition-colors origin-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-colors">
                <industry.icon className="w-8 h-8 text-steel-dark group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3">
                {industry.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}

          {/* Exactly one duplicate set for seamless 50% translation loop */}
          {industries.map((industry, index) => (
            <div
              key={`second-${industry.name}-${index}`}
              className="industry-card group bg-card border border-border shadow-md rounded-xl p-8 text-center hover:border-primary/50 flex-shrink-0 w-[280px] md:w-[320px] transition-colors origin-center"
              aria-hidden
            >
              <div className="w-16 h-16 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-colors">
                <industry.icon className="w-8 h-8 text-steel-dark group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3">
                {industry.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

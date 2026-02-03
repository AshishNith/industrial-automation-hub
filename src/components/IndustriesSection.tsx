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
import { gsap } from "gsap";

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
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // width of a single set (we duplicated the items)
    const singleWidth = track.scrollWidth / 2;
    if (!singleWidth) return;

    const duration = Math.max(20, singleWidth / 100); // adjust speed by width

    const anim = gsap.to(track, {
      x: `-=${singleWidth}`,
      ease: "none",
      duration,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const val = parseFloat(x);
          const wrapped = gsap.utils.wrap(-singleWidth, 0, val);
          return `${wrapped}px`;
        },
      },
    });

    const onEnter = () => anim.pause();
    const onLeave = () => anim.play();

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    const onResize = () => {
      anim.kill();
      gsap.set(track, { x: 0 });
      const newWidth = track.scrollWidth / 2;
      if (!newWidth) return;
      const newDuration = Math.max(20, newWidth / 100);
      gsap.to(track, {
        x: `-=${newWidth}`,
        ease: "none",
        duration: newDuration,
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x);
            const wrapped = gsap.utils.wrap(-newWidth, 0, val);
            return `${wrapped}px`;
          },
        },
      });
    };

    window.addEventListener("resize", onResize);

    return () => {
      anim.kill();
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="industries" className="section-padding bg-background overflow-hidden">
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

        {/* Infinite Horizontal Scroll */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of industries */}
            {industries.map((industry, index) => (
              <div
                key={`first-${industry.name}-${index}`}
                className="group bg-card border border-border rounded-lg p-5 md:p-6 text-center hover:shadow-md hover:border-primary/30 transition-all duration-300 flex-shrink-0 w-[280px] px-3"
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
            {/* Duplicate set for seamless loop */}
            {industries.map((industry, index) => (
              <div
                key={`second-${industry.name}-${index}`}
                className="group bg-card border border-border rounded-lg p-5 md:p-6 text-center hover:shadow-md hover:border-primary/30 transition-all duration-300 flex-shrink-0 w-[280px] px-3"
                aria-hidden
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
      </div>
    </section>
  );
}

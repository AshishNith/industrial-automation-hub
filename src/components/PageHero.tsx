import { ArrowDown, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  backgroundImage?: string;
  showImage?: boolean;
}

export function PageHero({ title, subtitle, breadcrumb, backgroundImage = heroImage, showImage = true }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image Layer */}
      {showImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Industrial automation background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/85 to-industrial-dark/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-industrial-dark/20 to-industrial-dark/60" />
        </div>
      )}

      {/* Dynamic Gradient Background (fallback or overlay) */}
      <div className={`absolute inset-0 ${showImage ? 'z-[1]' : 'z-0'}`}>
        <div className={`absolute inset-0 ${showImage ? 'bg-industrial-dark/30' : 'gradient-industrial'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.1)_50%,transparent_70%)]" />
        </div>
      </div>

      {/* Animated Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.15] ${showImage ? 'z-[2]' : 'z-[1]'}`}>
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" 
          style={{
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Advanced Circuit Decorations */}
      <div className={`absolute top-16 left-8 w-40 h-40 opacity-20 animate-pulse ${showImage ? 'z-[3]' : 'z-[2]'}`}>
        <svg viewBox="0 0 120 120" className="w-full h-full text-primary-foreground">
          <defs>
            <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#circuitGradient1)"
            strokeWidth="1"
            fill="none"
            d="M20,20 L100,20 L100,50 L80,50 M60,50 L60,100 M80,70 L100,70 M40,70 L60,70"
          />
          <circle cx="20" cy="20" r="3" fill="hsl(var(--accent))" opacity="0.8" />
          <circle cx="100" cy="70" r="3" fill="hsl(var(--accent))" opacity="0.8" />
          <circle cx="60" cy="100" r="3" fill="hsl(var(--accent))" opacity="0.8" />
          <rect x="75" y="45" width="10" height="10" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <div className={`absolute bottom-8 right-8 w-48 h-48 opacity-15 animate-pulse ${showImage ? 'z-[3]' : 'z-[2]'}`} style={{animationDelay: '1s'}}>
        <svg viewBox="0 0 120 120" className="w-full h-full text-accent">
          <defs>
            <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#circuitGradient2)"
            strokeWidth="1"
            fill="none"
            d="M100,100 L20,100 L20,70 L40,70 M60,70 L60,20 M40,50 L20,50 M80,50 L60,50"
          />
          <circle cx="100" cy="100" r="3" fill="hsl(var(--primary))" opacity="0.8" />
          <circle cx="20" cy="50" r="3" fill="hsl(var(--primary))" opacity="0.8" />
          <circle cx="60" cy="20" r="3" fill="hsl(var(--primary))" opacity="0.8" />
          <polygon points="35,65 45,65 40,75" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      {/* Floating Tech Elements */}
      <div className={`absolute top-1/4 right-24 animate-float ${showImage ? 'z-[3]' : 'z-[2]'}`}>
        <Cpu className="w-6 h-6 text-accent/60" />
      </div>
      <div className={`absolute bottom-1/3 left-24 animate-float ${showImage ? 'z-[3]' : 'z-[2]'}`} style={{animationDelay: '1.5s'}}>
        <Zap className="w-5 h-5 text-primary-foreground/50" />
      </div>
      <div className={`absolute top-1/2 right-32 w-4 h-4 bg-accent/30 rounded-full animate-ping ${showImage ? 'z-[3]' : 'z-[2]'}`} />
      <div className={`absolute bottom-1/4 left-32 w-3 h-3 border-2 border-primary-foreground/40 rotate-45 animate-spin ${showImage ? 'z-[3]' : 'z-[2]'}`} style={{animationDuration: '8s'}} />

      {/* Content */}
      <div className={`container-wide relative ${showImage ? 'z-10' : 'z-10'}`}>
        <div className="max-w-5xl">
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6 animate-fade-in">
              <span>Home</span>
              {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span>/</span>
                  <span className={index === breadcrumb.length - 1 ? "text-accent" : ""}>{item.label}</span>
                </span>
              ))}
            </nav>
          )}

          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-8 animate-fade-in backdrop-blur-sm">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90 font-medium tracking-wide">
              Industrial Automation Excellence
            </span>
            <div className="w-1 h-1 bg-primary-foreground/40 rounded-full" />
          </div>

          {/* Enhanced Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-8 animate-slide-up">
            <span className="block">{title}</span>
          </h1>

          {/* Enhanced Subtitle */}
          {subtitle && (
            <p
              className="text-xl md:text-2xl text-primary-foreground/85 max-w-4xl leading-relaxed mb-10 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              {subtitle}
            </p>
          )}

          {/* Enhanced Decorative Elements */}
          <div
            className="flex items-center gap-6 animate-fade-in mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full" />
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Call-to-Action */}
          <div 
            className="flex items-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <div className="hidden md:flex items-center gap-2 text-primary-foreground/70 text-sm">
              <div className="w-8 h-[1px] bg-primary-foreground/40" />
              <span>Scroll to discover more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Additional ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}

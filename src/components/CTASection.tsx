import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="text-accent-foreground/90 font-medium">Ready to Transform Your Operations?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
              Let's Automate Your Process
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Speak with our automation experts to discuss your project requirements 
              and discover how we can help you achieve operational excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default" 
              size="xl" 
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 shadow-lg"
              asChild
            >
              <a href="#contact">
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

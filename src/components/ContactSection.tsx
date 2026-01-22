import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Industrial Area, Phase II", "Pune, Maharashtra 411026", "India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 20 1234 5678"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@industrialauto.in", "sales@industrialauto.in"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contact Us</span>
          <h2 className="section-title mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or need automation consultation? 
            Reach out to our team and let's discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    className="bg-background"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="requirement" className="block text-sm font-medium text-foreground mb-2">
                  Project Requirement *
                </label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  placeholder="Tell us about your automation project or requirements..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  // Replace with your actual Web3Forms Access Key
  // Get your access key from https://web3forms.com
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Industrial Automation Hub",
      subject: "New Contact Message from Industrial Automation Hub Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
      });
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
      toast({
        title: "Error",
        description: msg || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    },
  });

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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Honeypot field for bot protection */}
              <input
                type="checkbox"
                id="botcheck"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              />
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className={`bg-background ${errors.name ? "border-red-600" : ""}`}
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="bg-background"
                    {...register("company")}
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
                    type="email"
                    placeholder="john@company.com"
                    className={`bg-background ${errors.email ? "border-red-600" : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-background"
                    {...register("phone")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="requirement" className="block text-sm font-medium text-foreground mb-2">
                  Project Requirement *
                </label>
                <Textarea
                  id="requirement"
                  placeholder="Tell us about your automation project or requirements..."
                  rows={5}
                  className={`bg-background resize-none ${errors.requirement ? "border-red-600" : ""}`}
                  {...register("requirement", {
                    required: "Please enter your message",
                  })}
                />
                {errors.requirement && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.requirement.message as string}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-4 h-4 mr-2 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
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

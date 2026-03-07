import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MapSectionProps {
    /** Show a compact variant (no section header) for embedding inside a contact page */
    compact?: boolean;
}

export function MapSection({ compact = false }: MapSectionProps) {
    const googleMapsUrl =
        "https://www.google.com/maps?q=Industrial+Area+Phase+II+Pune+Maharashtra+411026+India";

    const embedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5940636748457!2d73.85674031489!3d18.51957498740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9a0f0cdb03%3A0xcab5e82d5a5a1f4b!2sPhase+2%2C+Industrial+Area%2C+Hadapsar%2C+Pune%2C+Maharashtra+411028!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin";

    return (
        <section
            id="map"
            className={`${compact ? "py-0" : "section-padding"} bg-background`}
        >
            <div className="container-wide">
                {/* Section header — only in full (non-compact) mode */}
                {!compact && (
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                            Find Us
                        </span>
                        <h2 className="section-title mt-2 mb-4">Our Location</h2>
                        <p className="section-subtitle mx-auto">
                            Visit our state-of-the-art facility located in the heart of
                            Pune's industrial corridor.
                        </p>
                    </div>
                )}

                {/* Card wrapper */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
                    <div className="grid lg:grid-cols-3">
                        {/* ── Left info panel ─────────────────────────── */}
                        <div className="gradient-industrial text-white p-8 lg:p-10 flex flex-col justify-between gap-8">
                            <div>
                                <h3 className="font-heading text-2xl font-bold mb-2">
                                    Industrial Automation Hub
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Your trusted partner for industrial automation, PLC
                                    programming, and engineering solutions.
                                </p>
                            </div>

                            {/* Quick-info tiles */}
                            <div className="space-y-5">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <MapPin className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                                            Address
                                        </p>
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            Industrial Area, Phase II
                                            <br />
                                            Pune, Maharashtra 411026
                                            <br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:+919876543210"
                                            className="block text-white/90 text-sm hover:text-accent transition-colors"
                                        >
                                            +91 98765 43210
                                        </a>
                                        <a
                                            href="tel:+912012345678"
                                            className="block text-white/90 text-sm hover:text-accent transition-colors"
                                        >
                                            +91 20 1234 5678
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:info@industrialauto.in"
                                            className="block text-white/90 text-sm hover:text-accent transition-colors"
                                        >
                                            info@industrialauto.in
                                        </a>
                                        <a
                                            href="mailto:sales@industrialauto.in"
                                            className="block text-white/90 text-sm hover:text-accent transition-colors"
                                        >
                                            sales@industrialauto.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Button
                                variant="accent"
                                size="lg"
                                className="w-full group"
                                asChild
                            >
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MapPin className="w-4 h-4" />
                                    Get Directions
                                    <ExternalLink className="w-4 h-4 ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </Button>
                        </div>

                        {/* ── Map iframe ──────────────────────────────── */}
                        <div className="lg:col-span-2 relative min-h-[380px] lg:min-h-0">
                            {/* Decorative top bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 gradient-accent z-10" />

                            <iframe
                                title="Industrial Automation Hub Location"
                                src={embedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "380px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />

                            {/* Overlay badge */}
                            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-border flex items-center gap-2 text-xs font-semibold text-foreground">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Open Mon – Sat · 9 AM – 6 PM IST
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

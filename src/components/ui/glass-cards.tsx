import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface GlassCardData {
    id: number;
    title: string;
    description: string;
    color: string;
    image?: string;
    role?: string;
}

interface CardProps {
    card: GlassCardData;
    index: number;
    totalCards: number;
}

const Card: React.FC<CardProps> = ({ card, index, totalCards }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cardRef.current;
        const container = containerRef.current;
        if (!el || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        // Set initial state
        gsap.set(el, {
            scale: 1,
            transformOrigin: "center top",
        });

        // Create scroll trigger for stacking effect
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);

                gsap.set(el, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top",
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "sticky",
                top: 0,
            }}
        >
            <div
                ref={cardRef}
                className="w-[90%] md:w-[70%] max-w-4xl"
                style={{
                    position: "relative",
                    height: "450px",
                    borderRadius: "24px",
                    isolation: "isolate",
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: "top",
                }}
            >
                {/* Electric Border Effect */}
                <div
                    style={{
                        position: "absolute",
                        inset: "-3px",
                        borderRadius: "27px",
                        padding: "3px",
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            ${card.color} 60deg,
                            ${card.color.replace("0.8", "0.6")} 120deg,
                            transparent 180deg,
                            ${card.color.replace("0.8", "0.4")} 240deg,
                            transparent 360deg
                        )`,
                        zIndex: -1,
                    }}
                />

                {/* Main Card Content */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        borderRadius: "24px",
                        // Themed gradient: slightly darker than pure white on light theme, translucent
                        background: `
                        linear-gradient(145deg, 
                            rgba(var(--background), 0.8), 
                            rgba(var(--background), 0.6)
                        )
                    `,
                        backgroundColor: "hsl(var(--card))",
                        backdropFilter: "blur(25px) saturate(180%)",
                        border: "1px solid hsl(var(--border) / 0.5)",
                        boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.1),
                        0 2px 8px rgba(0, 0, 0, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                        overflow: "hidden",
                    }}
                >
                    {/* Enhanced Glass reflection overlay */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "60%",
                            background:
                                "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
                            pointerEvents: "none",
                            borderRadius: "24px 24px 0 0",
                            zIndex: 10,
                        }}
                    />

                    {/* Left Side: Text */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-20">
                        {card.role && (
                            <span className="text-sm md:text-md font-semibold text-accent uppercase tracking-wider mb-2 block">
                                {card.role}
                            </span>
                        )}
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            {card.title}
                        </h3>
                        <p className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                            {card.description}
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    {card.image && (
                        <div className="hidden md:block w-[40%] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent z-10 w-24"></div>
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover rounded-r-[24px]"
                            />
                        </div>
                    )}

                    {/* Frosted glass texture */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.02) 1px, transparent 2px),
                            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.015) 1px, transparent 2px)
                        `,
                            backgroundSize: "30px 30px, 25px 25px",
                            pointerEvents: "none",
                            borderRadius: "24px",
                            zIndex: 10,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

interface StackedCardsProps {
    cards: GlassCardData[];
}

export const StackedCards: React.FC<StackedCardsProps> = ({ cards }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.fromTo(
            container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="bg-background relative">
            {/* Hero Section */}
            <section
                style={{
                    height: "40vh",
                    width: "100%",
                    display: "grid",
                    placeContent: "center",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
                    `,
                        backgroundSize: "54px 54px",
                        maskImage:
                            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                    }}
                />
                <div className="text-center relative z-10 space-y-4">
                    <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground tracking-tight">
                        Meet the Experts
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        The skilled engineers driving unparalleled innovation in industrial
                        automation.
                    </p>
                </div>
            </section>

            {/* Cards Section */}
            <section className="w-full pb-[20vh]">
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        totalCards={cards.length}
                    />
                ))}
            </section>
        </div>
    );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    description: string;
    items?: string[];
    image?: string;
    button?: {
        url: string;
        text: string;
    };
};

export interface TimeLine_01Props {
    title?: string;
    description?: string;
    entries?: TimeLine_01Entry[];
    className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
    title = "Our Services",
    description = "Comprehensive Robot Automation Solutions.",
    entries = defaultEntries,
}: TimeLine_01Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Create stable setters for refs inside map
    const setItemRef = (el: HTMLDivElement | null, i: number) => {
        itemRefs.current[i] = el;
    };
    const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
        sentinelRefs.current[i] = el;
    };

    useEffect(() => {
        if (!sentinelRefs.current.length) return;

        // We observe small sentinels placed near the title of each card. Whichever
        // sentinel is closest to the vertical center of the viewport becomes active.
        // Using IntersectionObserver to track visibility + a rAF loop to pick the closest.

        let frame = 0;
        const updateActiveByProximity = () => {
            frame = requestAnimationFrame(updateActiveByProximity);
            // Compute distance of each sentinel to viewport center
            const centerY = window.innerHeight / 3;
            let bestIndex = 0;
            let bestDist = Infinity;
            sentinelRefs.current.forEach((node, i) => {
                if (!node) return;
                const rect = node.getBoundingClientRect();
                const mid = rect.top + rect.height / 2;
                const dist = Math.abs(mid - centerY);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIndex = i;
                }
            });
            if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
        };

        frame = requestAnimationFrame(updateActiveByProximity);
        return () => cancelAnimationFrame(frame);
    }, [activeIndex]);

    // Optional: ensure the first card is active on mount
    useEffect(() => {
        setActiveIndex(0);
    }, []);

    return (
        <div className="container-wide">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="section-title mb-4 tracking-tight">
                    {title}
                </h2>
                <p className="section-subtitle mx-auto text-lg mb-6">
                    {description}
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl space-y-16 md:mt-24 md:space-y-24">
                {entries.map((entry, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={index}
                            className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                            ref={(el) => setItemRef(el, index)}
                            aria-current={isActive ? "true" : "false"}
                        >
                            {/* Sticky meta column */}
                            <div className="top-24 flex h-min w-64 shrink-0 items-center gap-4 md:sticky md:pt-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-xl transition-colors duration-500 ${isActive ? "bg-accent shadow-lg shadow-accent/20 text-white" : "bg-muted text-muted-foreground"
                                        }`}>
                                        <entry.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-bold text-foreground">
                                            {entry.title}
                                        </span>
                                        <span className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">
                                            Service {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                            <div
                                ref={(el) => setSentinelRef(el, index)}
                                aria-hidden
                                className="absolute -top-32 left-0 h-12 w-12 opacity-0"
                            />

                            {/* Content column */}
                            <article
                                className={
                                    "flex-1 flex flex-col rounded-3xl border p-4 transition-all duration-500 " +
                                    (isActive
                                        ? "border-accent/40 bg-card shadow-2xl scale-[1.02]"
                                        : "border-border bg-card/50 scale-100 opacity-60 hover:opacity-100")
                                }
                            >
                                {entry.image && (
                                    <img
                                        src={entry.image}
                                        alt={`${entry.title} visual`}
                                        className="mb-5 w-full h-80 rounded-2xl object-cover shadow-sm"
                                        loading="lazy"
                                    />
                                )}
                                <div className="space-y-4 px-2">
                                    {/* Header with improved typography */}
                                    <div className="space-y-2">
                                        <h3
                                            className={
                                                "text-xl font-bold leading-tight tracking-tight md:text-2xl transition-colors duration-300 " +
                                                (isActive ? "text-foreground" : "text-foreground/70")
                                            }
                                        >
                                            {entry.subtitle}
                                        </h3>

                                        {/* Improved description with better spacing */}
                                        <p
                                            className={
                                                "text-sm leading-relaxed md:text-base font-medium transition-all duration-500 " +
                                                (isActive
                                                    ? "text-muted-foreground line-clamp-none"
                                                    : "text-muted-foreground/80 line-clamp-2")
                                            }
                                        >
                                            {entry.description}
                                        </p>
                                    </div>

                                    {/* Enhanced expandable content */}
                                    <div
                                        aria-hidden={!isActive}
                                        className={
                                            "grid transition-all duration-700 ease-out " +
                                            (isActive
                                                ? "grid-rows-[1fr] opacity-100 mt-6"
                                                : "grid-rows-[0fr] opacity-0 mt-0")
                                        }
                                    >
                                        <div className="overflow-hidden">
                                            <div className="space-y-5">
                                                {entry.items && entry.items.length > 0 && (
                                                    <div className="rounded-2xl border border-border bg-muted/50 p-5 shadow-inner">
                                                        <ul className="grid sm:grid-cols-2 gap-3">
                                                            {entry.items.map((item, itemIndex) => (
                                                                <li
                                                                    key={itemIndex}
                                                                    className="flex items-start gap-3 justify-start"
                                                                >
                                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 shadow-sm shadow-accent/50" />
                                                                    <span className="text-sm font-semibold text-foreground/80 leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {entry.button && (
                                                    <div className="flex justify-end pt-2">
                                                        <Button
                                                            variant="accent"
                                                            size="lg"
                                                            className="group rounded-xl shadow-lg shadow-accent/20 font-bold transition-all duration-300 hover:scale-105"
                                                            asChild
                                                        >
                                                            <a href={entry.button.url}>
                                                                {entry.button.text}
                                                                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                            </a>
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

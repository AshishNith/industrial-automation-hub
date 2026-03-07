import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

/* ─── configuration ────────────────────────────────────── */
const TOTAL_FRAMES = 200;
const FOLDER = "/Robot";
const framePath = (i: number) =>
  `${FOLDER}/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

/* ─── text overlays definition ─────────────────────────── */
interface TextOverlay {
  title: string;
  accentWord: string;
  subtitle: string;
  /** [fadeInStart, fullyVisible, startFadeOut, fullyGone] — values 0‑1 */
  range: [number, number, number, number];
  opacities?: [number, number, number, number];
}

const TEXT_OVERLAYS: TextOverlay[] = [
  {
    title: "Industrial",
    accentWord: "Automation",
    subtitle: "End-to-end engineering solutions for smart manufacturing",
    range: [0.0, 0.03, 0.15, 0.22],
    opacities: [1, 1, 1, 0],
  },
  {
    title: "PLC & SCADA",
    accentWord: "Integration",
    subtitle: "Siemens, Allen-Bradley, Schneider — we master every platform",
    range: [0.22, 0.28, 0.42, 0.48],
  },
  {
    title: "Robotics & Motion",
    accentWord: "Control",
    subtitle: "FANUC · ABB · KUKA — precision at scale",
    range: [0.48, 0.54, 0.68, 0.74],
  },
  {
    title: "Engineering",
    accentWord: "Excellence",
    subtitle: "Trusted by 30+ industry clients across India",
    range: [0.74, 0.80, 0.93, 0.98],
  },
];

/* ─── canvas scroll component ──────────────────────────── */
function RobotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef(0);

  /* scroll progress 0→1 over the wrapper height */
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  /* ── preload all frames ───────────────────────────────── */
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        /* draw first frame once it's ready */
        if (i === 1) renderFrame(0);
      };
      imgs.push(img);
    }

    imagesRef.current = imgs;

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── draw a frame to canvas ───────────────────────────── */
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* match canvas backing store to physical pixels */
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const bw = Math.round(w * dpr);
    const bh = Math.round(h * dpr);

    if (canvas.width !== bw || canvas.height !== bh) {
      canvas.width = bw;
      canvas.height = bh;
    }

    /* reset transform & use high-quality smoothing */
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.clearRect(0, 0, w, h);

    /* "cover" fit — fills the viewport, crops overflow */
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = w / h;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      /* image is wider → match height, crop sides */
      drawH = h;
      drawW = h * imgAspect;
      drawX = (w - drawW) / 2;
      drawY = 0;
    } else {
      /* image is taller → match width, crop top/bottom */
      drawW = w;
      drawH = w / imgAspect;
      drawX = 0;
      drawY = (h - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  /* ── map scroll → frame index ─────────────────────────── */
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );

    if (idx !== frameIndexRef.current) {
      frameIndexRef.current = idx;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => renderFrame(idx));
    }
  });

  /* ── handle resize ────────────────────────────────────── */
  useEffect(() => {
    const onResize = () => renderFrame(frameIndexRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [renderFrame]);

  /* ── text overlay opacity transforms ──────────────────── */
  const overlayOpacities = TEXT_OVERLAYS.map((o) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(scrollYProgress, o.range, o.opacities || [0, 1, 1, 0])
  );

  return (
    /* tall scroll wrapper — 500vh */
    <div ref={wrapperRef} className="relative h-[500vh]">
      {/* sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* clean bg behind canvas */}
        <div className="absolute inset-0 bg-background" />

        {/* canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: "block" }}
        />

        {/* ── text overlays, stats, buttons — vertically stacked LEFT ── */}
        {TEXT_OVERLAYS.map((overlay, i) => (
          <motion.div
            key={i}
            style={{ opacity: overlayOpacities[i] }}
            className="absolute inset-0 flex items-center justify-start pointer-events-none"
          >
            <div className="pl-6 sm:pl-10 md:pl-16 lg:pl-24 xl:pl-32 pointer-events-auto flex flex-col justify-center h-full">
              <div className="max-w-xl">
                {/* Headers */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-foreground leading-[1.05] tracking-tight mb-4 shadow-sm">
                  {overlay.title}
                  <br />
                  <span className="text-accent">{overlay.accentWord}</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md font-medium mb-10">
                  {overlay.subtitle}
                </p>

                {/* Stats (only show on first scroll section for cleaner layout, or on all if preferred. Showing on all here) */}
                <div className="flex gap-6 sm:gap-10 mb-10 border-l-[3px] border-accent/40 pl-5">
                  {[
                    { value: "3+", label: "Years Experience" },
                    { value: "20+", label: "Projects Delivered" },
                    { value: "30+", label: "Industry Clients" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button variant="accent" size="xl" className="shadow-lg shadow-accent/20" asChild>
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" className="border-border bg-background/50 hover:bg-background/80 text-foreground" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-5 h-5 mr-2" />
                      Talk to an Engineer
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── exported section ─────────────────────────────────── */
export function HeroSection() {
  return (
    <section id="home">
      <RobotCanvas />
    </section>
  );
}

import { Cpu, Settings, ShieldCheck, Activity, CheckCircle2, ArrowRight } from "lucide-react";

const stats = [
  { key: "SYS_RUN_TIME", value: "3+", label: "Years Experience" },
  { key: "COMMISSIONED", value: "20+", label: "Projects Delivered" },
  { key: "CLIENT_NODES", value: "30+", label: "Industry Clients" },
];

const values = [
  {
    icon: Cpu,
    module: "SYS_MOD_01",
    title: "Precision Engineering",
    description:
      "Every automation logic, PLC rung, and electrical circuit is meticulously designed and tested to deliver flawless performance under harsh industrial conditions.",
  },
  {
    icon: Activity,
    module: "SYS_MOD_02",
    title: "Innovation First",
    description:
      "We stay ahead of the curve by integrating modern IIoT architectures, edge computing, smart sensors, and advanced predictive analytics into traditional automation systems.",
  },
  {
    icon: Settings,
    module: "SYS_MOD_03",
    title: "Tailored Solutions",
    description:
      "Your goals are our blueprint. We engineer custom panels, bespoke PLC architectures, and tailored robotics scripts that align perfectly with your manufacturing line.",
  },
  {
    icon: ShieldCheck,
    module: "SYS_MOD_04",
    title: "Safety & SIL Standards",
    description:
      "We strictly adhere to industrial safety regulations, implementing SIL-rated emergency safety loops, redundant controllers, and fail-safe designs to protect your crew.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Tech Grid Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Decorative gradient blur */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-[1]">
        {/* Top: Intro + Telemetry Console */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left Column (7 cols) — Text & Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">
                01 // Company Overview
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground tracking-tight leading-[1.1] mb-6">
              Engineering the Future of{" "}
              <span className="text-gradient-industrial block sm:inline">
                Industrial Automation
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Based in India, we are a leading industrial automation and
              engineering solutions company dedicated to helping manufacturers
              achieve operational excellence through customized automation
              systems and control solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              From concept to commissioning, our team of experienced engineers
              delivers end-to-end automation solutions tailored to your specific
              industry requirements. We combine deep technical expertise with a
              client-centric approach to ensure every project meets the highest
              standards of quality, safety, and performance.
            </p>

            {/* Competency List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10 border-t border-border pt-8">
              {[
                "Custom PLC & SCADA programming",
                "Turnkey control panel design & assembly",
                "Robotic cell programming & integration",
                "IIoT & Cloud telemetry solutions",
                "Industrial network security & architecture",
                "SIL-rated safety system compliance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-md shadow-primary/10 group"
            >
              Learn more about our approach
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column (5 cols) — Telemetry Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0d1527] border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl">
              {/* Internal grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none" />
              {/* Blur accent glow */}
              <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-emerald-400">
                    HMI_SYS_STATUS: ONLINE
                  </span>
                </div>
                <span className="font-mono text-[9px] text-slate-500 tracking-wider">
                  SYS_V2.0.46
                </span>
              </div>

              {/* Stats Grid inside HMI */}
              <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 flex flex-col justify-between relative group hover:border-accent/40 transition-colors"
                  >
                    <span className="font-mono text-[8px] text-slate-500 tracking-wider block mb-1">
                      {stat.key}
                    </span>
                    <div>
                      <span className="block text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold block mt-1 leading-snug">
                        {stat.label}
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-accent transition-colors" />
                  </div>
                ))}
              </div>

              {/* Telemetry Console Output */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/60 font-mono text-xs text-slate-400 space-y-2.5 relative z-10">
                <div className="flex justify-between items-center text-slate-500 text-[9px] uppercase border-b border-slate-900 pb-1.5 mb-1.5">
                  <span>Active Process Console</span>
                  <span className="text-accent animate-pulse font-bold">● Recalibrating</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">SYSTEM_MODE:</span>
                  <span className="text-slate-300 font-bold">AUTOMATIC_AUTO</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">AVG_EFFICIENCY_GAIN:</span>
                  <span className="text-accent font-bold">+42.6%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">ACTIVE_INTEGRATIONS:</span>
                  <span className="text-slate-300">SIEMENS, FANUC, KUKA</span>
                </div>
                <div className="h-px bg-slate-900 my-2" />
                <div className="text-[10px] text-slate-500 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>INITIALIZING CORE LOOP... OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>COMM_BUS: DEV_NET_CONNECTED</span>
                  </div>
                  <div className="flex items-center gap-1.5 animate-pulse">
                    <span className="text-accent font-bold">&gt;</span>
                    <span>MONITORING SAFETY MATRIX... CLEAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Values styled as Modules */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest">
                02 // Core values
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground tracking-tight">
              What Sets Us Apart
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-xl p-7 border border-border bg-card hover:bg-card/85 hover:shadow-2xl hover:border-accent/40 transition-all duration-500"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Blueprint corner ticks */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-slate-300 dark:border-slate-700/60 group-hover:border-accent transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-slate-300 dark:border-slate-700/60 group-hover:border-accent transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-slate-300 dark:border-slate-700/60 group-hover:border-accent transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-slate-300 dark:border-slate-700/60 group-hover:border-accent transition-colors duration-300" />

                {/* Monospace module label */}
                <span className="font-mono text-[9px] text-slate-400 dark:text-slate-500 tracking-wider block mb-4">
                  {item.module}
                </span>

                {/* Icon wrapper with tech look */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-accent/15 flex items-center justify-center mb-5 border border-primary/10 group-hover:border-accent/25 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                <h4 className="font-heading font-extrabold text-lg text-foreground mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

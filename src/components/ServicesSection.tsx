import TimeLine_01, { TimeLine_01Entry } from "@/components/ui/release-time-line";
import { HardHat, Wrench, Code2, Settings2, Cpu, Crosshair } from "lucide-react";

const services: TimeLine_01Entry[] = [
  {
    icon: HardHat,
    title: "Robot Shifting",
    subtitle: "Plant relocation & line modification",
    description: "Relocating your plant or production line with multiple robots? A-Robotics Services ensures rapid uninstallation, safe transport, and seamless reinstallation for a quick start-up at any new location.",
    image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=400",
    items: [
      "Rapid uninstallation of multiple robots",
      "Safe transport and handling",
      "Seamless reinstallation",
      "Quick start-up verification"
    ],
    button: { url: "/contact", text: "Talk to an Expert" }
  },
  {
    icon: Wrench,
    title: "Robot Repair",
    subtitle: "Industrial robot maintenance & troubleshooting",
    description: "A-Robotics Services technicians repair and restore industrial robots from all leading manufacturers — Yaskawa Motoman, FANUC, ABB, KUKA, Panasonic, and more — with deep technical knowledge and precision.",
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400",
    items: [
      "Support for all leading manufacturers",
      "Deep technical diagnosis",
      "Precision troubleshooting",
      "Complete component restoration"
    ],
    button: { url: "/contact", text: "Request Repair" }
  },
  {
    icon: Code2,
    title: "Robot Programming",
    subtitle: "Smart programming & system integration",
    description: "We have Smart Robot Programmers. They will support for all kind of Programming related issues and for supporting in any new Project on All Application (SPOT, MIG, DISPENSING, HANDLING).",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
    items: [
      "Spot & MIG welding algorithms",
      "Dispensing systems setup",
      "Custom material handling logic",
      "New project end-to-end integration"
    ]
  },
  {
    icon: Settings2,
    title: "On Site Repair",
    subtitle: "Field service & spare parts supply",
    description: "A-Robotics Services technicians repair industrial robots directly at your site. We carry essential spare parts and components, providing reliable on-site service and system support you can trust.",
    image: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=400",
    items: [
      "Emergency on-site maintenance",
      "Immediate spare parts supply",
      "Field diagnostics",
      "Predictive component analysis"
    ]
  },
  {
    icon: Cpu,
    title: "PLC Programming",
    subtitle: "System integration & tech support",
    description: "Our experts provide office support on different makes of PLCs including Microsoft, Siemens, Omron, Delta and many more. We ensure seamless industrial automation control.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400",
    items: [
      "Siemens & Omron architecture",
      "Delta system integration",
      "HMI dashboard development",
      "Continuous tech support"
    ]
  },
  {
    icon: Crosshair,
    title: "Cycle Optimization",
    subtitle: "Programming software & automation efficiency",
    description: "Our experienced team has vast experience in Machine Programming and we support Machine Software like: Robot Studio, Roboguide, and many more applications systems.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    items: [
      "Cycle time reduction analysis",
      "Robot Studio simulations",
      "Roboguide optimization",
      "Overall efficiency benchmarking"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden relative">
      <TimeLine_01
        title="Comprehensive Robot Automation Solutions"
        description="From robot installation to advanced programming, we deliver specialized engineering solutions that maximize your automation potential and operational efficiency."
        entries={services}
      />
    </section>
  );
}

import { Timeline } from "@/components/ui/timeline";
import {
  Cpu,
  Monitor,
  Zap,
  Network,
  Radio,
  Bot,
} from "lucide-react";

/* ─────────────────────── helpers ─────────────────────── */

/** A badge pill matching the industrial colour palette */
function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
      {label}
    </span>
  );
}

/** Icon wrapper styled with the orange accent */
function IconBox({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-accent" />
    </div>
  );
}

/** A single technology card */
function TechCard({
  icon,
  name,
  tags,
  description,
}: {
  icon: React.ElementType;
  name: string;
  tags: string[];
  description: string;
}) {
  return (
    <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <IconBox icon={icon} />
      <div className="min-w-0">
        <p className="font-heading font-semibold text-foreground text-sm mb-1">
          {name}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Two-column card grid used inside each timeline entry */
function TechGrid({ cards }: { cards: React.ReactNode[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-2">
      {cards}
    </div>
  );
}

/* ─────────────────────── timeline data ─────────────────────── */

import React from "react";

const timelineData = [
  {
    title: "PLC Platforms",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          We program and integrate every major PLC brand used in modern
          manufacturing — from entry-level compact controllers to high-end
          safety-rated systems running mission-critical lines.
        </p>
        <TechGrid
          cards={[
            <TechCard
              key="siemens"
              icon={Cpu}
              name="Siemens S7-1200 / 1500"
              description="TIA Portal development, safety integrated (F-CPU), motion control and distributed I/O via PROFINET."
              tags={["TIA Portal", "PROFINET", "Safety PLC"]}
            />,
            <TechCard
              key="ab"
              icon={Cpu}
              name="Allen-Bradley ControlLogix"
              description="Studio 5000 Logix Designer, GuardLogix safety, EtherNet/IP and Devicenet fieldbus."
              tags={["Studio 5000", "EtherNet/IP", "GuardLogix"]}
            />,
            <TechCard
              key="schneider"
              icon={Cpu}
              name="Schneider Modicon M340 / M580"
              description="EcoStruxure Automation Expert, IEC 61131-3 programming, Unity Pro."
              tags={["M340", "M580", "Unity Pro"]}
            />,
            <TechCard
              key="mitsubishi"
              icon={Cpu}
              name="Mitsubishi FX / Q Series"
              description="GX Works3 programming, CC-Link fieldbus, structured ladder and ST language."
              tags={["GX Works3", "CC-Link", "FX5U"]}
            />,
          ]}
        />
      </div>
    ),
  },
  {
    title: "SCADA & HMI",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          From panel-mounted HMIs to plant-wide SCADA platforms, we design
          intuitive, data-rich operator interfaces that give your team full
          visibility and control in real time.
        </p>
        <TechGrid
          cards={[
            <TechCard
              key="wincc"
              icon={Monitor}
              name="Siemens WinCC / WinCC OA"
              description="Scalable SCADA from single-station to large distributed systems with redundancy and web access."
              tags={["WinCC Unified", "Redundancy", "Web HMI"]}
            />,
            <TechCard
              key="ignition"
              icon={Monitor}
              name="Ignition by Inductive Automation"
              description="Unlimited licensing, web-based designer, MQTT Sparkplug B and seamless historian integration."
              tags={["MQTT", "Perspective", "SQL Bridge"]}
            />,
            <TechCard
              key="wonderware"
              icon={Monitor}
              name="Wonderware InTouch"
              description="ArchestrA framework, System Platform historian, mobile-ready faceplates."
              tags={["InTouch", "ArchestrA", "Historian"]}
            />,
            <TechCard
              key="factorytalk"
              icon={Monitor}
              name="FactoryTalk View SE / ME"
              description="Seamless Rockwell ecosystem integration, e-maintenance and batch reporting."
              tags={["FT View", "eProcedure", "VantagePoint"]}
            />,
          ]}
        />
      </div>
    ),
  },
  {
    title: "Drives & Motion",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          Precise speed, torque and position control is at the heart of modern
          automation. We commission and tune VFDs, servo drives and motion
          controllers across a wide range of manufacturers.
        </p>
        <TechGrid
          cards={[
            <TechCard
              key="siemens-drives"
              icon={Zap}
              name="Siemens SINAMICS Series"
              description="G120/S120 servo and vector drives, Safety Integrated, PROFIDRIVE and TIA integration."
              tags={["G120", "S120", "SafetyIntegrated"]}
            />,
            <TechCard
              key="abb"
              icon={Zap}
              name="ABB ACS / ACS880"
              description="Industrial drives with Direct Torque Control, SafeTorqueOff and DriveComposer commissioning."
              tags={["DTC", "SafeTorqueOff", "Industrial"]}
            />,
            <TechCard
              key="yaskawa"
              icon={Zap}
              name="Yaskawa Sigma-7 Servo"
              description="High-speed EtherCAT servo systems, SigmaWin+ autotuning and vibration suppression."
              tags={["EtherCAT", "SigmaWin+", "Servo"]}
            />,
            <TechCard
              key="delta"
              icon={Zap}
              name="Delta VFD / ASDA Servo"
              description="C2000 series high-performance drives, cost-effective ASDA-A3 servo for packaging machines."
              tags={["C2000", "ASDA-A3", "CANopen"]}
            />,
          ]}
        />
      </div>
    ),
  },
  {
    title: "Industrial Networks",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          Reliable, low-latency industrial communication is the backbone of any
          connected factory. We design and validate network architectures from
          field-level fieldbus to cloud data highways.
        </p>
        <TechGrid
          cards={[
            <TechCard
              key="profinet"
              icon={Network}
              name="PROFINET / PROFIBUS"
              description="Device integration, RT & IRT real-time class configuration with STEP 7 and TIA Portal."
              tags={["RT/IRT", "MRP", "Topology"]}
            />,
            <TechCard
              key="ethernetip"
              icon={Network}
              name="EtherNet/IP & DeviceNet"
              description="CIP motion, implicit and explicit messaging, Rockwell ecosystem device integration."
              tags={["CIP", "CIP Motion", "DeviceNet"]}
            />,
            <TechCard
              key="modbus"
              icon={Network}
              name="Modbus TCP / RTU"
              description="Universal protocol for legacy and heterogeneous device integration across any PLC brand."
              tags={["Modbus TCP", "RS-485", "Legacy"]}
            />,
            <TechCard
              key="opcua"
              icon={Network}
              name="OPC UA & MQTT"
              description="Secure, platform-agnostic data exchange for Industry 4.0, IIoT and cloud connectivity."
              tags={["OPC UA", "MQTT", "IIoT"]}
            />,
          ]}
        />
      </div>
    ),
  },
  {
    title: "Sensors & Instruments",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          Accurate sensing and measurement underpin every automated process.
          We source, commission and maintain instruments from globally
          recognised brands across all process variables.
        </p>
        <TechGrid
          cards={[
            <TechCard
              key="sick"
              icon={Radio}
              name="Sick AG Sensors"
              description="Safety light curtains, laser scanners, 2D/3D vision, IO-Link enabled devices."
              tags={["IO-Link", "Vision", "Safety"]}
            />,
            <TechCard
              key="ifm"
              icon={Radio}
              name="IFM Electronic"
              description="Level, flow, pressure and temperature sensors with IO-Link and diagnostic intelligence."
              tags={["IO-Link", "Flow", "Diagnostics"]}
            />,
            <TechCard
              key="eh"
              icon={Radio}
              name="Endress+Hauser"
              description="Coriolis, vortex, ultrasonic flowmeters and process analysers for demanding environments."
              tags={["HART", "Foundation Fieldbus", "Coriolis"]}
            />,
            <TechCard
              key="emerson"
              icon={Radio}
              name="Emerson Instruments"
              description="Rosemount pressure and temperature transmitters, Fisher control valves, DeltaV integration."
              tags={["Rosemount", "HART 7", "DeltaV"]}
            />,
          ]}
        />
      </div>
    ),
  },
  {
    title: "Robotics",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
          From collaborative robots working alongside humans to high-speed
          articulated arms in fully automated cells, we deliver turnkey robot
          integration, programming and maintenance services.
        </p>
        <TechGrid
          cards={[
            <TechCard
              key="fanuc"
              icon={Bot}
              name="FANUC Robots"
              description="ROBOGUIDE offline programming, ArcTool, PaintTool and iRVision for assembly and welding."
              tags={["ROBOGUIDE", "ArcTool", "iRVision"]}
            />,
            <TechCard
              key="abb-robot"
              icon={Bot}
              name="ABB Robotics"
              description="RobotStudio simulation, RAPID Programming, IRB series for welding and material handling."
              tags={["RobotStudio", "RAPID", "OmniCore"]}
            />,
            <TechCard
              key="kuka"
              icon={Bot}
              name="KUKA Systems"
              description="KRL Programming, WorkVisual configuration, KR AGILUS and KR IONTEC series."
              tags={["KRL", "WorkVisual", "Smart HMI"]}
            />,
            <TechCard
              key="ur"
              icon={Bot}
              name="Universal Robots (UR)"
              description="Collaborative cobots, URScript / Polyscope 5, easy teach pendant and force-torque sensing."
              tags={["e-Series", "Polyscope", "Cobot"]}
            />,
          ]}
        />
      </div>
    ),
  },
];

/* ─────────────────────── section ─────────────────────── */

export function TechnologiesSection() {
  return (
    <section id="technologies" className="bg-muted/50">
      <div className="container-wide pt-16 md:pt-24 lg:pt-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Technologies
          </span>
          <h2 className="section-title mt-2 mb-4">Technologies & Expertise</h2>
          <p className="section-subtitle mx-auto">
            We work with leading industrial automation platforms across every
            layer of the control architecture — from field device to cloud.
            Scroll to explore our full technology stack.
          </p>
        </div>
      </div>

      {/* Timeline — full-width, no container padding so the line aligns */}
      <Timeline data={timelineData} />
    </section>
  );
}

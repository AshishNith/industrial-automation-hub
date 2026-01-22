const technologies = [
  {
    category: "PLC Platforms",
    items: ["Siemens S7-1200/1500", "Allen-Bradley ControlLogix", "Schneider Modicon", "Mitsubishi FX/Q Series", "Delta DVP Series"],
  },
  {
    category: "SCADA Systems",
    items: ["Siemens WinCC", "Wonderware InTouch", "Ignition by Inductive", "FactoryTalk View", "Citect SCADA"],
  },
  {
    category: "Drives & Motion",
    items: ["Siemens VFDs", "ABB ACS Series", "Yaskawa Servo Drives", "Delta VFDs", "Lenze Drives"],
  },
  {
    category: "Industrial Networks",
    items: ["PROFINET", "EtherNet/IP", "Modbus TCP/RTU", "PROFIBUS", "OPC UA"],
  },
  {
    category: "Sensors & Instruments",
    items: ["Sick Sensors", "IFM Electronic", "Endress+Hauser", "Honeywell", "Emerson Instruments"],
  },
  {
    category: "Robotics",
    items: ["FANUC Robots", "ABB Robotics", "KUKA Systems", "Yaskawa Motoman", "Universal Robots"],
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Technologies</span>
          <h2 className="section-title mt-2 mb-4">
            Technologies & Expertise
          </h2>
          <p className="section-subtitle mx-auto">
            We work with leading industrial automation platforms and technologies 
            to deliver best-in-class solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.category}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4 pb-3 border-b border-border">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

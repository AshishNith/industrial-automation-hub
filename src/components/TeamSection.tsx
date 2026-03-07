import { StackedCards, GlassCardData } from "@/components/ui/glass-cards";

const teamData: GlassCardData[] = [
    {
        id: 1,
        title: "Milind Gupta",
        role: "Lead Automation Engineer",
        description: "Rajesh brings 15+ years of hands-on experience in PLC architecture and complex industrial robotics integration across automotive and manufacturing lines.",
        color: "rgba(249, 115, 22, 0.8)", // Orange accent
        image: "https://res.cloudinary.com/dfn0pzksh/image/upload/v1740949211/WhatsApp_Image_2025-03-03_at_02.04.01_4ccd6632_adramr.jpg",
    },
    {
        id: 2,
        title: "Vikram Singh",
        role: "Senior Robotics Programmer",
        description: "Specializing in FANUC, ABB, and KUKA integration, Vikram ensures precise operational cycles, minimal downtime, and seamless robotic scaling.",
        color: "rgba(59, 130, 246, 0.8)", // Blue accent
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500&h=500",
    },
    {
        id: 3,
        title: "Anita Sharma",
        role: "Technical Operations Manager",
        description: "Anita drives forward end-to-end automation projects with unwavering dedication to timelines, safety compliance, and maximizing ROI for our clients.",
        color: "rgba(16, 185, 129, 0.8)", // Emerald accent
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500&h=500",
    }
];

export function TeamSection() {
    return (
        <section id="team" className="relative bg-background">
            <StackedCards cards={teamData} />
        </section>
    );
}

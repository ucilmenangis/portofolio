export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    live?: string;
}

export const projects: Project[] = [
    {
        title: "TEFA Canning SIP",
        description:
            "Teaching Factory sardine canning transaction & monitoring system. A web-based information system to digitize the transaction and monitoring process at the fish canning Teaching Factory, adopting a batch-based Pre-Order model integrated with campus events.",
        tech: ["php", "laravel", "mysql", "css"],
        image: "/images/projects/tefacanning.png",
        github: "https://github.com/ucilmenangis/tefacanning",
    },
    {
        title: "HIMAPALA Bekisar",
        description:
            "Official website for UKM HIMAPALA — the nature lovers student organization at Politeknik Negeri Jember. Features organization profile, achievements, membership, gallery, and contact information.",
        tech: ["html", "css", "js"],
        image: "/images/projects/himapala-bekisar.webp",
        github: "https://github.com/ucilmenangis/Proyek_Akhir_Semester_1",
        live: "https://himapalabekisar.vercel.app/",
    },
    {
        title: "DeceasedCraft Server",
        description:
            "A custom Minecraft server project built for friends and personal use. Configured and managed game server with custom scripts and settings.",
        tech: ["java", "js", "nodejs"],
        image: "/images/projects/deceasedcraft.png",
        github: "https://github.com/ucilmenangis/DeceasedCraft-Server-5.10",
    },
    {
        title: "Nusantara Smart City",
        description:
            "A conceptual dashboard and analytics platform for urban infrastructure monitoring, featuring real-time data visualization and IOT sensor integration.",
        tech: ["react", "tailwindcss", "supabase"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        live: "https://example.com",
    },
    {
        title: "Lumina AI Chat",
        description:
            "A fast, modern conversational interface powered by large language models, featuring markdown support, code highlighting, and streaming responses.",
        tech: ["react", "firebase", "tailwind"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com",
    }
];

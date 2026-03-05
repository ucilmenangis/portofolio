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
        tech: ["PHP 8.3", "Laravel 10", "Blade", "MySQL", "CSS"],
        image: "/images/projects/tefa-canning.webp",
        github: "https://github.com/ucilmenangis/tefacanning",
    },
    {
        title: "HIMAPALA Bekisar",
        description:
            "Official website for UKM HIMAPALA — the nature lovers student organization at Politeknik Negeri Jember. Features organization profile, achievements, membership, gallery, and contact information.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/images/projects/himapala-bekisar.webp",
        github: "https://github.com/ucilmenangis/Proyek_Akhir_Semester_1",
        live: "https://himapalabekisar.vercel.app/",
    },
    {
        title: "DeceasedCraft Server",
        description:
            "A custom Minecraft server project built for friends and personal use. Configured and managed game server with custom scripts and settings.",
        tech: ["JavaScript", "Node.js"],
        image: "/images/projects/deceasedcraft.webp",
        github: "https://github.com/ucilmenangis/DeceasedCraft-Server-5.10",
    },
];

export interface TimelineEntry {
    type: "work" | "education";
    title: string;
    organization: string;
    period: string;
    location?: string;
    description: string;
    tags?: string[];
}

export const timeline: TimelineEntry[] = [
    {
        type: "work",
        title: "Full Stack Developer",
        organization: "Yayasan Pustaka Obor Indonesia",
        period: "Dec 2025 – Present",
        location: "Jakarta, Indonesia · Remote",
        description: "Freelance full stack development work.",
        tags: ["Freelance", "Remote"],
    },
    {
        type: "education",
        title: "Student",
        organization: "Politeknik Negeri Jember",
        period: "Aug 2025 – Aug 2028",
        location: "Jember, East Java, Indonesia",
        description: "Currently pursuing studies in technology and software development.",
        tags: ["Current"],
    },
    {
        type: "work",
        title: "Mobile Developer & Web Developer",
        organization: "Primaland",
        period: "Aug 2024 – Jan 2025",
        location: "Bondowoso, East Java, Indonesia · On-site",
        description:
            "Internship developing a YouTube-like application for the company. Worked on web services and mobile application development.",
        tags: ["Internship", "6 months"],
    },
    {
        type: "education",
        title: "Student",
        organization: "SMKN 1 Bondowoso",
        period: "2022 – 2025",
        location: "Bondowoso, East Java, Indonesia",
        description:
            "Graduated with Rank 7. Completed a 5-month internship program. Focused on Mobile Application Development and Web Services.",
        tags: ["Graduated", "Rank 7"],
    },
];

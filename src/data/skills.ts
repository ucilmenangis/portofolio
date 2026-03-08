export interface Skill {
    name: string;
    icon: string; // SkillIcon identifier
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'PHP', icon: 'php' },
            { name: 'JavaScript', icon: 'js' },
            { name: 'Java', icon: 'java' },
            { name: 'Kotlin', icon: 'kotlin' },
            { name: 'Python', icon: 'python' },
            { name: 'Dart', icon: 'dart' },
            { name: 'C++', icon: 'cpp' },
            { name: 'Swift', icon: 'swift' },
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'Laravel', icon: 'laravel' },
            { name: 'React', icon: 'react' },
            { name: 'Flutter', icon: 'flutter' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Bootstrap', icon: 'bootstrap' },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Antigravity', icon: 'bash' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'Git', icon: 'git' },
            { name: 'Vite', icon: 'vite' },
            { name: 'NPM', icon: 'npm' },
            { name: 'Android Studio', icon: 'androidstudio' },
            { name: 'VS Code', icon: 'vscode' },
            { name: 'Figma', icon: 'figma' },
        ],
    },
];

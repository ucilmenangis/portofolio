import { techIcons } from './icons';

export interface Skill {
    name: string;
    icon: string; // SVG string
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'PHP', icon: techIcons.php },
            { name: 'JavaScript', icon: techIcons.javascript },
            { name: 'Java', icon: techIcons.java },
            { name: 'Kotlin', icon: techIcons.kotlin },
            { name: 'Python', icon: techIcons.python },
            { name: 'Dart', icon: techIcons.dart },
            { name: 'C++', icon: techIcons.cpp },
            { name: 'Swift', icon: techIcons.swift },
            { name: 'HTML', icon: techIcons.html },
            { name: 'CSS', icon: techIcons.css },
        ],
    },
    {
        title: 'Frameworks',
        skills: [
            { name: 'Laravel', icon: techIcons.laravel },
            { name: 'React', icon: techIcons.react },
            { name: 'Flutter', icon: techIcons.flutter },
            { name: 'Tailwind CSS', icon: techIcons.tailwindcss },
            { name: 'Bootstrap', icon: techIcons.bootstrap },
            { name: 'Jetpack Compose', icon: techIcons.jetpackcompose },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'MySQL', icon: techIcons.mysql },
            { name: 'Git', icon: techIcons.git },
            { name: 'Vite', icon: techIcons.vite },
            { name: 'NPM', icon: techIcons.npm },
            { name: 'Composer', icon: techIcons.composer },
            { name: 'Android Studio', icon: techIcons.androidstudio },
            { name: 'VS Code', icon: techIcons.vscode },
            { name: 'Figma', icon: techIcons.figma },
            { name: 'Canva', icon: techIcons.canva },
        ],
    },
];

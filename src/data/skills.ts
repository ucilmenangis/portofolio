export const skillNames: Record<string, string> = {
  html: "HTML5",
  css: "CSS3",
  php: "PHP",
  dart: "Dart",
  react: "React",
  tailwind: "Tailwind CSS",
  laravel: "Laravel",
  flutter: "Flutter",
  mysql: "MySQL",
  postgres: "PostgreSQL",
  supabase: "Supabase",
};

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core Stack',
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'Supabase', icon: 'supabase' },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Dart', icon: 'dart' },
      { name: 'Flutter', icon: 'flutter' },
    ],
  },
];

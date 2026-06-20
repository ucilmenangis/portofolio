export interface Certification {
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  description: string;
  credentialUrl?: string;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    title: "Build an AI Agent",
    issuer: "IBM",
    date: "Jun 2026",
    pdfUrl: "/pdf/certificate/IBM_Build_AI_AGENT_2.pdf",
    description: "Demonstrates practical ability in designing and deploying autonomous AI agents. Covers agent architectures, decision-making logic, and API tool integrations.",
    credentialUrl: "https://www.credly.com/badges/120b0362-2347-4bb1-9084-6ffc33e94053/public_url",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "IBM",
    date: "Jun 2026",
    pdfUrl: "/pdf/certificate/IBM_Intro_LLM.pdf",
    description: "Foundational understanding of Large Language Models (LLMs), including core transformer architecture, prompt engineering techniques, and enterprise deployment strategies.",
    credentialUrl: "https://skills.yourlearning.ibm.com/certificate/share/20b3f56e9cewogICJsZWFybmVyQ05VTSIgOiAiNzkzNjY5MlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODkxNSIKfQ05f6e625cd-10",
    credentialId: "ALM-COURSE_4058915",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    pdfUrl: "/pdf/certificate/ANTHROPIC_Claude_Code_101.pdf",
    description: "Mastery of Claude Code CLI. Showcases ability to autonomously perform complex codebase refactoring, debugging, and feature development using Anthropic's agentic tools.",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    pdfUrl: "/pdf/certificate/ANTHROPIC_101.pdf",
    description: "Comprehensive understanding of the Claude AI family. Validates proficiency in crafting effective prompts, managing context windows, and utilizing Claude for reasoning tasks.",
    credentialUrl: "https://verify.skilljar.com/c/syhi99cy7d6t",
  },
  {
    title: "Claude Platform 101",
    issuer: "Anthropic",
    date: "Jun 2026",
    pdfUrl: "/pdf/certificate/ANTHROPIC_Claude_Platfrom_101.pdf",
    description: "Advanced API integration and platform engineering with Anthropic's Console. Covers system prompts, tool use (function calling), and optimizing API workflows for production.",
    credentialUrl: "https://verify.skilljar.com/c/punv2rgm8zhn",
  }
];

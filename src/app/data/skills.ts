export interface SkillCategory {
  id: string;
  title?: string;
  skills: string[];
  accentColor: string;
  bgColor: string;
  borderHover: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Sass", "Bootstrap", "Tailwind CSS"],
    accentColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderHover: "hover:border-purple-500/50",
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Fastify", "TypeScript", "REST APIs", "PostgreSQL", "Drizzle ORM", "Zod"],
    accentColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/50",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Cloud Run", "Cloud SQL", "Cloud Storage", "Pub/Sub", "Docker", "Azure DevOps", "CI/CD"],
    accentColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderHover: "hover:border-green-500/50",
  },
  {
    id: "ai",
    skills: ["OpenAI APIs", "Gemini APIs", "GenAI integrations", "RAG", "AI-powered workflows"],
    accentColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderHover: "hover:border-pink-500/50",
  },
  {
    id: "leadership",
    skills: ["Technical Leadership", "Software Architecture", "Code Review", "Mentoring", "Delivery Planning", "Stakeholder Alignment"],
    accentColor: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderHover: "hover:border-yellow-500/50",
  },
  {
    id: "other",
    skills: ["BrightScript", "SceneGraph", "Roku SDK", "Liferay", "WordPress", "PHP"],
    accentColor: "text-gray-400",
    bgColor: "bg-gray-500/10",
    borderHover: "hover:border-gray-500/50",
  },
];

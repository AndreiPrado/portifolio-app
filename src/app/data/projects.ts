export interface ProjectData {
  id: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  label: string;
  githubUrl?: string;
  projectUrl?: string;
}

export const projects: ProjectData[] = [
  {
    id: "genai-platform",
    skills: ["Node.js", "TypeScript", "Fastify", "React.js", "GCP", "Azure DevOps", "Docker", "OpenAI", "Gemini"],
    gradientFrom: "from-purple-500/30",
    gradientTo: "to-blue-500/30",
    label: "AI",
  },
  {
    id: "directv-roku",
    skills: ["BrightScript", "SceneGraph", "Roku SDK", "Git", "CI/CD"],
    gradientFrom: "from-blue-500/30",
    gradientTo: "to-pink-500/30",
    label: "OTT",
  },
  {
    id: "enterprise-web",
    skills: ["TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Sass", "Bootstrap", "Liferay", "REST APIs"],
    gradientFrom: "from-green-500/30",
    gradientTo: "to-teal-500/30",
    label: "Web",
  },
  {
    id: "zele",
    skills: ["Node.js", "Fastify", "TypeScript", "React", "Vite", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    gradientFrom: "from-orange-500/30",
    gradientTo: "to-yellow-500/30",
    label: "SaaS",
  },
];

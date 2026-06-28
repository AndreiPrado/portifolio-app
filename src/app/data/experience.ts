export interface ExperienceData {
  id: string;
  company?: string;
  skills: string[];
  isActive?: boolean;
}

export const experiences: ExperienceData[] = [
  {
    id: "rd-saude",
    company: "RD Saúde",
    skills: ["Node.js", "TypeScript", "Fastify", "React.js", "GCP", "Azure DevOps", "Docker", "OpenAI", "Gemini"],
    isActive: true,
  },
  {
    id: "directv",
    company: "DIRECTV GO / VRIO",
    skills: ["BrightScript", "SceneGraph", "Roku SDK", "Git", "CI/CD"],
  },
  {
    id: "accenture",
    skills: ["TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Sass", "Bootstrap", "Liferay", "REST APIs"],
  },
  {
    id: "studio-visual",
    company: "Studio Visual",
    skills: ["PHP", "WordPress", "JavaScript", "HTML", "CSS"],
  },
];

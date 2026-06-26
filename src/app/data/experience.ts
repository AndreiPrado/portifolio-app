export interface ExperienceData {
  id: string;
  skills: string[];
  isActive?: boolean;
}

export const experiences: ExperienceData[] = [
  {
    id: "rd-saude",
    skills: ["Node.js", "TypeScript", "Fastify", "React.js", "GCP", "Azure DevOps", "Docker", "OpenAI", "Gemini"],
    isActive: true,
  },
  {
    id: "directv",
    skills: ["BrightScript", "SceneGraph", "Roku SDK", "Git", "CI/CD"],
  },
  {
    id: "accenture",
    skills: ["TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Sass", "Bootstrap", "Liferay", "REST APIs"],
  },
  {
    id: "studio-visual",
    skills: ["PHP", "WordPress", "JavaScript", "HTML", "CSS"],
  },
];

export interface ExperienceData {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  isActive?: boolean;
}

export const experiences: ExperienceData[] = [
  {
    title: "Technical Lead",
    company: "RD Saúde",
    period: "February 2025 – Present",
    description:
      "Leading the technical scope of a GenAI-powered content platform, from architecture design to production deployment. Responsible for backend, frontend, cloud infrastructure, CI/CD pipelines, AI integrations and technical guidance for the development team.",
    highlights: [
      "Designed and implemented scalable backend services using Node.js, TypeScript and Fastify.",
      "Built and maintained frontend features using React.js.",
      "Managed cloud infrastructure and deployment flows on GCP.",
      "Created and maintained CI/CD pipelines using Azure DevOps.",
      "Integrated GenAI APIs such as OpenAI and Gemini into business workflows.",
      "Supported developers through code reviews, mentoring, technical decisions and delivery planning.",
    ],
    skills: ["Node.js", "TypeScript", "Fastify", "React.js", "GCP", "Azure DevOps", "Docker", "OpenAI", "Gemini"],
    isActive: true,
  },
  {
    title: "Roku Chapter Leader / Technical Reference",
    company: "DIRECTV GO / VRIO",
    period: "February 2022 – January 2025",
    description:
      "Led and supported the Roku application across Latin America, ensuring platform stability, release quality and technical alignment across multiple development teams.",
    highlights: [
      "Supported four development teams across Latin America.",
      "Managed code validation, releases and technical roadmap prioritization.",
      "Drove technical alignment with stakeholders and product teams.",
      "Acted as a technical reference for Roku development and platform stability.",
    ],
    skills: ["BrightScript", "SceneGraph", "Roku SDK", "Git", "CI/CD"],
  },
  {
    title: "Full Stack / Frontend Developer",
    company: "Accenture Brasil — Enterprise Projects",
    period: "January 2018 – January 2022",
    description:
      "Worked on enterprise web applications, internal tools, design systems and platform migrations for large-scale clients such as SKY, Monsanto and VRIO.",
    highlights: [
      "Built responsive web applications and internal tools.",
      "Integrated RESTful APIs across multiple systems.",
      "Contributed to design systems and reusable UI components.",
      "Performed code reviews and supported junior developers.",
      "Improved accessibility and maintainability in legacy platforms.",
    ],
    skills: ["TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Sass", "Bootstrap", "Liferay", "REST APIs"],
  },
  {
    title: "Web Developer",
    company: "Studio Visual",
    period: "September 2015 – December 2017",
    description:
      "Developed websites and web applications using PHP, WordPress, HTML, CSS and JavaScript, from project conception to final delivery.",
    highlights: [
      "Created and customized WordPress themes.",
      "Built user-friendly interfaces for content management.",
      "Developed reusable components for client websites.",
    ],
    skills: ["PHP", "WordPress", "JavaScript", "HTML", "CSS"],
  },
];

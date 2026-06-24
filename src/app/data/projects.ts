export interface ProjectData {
  title: string;
  type: string;
  description: string;
  role: string;
  highlights: string[];
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  label: string;
  githubUrl?: string;
  projectUrl?: string;
}

export const projects: ProjectData[] = [
  {
    title: "GenAI Content Platform",
    type: "Enterprise / AI / Cloud",
    description:
      "A GenAI-powered platform designed to support content creation workflows, integrating AI APIs, backend services, frontend interfaces and cloud infrastructure.",
    role: "Technical Lead",
    highlights: [
      "Architecture definition",
      "Backend development with Node.js, TypeScript and Fastify",
      "Frontend development with React.js",
      "GCP infrastructure and Cloud Run deployments",
      "CI/CD pipelines with Azure DevOps",
      "GenAI API integrations (OpenAI, Gemini)",
      "Technical leadership and code quality",
    ],
    skills: ["Node.js", "TypeScript", "Fastify", "React.js", "GCP", "Azure DevOps", "Docker", "OpenAI", "Gemini"],
    gradientFrom: "from-purple-500/30",
    gradientTo: "to-blue-500/30",
    label: "AI",
  },
  {
    title: "DIRECTV GO Roku Platform",
    type: "Streaming / OTT / Roku",
    description:
      "Roku streaming application used across Latin America, focused on stability, performance, release quality and roadmap execution.",
    role: "Roku Chapter Leader / Technical Reference",
    highlights: [
      "Technical leadership across multiple squads",
      "Code validation and release support",
      "Stakeholder alignment and roadmap prioritization",
      "Platform stability across Latin America",
    ],
    skills: ["BrightScript", "SceneGraph", "Roku SDK", "Git", "CI/CD"],
    gradientFrom: "from-blue-500/30",
    gradientTo: "to-pink-500/30",
    label: "OTT",
  },
  {
    title: "Enterprise Web Platforms",
    type: "Web / Frontend / Design System",
    description:
      "Corporate web applications, internal tools and platform migrations focused on reusable components, REST API integrations, responsive interfaces and maintainable code.",
    role: "Frontend / Full Stack Developer",
    highlights: [
      "Responsive web applications and internal tools for SKY, Monsanto and VRIO",
      "REST API integrations across multiple systems",
      "Design systems and reusable UI components",
      "Code reviews and developer support",
    ],
    skills: ["TypeScript", "JavaScript", "jQuery", "HTML", "CSS", "Sass", "Bootstrap", "Liferay", "REST APIs"],
    gradientFrom: "from-green-500/30",
    gradientTo: "to-teal-500/30",
    label: "Web",
  },
  {
    title: "Zele — Church Member Platform",
    type: "Personal Project / Full Stack",
    description:
      "A personal full stack project to manage church members, approvals, roles and digital member cards, built from scratch as product owner and sole developer.",
    role: "Full Stack Developer / Product Owner",
    highlights: [
      "Backend architecture and database modeling",
      "Authentication and admin approval flow",
      "Frontend implementation with React and Tailwind CSS",
      "Deployment on Railway with PostgreSQL",
    ],
    skills: ["Node.js", "Fastify", "TypeScript", "React", "Vite", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    gradientFrom: "from-orange-500/30",
    gradientTo: "to-yellow-500/30",
    label: "SaaS",
  },
];

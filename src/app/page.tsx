import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import ProjectCard from "./components/ProjectCard";
import { siteContent } from "./data/content";
import { projects } from "./data/projects";

const { hero } = siteContent;
const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center lg:text-left relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="lg:w-1/2">
            <ScrollReveal delay={100} direction="up" distance="30px">
              <p className="text-purple-400 font-medium mb-3 text-lg">{hero.greeting}</p>
              <h1 className="heading-xl mb-6">
                <span className="text-gradient">{hero.titleLine1}</span>{" "}
                <span className="text-white">{hero.titleLine2}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="up" distance="30px">
              <p className="body-text text-gray-300 mb-2 max-w-xl font-medium">{hero.subtitle}</p>
              <p className="body-text text-gray-400 mb-8 max-w-xl">{hero.body}</p>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="up" distance="30px">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projetos" className="button-primary">
                  {hero.cta.primary}
                </Link>
                <Link href="/contato" className="button-secondary">
                  {hero.cta.secondary}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="up" distance="30px">
              <div className="mt-12 flex items-center gap-8">
                {hero.stats.map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 relative">
            <ScrollReveal delay={300} direction="right" distance="50px">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float m-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] animate-float flex items-center justify-center bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 rounded-full">
                    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                      {/* Helmet */}
                      <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <div className="w-[140px] h-[100px] rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-pink-400/30 border border-white/20"></div>
                      </div>
                      {/* Body */}
                      <div className="absolute top-[120px] w-[160px] h-[180px] bg-gradient-to-b from-white/30 to-gray-500/30 rounded-2xl border border-white/20">
                        <div className="absolute top-[20px] left-[10px] w-[140px] h-[80px] bg-gray-800/40 rounded-lg border border-gray-600/30"></div>
                      </div>
                      {/* Arms */}
                      <div className="absolute top-[140px] left-[10px] w-[30px] h-[100px] bg-white/20 rounded-full border border-white/10 rotate-[-20deg]"></div>
                      <div className="absolute top-[140px] right-[10px] w-[30px] h-[100px] bg-white/20 rounded-full border border-white/10 rotate-[20deg]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-12 -right-10 w-20 h-20 rounded-full bg-purple-500/20 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 left-12 w-16 h-16 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">{hero.scrollLabel}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-500"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="text-center mb-16">
          <ScrollReveal delay={200} direction="up" distance="40px">
            <h2 className="heading-lg mb-6 text-gradient">What I Build</h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto">
              From backend APIs and cloud infrastructure to frontend interfaces and AI-powered workflows —
              I work across the full stack with a focus on architecture, delivery and team enablement.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-4">
          <ScrollReveal delay={300} direction="up" distance="30px">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="card p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Frontend</h4>
                <p className="text-gray-300 text-sm">React.js, TypeScript, JavaScript, HTML5, CSS, Sass, Tailwind CSS, Bootstrap</p>
              </div>

              <div className="card p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3Z"></path>
                    <path d="M10 17v-4"></path>
                    <path d="M14 17v-7"></path>
                    <path d="M5 10h14"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Backend & APIs</h4>
                <p className="text-gray-300 text-sm">Node.js, Fastify, TypeScript, REST APIs, PostgreSQL, Drizzle ORM</p>
              </div>

              <div className="card p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="m3.5 8.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 1.2a2 2 0 0 0-2 0L3.5 5.3a2 2 0 0 0 0 3.4Z"></path>
                    <path d="m3.5 14.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 7.2a2 2 0 0 0-2 0L3.5 11.3a2 2 0 0 0 0 3.4Z"></path>
                    <path d="m3.5 20.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 13.2a2 2 0 0 0-2 0l-7.5 4.1a2 2 0 0 0 0 3.4Z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Cloud & DevOps</h4>
                <p className="text-gray-300 text-sm">GCP, Cloud Run, Cloud SQL, Docker, Azure DevOps, CI/CD</p>
              </div>

              <div className="card p-6 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M12 12 2.1 9.7"></path>
                    <path d="M12 12V2"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">AI & GenAI</h4>
                <p className="text-gray-300 text-sm">OpenAI APIs, Gemini APIs, GenAI integrations, RAG, AI-powered workflows</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href="/sobre" className="button-secondary">
                View full tech stack
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-12 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative">
        <div className="relative z-10">
          <ScrollReveal delay={100} direction="up" distance="30px">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4 text-gradient">Featured Projects</h2>
              <p className="body-text text-gray-300 max-w-3xl mx-auto">
                A selection of enterprise projects, platform work and personal initiatives.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={200 + index * 100} direction="up" distance="30px">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                  label={project.label}
                  tags={project.skills.slice(0, 4)}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500} direction="up" distance="30px">
            <div className="text-center mt-12">
              <Link href="/projetos" className="button-primary">
                View all projects
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-16 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </section>
    </div>
  );
}

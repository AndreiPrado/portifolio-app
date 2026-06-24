import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ParallaxSection from "../components/ParallaxSection";
import DirectionalParallax from "../components/DirectionalParallax";
import { projects } from "../data/projects";

const parallaxSpeeds = [5, 7, 6, 4];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <DirectionalParallax speed={0.2}>
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          </DirectionalParallax>
        </div>
        <div className="relative z-10">
          <DirectionalParallax speed={3}>
            <h1 className="heading-lg text-center mb-6 text-gradient">Projects</h1>
            <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-4">
              Enterprise platforms, streaming applications, personal projects and everything in between.
              10+ years of building software across different domains and scales.
            </p>
            <p className="body-text text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
              Note: most enterprise projects are confidential or client-owned. Contact me to discuss specific cases.
            </p>
          </DirectionalParallax>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-20 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <ParallaxSection speed={0.1}>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          </ParallaxSection>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <DirectionalParallax key={project.title} speed={parallaxSpeeds[index] ?? 5}>
              <div className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                  label={project.label}
                  tags={project.skills}
                  projectUrl={project.projectUrl}
                  githubUrl={project.githubUrl}
                />
                {/* Role badge */}
                <div className="mt-2 px-1">
                  <span className="text-xs text-gray-500">Role: </span>
                  <span className="text-xs text-gray-400">{project.role}</span>
                </div>
                {/* Highlights */}
                <ul className="mt-3 px-1 space-y-1">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </DirectionalParallax>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxSection speed={0.15}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
          </ParallaxSection>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
          <p className="body-text text-gray-300 mb-6 max-w-2xl mx-auto">
            Let&apos;s talk about how I can help turn your idea into a well-architected, production-ready solution.
          </p>
          <div className="flex justify-center">
            <Link href="/contato" className="button-primary">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

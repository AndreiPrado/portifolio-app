import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ProjectCard from "../../components/ProjectCard";
import ParallaxSection from "../../components/ParallaxSection";
import DirectionalParallax from "../../components/DirectionalParallax";
import { projects } from "../../data/projects";

export default async function Projects() {
  const t = await getTranslations("Projects");

  const items = projects.map((p) => ({
    ...p,
    title: t(`items.${p.id}.title`),
    description: t(`items.${p.id}.description`),
    role: t(`items.${p.id}.role`),
    highlights: t.raw(`items.${p.id}.highlights`) as string[],
  }));

  return (
    <div className="container mx-auto px-4">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <DirectionalParallax speed={0.2}>
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          </DirectionalParallax>
        </div>
        <div className="relative z-10">
            <h1 className="heading-lg text-center mb-6 text-gradient">{t("title")}</h1>
            <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
              {t("subtitle")}
            </p>
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

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {items.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              gradientFrom={project.gradientFrom}
              gradientTo={project.gradientTo}
              label={project.label}
              tags={project.skills}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
              role={project.role}
              highlights={project.highlights}
              roleLabel={t("roleLabel")}
            />
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
          <h3 className="text-2xl font-bold text-white mb-4">{t("cta.title")}</h3>
          <p className="body-text text-gray-300 mb-6 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="button-primary">
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import SkillsCarousel from "../components/SkillsCarousel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default async function Home() {
  const t = await getTranslations("Home");
  const tProjects = await getTranslations("Projects");

  const featuredProjects = projects.slice(0, 3).map((p) => ({
    ...p,
    title: tProjects(`items.${p.id}.title`),
    description: tProjects(`items.${p.id}.description`),
  }));

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center lg:text-left relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="lg:w-1/2">
            <ScrollReveal delay={100} direction="up" distance="30px">
              <p className="text-purple-400 font-medium mb-3 text-lg">
                {t("greeting")}{" "}
                <span className="text-white font-bold">Andrei Prado</span>
              </p>
              <h1 className="heading-xl mb-6">
                <span className="text-gradient">Tech Lead &</span>{" "}
                <span className="text-white">{t("titleLine2")}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="up" distance="30px">
              <p className="body-text text-gray-300 mb-2 max-w-xl font-medium">Node.js · React · TypeScript · GCP · GenAI</p>
              <p className="body-text text-gray-400 mb-8 max-w-xl">{t("body")}</p>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="up" distance="30px">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="button-primary">
                  {t("ctaWork")}
                </Link>
                <Link href="/contact" className="button-secondary">
                  {t("ctaContact")}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="up" distance="30px">
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-white"><AnimatedCounter target={10} suffix="+" /></h3>
                  <p className="text-gray-400 text-sm">{t("stats.experienceLabel")}</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white"><AnimatedCounter target={15} suffix="+" /></h3>
                  <p className="text-gray-400 text-sm">{t("stats.projectsLabel")}</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white"><AnimatedCounter target={3} /></h3>
                  <p className="text-gray-400 text-sm">{t("stats.teamsLabel")}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 relative">
            <ScrollReveal delay={300} direction="right" distance="50px">
              <div className="relative w-[300px] h-[380px] md:w-[400px] md:h-[480px] m-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
                <Image
                  src="/profile_picture_updated.png"
                  alt="Andrei Prado"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="text-center mb-16">
          <ScrollReveal delay={200} direction="up" distance="40px">
            <h2 className="heading-lg mb-6 text-gradient">{t("whatIBuild")}</h2>
          </ScrollReveal>
        </div>

        <div className="mt-4">
          <ScrollReveal delay={300} direction="up" distance="30px">
            <SkillsCarousel
              titles={[
                "Frontend",
                t("skillCards.backend.title"),
                "Cloud & DevOps",
                t("skillCards.ai.title"),
              ]}
            />
            <div className="text-center mt-10">
              <Link href="/about#tech-stack" className="button-secondary">
                {t("viewFullStack")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="pt-24 relative">
        <div className="relative z-10">
          <ScrollReveal delay={100} direction="up" distance="30px">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4 text-gradient">{t("featuredProjects")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={200 + index * 100} direction="up" distance="30px">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
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
              <Link href="/projects" className="button-primary">
                {t("viewAllProjects")}
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

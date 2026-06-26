import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { skillCategories } from "../../data/skills";

export default async function About() {
  const t = await getTranslations("About");
  const highlights = t.raw("highlights") as string[];
  const languages = t.raw("languages") as { name: string; level: string }[];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="heading-lg text-center mb-6 text-gradient">{t("title")}</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="mb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1">
              <div className="rounded-lg overflow-hidden aspect-square">
                <Image
                  src="/profile_picture.jpeg"
                  alt="Andrei Prado"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="heading-md mb-6 text-white">
              Hi, I&apos;m{" "}
              <span className="text-purple-400">Andrei Prado</span>
            </h2>

            <p className="body-text mb-4 text-gray-300">{t("paragraph1")}</p>
            <p className="body-text mb-4 text-gray-300">{t("paragraph2")}</p>
            <p className="body-text mb-4 text-gray-300">{t("paragraph3")}</p>
            <p className="body-text mb-4 text-gray-300">{t("paragraph4")}</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/projects" className="button-primary">
                View Projects
              </Link>
              <Link href="/experience" className="button-secondary">
                See Experience
              </Link>
              <a
                href="https://www.linkedin.com/in/andrei-prado"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-white">{t("techStack")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`card p-6 transition-all duration-300 ${category.borderHover}`}
            >
              <h3 className={`text-lg font-bold mb-4 ${category.accentColor}`}>
                {category.id === "frontend" && "Frontend"}
                {category.id === "backend" && "Backend"}
                {category.id === "cloud" && "Cloud & DevOps"}
                {category.id === "ai" && "AI & GenAI"}
                {category.id === "leadership" && "Leadership"}
                {category.id === "other" && "Other"}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${category.bgColor.replace("10", "60")}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="mb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-white">{t("leadershipTitle")}</h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto">
              {t("leadershipSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="card p-4 text-center hover:border-purple-500/40 transition-all duration-300"
              >
                <span className="text-gray-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-white">{t("educationTitle")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Education</h3>
            <h4 className="text-purple-400 font-semibold mb-1">{t("degree")}</h4>
            <p className="text-gray-300 text-sm">{t("university")}</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Languages</h3>
            {languages.map((lang) => (
              <p key={lang.name} className="text-gray-300 text-sm mb-2">
                <span className="text-white font-medium">{lang.name}</span>
                <span className="text-gray-400"> — {lang.level}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-16">
        <div className="card p-8 max-w-3xl mx-auto">
          <h2 className="heading-md mb-4">Let&apos;s work together</h2>
          <p className="body-text text-gray-300 mb-8">
            Open to conversations about technical leadership, full stack engineering, cloud solutions and remote opportunities.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="button-primary">
              {t("ctaContact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h1 className="heading-lg text-center mb-6 text-gradient">Professional Experience</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            10+ years building software across technical support, web development, streaming platforms,
            enterprise applications, cloud infrastructure and technical leadership.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title + exp.company}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              highlights={exp.highlights}
              skills={exp.skills}
              isActive={exp.isActive}
            />
          ))}

          {/* Origin story — IT Support */}
          <div className="card relative pl-8 opacity-70">
            <div className="absolute left-[-10px] top-6 w-5 h-5 rounded-full border-4 border-gray-600 bg-gray-800"></div>
            <h3 className="text-lg font-bold text-white">IT Support Technician</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 font-medium">Metrobyte</span>
              <span className="text-gray-500 text-sm">February 2014 – September 2015</span>
            </div>
            <p className="text-gray-400 text-sm">
              Started in technical support, handling hardware, software, Windows Server environments, user management and
              troubleshooting. This foundation shaped an analytical mindset and a practical approach to problem solving.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for a Technical Lead?</h3>
          <p className="body-text text-gray-300 mb-6 max-w-2xl mx-auto">
            Let&apos;s talk about how I can help your team build reliable, scalable and well-engineered products.
          </p>
          <div className="flex justify-center">
            <Link href="/contato" className="button-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

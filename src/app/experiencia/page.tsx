import Link from 'next/link';
import { ExperienceCard } from '../components/ExperienceCard';

export default function Experiencia() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="relative z-10">
          <h1 className="heading-lg text-center mb-6 text-gradient">Experiência Profissional</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Conheça minha trajetória e experiências profissionais na área de desenvolvimento.
          </p>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20 relative">
        <div className="max-w-4xl mx-auto">
          {/* Current Job */}
          <ExperienceCard
            title="Desenvolvedor Full Stack Senior"
            company="TechSpace"
            period="2022 - Presente"
            description="Lidero o desenvolvimento de aplicações web e mobile utilizando React, Next.js e Node.js. Responsável pela arquitetura de sistemas, implementação de CI/CD e mentoria de desenvolvedores júnior."
            technologies={["React", "Next.js", "TypeScript", "Node.js", "MongoDB"]}
            isCurrent={true}
          />
          
          {/* Previous Job 1 */}
          <ExperienceCard
            title="Desenvolvedor Frontend"
            company="WebSolutions"
            period="2020 - 2022"
            description="Desenvolvimento de interfaces modernas e responsivas para aplicações web. Implementação de features complexas utilizando React e Vue.js. Participação em projetos para grandes clientes do setor financeiro."
            technologies={["React", "Vue.js", "Sass", "Redux", "GraphQL"]}
            isCurrent={false}
          />
          
          {/* Previous Job 2 */}
          <ExperienceCard
            title="Desenvolvedor Web"
            company="Digital Agency"
            period="2018 - 2020"
            description="Desenvolvimento de sites e landing pages para clientes de diversos setores. Implementação de sistemas de CMS e integração com APIs de pagamento e redes sociais."
            technologies={["HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"]}
            isCurrent={false}
          />
          
          {/* Internship */}
          <ExperienceCard
            title="Estágio em Desenvolvimento Web"
            company="StartupLab"
            period="2017 - 2018"
            description="Primeiro contato profissional com desenvolvimento web, participando da criação de funcionalidades para aplicativo mobile e website da empresa."
            technologies={["JavaScript", "Angular", "Java", "Bootstrap"]}
            isCurrent={false}
          />
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-white">Habilidades Técnicas</h2>
          <p className="body-text text-gray-300 max-w-3xl mx-auto">
            Tecnologias e linguagens com as quais tenho experiência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Frontend */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">React / Next.js</li>
              <li className="text-gray-300">Vue.js / Nuxt</li>
              <li className="text-gray-300">TypeScript</li>
              <li className="text-gray-300">Tailwind CSS</li>
              <li className="text-gray-300">SASS / CSS-in-JS</li>
              <li className="text-gray-300">Redux / Context API</li>
            </ul>
          </div>
          
          {/* Backend */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Backend</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Node.js / Express</li>
              <li className="text-gray-300">NestJS</li>
              <li className="text-gray-300">Python / Django</li>
              <li className="text-gray-300">GraphQL</li>
              <li className="text-gray-300">REST APIs</li>
              <li className="text-gray-300">Serverless</li>
            </ul>
          </div>
          
          {/* Databases */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Bancos de Dados</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">MongoDB</li>
              <li className="text-gray-300">PostgreSQL</li>
              <li className="text-gray-300">MySQL</li>
              <li className="text-gray-300">Redis</li>
              <li className="text-gray-300">Firebase</li>
              <li className="text-gray-300">Supabase</li>
            </ul>
          </div>
          
          {/* DevOps */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">DevOps</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Git / GitHub</li>
              <li className="text-gray-300">Docker</li>
              <li className="text-gray-300">CI/CD (GitHub Actions)</li>
              <li className="text-gray-300">AWS / Vercel / Netlify</li>
              <li className="text-gray-300">Monitoramento</li>
              <li className="text-gray-300">Testing (Jest, Cypress)</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="text-center">
        <Link href="/contato" className="button-primary">
          Entre em contato
        </Link>
      </section>
    </div>
  );
}

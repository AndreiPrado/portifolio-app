import Link from 'next/link';
import ExperienceCard from '../components/ExperienceCard';

export default function Experiencia() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Elementos decorativos estáticos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        {/* Conteúdo estático */}
        <div className="relative z-10">
          <h1 className="heading-lg text-center mb-6 text-gradient">Experiência Profissional</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Conheça minha trajetória e experiências profissionais na área de desenvolvimento.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20 relative overflow-hidden">
        {/* Elementos decorativos estáticos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Accenture Brasil - RD Saúde */}
          <ExperienceCard
            title="Digital Business Integration Consultant / Technical Lead"
            company="Accenture Brasil - RD Saúde"
            period="Fevereiro 2021 - Presente"
            description="Lidero todo o escopo técnico, desde o design de arquitetura até implantação em produção. Defino e implemento arquiteturas escaláveis e de alta performance. Gerencio infraestrutura na nuvem GCP e pipelines CI/CD no Azure DevOps. Desenvolvo tanto backend (Node.js, Fastify) quanto frontend (React.js). Integro APIs com GenAI (OpenAI, Gemini) para entregar soluções inteligentes. Apoio e mentoro desenvolvedores, desbloqueio tarefas e garanto a qualidade do código."
            skills={["Node.js", "TypeScript", "Fastify", "React.js", "GCP", "Azure DevOps", "Docker"]}
            isActive={true}
          />

          {/* Accenture Brasil - DirectvGo */}
          <ExperienceCard
            title="Digital Business Integration Analyst"
            company="Accenture Brasil - DirectvGo"
            period="Janeiro 2018 - Janeiro 2021"
            description="Atuei como desenvolvedor sênior e líder técnico no time de migração Vrio, responsável por todas as entregas do projeto. Estruturei a base de código e produzi documentação abrangente. Integrei APIs RESTful para permitir comunicação eficiente entre sistemas. No time Roku, liderei a aplicação para América Latina, garantindo estabilidade e qualidade de entrega. Gerenciei validação de código, releases e priorizei o roadmap de desenvolvimento com base nas necessidades do negócio."
            skills={["TypeScript", "JavaScript", "jQuery", "RESTful APIs", "HTML/SASS", "BrightScript", "Git"]}
          />

          <ExperienceCard
            title="Web Developer"
            company="Studio Visual"
            period="Setembro 2015 - Dezembro 2017"
            description="Desenvolvimento de websites e aplicações web com foco em front-end e back-end usando PHP, HTML, CSS e JavaScript. Criação e personalização de temas WordPress, desde a concepção até a entrega final. Implementação de interfaces amigáveis para facilitar o uso e gerenciamento de conteúdo na plataforma."
            skills={["PHP", "WordPress", "JavaScript", "HTML/CSS"]}
          />

          <ExperienceCard
            title="IT Support Technician"
            company="Metrobyte"
            period="Fevereiro 2014 - Setembro 2015"
            description="Suporte técnico para clientes, resolvendo problemas de hardware e software em computadores e servidores. Manutenção e gerenciamento de sistemas de domínio em plataformas Windows, incluindo criação de usuários e gerenciamento de permissões. Configuração e aplicação de GPOs e gerenciamento de recursos para usuários em ambientes corporativos."
            skills={["Windows Server", "Suporte Técnico", "Hardware", "Software", "GPO"]}
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
              <li className="text-gray-300">JavaScript</li>
              <li className="text-gray-300">TypeScript</li>
              <li className="text-gray-300">React.js</li>
              <li className="text-gray-300">jQuery</li>
              <li className="text-gray-300">HTML5</li>
              <li className="text-gray-300">CSS / SASS</li>
              <li className="text-gray-300">Bootstrap</li>
            </ul>
          </div>

          {/* Backend & APIs */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Backend & APIs</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Node.js</li>
              <li className="text-gray-300">Fastify</li>
              <li className="text-gray-300">REST APIs</li>
              <li className="text-gray-300">PHP</li>
              <li className="text-gray-300">BrightScript (Roku)</li>
            </ul>
          </div>

          {/* Plataformas */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Plataformas</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Liferay</li>
              <li className="text-gray-300">WordPress</li>
              <li className="text-gray-300">Roku Platform</li>
              <li className="text-gray-300">Streaming Services</li>
            </ul>
          </div>

          {/* DevOps & Cloud */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">DevOps & Cloud</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">GCP (Google Cloud)</li>
              <li className="text-gray-300">Azure DevOps</li>
              <li className="text-gray-300">CI/CD Pipelines</li>
              <li className="text-gray-300">Docker</li>
              <li className="text-gray-300">Git</li>
              <li className="text-gray-300">ESLint</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center relative overflow-hidden">
        {/* Elementos decorativos estáticos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        {/* Conteúdo estático */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Precisa de um Technical Lead?</h3>
          <p className="body-text text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar seu time a entregar projetos escaláveis e de alta qualidade.
          </p>
          <div className="flex justify-center">
            <Link href="/contato" className="button-primary">
              Vamos conversar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

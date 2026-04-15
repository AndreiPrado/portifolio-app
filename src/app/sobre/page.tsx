import Link from 'next/link';
import Image from 'next/image';

export default function Sobre() {
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
          <h1 className="heading-lg text-center mb-6 text-gradient">Sobre Mim</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Profissional de tecnologia com mais de 10 anos de experiência, combinando forte expertise técnica
            em desenvolvimento web com sólidas habilidades de liderança.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="mb-20 relative overflow-hidden">
        {/* Elementos decorativos estáticos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        {/* Biografia */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8">
          {/* Foto */}
          <div className="md:w-1/3">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1">
              <div className="bg-space-black rounded-lg overflow-hidden aspect-square">
                {/* Foto do perfil */}
                <Image
                  src="/profile_picture.jpg"
                  alt="Foto de perfil"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="heading-md mb-6 text-white">Olá, eu sou <span className="text-purple-400">Andrei Prado</span></h2>

            <p className="body-text mb-4">
              Profissional de tecnologia com mais de 10 anos de experiência, combinando forte expertise técnica em desenvolvimento web
              com sólidas habilidades de liderança. Especializado em JavaScript, TypeScript, React.js, Node.js e plataformas enterprise como Liferay.
            </p>

            <p className="body-text mb-4">
              Iniciei minha carreira no suporte técnico para hardware, software e servidores, onde desenvolvi habilidades fundamentais
              em resolução de problemas, análise e atendimento ao cliente. Em seguida, migrei para o desenvolvimento web,
              trabalhando tanto como desenvolvedor front-end quanto back-end com tecnologias como PHP, JavaScript, HTML, CSS e WordPress.
            </p>

            <p className="body-text mb-4">
              Ao longo dos anos, participei de diversos projetos desde a concepção até a entrega, com foco em soluções eficientes,
              escaláveis e centradas no usuário. Minha carreira progrediu para projetos enterprise em larga escala, incluindo
              construção de sistemas de design e trabalho com plataformas como Liferay. Tornei-me referência técnica dentro das
              equipes de desenvolvimento, liderando entregas, gerenciando tarefas e garantindo altos padrões de qualidade em
              ambientes colaborativos.
            </p>

            <p className="body-text mb-4">
              Posteriormente, especializei-me em plataformas de streaming, liderando o desenvolvimento Roku para toda a América Latina
              como Chapter Leader. Fui responsável por garantir a estabilidade da plataforma, supervisionar releases, apoiar múltiplas
              squads e impulsionar o alinhamento técnico com stakeholders.
            </p>

            <p className="body-text text-gray-300 mb-8">
              Atualmente, atuo como Technical Lead na RD Saúde, supervisionando todo o escopo técnico - desde design de arquitetura
              até infraestrutura em nuvem (GCP) e pipelines CI/CD (Azure DevOps). Lidero o desenvolvimento backend e frontend
              com Node.js (Fastify) e React, e integro soluções baseadas em IA (OpenAI, Gemini) para impulsionar a inovação.
              Trabalho em estreita colaboração com a equipe para garantir qualidade de código, desbloquear desafios e entregar
              sistemas escaláveis e de alta performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/projetos" className="button-primary">
                Ver Projetos
              </Link>

              <Link href="/experiencia" className="button-secondary">
                Minha Experiência
              </Link>

              <a href="https://www.linkedin.com/in/andrei-prado" target="_blank" rel="noopener noreferrer" className="button-secondary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>

              <Link href="/cv.pdf" className="button-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Download CV
              </Link>
            </div>
          </div>
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
              <li className="text-gray-300">HTML/CSS/SASS</li>
              <li className="text-gray-300">Bootstrap</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Backend</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Node.js</li>
              <li className="text-gray-300">Fastify</li>
              <li className="text-gray-300">PHP</li>
              <li className="text-gray-300">RESTful APIs</li>
              <li className="text-gray-300">WordPress</li>
            </ul>
          </div>

          {/* Platforms & DevOps */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Plataformas & DevOps</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Liferay</li>
              <li className="text-gray-300">GCP (Google Cloud)</li>
              <li className="text-gray-300">Azure DevOps</li>
              <li className="text-gray-300">Docker</li>
              <li className="text-gray-300">CI/CD Pipelines</li>
            </ul>
          </div>

          {/* Skills & Others */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Soft Skills & Outros</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Comunicação</li>
              <li className="text-gray-300">Liderança Técnica</li>
              <li className="text-gray-300">Trello</li>
              <li className="text-gray-300">Jira</li>
              <li className="text-gray-300">Inglês & Espanhol</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-white">Formação & Certificações</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Formação Acadêmica</h3>

            <div className="mb-6">
              <h4 className="text-purple-400 font-semibold">Tecnólogo em Análise e Desenvolvimento de Sistemas</h4>
              <p className="text-gray-300">Universidade Cidade de São Paulo | 2013 - 2014</p>
              <p className="text-gray-400 text-sm mt-2">
                Foco em desenvolvimento de software e tecnologia da informação.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-4">Certificações</h3>

            <div className="mb-6">
              <h4 className="text-purple-400 font-semibold">NLW Connect - React</h4>
              <p className="text-gray-300">Rocketseat</p>
            </div>

            <div className="mb-6">
              <h4 className="text-purple-400 font-semibold">Idiomas</h4>
              <p className="text-gray-300 mb-1">Inglês (Fluente Profissional)</p>
              <p className="text-gray-300 mb-1">Português (Nativo)</p>
              <p className="text-gray-300">Espanhol (Profissional)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-16">
        <div className="card p-8 max-w-3xl mx-auto">
          <h2 className="heading-md mb-4">Vamos trabalhar juntos?</h2>
          <p className="body-text mb-8">
            Estou sempre aberto a novos projetos e oportunidades de colaboração.
            Se você procura um desenvolvedor web apaixonado para seu próximo projeto, entre em contato!
          </p>
          <div className="flex justify-center">
            <Link href="/contato" className="button-primary">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import ParallaxSection from '../components/ParallaxSection';
import DirectionalParallax from '../components/DirectionalParallax';

export default function Projetos() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Elementos decorativos com parallax */}
        <div className="absolute inset-0 pointer-events-none">
          <DirectionalParallax speed={0.2}>
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          </DirectionalParallax>
        </div>
        
        {/* Conteúdo estático */}
        <div className="relative z-10">
          <DirectionalParallax speed={3}>
            <h1 className="heading-lg text-center mb-6 text-gradient">Meus Projetos</h1>
            <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
              Uma seleção dos meus projetos mais recentes e relevantes.
            </p>
          </DirectionalParallax>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-20 relative">
        {/* Elementos decorativos com parallax */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <ParallaxSection speed={0.1}>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          </ParallaxSection>
        </div>
        
        {/* Conteúdo dos projetos */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto 1 */}
          <DirectionalParallax speed={5}>
            <ProjectCard
              title="App de Finanças Pessoais"
              description="Um aplicativo web para controle financeiro pessoal com dashboard interativo e relatórios detalhados."
              imageUrl="/images/placeholder.jpg"
              tags={["React", "TypeScript", "Node.js"]}
              projectUrl="/projetos/financas"
              githubUrl="#"
            />
          </DirectionalParallax>
          
          {/* Projeto 2 */}
          <DirectionalParallax speed={7}>
            <ProjectCard
              title="E-commerce de Tecnologia"
              description="Uma loja virtual completa para produtos de tecnologia com integração de pagamentos e gestão de estoque."
              imageUrl="/images/placeholder.jpg"
              tags={["Next.js", "Redux", "MongoDB"]}
              projectUrl="/projetos/ecommerce"
              githubUrl="#"
            />
          </DirectionalParallax>
          
          {/* Projeto 3 */}
          <DirectionalParallax speed={6}>
            <ProjectCard
              title="Dashboard Analítico"
              description="Sistema de dashboard para visualização de dados com gráficos interativos e relatórios personalizados."
              imageUrl="/images/placeholder.jpg"
              tags={["Vue.js", "D3.js", "Express"]}
              projectUrl="/projetos/dashboard"
              githubUrl="#"
            />
          </DirectionalParallax>
          
          {/* Projeto 4 */}
          <DirectionalParallax speed={4}>
            <ProjectCard
              title="Aplicativo de Agenda"
              description="Um aplicativo mobile para gerenciamento de tarefas e compromissos com notificações e sincronização na nuvem."
              imageUrl="/images/placeholder.jpg"
              tags={["React Native", "Firebase", "Redux"]}
              projectUrl="/projetos/agenda"
              githubUrl="#"
            />
          </DirectionalParallax>
          
          {/* Projeto 5 */}
          <DirectionalParallax speed={8}>
            <ProjectCard
              title="Sistema de Gestão"
              description="Software para gestão empresarial com módulos de CRM, RH, finanças e estoque integrados."
              imageUrl="/images/placeholder.jpg"
              tags={["Angular", "Node.js", "PostgreSQL"]}
              projectUrl="/projetos/sistema"
              githubUrl="#"
            />
          </DirectionalParallax>
          
          {/* Projeto 6 */}
          <DirectionalParallax speed={5}>
            <ProjectCard
              title="Portfolio Pessoal"
              description="Site portfolio responsivo com tema espacial desenvolvido com Next.js e Tailwind CSS."
              imageUrl="/images/placeholder.jpg"
              tags={["Next.js", "Tailwind CSS", "React"]}
              projectUrl="/projetos/portfolio"
              githubUrl="#"
            />
          </DirectionalParallax>
        </div>
      </section>
      
      {/* Open Source Section */}
      <section className="mb-20 relative overflow-hidden">
        {/* Elementos decorativos com parallax */}
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxSection speed={0.2}>
            <div className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          </ParallaxSection>
        </div>
        
        {/* Conteúdo estático */}
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4 text-white">Projetos Open Source</h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto">
              Contribuições para a comunidade de desenvolvedores.
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Open Source 1 */}
          <div className="card p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-2">React Constellation</h3>
            <p className="text-gray-300 mb-4 flex-grow">
              Uma biblioteca de componentes React para criar visualizações interativas em estilo de constelação. Ideal para apresentações de dados relacionados e gráficos de nós.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">React</span>
              <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">D3.js</span>
              <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">npm package</span>
            </div>
            <a href="#" className="button-secondary inline-flex items-center gap-2 self-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Ver no GitHub
            </a>
          </div>
          
          {/* Open Source 2 */}
          <div className="card p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-2">NextJS Space Theme</h3>
            <p className="text-gray-300 mb-4 flex-grow">
              Um tema de código aberto para Next.js com design inspirado no espaço, incluindo animações de estrelas, efeitos de parallax e componentes reutilizáveis.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Next.js</span>
              <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Framer Motion</span>
            </div>
            <a href="#" className="button-secondary inline-flex items-center gap-2 self-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Ver no GitHub
            </a>
          </div>
        </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 text-center relative overflow-hidden">
        {/* Elementos decorativos com parallax */}
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxSection speed={0.15}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
          </ParallaxSection>
        </div>
        
        {/* Conteúdo estático */}
        <div className="relative z-10">
          <Link href="/contato" className="button-primary">
            Entre em contato
          </Link>
        </div>
      </section>
    </div>
  );
}

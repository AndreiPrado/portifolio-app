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
            <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-4">
              Ao longo de 10+ anos de carreira, participei de diversos projetos enterprise, desde sistemas de design
              e plataformas de streaming até soluções de IA e cloud. Abaixo alguns exemplos de domínios em que atuo.
            </p>
            <p className="body-text text-gray-400 text-center max-w-2xl mx-auto mb-12 text-sm">
              Nota: Muitos projetos são confidenciais ou propriedade de clientes. Entre em contato para discutir casos específicos.
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
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Tem um projeto em mente?</h3>
          <p className="body-text text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Vamos discutir como posso ajudar a transformar sua ideia em realidade com arquitetura sólida e tecnologias modernas.
          </p>
          <div className="flex justify-center">
            <Link href="/contato" className="button-primary">
              Iniciar conversa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

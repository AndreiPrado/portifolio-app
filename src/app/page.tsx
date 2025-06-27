import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center lg:text-left relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="lg:w-1/2">
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Desenvolvedor Web</span> com foco em
              <span className="text-purple-500"> experiência</span> e
              <span className="text-blue-500"> inovação</span>
            </h1>
            
            <p className="body-text text-gray-300 mb-8 max-w-2xl">
              Olá! Sou um desenvolvedor web apaixonado por criar soluções digitais que combinam 
              código limpo, design moderno e experiências intuitivas para os usuários.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projetos" className="button-primary">
                Ver Projetos
              </Link>
              <Link href="/contato" className="button-secondary">
                Entre em Contato
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <h3 className="text-4xl font-bold text-white">5+</h3>
                <p className="text-gray-400">Anos de Experiência</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-white">50+</h3>
                <p className="text-gray-400">Projetos Completos</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-white">15+</h3>
                <p className="text-gray-400">Tecnologias</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-[400px] h-[400px] animate-float flex items-center justify-center bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 rounded-full"
                >
                  <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                    {/* Capacete */}
                    <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      {/* Viseira */}
                      <div className="w-[140px] h-[100px] rounded-full bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-pink-400/30 border border-white/20"></div>
                    </div>
                    
                    {/* Corpo */}
                    <div className="absolute top-[120px] w-[160px] h-[180px] bg-gradient-to-b from-white/30 to-gray-500/30 rounded-2xl border border-white/20">
                      {/* Mochila */}
                      <div className="absolute top-[20px] left-[10px] w-[140px] h-[80px] bg-gray-800/40 rounded-lg border border-gray-600/30"></div>
                    </div>
                    
                    {/* Braços */}
                    <div className="absolute top-[140px] left-[10px] w-[30px] h-[100px] bg-white/20 rounded-full border border-white/10 rotate-[-20deg]"></div>
                    <div className="absolute top-[140px] right-[10px] w-[30px] h-[100px] bg-white/20 rounded-full border border-white/10 rotate-[20deg]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Planetas decorativos */}
            <div className="absolute top-12 -right-10 w-20 h-20 rounded-full bg-purple-500/20 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 left-12 w-16 h-16 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Role para baixo</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-purple-500"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </section>
      
      {/* Sobre Section */}
      <section className="py-24 relative">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-gradient">
              Sobre Mim
            </h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto">
              Conheça um pouco sobre minha trajetória e o que me motiva como desenvolvedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-md mb-4 text-white">
                Desenvolvedor <span className="text-purple-500">Full Stack</span> com paixão por interfaces modernas
              </h3>
              
              <p className="body-text text-gray-300 mb-6">
                Com mais de 5 anos de experiência no desenvolvimento web, tenho trabalhado com as tecnologias mais modernas do mercado para criar soluções eficientes e visualmente atraentes.
              </p>
              
              <p className="body-text text-gray-300 mb-6">
                Minha especialização é em React, Next.js e TypeScript para o frontend, e Node.js, Express e bancos de dados SQL/NoSQL para o backend. Tenho grande interesse em design de UX/UI e performance de aplicações.
              </p>
              
              <p className="body-text text-gray-300 mb-8">
                Além do desenvolvimento, gosto de compartilhar conhecimento através de artigos técnicos e mentorias para desenvolvedores iniciantes.
              </p>
              
              <Link href="/sobre" className="button-primary">
                Conheça mais sobre mim
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Frontend</h4>
                <p className="text-gray-300 text-sm">React, Next.js, Vue, Angular, Tailwind CSS, Styled Components</p>
              </div>
              
              <div className="card p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3Z"></path>
                    <path d="M10 17v-4"></path>
                    <path d="M14 17v-7"></path>
                    <path d="M5 10h14"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Backend</h4>
                <p className="text-gray-300 text-sm">Node.js, Express, NestJS, Django, PostgreSQL, MongoDB</p>
              </div>
              
              <div className="card p-6 hover:border-pink-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                    <rect x="7" y="7" width="10" height="10" rx="1"></rect>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Design</h4>
                <p className="text-gray-300 text-sm">Figma, Adobe XD, UX/UI Design, Acessibilidade, Motion Design</p>
              </div>
              
              <div className="card p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="m3.5 8.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 1.2a2 2 0 0 0-2 0L3.5 5.3a2 2 0 0 0 0 3.4Z"></path>
                    <path d="m3.5 14.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 7.2a2 2 0 0 0-2 0L3.5 11.3a2 2 0 0 0 0 3.4Z"></path>
                    <path d="m3.5 20.7 7.5 4.1a2 2 0 0 0 2 0l7.5-4.1a2 2 0 0 0 0-3.4L13 13.2a2 2 0 0 0-2 0l-7.5 4.1a2 2 0 0 0 0 3.4Z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">DevOps</h4>
                <p className="text-gray-300 text-sm">Docker, CI/CD, AWS, Git, GitHub Actions, Vercel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-12 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* Projetos Section */}
      <section className="py-24 relative">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-gradient">
              Meus Projetos
            </h2>
            <p className="body-text text-gray-300 max-w-3xl mx-auto">
              Conheça alguns dos trabalhos que desenvolvi recentemente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Projeto 1 */}
            <div className="card overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-t-lg">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-30">P1</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">App de Finanças Pessoais</h3>
                <p className="text-gray-300 mb-4">Um aplicativo web para controle financeiro pessoal com dashboard interativo e relatórios detalhados.</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">React</span>
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">TypeScript</span>
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Node.js</span>
                </div>
                
                <div className="flex gap-4 mt-4">
                  <Link href="/projetos/financas" className="button-primary text-sm">
                    Ver projeto
                  </Link>
                  
                  <Link 
                    href="#"
                    className="button-secondary text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="card overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-pink-500/30 rounded-t-lg">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-30">P2</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">E-commerce de Tecnologia</h3>
                <p className="text-gray-300 mb-4">Uma loja virtual completa para produtos de tecnologia com integração de pagamentos e gestão de estoque.</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Next.js</span>
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Redux</span>
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">MongoDB</span>
                </div>
                
                <div className="flex gap-4 mt-4">
                  <Link href="/projetos/ecommerce" className="button-primary text-sm">
                    Ver projeto
                  </Link>
                  
                  <Link 
                    href="#"
                    className="button-secondary text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="card overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-yellow-500/30 rounded-t-lg">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-30">P3</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Dashboard Analítico</h3>
                <p className="text-gray-300 mb-4">Sistema de dashboard para visualização de dados com gráficos interativos e relatórios personalizados.</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Vue.js</span>
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">D3.js</span>
                  <span className="px-3 py-1 text-xs bg-purple-900/30 text-purple-200 rounded-full">Express</span>
                </div>
                
                <div className="flex gap-4 mt-4">
                  <Link href="/projetos/dashboard" className="button-primary text-sm">
                    Ver projeto
                  </Link>
                  
                  <Link 
                    href="#"
                    className="button-secondary text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projetos" className="button-primary">
              Ver todos os projetos
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-16 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="card max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30">
          <div className="text-center">
            <h2 className="heading-lg mb-4 text-white">Vamos trabalhar juntos?</h2>
            <p className="body-text text-gray-300 mb-8 max-w-2xl mx-auto">
              Estou disponível para novos projetos e colaborações. Se você tem um projeto em mente ou precisa de um desenvolvedor para sua equipe, entre em contato!              
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="button-primary">
                Entre em contato
              </Link>
              <Link href="/sobre" className="button-secondary">
                Saiba mais sobre mim
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>
      </section>
    </div>
  );
}

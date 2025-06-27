import Link from 'next/link';
import ParallaxSection from '../components/ParallaxSection';

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <ParallaxSection className="py-16 relative" speed={0.2}>
        <div className="relative z-10">
          <h1 className="heading-lg text-center mb-6 text-gradient">Sobre Mim</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais modernas e eficientes.
          </p>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-12 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </ParallaxSection>

      {/* Profile Section */}
      <ParallaxSection className="mb-20 relative" speed={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="card aspect-square w-full max-w-md mx-auto overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">Foto</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="heading-md mb-6 text-white">Olá, eu sou o <span className="text-purple-400">Dev</span></h2>
            
            <p className="body-text text-gray-300 mb-6">
              Sou um desenvolvedor Full Stack com mais de 5 anos de experiência em desenvolvimento 
              web e mobile, utilizando as mais modernas tecnologias do mercado.
            </p>
            
            <p className="body-text text-gray-300 mb-6">
              Tenho grande paixão por criar interfaces bonitas e funcionais, com foco em experiência 
              do usuário e performance. Trabalho principalmente com React, Next.js, Node.js e bancos 
              de dados SQL e NoSQL.
            </p>
            
            <p className="body-text text-gray-300 mb-8">
              Além da programação, sou entusiasta de astronomia, ficção científica e música - 
              inspirações que trouxe para este portfólio com tema espacial.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#" className="button-secondary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              
              <a href="#" className="button-secondary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              
              <a href="#" className="button-secondary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
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
      </ParallaxSection>
    </div>
  );
}

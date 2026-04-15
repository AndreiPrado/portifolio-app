export default function Contato() {
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
          <h1 className="heading-lg text-center mb-6 text-gradient">Contato</h1>
          <p className="body-text text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Entre em contato para conversarmos sobre seu projeto ou oportunidades de trabalho.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mb-20 relative overflow-hidden">
        {/* Elementos decorativos estáticos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="heading-md mb-8 text-white">Envie uma mensagem</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="button-primary w-full justify-center py-3"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="heading-md mb-8 text-white">Informações de Contato</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-300 mb-1">Para propostas de trabalho:</p>
                  <a href="mailto:andrei.prado@hotmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">andrei.prado@hotmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-gray-300 mb-1">Meu perfil profissional:</p>
                  <a href="https://www.linkedin.com/in/andrei-prado" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">linkedin.com/in/andrei-prado</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 12-4-4-4 4" />
                    <path d="M12 16V8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Idiomas</h3>
                  <p className="text-gray-300 mb-1">Português: Nativo</p>
                  <p className="text-gray-300 mb-1">Inglês: Fluente Profissional</p>
                  <p className="text-gray-300">Espanhol: Profissional</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Localização</h3>
                  <p className="text-gray-300">São Paulo, São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
              <div className="flex flex-wrap gap-4">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4 text-white">Perguntas Frequentes</h2>
          <p className="body-text text-gray-300 max-w-3xl mx-auto">
            Dúvidas comuns sobre meus serviços e processo de trabalho.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-2">Qual é sua especialização como Technical Lead?</h3>
            <p className="text-gray-300">
              Atuo supervisionando todo o escopo técnico de projetos, desde design de arquitetura até infraestrutura em nuvem (GCP) e pipelines CI/CD (Azure DevOps). Lidero desenvolvimento backend (Node.js/Fastify) e frontend (React), com foco em sistemas escaláveis e de alta performance. Também integro soluções de IA (OpenAI, Gemini) para impulsionar inovação.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-2">Tem experiência com plataformas enterprise?</h3>
            <p className="text-gray-300">
              Sim, tenho mais de 10 anos de experiência em projetos enterprise de larga escala, incluindo sistemas de design, Liferay, e plataformas de streaming. Liderei o desenvolvimento Roku para toda a América Latina, gerenciando releases, estabilidade da plataforma e alinhamento técnico com stakeholders.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-2">Como é seu trabalho com times distribuídos?</h3>
            <p className="text-gray-300">
              Tenho vasta experiência liderando times remotos e distribuídos. Atuo como mentor, desbloqueio desafios técnicos, garanto qualidade de código e facilito a colaboração entre squads. Utilizo ferramentas como Azure DevOps, Jira e Trello para gestão de projetos e comunicação eficiente.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-white mb-2">Está disponível para projetos ou consultoria?</h3>
            <p className="text-gray-300">
              Estou aberto a discutir oportunidades de liderança técnica, consultoria em arquitetura de software, cloud (GCP), integração de IA e desenvolvimento full stack. Entre em contato para conversarmos sobre como posso agregar valor ao seu projeto ou equipe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

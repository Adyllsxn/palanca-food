export default function Footer() {
  return (
    <footer className="relative bg-black pt-12 sm:pt-20 pb-6 sm:pb-8 overflow-hidden">
      {/* Onda SVG - responsiva */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="-1 0"
                to="1 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
            opacity="0.15"
          />
          <path
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z"
            fill="url(#waveGradient)"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Efeito de grade de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Partículas flutuantes - esconder no mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-pink-600 rounded-full filter blur-[80px] opacity-5 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section - responsiva */}
        <div className="mb-12 sm:mb-16 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-500">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay in the loop
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">Get the latest updates and news straight to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 sm:py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              />
              <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105">
                Subscribe
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid principal - responsivo: 1 coluna no mobile, 2 no tablet, 6 no desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 text-center sm:text-left group">
            <div className="flex justify-center sm:justify-start mb-4">
              <img src="/logo-dark.svg" alt="Chatnal" className="h-10 sm:h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto sm:mx-0 transition-all duration-300 group-hover:text-gray-300">
              A modern chat platform for communities and groups. 
              Connect, share, and grow together in real-time.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 mt-4 sm:mt-6">
              {[
                { icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", name: "Twitter" },
                { icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", name: "GitHub" },
                { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", name: "LinkedIn" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group/social w-8 h-8 sm:w-9 sm:h-9 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections - responsivo */}
          {[
            { title: "Product", links: ["Features", "Demo", "Pricing"] },
            { title: "Community", links: ["Blog", "Discord", "GitHub"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
            { title: "Resources", links: ["Documentation", "API", "Support"] }
          ].map((section, idx) => (
            <div key={idx} className="text-center sm:text-left group/section">
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover/section:w-12"></span>
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="group/link text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2"
                    >
                      <span className="w-0 group-hover/link:w-4 transition-all duration-300 text-transparent group-hover/link:text-blue-400">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha divisória animada */}
        <div className="relative my-6 sm:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Copyright e badges - responsivo */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm hover:text-gray-400 transition-colors duration-300 text-center sm:text-left">
            © 2026 Chatnal. All rights reserved.
          </p>
          <div className="flex gap-2 sm:gap-3">
            {[
              { text: "v1.0.0", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
              { text: "MIT License", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="group/badge flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500 group-hover/badge:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                </svg>
                <span className="text-[10px] sm:text-xs text-gray-400 group-hover/badge:text-white transition-colors duration-300">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
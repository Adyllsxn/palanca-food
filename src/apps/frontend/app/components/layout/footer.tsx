export default function Footer() {
  return (
    <footer className="relative bg-black pt-12 sm:pt-20 pb-6 sm:pb-8 overflow-hidden">
      {/* Onda SVG estática */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#1a1a1a"
            opacity="0.8"
          />
          <path
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z"
            fill="#1a1a1a"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo e descrição */}
          <div className="col-span-2 lg:col-span-2 text-left">
            <div className="flex justify-start mb-4">
              <img src="/logo-dark.svg" alt="Chatnal" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
              A modern chat platform for communities and groups. 
              Connect, share, and grow together in real-time.
            </p>
          </div>

          {/* Product */}
          <div className="text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Product
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Features", "Demo", "Pricing"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm inline-block cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Community
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Blog", "Discord", "GitHub"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm inline-block cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Legal
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Privacy", "Terms", "Cookies"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm inline-block cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Resources
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Documentation", "API", "Support"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm inline-block cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 my-6 sm:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Chatnal. All rights reserved.
          </p>
          <div className="flex gap-2 sm:gap-3">
            {["v1.0.0", "MIT License"].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full border border-gray-800 hover:border-[#7C5CFF] transition-all duration-300 cursor-pointer"
              >
                <span className="text-[10px] sm:text-xs text-gray-400">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
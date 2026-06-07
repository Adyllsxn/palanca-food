import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registrar o plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function Footer() {
  const waveRef1 = useRef<SVGPathElement>(null);
  const waveRef2 = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Animação da onda 1
    if (waveRef1.current) {
      gsap.to(waveRef1.current, {
        duration: 3,
        scaleY: 1.05,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center"
      });
    }

    // Animação da onda 2 (com delay)
    if (waveRef2.current) {
      gsap.to(waveRef2.current, {
        duration: 3.5,
        scaleY: 1.08,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
        transformOrigin: "center center"
      });
    }
  }, []);

  // Função para scroll suave
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      gsap.to(window, {
        duration: 0.8,
        scrollTo: targetPosition - 70,
        ease: "power3.inOut"
      });
    }
  };

  // Efeito hover nos links
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      x: 5,
      color: "#7C5CFF",
      ease: "power2.out"
    });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      x: 0,
      color: "#9ca3af",
      ease: "power2.out"
    });
  };

  // Efeito hover nos títulos das seções
  const handleTitleHover = (e: React.MouseEvent<HTMLHeadingElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      color: "#7C5CFF",
      scale: 1.02,
      ease: "power2.out"
    });
  };

  const handleTitleLeave = (e: React.MouseEvent<HTMLHeadingElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      color: "#ffffff",
      scale: 1,
      ease: "power2.out"
    });
  };

  // Efeito hover nos badges
  const handleBadgeHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      scale: 1.1,
      borderColor: "#7C5CFF",
      ease: "back.out(1)"
    });
  };

  const handleBadgeLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      scale: 1,
      borderColor: "#1f2937",
      ease: "back.in(1)"
    });
  };

  // Links do menu para scroll suave
  const menuLinks = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" }
  ];

  return (
    <footer className="relative bg-black pt-12 sm:pt-20 pb-6 sm:pb-8 overflow-hidden">
      {/* Onda SVG animada no topo */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            ref={waveRef1}
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#1a1a1a"
            opacity="0.8"
          />
          <path
            ref={waveRef2}
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z"
            fill="#1a1a1a"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal - 2 colunas no tablet, 6 no desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo e descrição - 2 colunas no mobile, 2 no desktop */}
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
            <h3 
              className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 cursor-pointer transition-all duration-300 inline-block"
              onMouseEnter={handleTitleHover}
              onMouseLeave={handleTitleLeave}
            >
              Product
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {menuLinks.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={handleLinkLeave}
                    className="text-gray-400 text-xs sm:text-sm inline-block transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="text-left">
            <h3 
              className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 cursor-pointer transition-all duration-300 inline-block"
              onMouseEnter={handleTitleHover}
              onMouseLeave={handleTitleLeave}
            >
              Community
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Blog", "Discord", "GitHub"].map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href="#"
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={handleLinkLeave}
                    className="text-gray-400 text-xs sm:text-sm inline-block transition-all duration-300 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-left">
            <h3 
              className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 cursor-pointer transition-all duration-300 inline-block"
              onMouseEnter={handleTitleHover}
              onMouseLeave={handleTitleLeave}
            >
              Legal
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Privacy", "Terms", "Cookies"].map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href="#"
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={handleLinkLeave}
                    className="text-gray-400 text-xs sm:text-sm inline-block transition-all duration-300 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-left">
            <h3 
              className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4 cursor-pointer transition-all duration-300 inline-block"
              onMouseEnter={handleTitleHover}
              onMouseLeave={handleTitleLeave}
            >
              Resources
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Documentation", "API", "Support"].map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href="#"
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={handleLinkLeave}
                    className="text-gray-400 text-xs sm:text-sm inline-block transition-all duration-300 cursor-pointer"
                  >
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
            {[
              { text: "v1.0.0", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
              { text: "MIT License", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((badge, idx) => (
              <div
                key={idx}
                onMouseEnter={handleBadgeHover}
                onMouseLeave={handleBadgeLeave}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 rounded-full border border-gray-800 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                </svg>
                <span className="text-[10px] sm:text-xs text-gray-400">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        gsap.to(headerRef.current, {
          duration: 0.3,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(229, 231, 235, 0.5)" : "none",
          boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
          ease: "power2.out"
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        maxHeight: "400px",
        opacity: 1,
        ease: "power2.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        maxHeight: 0,
        opacity: 0,
        ease: "power2.in"
      });
    }
  }, [isMobileMenuOpen]);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center group"
            onMouseEnter={() => gsap.to(".logo-img", { duration: 0.3, scale: 1.05, ease: "back.out(1)" })}
            onMouseLeave={() => gsap.to(".logo-img", { duration: 0.3, scale: 1, ease: "back.out(1)" })}
          >
            <img
              src="/logo-light.svg"
              alt="Chatnal"
              className="logo-img h-8 w-auto transition-all duration-300"
              style={{ filter: isScrolled ? "brightness(1)" : "brightness(0) invert(1)" }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#features"
              onClick={(e) => smoothScroll(e, "#features")}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isScrolled
                  ? "text-gray-600 hover:text-[#7C5CFF] hover:bg-gray-50"
                  : "text-white hover:text-white/80"
              }`}
            >
              Features
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7C5CFF] transition-all duration-300 group-hover:w-6 group-hover:left-1/2 -translate-x-1/2"></span>
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => smoothScroll(e, "#how-it-works")}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isScrolled
                  ? "text-gray-600 hover:text-[#7C5CFF] hover:bg-gray-50"
                  : "text-white hover:text-white/80"
              }`}
            >
              How it Works
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7C5CFF] transition-all duration-300 group-hover:w-6 group-hover:left-1/2 -translate-x-1/2"></span>
            </a>
            <a
              href="#stats"
              onClick={(e) => smoothScroll(e, "#stats")}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isScrolled
                  ? "text-gray-600 hover:text-[#7C5CFF] hover:bg-gray-50"
                  : "text-white hover:text-white/80"
              }`}
            >
              Stats
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7C5CFF] transition-all duration-300 group-hover:w-6 group-hover:left-1/2 -translate-x-1/2"></span>
            </a>

            <div className={`w-px h-5 mx-2 ${isScrolled ? "bg-gray-300" : "bg-white/30"}`}></div>

            <a
              href="/auth/signin"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                isScrolled
                  ? "text-gray-600 hover:text-[#7C5CFF] hover:bg-gray-50"
                  : "text-white hover:text-white/80"
              }`}
            >
              Sign in
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7C5CFF] transition-all duration-300 group-hover:w-6 group-hover:left-1/2 -translate-x-1/2"></span>
            </a>

            <a
              href="/auth/signup"
              className={`ml-2 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled
                  ? "text-white hover:shadow-[#7C5CFF]/25"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
              }`}
              style={isScrolled ? { background: "linear-gradient(135deg, #7C5CFF 0%, #5B3DF5 100%)" } : {}}
            >
              Get Started
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-white/10 text-white"
            }`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-xl border-b border-gray-100 overflow-hidden z-50"
        style={{ maxHeight: 0, opacity: 0 }}
      >
        <div className="flex flex-col py-4 px-4 space-y-2">
          <a
            href="#features"
            onClick={(e) => smoothScroll(e, "#features")}
            className="px-4 py-3 text-gray-700 hover:text-[#7C5CFF] hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => smoothScroll(e, "#how-it-works")}
            className="px-4 py-3 text-gray-700 hover:text-[#7C5CFF] hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            How it Works
          </a>
          <a
            href="#stats"
            onClick={(e) => smoothScroll(e, "#stats")}
            className="px-4 py-3 text-gray-700 hover:text-[#7C5CFF] hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            Stats
          </a>
          <div className="border-t border-gray-100 my-2"></div>
          <a
            href="/auth/signin"
            className="px-4 py-3 text-gray-700 hover:text-[#7C5CFF] hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
          >
            Sign in
          </a>
          <a
            href="/auth/signup"
            className="px-4 py-3 mt-1 text-white rounded-xl text-center font-semibold hover:shadow-lg transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #7C5CFF 0%, #5B3DF5 100%)" }}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Efeito de blur no fundo quando menu mobile aberto */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
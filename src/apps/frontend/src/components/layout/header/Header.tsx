"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/logo-light.svg"
                alt="Chatnal"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                style={{ filter: isScrolled ? "brightness(1)" : "brightness(0) invert(1)" }}
              />
            </Link>

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

              <Link
                href="/auth/signin"
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isScrolled
                    ? "text-gray-600 hover:text-[#7C5CFF] hover:bg-gray-50"
                    : "text-white hover:text-white/80"
                }`}
              >
                Sign in
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#7C5CFF] transition-all duration-300 group-hover:w-6 group-hover:left-1/2 -translate-x-1/2"></span>
              </Link>

              <Link
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
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 z-50 ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-700"
                  : "text-white hover:bg-white/10"
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
      </header>

      {/* Mobile Menu Modal - Tela inteira */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Overlay com blur */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Conteúdo do menu */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-500 transform ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Logo no menu mobile */}
          <div className="absolute top-6 left-6">
            <img
              src="/logo-light.svg"
              alt="Chatnal"
              className="h-8 w-auto opacity-80"
            />
          </div>

          {/* Links de navegação */}
          <nav className="flex flex-col items-center space-y-6 w-full max-w-sm">
            <a
              href="#features"
              onClick={(e) => smoothScroll(e, "#features")}
              className="text-2xl font-semibold text-white hover:text-[#7C5CFF] transition-all duration-200 py-2 px-4 rounded-xl hover:bg-white/10 w-full text-center"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => smoothScroll(e, "#how-it-works")}
              className="text-2xl font-semibold text-white hover:text-[#7C5CFF] transition-all duration-200 py-2 px-4 rounded-xl hover:bg-white/10 w-full text-center"
            >
              How it Works
            </a>
            <a
              href="#stats"
              onClick={(e) => smoothScroll(e, "#stats")}
              className="text-2xl font-semibold text-white hover:text-[#7C5CFF] transition-all duration-200 py-2 px-4 rounded-xl hover:bg-white/10 w-full text-center"
            >
              Stats
            </a>
            
            <div className="w-16 h-px bg-white/20 my-4"></div>
            
            <Link
              href="/auth/signin"
              className="text-xl font-medium text-white/80 hover:text-white transition-all duration-200 py-2 px-6 rounded-xl hover:bg-white/10 w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="text-xl font-semibold py-3 px-6 rounded-xl text-center transition-all duration-200 hover:scale-105 w-full"
              style={{ background: "linear-gradient(135deg, #7C5CFF 0%, #5B3DF5 100%)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started →
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
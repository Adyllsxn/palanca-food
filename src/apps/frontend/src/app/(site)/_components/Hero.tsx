"use client";

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Texto */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white font-bold">Connect with</span>
              <br />
              <span className="text-white font-light">Communities</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light mb-10 leading-relaxed">
              Create public groups with approval system or private groups with exclusive invites. 
              Chat in real-time with your community.
            </p>
            
            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botão Get Started */}
              <Link
                href="/auth/signup"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 overflow-hidden transition-all duration-300 hover:scale-105 font-semibold rounded-lg cursor-pointer"
                style={{ 
                  background: "linear-gradient(135deg, #7C5CFF 0%, #5B3DF5 100%)",
                  boxShadow: "0 4px 15px rgba(124, 92, 255, 0.3)",
                  color: "white"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(124, 92, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(124, 92, 255, 0.3)";
                }}
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7C5CFF] group-hover:to-[#5B3DF5]">
                  Get Started
                  <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>

              {/* Botão Sign In */}
              <Link
                href="/auth/signin"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent text-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-black border-2 border-white text-base font-medium rounded-lg cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Sign In
                </span>
                <span className="absolute inset-0 bg-white transform skew-x-12 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>
            </div>
          </div>

          {/* Lado Direito - Demo Image */}
          <div>
            <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <img src="/demo.svg" alt="Chatnal Demo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
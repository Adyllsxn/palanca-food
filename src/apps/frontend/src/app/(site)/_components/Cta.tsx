"use client";

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Onda SVG no TOPO - estática */}
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

      {/* Onda SVG no BOTTOM - estática */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Botão */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <Link
              href="/auth/signup"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 overflow-hidden transition-all duration-300 hover:scale-105 font-semibold rounded-xl cursor-pointer"
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
              <span className="relative z-10 flex items-center gap-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7C5CFF] group-hover:to-[#5B3DF5]" style={{ transition: "all 0.3s ease" }}>
                <span className="text-lg">Create Free Account</span>
                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-white transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </Link>
          </motion.div>

          {/* Lado Direito - Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right"
          >
            <div className="flex items-center justify-end gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-gray-500">
                Get Started
              </span>
              <div className="w-12 h-0.5 bg-[#7C5CFF]/50" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="font-extralight text-white">Ready to start</span>
              <br />
              <span className="font-extrabold" style={{ color: "#7C5CFF" }}>
                chatting?
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-md ml-auto leading-relaxed">
              Join thousands of users already using Chatnal to connect with their communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
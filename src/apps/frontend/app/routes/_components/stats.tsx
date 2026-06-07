import { HiOutlineUsers, HiOutlineChatBubbleLeftRight, HiOutlineGlobeAlt } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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

  const stats = [
    {
      icon: HiOutlineUsers,
      value: "10K+",
      label: "Active Users"
    },
    {
      icon: HiOutlineChatBubbleLeftRight,
      value: "1M+",
      label: "Messages Sent"
    },
    {
      icon: HiOutlineGlobeAlt,
      value: "50+",
      label: "Countries"
    }
  ];

  return (
    <section id="stats" className="relative py-24 bg-black overflow-hidden">
      {/* Onda SVG no BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-gray-900/50 rounded-2xl p-6 transition-all duration-500 hover:-translateY-2 hover:shadow-xl overflow-hidden border border-gray-800 hover:border-[#7C5CFF]/50"
              >
                {/* Ícone gigante no fundo - canto inferior direito */}
                <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Icon className="text-9xl text-white" />
                </div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Valor */}
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                  
                  {/* Linha decorativa animada */}
                  <div className="w-12 h-0.5 bg-gray-600 mt-4 group-hover:w-20 group-hover:bg-[#7C5CFF] transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
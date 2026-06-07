import { motion } from "framer-motion";
import { HiOutlineUserPlus, HiOutlineUserGroup, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default function HowItWorks() {
  const steps = [
    {
      icon: HiOutlineUserPlus,
      title: "Create Account",
      description: "Sign up in seconds and set up your profile",
      borderStyle: "border-l-4 border-l-[#7C5CFF]/50 rounded-r-2xl rounded-l-none"
    },
    {
      icon: HiOutlineUserGroup,
      title: "Join or Create Groups",
      description: "Discover public groups or create your own private space",
      borderStyle: "border-r-4 border-r-[#7C5CFF]/50 rounded-l-2xl rounded-r-none"
    },
    {
      icon: HiOutlineChatBubbleLeftRight,
      title: "Start Chatting",
      description: "Connect with your community in real-time",
      borderStyle: "border-l-4 border-l-[#7C5CFF]/50 rounded-r-2xl rounded-l-none"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header alinhado à esquerda */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#7C5CFF]/50" />
            <span className="text-xs uppercase tracking-wider text-gray-500">
              Get Started
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="font-extralight text-white">How</span>{' '}
            <span className="font-extrabold text-[#7C5CFF]">Chatnal</span>{' '}
            <span className="font-extralight text-white">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Get started in minutes and connect with your community
          </p>
        </div>

        {/* Cards com bordas laterais */}
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            // Índice 0 → direita, índice 1 → esquerda, índice 2 → direita
            const isRightAligned = index !== 1;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isRightAligned ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex ${isRightAligned ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`group w-full md:w-[80%] ${step.borderStyle} bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-500 p-6 backdrop-blur-sm`}
                >
                  <div className={`flex items-center justify-between ${isRightAligned ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex items-center gap-4 ${isRightAligned ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Ícone branco */}
                      <div className="relative">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                          style={{ 
                            backgroundColor: "rgba(124, 92, 255, 0.1)",
                            boxShadow: "0 0 20px rgba(124, 92, 255, 0.15)"
                          }}
                        >
                          <Icon size={26} className="text-white" />
                        </div>
                      </div>
                      <div className={`${isRightAligned ? 'text-right' : 'text-left'}`}>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400 max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {/* Seta */}
                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${isRightAligned ? 'ml-4' : 'mr-4'}`}>
                      <svg 
                        className={`w-5 h-5 text-gray-400 ${isRightAligned ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
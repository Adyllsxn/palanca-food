import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Recover() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email) {
        toast.success("Password reset link sent!", {
          description: `We've sent a reset link to ${email}`,
        });
        console.log("Recover password:", { email });
      } else {
        toast.error("Please enter your email address");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-layout flex min-h-screen bg-black">
      {/* Brand Panel - Lado esquerdo (preto puro) */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative">
        <div className="flex flex-col justify-between w-full p-12">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center gap-2 text-white">
              <img src="/logo-dark.svg" alt="Chatnal" className="h-8 w-auto" />
            </a>
          </div>

          {/* Conteúdo central */}
          <div className="max-w-md mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Reset your password</h2>
            <p className="text-[#7C5CFF]/80 text-base mb-8">
              Don't worry! It happens. Enter your email and we'll send you a reset link.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#7C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure password reset process
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#7C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant email delivery
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#7C5CFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Get back to your account quickly
              </li>
            </ul>
          </div>

          {/* Footer do brand */}
          <div className="text-center text-[#7C5CFF]/60 text-sm">
            © 2026 Chatnal. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Form Panel - Lado direito com card escuro */}
      <div className="flex-1 flex items-center justify-center bg-[#0a0a0a] p-4">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <img src="/logo-light.svg" alt="Chatnal" className="h-10" />
          </div>

          {/* Card do formulário - Fundo preto mais claro (#111111) */}
          <div className="bg-[#111111] rounded-2xl border border-gray-800 p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white">Forgot password?</h1>
              <p className="text-gray-400 text-sm mt-1">
                Enter your email to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C5CFF] focus:border-transparent text-white placeholder-gray-500"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Botão Send reset link */}
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 overflow-hidden transition-all duration-300 hover:scale-105 font-semibold rounded-lg"
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
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7C5CFF] group-hover:to-[#5B3DF5]">
                  {isLoading ? "Sending..." : "Send reset link"}
                  {!isLoading && <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </span>
                <span className="absolute inset-0 bg-white transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </button>

              {/* Link voltar para login */}
              <p className="text-center text-sm text-gray-400">
                Remember your password?{" "}
                <Link to="/auth/signin" className="text-[#7C5CFF] font-medium hover:text-[#7C5CFF]/80 transition">
                  Back to sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
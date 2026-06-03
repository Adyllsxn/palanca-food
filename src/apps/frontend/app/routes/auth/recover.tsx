import { useState } from "react";
import { toast } from "sonner";

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
    <div className="auth-layout flex min-h-screen">
      {/* Brand Panel - Lado esquerdo */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative">
        <div className="flex flex-col justify-between w-full p-12">
          <div>
            <a href="/" className="flex items-center gap-2 text-white">
              <img src="/logo-dark.svg" alt="Chatnal" className="h-8 w-auto" />
            </a>
          </div>

          <div className="max-w-md mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Reset your password</h2>
            <p className="text-blue-100 text-base mb-8">
              Don't worry! It happens. Enter your email and we'll send you a reset link.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure password reset process
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Instant email delivery
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Get back to your account quickly
              </li>
            </ul>
          </div>

          <div className="text-center text-blue-200 text-sm">
            © 2026 Chatnal. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Form Panel - Lado direito */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <img src="/logo-light.svg" alt="Chatnal" className="h-10" />
          </div>

          {/* Card do formulário */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Forgot password?</h1>
                <p className="text-gray-500 text-sm mt-1">
                  Enter your email to reset your password
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Botão Send reset link */}
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition mb-4"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send reset link"}
                </button>

                {/* Link voltar para login */}
                <p className="text-center text-sm text-gray-600">
                  Remember your password?{" "}
                  <a href="/auth/signin" className="text-indigo-600 font-medium hover:text-indigo-700">
                    Back to sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
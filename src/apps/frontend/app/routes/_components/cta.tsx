import { Link } from "react-router";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function CTA() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="relative bg-black rounded-3xl p-12 border border-gray-800 group hover:border-gray-700 transition-all duration-500 shadow-2xl">
          
          {/* Efeito de brilho sutil nas bordas */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Linhas decorativas nos cantos */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-blue-500/20 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-purple-500/20 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-purple-500/20 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-blue-500/20 rounded-br-3xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to start{" "}
            <span className="text-blue-500">
              chatting?
            </span>
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Join thousands of users already using Chatnal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/signup"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Create Free Account
              <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/auth/signin"
              className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl border border-gray-700 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
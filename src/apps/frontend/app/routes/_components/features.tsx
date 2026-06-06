import { 
  HiOutlineShieldCheck, 
  HiOutlineChartBar, 
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineSparkles
} from "react-icons/hi2";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage, communicate, and grow your communities efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Innovative Solutions for Modern Communities
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Chatnal provides everything you need to create, manage, and grow your online communities.
              From public groups to private spaces, we've got you covered.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">Real-time messaging & insights</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">Group collaboration tools</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">Advanced privacy features</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">Admin approval system</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">24/7 Professional Support</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <HiOutlineLightBulb className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Smart Performance</h4>
              <p className="text-gray-400 text-sm">
                Lightning fast messaging with WebSocket technology for real-time communication.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <HiOutlineShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security First</h4>
              <p className="text-gray-400 text-sm">
                End-to-end encryption and advanced privacy features to protect your data.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <HiOutlineChartBar className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Growth Analytics</h4>
              <p className="text-gray-400 text-sm">
                Track your community growth with detailed analytics and insights.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <HiOutlineCog className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Easy Management</h4>
              <p className="text-gray-400 text-sm">
                Full control over members, approvals, and group settings.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
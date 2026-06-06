import { HiOutlineUserPlus, HiOutlineUserGroup, HiOutlineChatBubbleLeftRight, HiOutlineSparkles } from "react-icons/hi2";

export default function HowItWorks() {
  const steps = [
    {
      icon: HiOutlineUserPlus,
      title: "Create Account",
      description: "Sign up in seconds and set up your profile",
      color: "from-blue-500 to-blue-600",
      step: "01"
    },
    {
      icon: HiOutlineUserGroup,
      title: "Join or Create Groups",
      description: "Discover public groups or create your own private space",
      color: "from-purple-500 to-purple-600",
      step: "02"
    },
    {
      icon: HiOutlineChatBubbleLeftRight,
      title: "Start Chatting",
      description: "Connect with your community in real-time",
      color: "from-green-500 to-green-600",
      step: "03"
    },
    {
      icon: HiOutlineSparkles,
      title: "Grow Together",
      description: "Manage members, approvals, and watch your community thrive",
      color: "from-orange-500 to-orange-600",
      step: "04"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How <span className="text-blue-500">Chatnal</span> Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in minutes and connect with your community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
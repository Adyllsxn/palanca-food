import { HiOutlineUsers, HiOutlineChatBubbleLeftRight, HiOutlineGlobeAlt } from "react-icons/hi2";

export default function Stats() {
  const stats = [
    {
      icon: HiOutlineUsers,
      value: "10K+",
      label: "Active Users",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HiOutlineChatBubbleLeftRight,
      value: "1M+",
      label: "Messages Sent",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: HiOutlineGlobeAlt,
      value: "50+",
      label: "Countries",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
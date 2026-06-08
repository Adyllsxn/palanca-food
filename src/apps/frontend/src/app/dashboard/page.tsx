"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { 
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineMagnifyingGlass,
  HiOutlinePlus,
  HiOutlinePaperAirplane,
  HiOutlineUser,
  HiOutlineHome,
  HiOutlineChevronDown,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronLeft,
  HiOutlineXMark,
  HiOutlineChevronRight
} from "react-icons/hi2";

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState<string | null>("1");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [message, setMessage] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [currentView, setCurrentView] = useState<"home" | "chats" | "groups" | "discover">("home");
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("userEmail");
    
    if (!isLoggedIn) {
      toast.error("Please sign in");
      router.push("/auth/signin");
    } else {
      setUserEmail(email);
      setUserName(email?.split('@')[0] || "User");
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    toast.success("Logged out");
    router.push("/auth/signin");
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-2 border-[#7C5CFF] border-t-transparent rounded-full animate-spin cursor-pointer" />
      </div>
    );
  }

  const chats = [
    { id: "1", name: "Tech Community", avatar: "👥", lastMessage: "Someone mentioned you", time: "2m", unread: 3, online: true },
    { id: "2", name: "VIP Club", avatar: "🔒", lastMessage: "New exclusive content", time: "1h", unread: 0, online: false },
    { id: "3", name: "Gaming Hub", avatar: "🎮", lastMessage: "Anyone up for a game?", time: "3h", unread: 5, online: true },
    { id: "4", name: "Design Masters", avatar: "🎨", lastMessage: "New Figma update", time: "5h", unread: 0, online: false },
  ];

  const groups = [
    { id: "1", name: "Tech Community", avatar: "👥", members: "2.3k", type: "public" },
    { id: "2", name: "VIP Club", avatar: "🔒", members: "450", type: "private" },
    { id: "3", name: "Gaming Hub", avatar: "🎮", members: "1.8k", type: "public" },
  ];

  const discoverGroups = [
    { id: "5", name: "DevOps Brasil", avatar: "⚙️", members: "1.2k", type: "public" },
    { id: "6", name: "Startup Founders", avatar: "🚀", members: "320", type: "private" },
    { id: "7", name: "AI Enthusiasts", avatar: "🤖", members: "890", type: "public" },
  ];

  const messages = [
    { id: 1, text: "Hey everyone! Welcome to the group", sender: "them", time: "10:30" },
    { id: 2, text: "Thanks for having me!", sender: "me", time: "10:32" },
    { id: 3, text: "Feel free to ask any questions", sender: "them", time: "10:35" },
    { id: 4, text: "Will do! Thanks", sender: "me", time: "10:36" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      toast.success("Message sent");
      setMessage("");
    }
  };

  const currentChat = chats.find(c => c.id === selectedChat);

  // Fechar menu mobile ao clicar em um link
  const handleMobileNav = (view: "home" | "chats" | "groups" | "discover") => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <div className="h-screen flex bg-black">
      {/* Sidebar - Desktop (colapsável) */}
      <aside className={`hidden lg:flex h-full bg-[#0a0a0a] flex-col transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'} rounded-r-[60px]`}>
        <div className="h-16 flex items-center justify-between px-3">
          {!sidebarCollapsed && (
            <button onClick={() => setCurrentView("home")} className="cursor-pointer">
              <img src="/logo-dark.svg" alt="Chatnal" className="h-7 w-auto" />
            </button>
          )}
          {sidebarCollapsed && (
            <button onClick={() => setCurrentView("home")} className="mx-auto cursor-pointer">
              <img src="/logo-dark.svg" alt="Chatnal" className="h-7 w-auto" />
            </button>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 hover:bg-gray-800 rounded-lg transition cursor-pointer"
          >
            {sidebarCollapsed ? <HiOutlineChevronRight className="w-4 h-4 text-gray-400" /> : <HiOutlineChevronLeft className="w-4 h-4 text-gray-400" />}
          </button>
        </div>

        <nav className="flex-1 py-8">
          <ul className={`space-y-2 ${sidebarCollapsed ? 'px-2' : 'px-3'}`}>
            <li>
              <button
                onClick={() => setCurrentView("home")}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-all cursor-pointer justify-start ${currentView === "home" ? 'bg-[#7C5CFF]/20 text-[#7C5CFF]' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                title={sidebarCollapsed ? "Home" : ""}
              >
                <HiOutlineHome className="w-5 h-5" />
                {!sidebarCollapsed && <span className="text-sm">Home</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("chats")}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-all cursor-pointer justify-start ${currentView === "chats" ? 'bg-[#7C5CFF]/20 text-[#7C5CFF]' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                title={sidebarCollapsed ? "Messages" : ""}
              >
                <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                {!sidebarCollapsed && <span className="text-sm">Messages</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("groups")}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-all cursor-pointer justify-start ${currentView === "groups" ? 'bg-[#7C5CFF]/20 text-[#7C5CFF]' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                title={sidebarCollapsed ? "My Groups" : ""}
              >
                <HiOutlineUserGroup className="w-5 h-5" />
                {!sidebarCollapsed && <span className="text-sm">My Groups</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("discover")}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-all cursor-pointer justify-start ${currentView === "discover" ? 'bg-[#7C5CFF]/20 text-[#7C5CFF]' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                title={sidebarCollapsed ? "Discover" : ""}
              >
                <HiOutlineUsers className="w-5 h-5" />
                {!sidebarCollapsed && <span className="text-sm">Discover</span>}
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-3 pb-6">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} p-3 rounded-2xl hover:bg-gray-800 transition cursor-pointer`}
            >
              <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3'}`}>
                <div className="w-8 h-8 rounded-full bg-[#7C5CFF] flex items-center justify-center text-white text-sm font-medium cursor-pointer">
                  {userName.charAt(0).toUpperCase()}
                </div>
                {!sidebarCollapsed && (
                  <div className="text-left">
                    <p className="text-white text-sm font-medium cursor-pointer">{userName}</p>
                    <p className="text-gray-500 text-xs">Online</p>
                  </div>
                )}
              </div>
              {!sidebarCollapsed && <HiOutlineChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />}
            </button>
            {showUserMenu && (
              <div className={`absolute ${sidebarCollapsed ? 'left-full top-0 ml-2' : 'bottom-full left-0 right-0 mb-2'} bg-gray-900 border border-gray-800 rounded-xl shadow-2xl z-50`}>
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 transition rounded-xl cursor-pointer">
                  <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-gray-800 lg:hidden">
        <div className="flex items-center justify-around py-2">
          <button
            onClick={() => handleMobileNav("home")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${currentView === "home" ? 'text-[#7C5CFF]' : 'text-gray-400'}`}
          >
            <HiOutlineHome className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => handleMobileNav("chats")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${currentView === "chats" ? 'text-[#7C5CFF]' : 'text-gray-400'}`}
          >
            <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
            <span className="text-xs">Chats</span>
          </button>
          <button
            onClick={() => handleMobileNav("groups")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${currentView === "groups" ? 'text-[#7C5CFF]' : 'text-gray-400'}`}
          >
            <HiOutlineUserGroup className="w-5 h-5" />
            <span className="text-xs">Groups</span>
          </button>
          <button
            onClick={() => handleMobileNav("discover")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${currentView === "discover" ? 'text-[#7C5CFF]' : 'text-gray-400'}`}
          >
            <HiOutlineUsers className="w-5 h-5" />
            <span className="text-xs">Discover</span>
          </button>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-gray-400"
          >
            <div className="w-5 h-5 rounded-full bg-[#7C5CFF] flex items-center justify-center text-white text-xs font-medium">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>

      {/* Mobile User Menu */}
      {showUserMenu && isMobile && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center lg:hidden" onClick={() => setShowUserMenu(false)}>
          <div className="bg-[#0a0a0a] rounded-2xl p-6 w-80 mx-4 border border-gray-800" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
              <div className="w-12 h-12 rounded-full bg-[#7C5CFF] flex items-center justify-center text-white text-lg font-medium">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-white font-semibold">{userName}</p>
                <p className="text-gray-500 text-sm">{userEmail}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 transition rounded-xl">
              <HiOutlineArrowRightOnRectangle className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Background com gradiente diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#7C5CFF]/5" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C5CFF]/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#5B3DF5]/5 rounded-full blur-3xl" />

        {/* Header - Mobile com logo no lugar do botão de menu */}
        <header className="h-16 bg-black/50 backdrop-blur-md flex items-center justify-between px-4 relative z-10 border-b border-gray-800/50">
          {/* Logo no lugar do botão de menu no mobile */}
          <button onClick={() => setCurrentView("home")} className="lg:hidden cursor-pointer">
            <img src="/logo-dark.svg" alt="Chatnal" className="h-6 w-auto" />
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <div className="relative">
              <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 md:w-64 pl-9 pr-4 py-1.5 bg-gray-900/80 border border-gray-700 rounded-full text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#7C5CFF]"
              />
            </div>
            <div className="hidden md:block">
              <button className="p-2 hover:bg-gray-800/80 rounded-full transition cursor-pointer">
                <HiOutlineUser className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto relative z-10 pb-16 lg:pb-0">
          {currentView === "home" && (
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
              <div className="w-28 h-28 bg-[#7C5CFF]/15 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <HiOutlineChatBubbleLeftRight className="w-14 h-14 text-[#7C5CFF]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Welcome to Chatnal</h1>
              <p className="text-gray-400 text-base md:text-lg max-w-md">
                Connect with communities, join groups, and start chatting in real-time.
              </p>
              <button
                onClick={() => setCurrentView("chats")}
                className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-[#7C5CFF] to-[#5B3DF5] rounded-full text-white font-medium hover:shadow-lg transition cursor-pointer"
              >
                Start Messaging
              </button>
            </div>
          )}

          {currentView === "chats" && (
            <div className="flex flex-col md:flex-row h-full">
              {/* Chat List - Mobile: full width, Tablet/Desktop: 80px */}
              <div className="w-full md:w-80 border-r border-gray-800/50 overflow-y-auto">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-white font-semibold">Messages</h2>
                    <button className="p-2 bg-gradient-to-r from-[#7C5CFF] to-[#5B3DF5] hover:opacity-90 rounded-full transition cursor-pointer">
                      <HiOutlinePlus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selectedChat === chat.id ? 'bg-[#7C5CFF]/10' : 'hover:bg-gray-800/50'}`}
                      >
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                            {chat.avatar}
                          </div>
                          {chat.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-black" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <p className="text-white font-medium truncate">{chat.name}</p>
                            <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{chat.time}</span>
                          </div>
                          <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <span className="w-5 h-5 bg-[#7C5CFF] text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {selectedChat ? (
                  <>
                    <div className="h-16 flex items-center px-4 bg-black/30 backdrop-blur-sm border-b border-gray-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                          {currentChat?.avatar}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{currentChat?.name}</p>
                          <p className="text-green-400 text-xs">Online</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                      {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] md:max-w-[70%] px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-[#7C5CFF] rounded-tr-sm' : 'bg-gray-800 rounded-tl-sm'}`}>
                            <p className="text-white text-sm">{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-purple-200' : 'text-gray-500'}`}>{msg.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 bg-black/30 backdrop-blur-sm border-t border-gray-800/50">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                          placeholder="Type a message"
                          className="flex-1 bg-gray-900/80 rounded-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#7C5CFF] text-sm"
                        />
                        <button
                          onClick={handleSend}
                          className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-r from-[#7C5CFF] to-[#5B3DF5] rounded-full flex items-center justify-center hover:shadow-lg transition cursor-pointer"
                        >
                          <HiOutlinePaperAirplane className="w-4 h-4 text-white rotate-45" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
                      <HiOutlineChatBubbleLeftRight className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-400">Select a chat to start messaging</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentView === "groups" && (
            <div className="p-4">
              <h2 className="text-white font-semibold mb-4">My Groups</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {groups.map((group) => (
                  <div key={group.id} className="bg-gray-800/30 rounded-xl border border-gray-800/50 p-4 hover:border-[#7C5CFF]/30 transition cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                        {group.avatar}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{group.name}</h3>
                        <p className="text-gray-500 text-xs">{group.members} members</p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-[#7C5CFF]/20 text-[#7C5CFF] rounded-full text-sm hover:bg-gradient-to-r hover:from-[#7C5CFF] hover:to-[#5B3DF5] hover:text-white transition cursor-pointer">
                      Open Chat
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentView === "discover" && (
            <div className="p-4">
              <h2 className="text-white font-semibold mb-4">Discover Groups</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {discoverGroups.map((group) => (
                  <div key={group.id} className="bg-gray-800/30 rounded-xl border border-gray-800/50 p-4 hover:border-[#7C5CFF]/30 transition cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                        {group.avatar}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{group.name}</h3>
                        <p className="text-gray-500 text-xs">{group.members} members</p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-[#7C5CFF]/20 text-[#7C5CFF] rounded-full text-sm hover:bg-gradient-to-r hover:from-[#7C5CFF] hover:to-[#5B3DF5] hover:text-white transition cursor-pointer">
                      Join Group
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
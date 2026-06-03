import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Isso roda apenas no cliente (navegador)
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("userEmail");
    
    if (!isLoggedIn) {
      toast.error("Please sign in to access dashboard");
      navigate("/auth/signin");
    } else {
      setUserEmail(email);
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    toast.success("Logged out successfully");
    navigate("/auth/signin");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo-light.svg" alt="Chatnal" className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-4">
              {userEmail && (
                <span className="text-sm text-gray-600">
                  {userEmail}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        {/* Grupos do usuário */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">💬 Tech Community</h3>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">Público</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Discussões sobre tecnologia e programação</p>
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm font-medium cursor-pointer">
              Entrar no chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">🔒 VIP Club</h3>
              <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">Privado</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Comunidade exclusiva para membros VIP</p>
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm font-medium cursor-pointer">
              Solicitar entrada
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">🎮 Gaming Hub</h3>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Público</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Conversas sobre jogos e e-sports</p>
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm font-medium cursor-pointer">
              Entrar no chat
            </button>
          </div>
        </div>

        {/* Botão criar grupo */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium cursor-pointer">
            + Criar novo grupo
          </button>
        </div>
      </div>
    </div>
  );
}
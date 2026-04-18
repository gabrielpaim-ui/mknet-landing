import ChatBox from '@/components/ChatBox'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center p-8">
      
      {/* Fundo Tecnológico com Padrão de Rede/Conexão */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(#39ff14 1px, transparent 1px), linear-gradient(90deg, #39ff14 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}>
      </div>

      {/* Título MkNet Neon */}
      <div className="relative z-10 mb-12 mt-4 text-center">
        <h1 className="text-5xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">
          MkNet
        </h1>
        <p className="text-[#39ff14] font-bold tracking-[0.3em] uppercase text-sm mt-2 animate-pulse">
          Provedor de Internet
        </p>
      </div>
      
      {/* Componente do Chat */}
      <div className="relative z-10 w-full">
        <ChatBox />
      </div>

      <footer className="relative z-10 mt-auto pt-10 pb-4 px-4 text-center">
        <p className="text-gray-600 text-[9px] tracking-widest uppercase font-mono mb-2">
          Powered by <span className="text-[#39ff14]/50">MkNet Tech Hub</span>
        </p>
        <p className="text-gray-500 text-[8px] max-w-md mx-auto leading-tight">
           Privacidade e Segurança: Os dados coletados são processados exclusivamente para fins de contratação de serviços MkNet, conforme a Lei Geral de Proteção de Dados (LGPD).
        </p>
      </footer>

      {/* Brilhos de fundo (Glows) para dar profundidade */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#39ff14]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#39ff14]/10 rounded-full blur-[120px]"></div>
    </main>
  )
}
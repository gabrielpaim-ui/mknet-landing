'use client'
import { useState, useEffect, useRef } from 'react'

export default function ChatBox() {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: 'Olá! Sou o Henrique, consultor da MkNet. 🚀 Vi que você busca a melhor conexão de Alegrete! Qual seu nome para começarmos?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  async function dispararN8N(jsonPuro: string) {
    try {
      const WEBHOOK_URL = 'https://gabrielpaim.app.n8n.cloud/webhook/venda-provedora'; 
      const dadosObjeto = JSON.parse(jsonPuro);
      
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosObjeto),
      });
      console.log("🚀 Dados enviados para o n8n!");
    } catch (e) {
      console.error("❌ Erro n8n:", e);
    }
  }

  async function sendMessage() {
    if (!input || loading) return
    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })
      const data = await res.json()
      let botText = data.text

      if (botText.includes('[DADOS_CLIENTE:')) {
        const partes = botText.split('[DADOS_CLIENTE:');
        const jsonExtraido = partes[1].split(']')[0].trim(); 
        botText = partes[0]; 
        dispararN8N(jsonExtraido);
      }
      setMessages(prev => [...prev, { role: 'assistant', content: botText }])
    } catch (error) {
      console.error("Erro no chat", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 border-2 border-[#39ff14] rounded-2xl shadow-[0_0_20px_rgba(57,255,20,0.4)] bg-[#0a0a0a] flex flex-col h-[600px] overflow-hidden transition-all">
      
      {/* Header MkNet Neon */}
      <div className="bg-[#111] p-4 border-b border-[#39ff14]/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="/henrique.jpeg" 
              className="w-12 h-12 rounded-full border-2 border-[#39ff14] object-cover shadow-[0_0_10px_rgba(57,255,20,0.5)]"
              alt="Henrique MkNet"
              onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Henrique+MkNet&background=39ff14&color=000" }}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#39ff14] rounded-full border-2 border-[#111] animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg tracking-wider italic shadow-[#39ff14] drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">
              Henrique
            </span>
            <span className="text-[#39ff14] text-[10px] font-bold uppercase tracking-widest">
              Consultor de Vendas!
            </span>
          </div>
        </div>
        <div className="text-[10px] text-gray-500 font-mono">ONLINE</div>
      </div>

      {/* Área de Mensagens Estilo Dark/Gamer */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-xl text-[14px] leading-relaxed shadow-lg ${
              m.role === 'user' 
                ? 'bg-[#39ff14] text-black font-semibold rounded-br-none shadow-[0_0_10px_rgba(57,255,20,0.2)]' 
                : 'bg-[#1a1a1a] text-gray-100 border border-[#39ff14]/20 rounded-bl-none'
            }`}>
              {m.content}
              <span className={`text-[8px] block mt-1 text-right ${m.role === 'user' ? 'text-black/50' : 'text-gray-500'}`}>
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-[#39ff14] text-[10px] animate-pulse font-mono ml-2">
            Henrique está processando...
          </div>
        )}
      </div>

      {/* Input Moderno */}
      <div className="p-4 bg-[#111] border-t border-[#39ff14]/20 flex gap-2">
        <input 
          className="flex-1 bg-[#1a1a1a] border border-[#333] focus:border-[#39ff14] p-3 rounded-full outline-none text-white text-sm transition-all shadow-inner" 
          placeholder="Fale com o Henrique..."
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          onClick={sendMessage} 
          disabled={loading}
          className="bg-[#39ff14] hover:bg-[#2ecc12] text-black font-bold p-3 rounded-full transition-all shadow-[0_0_15px_rgba(57,255,20,0.4)] disabled:bg-gray-700 active:scale-90"
        >
          {loading ? '...' : '➤'}
        </button>
      </div>
    </div>
  )
}
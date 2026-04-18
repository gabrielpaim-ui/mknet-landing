'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion' // Opcional, mas recomendado para animações fluidas. Se não tiver, o código funciona sem as animações motion.

// Ícones de Benefícios (Estilo Clean Tech)
const beneficios = [
  { icon: '🎁', title: 'INSTALAÇÃO GRATUITA', desc: 'Sem taxas escondidas na ativação do seu plano.' },
  { icon: '📶', title: 'ROTEADOR COMODATO', desc: 'Equipamento Wi-Fi 6 de última geração incluído.' },
  { icon: '🛠️', title: 'SUPORTE TÉCNICO LOCAL', desc: 'Atendimento rápido com técnicos da nossa região.' },
  { icon: '📞', title: 'ATENDIMENTO 24H', desc: 'Estamos sempre prontos para te ajudar, a qualquer hora.' },
]

// Dados do FAQ
const faqs = [
  { q: "A instalação demora quanto tempo?", a: "Nossa equipe prioriza agendamentos feitos pelo chat. Geralmente, instalamos em até 48h úteis." },
  { q: "O preço realmente não aumenta?", a: "Sim! Na MkNet, o valor contratado é fixo. Sem surpresas ou aumentos automáticos após alguns meses." },
  { q: "Quais são as formas de pagamento?", a: "Aceitamos Pix, Boleto Bancário e Cartão de Crédito com recorrência automática." },
  { q: "A internet rural tem a mesma velocidade?", a: "Sim. Utilizamos tecnologia de fibra óptica de ponta para garantir a ultra velocidade tanto na cidade quanto no campo." },
]

// Animação de aparecimento gradual
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#fdfdfd] text-gray-900 font-sans selection:bg-[#39ff14]/30 relative overflow-hidden">
      
      {/* 0. Fundo Grade Animado (Mais visível e pulsante) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none transition-all duration-1000" 
        style={{ 
          backgroundImage: `linear-gradient(#f0f0f0 2px, transparent 1px), linear-gradient(90deg, #82d282 2px, transparent 2px)`, 
          backgroundSize: '40px 40px',
          animation: 'gridPulse 10s ease-in-out infinite' 
        }}>
      </div>

      {/* 1. HERO SECTION (O Impacto Limpo) */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="relative z-10 min-h-[95vh] flex flex-col items-center justify-center px-4 pt-16 text-center space-y-8 max-w-6xl mx-auto">
        
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-8xl md:text-9xl font-black italic tracking-tighter drop-shadow-sm text-gray-950">
            Mk<span className="text-[#39ff14] drop-shadow-[0_0_15px_rgba(57,255,20,0.6)]">Net</span>
          </h1>
          <p className="text-gray-500 font-bold tracking-[0.4em] uppercase text-[11px] mt-2">
            Provedor de Internet
          </p>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Internet Fibra com <br/> 
          <span className="text-gray-950 underline decoration-[#39ff14] decoration-8 shadow-[#39ff14]/50 shadow-lg">Preço Fixo</span> que não te surpreende.
        </h2>
        
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Sem aumentos automáticos após 3 meses. Conexão estável para jogar, trabalhar e assistir em ultra velocidade, com suporte local e humanizado.
        </p>
        
        <div className="pt-10">
          <Link href="/agendar">
            <button className="bg-[#39ff14] hover:bg-[#2ecc12] text-black font-black py-6 px-14 rounded-full text-2xl shadow-[0_20px_40px_rgba(57,255,20,0.3)] transition-all hover:scale-105 active:scale-95 uppercase tracking-wider group relative overflow-hidden">
              Agendar Instalação Agora 🚀
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </Link>
        </div>
        
        {/* Glow de fundo sutil no Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#39ff14]/5 rounded-full blur-[130px] pointer-events-none"></div>
      </motion.section>

      {/* 2. SEÇÃO DE BENEFÍCIOS (Ícones Bolinha - Clean Tech) */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, amount: 0.3 }} className="relative z-10 py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {beneficios.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-[#fcfcfc] border-4 border-gray-100 shadow-xl flex items-center justify-center text-5xl mb-6 transition-all group-hover:border-[#39ff14] group-hover:shadow-[0_0_25px_rgba(57,255,20,0.2)] group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="text-sm font-black text-gray-950 tracking-wider uppercase mb-1">{item.title}</h4>
              <p className="text-gray-500 text-xs px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. SEÇÃO DE PLANOS (Fundo Dots Neon Black Corrigido) */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeIn} 
        viewport={{ once: true, amount: 0.2 }} 
        className="relative z-10 py-32 bg-[#050505] text-white overflow-hidden"
      >
        {/* Fundo de Pontos (Dots) - Agora VISÍVEL */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(#39ff14 1.5px, transparent 1.5px)`, 
            backgroundSize: '35px 35px',
            opacity: '0.25' 
          }}
        >
        </div>

        {/* Brilho Verde Radial no centro para destacar a malha de pontos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.1),transparent_70%)] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-3">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic">
              Nossos Planos <span className="text-[#39ff14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Premium</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto italic">
              Ultra velocidade com a transparência que você merece.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Plano 200MB */}
            <div className="group relative bg-[#0a0a0a]/90 backdrop-blur-md border border-[#1a1a1a] p-10 rounded-[35px] transition-all hover:border-[#39ff14]/40 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)] overflow-hidden h-full flex flex-col">
              <h4 className="text-2xl font-bold italic text-gray-100">Essencial</h4>
              <div className="text-7xl font-black mt-6 mb-2 tracking-tighter text-white">200<span className="text-xl font-normal text-gray-600 ml-1">MB</span></div>
              <p className="text-gray-400 text-sm mb-10 flex-grow">Perfeito para navegar, redes sociais, estudos e streaming em Full HD.</p>
              <div className="text-[#39ff14] font-black text-4xl mb-12">R$ 79,00<span className="text-xs text-gray-600 font-normal">/mês</span></div>
              <Link href="/agendar" className="block text-center py-4 rounded-xl border-2 border-[#39ff14] text-[#39ff14] font-bold hover:bg-[#39ff14] hover:text-black transition-all text-lg uppercase tracking-widest">Contratar Plano</Link>
            </div>

            {/* Plano 500MB (DESTAQUE MAXIMO) */}
            <div className="group relative bg-gray-950 p-10 rounded-[40px] transform md:-translate-y-6 shadow-2xl transition-all hover:shadow-[0_0_60px_rgba(57,255,20,0.4)] border-4 border-[#39ff14] h-full flex flex-col z-20">
              <div className="absolute -top-4 -right-4 bg-[#39ff14] text-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(57,255,20,0.5)]">Campeão de Vendas</div>
              <h4 className="text-2xl font-bold italic text-white">Turbo Gamer <span className="text-[#39ff14]">🚀</span></h4>
              <div className="text-7xl font-black mt-6 mb-2 tracking-tighter text-white">500<span className="text-xl font-normal text-gray-500 ml-1 text-[#39ff14]">MB</span></div>
              <p className="text-gray-200 text-sm mb-10 flex-grow italic">Performance imbatível para download de jogos pesados e lives em 4K simultâneas.</p>
              <div className="text-white font-black text-4xl mb-12 drop-shadow-[0_0_12px_#39ff14]">R$ 99,00<span className="text-xs text-gray-500 font-normal">/mês</span></div>
              <Link href="/agendar" className="block text-center py-5 rounded-2xl bg-[#39ff14] text-black font-black transition-all hover:bg-white text-lg uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(57,255,20,0.3)]">Contratar Agora</Link>
            </div>

            {/* Plano 1GB */}
            <div className="group relative bg-[#0a0a0a]/90 backdrop-blur-md border border-[#1a1a1a] p-10 rounded-[35px] transition-all hover:border-[#39ff14]/40 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)] overflow-hidden h-full flex flex-col">
              <h4 className="text-2xl font-bold italic text-gray-100">Ultra Speed</h4>
              <div className="text-7xl font-black mt-6 mb-2 tracking-tighter text-white">1<span className="text-xl font-normal text-gray-600 ml-1">GB</span></div>
              <p className="text-gray-400 text-sm mb-10 flex-grow">Experiência definitiva para empresas, smart homes e múltiplos usuários simultâneos.</p>
              <div className="text-[#39ff14] font-black text-4xl mb-12">R$ 149,00<span className="text-xs text-gray-600 font-normal">/mês</span></div>
              <Link href="/agendar" className="block text-center py-4 rounded-xl border-2 border-[#39ff14] text-[#39ff14] font-bold hover:bg-[#39ff14] hover:text-black transition-all text-lg uppercase tracking-widest">Contratar Plano</Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. SESSÃO DIFERENCIAIS (Volta para o Clean Tech) */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, amount: 0.3 }} className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-black leading-tight italic text-gray-950">Por que a MkNet é a <br/> <span className="text-[#39ff14] drop-shadow-sm">referência</span> em Alegrete?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start bg-[#fbfbfb] p-6 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center border-b-4 border-[#39ff14] text-3xl">📡</div>
                <div>
                  <h5 className="font-bold text-lg">Tecnologia Wi-Fi 6</h5>
                  <p className="text-sm text-gray-500">Roteadores de última geração para cobertura total da sua casa ou empresa.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-[#fbfbfb] p-6 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center border-b-4 border-[#39ff14] text-3xl">👥</div>
                <div>
                  <h5 className="font-bold text-lg">Suporte Técnico 24h</h5>
                  <p className="text-sm text-gray-500">Nossa equipe técnica local mora em Alegrete e te atende a qualquer hora.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start bg-[#fbfbfb] p-6 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center border-b-4 border-[#39ff14] text-3xl">📅</div>
                <div>
                  <h5 className="font-bold text-lg">Instalação Rural de Elite</h5>
                  <p className="text-sm text-gray-500">Agende com o Henrique e receba nossa equipe em tempo recorde no campo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
             <div className="w-full h-[450px] bg-gray-200 rounded-[50px] shadow-2xl overflow-hidden border-8 border-white group-hover:shadow-[#39ff14]/20 transition-all duration-500">
                {/* Imagem Institucional MkNet */}
                <img src="/mknet-institucional.jpeg" className="w-full h-full object-cover" alt="Equipe MkNet" />
             </div>
             {/* Badge Neon sobre a imagem */}
             <div className="absolute -bottom-8 -right-8 bg-[#39ff14] p-8 rounded-[35px] shadow-[0_15px_30px_rgba(57,255,20,0.3)] font-black italic text-black leading-none text-center">
                100%<br/><span className="text-[11px] uppercase font-bold tracking-widest">Fibra Óptica</span>
             </div>
          </div>
        </div>
      </motion.section>

      {/* 5. SEÇÃO FAQ (Dúvidas Frequentes) */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, amount: 0.3 }} className="py-24 bg-[#f8fafc] relative z-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <h3 className="text-3xl font-black uppercase tracking-tight text-gray-950">Tire suas <span className="text-[#39ff14]">Dúvidas</span></h3>
            <p className="text-gray-500 text-sm">Respostas para as perguntas mais comuns dos nossos clientes.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-gray-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left font-bold text-gray-900 group"
                >
                  <span className="text-lg group-hover:text-[#008f11]">{faq.q}</span>
                  <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#39ff14]' : 'rotate-0 text-gray-300'}`}>▼</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 mt-5' : 'max-h-0'}`}>
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. SEÇÃO AVALIAÇÕES (Prova Social) */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true, amount: 0.3 }} className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <h3 className="text-3xl font-black uppercase tracking-tight text-gray-950">O que dizem os <span className="text-[#39ff14]">Clientes</span></h3>
            <p className="text-gray-500 text-sm">A opinião de quem já usa a ultra velocidade MkNet em Alegrete.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fbfbfb] p-8 rounded-3xl border border-gray-100 space-y-4 relative">
              <span className="text-6xl text-[#39ff14]/30 absolute top-4 left-4 font-black"></span>
              <p className="text-gray-700 italic text-sm leading-relaxed relative z-10 pt-8">Instalação rápida e o sinal Wi-Fi cobre a casa toda. O atendimento 24h é muito útil.</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">A.</div>
                <div><h6 className="font-bold text-sm">André Silva</h6><p className="text-xs text-gray-400">Plano Turbo Gamer</p></div>
              </div>
            </div>
            <div className="bg-[#fbfbfb] p-8 rounded-3xl border border-gray-100 space-y-4 relative">
              <span className="text-6xl text-[#39ff14]/30 absolute top-4 left-4 font-black"></span>
              <p className="text-gray-700 italic text-sm leading-relaxed relative z-10 pt-8">Estou muito satisfeita com a velocidade estável. O preço fixo me dá tranquilidade.</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">M.</div>
                <div><h6 className="font-bold text-sm">Marta Gomes</h6><p className="text-xs text-gray-400">Plano Essencial</p></div>
              </div>
            </div>
            <div className="bg-[#fbfbfb] p-8 rounded-3xl border border-gray-100 space-y-4 relative">
              <span className="text-6xl text-[#39ff14]/30 absolute top-4 left-4 font-black"></span>
              <p className="text-gray-700 italic text-sm leading-relaxed relative z-10 pt-8">A MkNet mudou a forma como trabalhamos no campo. Ótima velocidade rural!</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">J.</div>
                <div><h6 className="font-bold text-sm">João Oliveira</h6><p className="text-xs text-gray-400">Produtor Rural</p></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. RODAPÉ COMPLETO */}
      <footer className="bg-[#f0f2f5] border-t border-gray-200 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-10 flex flex-col items-center">
             <span className="text-4xl font-black italic tracking-tighter text-gray-950 mb-3 drop-shadow-[0_0_10px_rgba(57,255,20,0.1)]">MkNet</span>
             <div className="w-12 h-[3px] bg-[#39ff14] rounded-full"></div>
          </div>
          
          <div className="text-gray-500 text-[11px] uppercase tracking-[0.4em] mb-10 font-bold">
            Compromisso MkNet Alegrete
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left text-gray-600 text-[12px] leading-relaxed border-t border-gray-200 pt-10 px-4">
            <p>
              <b>LGPD & PRIVACIDADE:</b> A MkNet Solutions processa seus dados pessoais (Nome, CPF, Endereço e Telefone) apenas para fins de viabilidade técnica e formalização do contrato de prestação de serviços, em estrita conformidade com a Lei Geral de Proteção de Dados. Não compartilhamos suas informações com terceiros para fins de marketing.
            </p>
            <p>
              <b>TERMOS DE SERVIÇO:</b> Os valores dos planos (R$79, R$99 e R$149) são fixos conforme contrato vigente. A instalação rural está sujeita a análise de viabilidade técnica e infraestrutura local. O Roteador Wi-Fi 6 é cedido em regime de comodato enquanto o contrato estiver ativo.
            </p>
          </div>
        </div>
      </footer>

      {/* Estilos das Animações e Grid Pulsante */}
      <style jsx global>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        @keyframes fadeInY {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Classe de animação simples para quando FRAMER MOTION não estiver disponível */
        .animate-on-scroll {
          opacity: 0;
          animation: fadeInY 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="pt-16 pb-8 md:pt-20 md:pb-12 px-6 md:px-12 lg:px-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 space-y-8 z-10"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#8B1525] to-[#6B0D1A] tracking-tighter leading-[0.9]">
              NOSSO PROPÓSITO
            </h2>
            <div className="w-12 h-1 bg-wine/80"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-light font-light leading-relaxed opacity-90 max-w-xl">
            Somos <strong className="text-[#E74C60] font-medium drop-shadow-[0_0_10px_rgba(107,13,26,0.6)]">Os Vingadores, Paz e Justiça</strong>. Inspirados pela força da Fênix, unimos corações e ações para promover os Objetivos de Desenvolvimento Sustentável.
          </p>
          <p className="text-lg md:text-xl text-gray-light/60 font-light leading-relaxed max-w-xl">
            Nosso foco é o <strong className="text-white font-normal">ODS 18 – Igualdade Étnico-Racial</strong>. Cada desafio é uma oportunidade de combater o racismo, fortalecer a justiça e impactar positivamente o mundo ao nosso redor.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="flex-1 w-full relative min-h-[350px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
        >
           {/* Photo Frame Placeholder */}
           <div className="relative w-full max-w-sm md:max-w-lg aspect-video flex items-center justify-center group cursor-default shadow-[0_0_50px_rgba(107,13,26,0.2)]">
             {/* The Blur Aura */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wine/30 blur-[70px] rounded-full mix-blend-screen animate-pulse pointer-events-none"></div>

             {/* Frame 1: Wine (rotate-6) */}
             <div className="absolute inset-0 border border-[#D32F44] rotate-6 transition-transform duration-700 group-hover:rotate-[8deg]"></div>
             
             {/* Frame 2: Darker Wine/Gold (-rotate-3) */}
             <div className="absolute inset-0 border border-gold/30 -rotate-3 transition-transform duration-700 group-hover:-rotate-[5deg]"></div>

             {/* Frame 3: Black (no rotation) - future photo container */}
             <div className="absolute inset-0 border-2 border-black bg-[#111] z-10 flex flex-col items-center justify-center gap-4 transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/20 font-body uppercase tracking-[0.2em] text-[10px]">Espaço para Foto</span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useSimplifyEffects } from "../context/SimplifyEffectsContext";

export default function FundraisingCTA() {
  const [init, setInit] = useState(false);
  const { simplifyEffects } = useSimplifyEffects();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="arrecadacao" className="py-16 md:py-20 px-6 relative bg-transparent flex items-center justify-center text-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.5)_0%,_transparent_70%)] pointer-events-none"></div>

      {init && !simplifyEffects && (
        <Particles
          id="cta-particles"
          className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30 },
              color: { value: ["#6B0D1A", "#8B1525", "#DAAF37", "#ffffff"] },
              shape: { type: "circle" },
              opacity: { value: { min: 0.2, max: 0.8 } },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "backOut" }}
           className="mb-6"
        >
          <img src="https://look.jmgbb.com/images/N_-MuRU_FG.png" alt="Icon" className="w-24 h-24 object-contain drop-shadow-[0_0_30px_rgba(107,13,26,0.8)] opacity-90 transition-transform duration-700 hover:scale-[1.15]" referrerPolicy="no-referrer" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#8B1525] to-[#6B0D1A] mb-4 tracking-tight leading-none"
          style={{ textShadow: "0 10px 40px rgba(107, 13, 26, 0.4)" }}
        >
          FAÇA PARTE DA ONDA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-light/80 mb-8 font-light max-w-2xl mx-auto"
        >
          Cada contribuição acende a chama da solidariedade. Junte-se a nós para construirmos instituições mais fortes.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
          href="https://coleta.vingadores.workers.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 justify-center px-12 py-6 bg-[#6B0D1A] text-white font-body font-normal text-lg tracking-[0.15em] hover:bg-[#8B1525] transition-all duration-500 overflow-hidden"
          style={{ animation: "pulseCTA 3s infinite" }}
        >
          <span className="relative z-10">ACESSAR ONDA DE ARRECADAÇÃO</span>
          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        </motion.a>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes pulseCTA {
          0% { box-shadow: 0 0 0 0 rgba(107,13,26,0.6); }
          50% { box-shadow: 0 0 0 30px rgba(107,13,26,0); }
          100% { box-shadow: 0 0 0 0 rgba(107,13,26,0); }
        }
      `}</style>
    </section>
  );
}

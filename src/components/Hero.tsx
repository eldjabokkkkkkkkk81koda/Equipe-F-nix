import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useSimplifyEffects } from "../context/SimplifyEffectsContext";

export default function Hero() {
  const [init, setInit] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { simplifyEffects } = useSimplifyEffects();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center bg-transparent">
      {/* Background with animated breathing radial gradient */}
      <motion.div 
        animate={simplifyEffects ? { opacity: 0.6 } : { 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6] 
        }}
        transition={simplifyEffects ? { duration: 0.5 } : { 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.5)_0%,_transparent_70%)] pointer-events-none" 
      />

      {init && !simplifyEffects && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 mask-image-radial z-0 pointer-events-none"
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            particles: {
              number: { value: 40 },
              color: { value: ["#6B0D1A", "#8B1525", "#ffffff", "#DAAF37"] },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: { enable: true, speed: 0.5, sync: false }
              },
              size: {
                value: { min: 0.5, max: 2.5 },
                animation: { enable: true, speed: 1, sync: false }
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
              },
              modes: {
                bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8 },
              },
            },
          }}
        />
      )}

      <motion.div style={simplifyEffects ? { opacity: 1, y: 0 } : { y, opacity, willChange: "transform, opacity" }} className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <motion.div
           initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
           animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
           transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
           className="mb-8 relative"
        >
          {/* Intense glow behind phoenix */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-wine/30 blur-[50px] rounded-full" />
          <motion.div
            animate={simplifyEffects ? { y: 0 } : { y: [0, -15, 0] }}
            transition={simplifyEffects ? { duration: 0.5 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img src="https://look.jmgbb.com/images/N_-MuRU_FG.png" alt="Logo" className="w-48 h-48 sm:w-64 sm:h-64 object-contain drop-shadow-[0_0_35px_rgba(107,13,26,0.6)] transition-all duration-700" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col items-center">
          <motion.h1
            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#8B1525] to-[#6B0D1A] mb-2 font-display font-medium tracking-tighter leading-[0.9]"
          >
            OS VINGADORES
          </motion.h1>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-wine to-transparent mb-6"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="text-sm sm:text-lg md:text-xl font-light tracking-[0.6em] text-gray-light mb-10 opacity-80 uppercase"
          >
            Paz e Justiça
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row w-full justify-center items-center mt-6"
        >
          <a
            href="#about"
            className="group relative flex flex-col items-center justify-center text-gray-light/60 hover:text-white transition-colors duration-500 font-body font-light text-xs sm:text-sm tracking-[0.3em] uppercase py-2"
          >
            <span>Nossa Jornada</span>
            <span className="absolute bottom-0 w-0 h-px bg-wine/60 group-hover:w-full transition-all duration-500 ease-out" />
          </a>
        </motion.div>
      </motion.div>

      <style>{`
        .mask-image-radial {
          mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
        }
      `}</style>
    </section>
  );
}

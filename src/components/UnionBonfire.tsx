import { motion } from "motion/react";
import { Flame } from "lucide-react";
import { useState } from "react";
import { useSimplifyEffects } from "../context/SimplifyEffectsContext";

export default function UnionBonfire() {
  const { simplifyEffects } = useSimplifyEffects();
  const [isHeatingUp, setIsHeatingUp] = useState(false);

  // Link provisionório para facilitar a substituição posterior
  const redirectLink = "https://fogueira.netlify.app/"; 

  const handleIgnite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHeatingUp) return;
    
    setIsHeatingUp(true);

    // O botão fica esquentando por 2.5 segundos
    setTimeout(() => {
      if (redirectLink !== "#") {
        window.open(redirectLink, "_blank", "noopener,noreferrer");
      } else {
        alert("O link da Fogueira da União será adicionado aqui em breve!");
      }
      setIsHeatingUp(false);
    }, 2500);
  };

  return (
    <section id="fogueira-da-uniao" className="relative w-full py-32 bg-transparent flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <motion.div 
        animate={
          simplifyEffects ? { opacity: 0.3 } : 
          isHeatingUp ? {
            scale: [1, 1.5, 2],
            opacity: [0.3, 0.6, 0.8],
          } : { 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
        }}
        transition={
          simplifyEffects ? { duration: 0 } : 
          isHeatingUp ? { duration: 2.5, ease: "easeIn" } : { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 pointer-events-none rounded-full blur-2xl md:blur-[100px] transition-colors duration-1000 ${
          isHeatingUp ? 'bg-[radial-gradient(circle_at_center,_rgba(218,175,55,0.4)_0%,_rgba(231,76,96,0.2)_40%,_rgba(0,0,0,0)_70%)]' : 'bg-[radial-gradient(circle_at_center,_rgba(218,175,55,0.15)_0%,_rgba(107,13,26,0.1)_40%,_rgba(0,0,0,0)_70%)]'
        }`} 
      />

      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-xs sm:text-sm font-light tracking-[0.4em] text-gold/80 mb-6 uppercase"
        >
          Tradição e Força
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl font-display font-light text-white mb-8"
        >
          A Fogueira da <span className="text-wine font-medium">União</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 font-body font-light text-sm md:text-base leading-relaxed mb-12"
        >
          Um espaço criado para fortalecer nossos laços, aquecer nossos propósitos e celebrar a união de todos que fazem parte desta jornada. A chama só se mantém viva quando estamos juntos.
        </motion.p>

        <div className="relative group">
          {/* The Bonfire Button */}
          <motion.a
            href={redirectLink}
            onClick={handleIgnite}
            animate={isHeatingUp && !simplifyEffects ? {
              scale: [1, 1.05, 1.1, 1.15],
              boxShadow: [
                "0 0 40px rgba(218,175,55,0.4)",
                "0 0 80px rgba(231,76,96,0.6)",
                "0 0 120px rgba(218,175,55,0.8)"
              ]
            } : {}}
            transition={{ duration: 2.5, ease: "easeIn" }}
            className={`relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border bg-black transition-all duration-700 pointer-events-auto cursor-pointer focus:outline-none z-10 ${
              isHeatingUp 
                ? 'border-gold/80 bg-wine/20' 
                : 'border-wine/30 hover:bg-wine/10 hover:border-gold/50 hover:shadow-[0_0_40px_rgba(218,175,55,0.4)]'
            }`}
          >
            {/* Inner pulsating core */}
            <motion.div
              animate={
                simplifyEffects ? { scale: 1 } : 
                isHeatingUp ? { scale: [1, 1.8], opacity: [0.8, 1] } : { scale: [1, 1.1, 1] }
              }
              transition={
                simplifyEffects ? { duration: 0 } : 
                isHeatingUp ? { duration: 2.5, ease: "easeIn" } : { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
              className={`absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-wine to-gold/80 rounded-full blur-xl transition-opacity duration-700 ${
                isHeatingUp ? 'opacity-100' : 'opacity-40 group-hover:opacity-80'
              }`}
            />
            
            <Flame 
              className={`w-10 h-10 md:w-14 md:h-14 transition-all duration-500 relative z-10 ${
                isHeatingUp ? 'text-white scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,1)]' : 'text-white/70 group-hover:text-gold'
              }`} 
              strokeWidth={isHeatingUp ? 2 : 1.5} 
            />
            
            <span className="sr-only">Acessar a Fogueira da União</span>
          </motion.a>
        </div>

        <motion.div
          animate={isHeatingUp ? { opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] } : { opacity: 1, scale: 1 }}
          transition={isHeatingUp ? { duration: 0.8, repeat: Infinity } : { duration: 0.3 }}
          className={`mt-8 text-xs md:text-sm tracking-widest uppercase font-light pointer-events-none transition-colors duration-500 z-10 ${
            isHeatingUp ? 'text-gold drop-shadow-[0_0_8px_rgba(218,175,55,0.8)]' : 'text-gray-500 group-hover:text-gold/80'
          }`}
        >
          {isHeatingUp ? "Esquentando a chama..." : "Acender a Chama"}
        </motion.div>

      </div>
    </section>
  );
}

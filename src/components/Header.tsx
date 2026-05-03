import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding,border-color,backdrop-filter] duration-500 ${
          isScrolled ? "md:bg-[#030303]/80 md:backdrop-blur-xl md:py-4 md:border-b md:border-white/5" : "md:bg-transparent md:py-8 py-6 pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isHidden ? "-100%" : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
          <a href="#hero" className="hidden md:flex items-center gap-4 group">
            <img src="https://look.jmgbb.com/images/N_-MuRU_FG.png" alt="Os Vingadores" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            <span className="font-display font-medium text-xl md:text-2xl tracking-[0.2em] text-gray-light uppercase">Os Vingadores</span>
          </a>
          
          <div className="md:hidden flex-1" />
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="https://linhagem.vingadores.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-body tracking-[0.15em] text-gray-light/40 hover:text-gray-light/80 hover:scale-105 transition-all duration-300"
            >
              LINHA DO TEMPO
            </a>
            <a href="#about" className="text-sm font-body tracking-[0.15em] text-gray-light/60 hover:text-[#D32F44] hover:scale-105 transition-all duration-300">PROPÓSITO</a>
            <a href="#mascot" className="text-sm font-body tracking-[0.15em] text-gray-light/60 hover:text-[#D32F44] hover:scale-105 transition-all duration-300">A FÊNIX</a>
            <a href="#arrecadacao" className="text-sm font-body font-bold tracking-[0.15em] text-[#D32F44] hover:text-white hover:scale-105 transition-all duration-300">ARRECADAÇÃO</a>
          </nav>

          <button 
            className="md:hidden text-[#D32F44] hover:text-white transition-all p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-xl fixed top-6 right-6 z-[60]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Tracking scroll progress - hidden in mobile */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-transparent">
          <motion.div 
            className="h-full bg-gradient-to-r from-wine/50 to-wine"
            style={{ originX: 0, scaleX: scrollYProgress }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-black/80 flex flex-col items-center justify-center pointer-events-auto"
          >
            <button 
              className="absolute top-6 right-6 text-[#D32F44] hover:text-white transition-colors p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center gap-10">
              <a 
                href="https://linhagem.vingadores.workers.dev/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
                style={{ fontSize: '1rem', fontStyle: 'italic' }}
              >
                LINHA DO TEMPO
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-[0.2em] text-gray-light hover:text-[#D32F44] transition-colors">PROPÓSITO</a>
              <a href="#mascot" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display tracking-[0.2em] text-gray-light hover:text-[#D32F44] transition-colors">A FÊNIX</a>
              <a href="#arrecadacao" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium tracking-[0.2em] text-[#D32F44] hover:text-white transition-colors">ARRECADAÇÃO</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

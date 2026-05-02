import { useRef } from "react";
import { useInView, motion } from "motion/react";

const phrase = "Das cinzas, o renascimento. Do fogo, a inspiração. A faísca que ilumina a justiça.";

export default function Mascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const words = phrase.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.4 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="mascot" className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 lg:px-24 bg-transparent relative flex items-center justify-center min-h-[30vh]">
      {/* Subtle glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-wine/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center" ref={containerRef}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-light leading-[1.3] md:leading-[1.4] tracking-wide pointer-events-none flex flex-wrap justify-center gap-x-[0.25em] gap-y-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, index) => {
            // Apply special styling to key words
            const isHighlight = word.includes("renascimento") || word.includes("inspiração") || word.includes("justiça") || word.includes("cinzas") || word.includes("fogo");
            
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={isHighlight ? "text-[#E74C60] font-normal drop-shadow-[0_0_15px_rgba(231,76,96,0.3)]" : "text-gray-200"}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>
    </section>
  );
}


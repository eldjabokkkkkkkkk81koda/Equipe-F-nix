import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with a mouse
    if (!matchMedia("(pointer: fine)").matches) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: "rgba(255, 255, 255, 1)",
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      {/* Small dot in center */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-gold pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}

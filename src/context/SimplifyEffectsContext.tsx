import React, { createContext, useContext, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

interface SimplifyEffectsContextType {
  simplifyEffects: boolean;
}

const SimplifyEffectsContext = createContext<SimplifyEffectsContextType>({ simplifyEffects: false });

export function SimplifyEffectsProvider({ children }: { children: React.ReactNode }) {
  const [simplifyEffects, setSimplifyEffects] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Check if it was saved in session storage
    const saved = sessionStorage.getItem("simplifyEffects");
    if (saved === "true") {
      setSimplifyEffects(true);
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // When the user scrolls past 300px, we turn on simplified effects for the rest of the session
    // This stops heavy scroll effects when returning to the top or scrolling back through
    if (!simplifyEffects && latest > 300) {
      setSimplifyEffects(true);
      sessionStorage.setItem("simplifyEffects", "true");
    }
  });

  return (
    <SimplifyEffectsContext.Provider value={{ simplifyEffects }}>
      {children}
    </SimplifyEffectsContext.Provider>
  );
}

export function useSimplifyEffects() {
  return useContext(SimplifyEffectsContext);
}

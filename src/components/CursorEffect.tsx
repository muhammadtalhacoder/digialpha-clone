import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const CursorEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create smoke particles
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.slice(1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(0 84% 50% / 0.8), transparent 70%)",
          boxShadow: "0 0 30px hsl(0 84% 50% / 0.5), 0 0 60px hsl(0 84% 50% / 0.3)",
        }}
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />

      {/* Smoke particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: particle.x - 10,
              y: particle.y - 10,
              scale: 0.5,
              opacity: 0.8,
            }}
            animate={{
              y: particle.y - 60,
              scale: 2,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "radial-gradient(circle, hsl(0 70% 40% / 0.4), transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default CursorEffect;

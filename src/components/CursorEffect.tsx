import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const CursorEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create more smoke particles with varying sizes
      if (now - lastTime > 20) {
        const newParticles: Particle[] = [];
        
        // Create 3-5 particles per movement
        for (let i = 0; i < 4; i++) {
          newParticles.push({
            id: particleId++,
            x: e.clientX + (Math.random() - 0.5) * 30,
            y: e.clientY + (Math.random() - 0.5) * 30,
            size: 15 + Math.random() * 25,
          });
        }

        setParticles((prev) => [...prev.slice(-40), ...newParticles]);
        lastTime = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.slice(2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(0 84% 50% / 0.9), hsl(0 84% 40% / 0.5) 40%, transparent 70%)",
          boxShadow: "0 0 40px hsl(0 84% 50% / 0.6), 0 0 80px hsl(0 84% 50% / 0.4), 0 0 120px hsl(0 84% 50% / 0.2)",
        }}
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      />

      {/* Inner cursor core */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[10000]"
        style={{
          background: "radial-gradient(circle, hsl(0 100% 70%), hsl(0 84% 50%))",
          boxShadow: "0 0 20px hsl(0 84% 60% / 0.8)",
        }}
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 500 }}
      />

      {/* Smoke particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: particle.x - particle.size / 2,
              y: particle.y - particle.size / 2,
              scale: 0.3,
              opacity: 0.7,
            }}
            animate={{
              y: particle.y - 100 - Math.random() * 50,
              x: particle.x + (Math.random() - 0.5) * 60,
              scale: 2.5,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, hsl(0 70% 45% / 0.5), hsl(0 60% 30% / 0.3) 50%, transparent 70%)`,
              filter: "blur(10px)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Additional ember particles */}
      <AnimatePresence>
        {particles.filter((_, i) => i % 3 === 0).map((particle) => (
          <motion.div
            key={`ember-${particle.id}`}
            className="fixed pointer-events-none z-[9997]"
            initial={{
              x: particle.x - 3,
              y: particle.y - 3,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              y: particle.y - 80,
              x: particle.x + (Math.random() - 0.5) * 40,
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "hsl(30 100% 60%)",
              boxShadow: "0 0 8px hsl(20 100% 50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default CursorEffect;
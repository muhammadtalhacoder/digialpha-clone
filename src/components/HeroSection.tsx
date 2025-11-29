import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
      
      {/* Glow effect */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Hero image */}
      <div className="absolute inset-0 flex items-end justify-center">
        <motion.img 
          src={heroBanner} 
          alt="Gaming characters lineup"
          className="w-full max-w-7xl object-cover object-top opacity-90"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-4 -mt-32">
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-9xl tracking-wider glow-text-white text-foreground"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          FURSUIT DESIGN X
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Premium Fursuit Design & Custom Character Art for Creators Worldwide
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
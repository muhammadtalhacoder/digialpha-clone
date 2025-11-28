import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      
      {/* Hero image */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img 
          src={heroBanner} 
          alt="Gaming characters lineup"
          className="w-full max-w-7xl object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center px-4 -mt-32">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider glow-text text-gradient animate-fade-in">
          DIGI DESIGNS
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
          The Ultimate Solutions for Streamers, Gamers, And Content Creators
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

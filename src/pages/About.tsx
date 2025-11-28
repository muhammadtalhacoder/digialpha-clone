import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Users, Award, Heart, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "1000+", label: "Projects Completed" },
  { icon: Heart, value: "5 Years", label: "Experience" },
  { icon: Sparkles, value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorEffect />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <motion.div 
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl text-center tracking-wider text-gradient mb-6">
                ABOUT US
              </h1>
              <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
                We are a passionate team of artists dedicated to bringing your furry characters to life
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center p-6 bg-card rounded-xl border border-border/50">
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="font-display text-3xl md:text-4xl text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <p className="text-primary font-medium uppercase tracking-wider">Our Story</p>
                  <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                    CRAFTING DREAMS INTO REALITY
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    FurSuit Design X started with a simple passion: helping furry artists and creators 
                    bring their unique characters to life. What began as a small team of dedicated artists 
                    has grown into a full-service design studio.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We specialize in custom fursuit designs, reference sheets, emotes, banners, 
                    VTuber models, and everything in between. Every project is handled with care, 
                    creativity, and attention to detail.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is simple: to help you express your unique identity through 
                    stunning artwork that truly represents who you are.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
                  <div className="relative bg-card rounded-xl border border-border/50 p-8">
                    <h3 className="font-display text-2xl mb-4">Why Choose Us?</h3>
                    <ul className="space-y-4">
                      {[
                        "100% Custom & Original Designs",
                        "Fast Turnaround Times",
                        "Unlimited Revisions",
                        "Affordable Pricing",
                        "Professional Communication",
                        "Satisfaction Guaranteed"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

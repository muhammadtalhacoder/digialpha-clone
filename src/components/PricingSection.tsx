import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fetchPricingItems, PricingItem } from "@/lib/sanity";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { Check, Loader2, ArrowRight } from "lucide-react";

const defaultPricing: PricingItem[] = [
  { _id: "1", title: "Custom Emotes", description: "High-quality Twitch/Discord emotes", category: "Emotes", price: 25 },
  { _id: "2", title: "Sub Badges", description: "Loyalty badges for your subscribers", category: "Badges", price: 40 },
  { _id: "3", title: "Stream Overlays", description: "Animated overlays for your stream", category: "Overlays", price: 100 },
  { _id: "4", title: "Fursuit Head Design", description: "Full custom fursuit head reference", category: "Fursuit", price: 200 },
  { _id: "5", title: "VTuber Model", description: "Live2D ready character model", category: "VTuber", price: 350 },
  { _id: "6", title: "Full Fursuit Reference", description: "Complete character reference sheet", category: "Fursuit", price: 500 },
];

const PricingSection = () => {
  const [items, setItems] = useState<PricingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchPricingItems();
      setItems(data.length > 0 ? data.slice(0, 6) : defaultPricing);
      setLoading(false);
    };
    loadItems();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-4">
              PRICING
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing for all your creative needs
            </p>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item, index) => (
              <ScrollReveal key={item._id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border/50 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex-1">
                    <span className="text-xs text-primary uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl mt-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display text-primary">
                        ${item.price}
                      </span>
                      <span className="text-muted-foreground text-sm">USD</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>High quality delivery</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link to="/pricing">
            <Button variant="hero" size="lg" className="group">
              View All Pricing
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

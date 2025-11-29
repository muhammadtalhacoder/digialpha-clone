import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, Loader2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string | null;
  category: string;
  price: number | null;
}

const defaultPricing = [
  { id: "1", title: "Custom Emotes", description: "High-quality Twitch/Discord emotes. Perfect for your streaming channel.", category: "Emotes", price: 25 },
  { id: "2", title: "Sub Badges", description: "Loyalty badges for your subscribers. Multiple tiers available.", category: "Badges", price: 40 },
  { id: "3", title: "Channel Banner", description: "Eye-catching banner design for YouTube or Twitch.", category: "Banners", price: 60 },
  { id: "4", title: "Stream Overlays", description: "Animated overlays for your stream. Includes alerts and scenes.", category: "Overlays", price: 100 },
  { id: "5", title: "Thumbnail Pack", description: "Professional thumbnails for your content.", category: "Thumbnails", price: 75 },
  { id: "6", title: "Fursuit Head Design", description: "Full custom fursuit head reference with multiple angles.", category: "Fursuit", price: 200 },
  { id: "7", title: "VTuber Model", description: "Live2D ready character model with expressions.", category: "VTuber", price: 350 },
  { id: "8", title: "Full Fursuit Reference", description: "Complete character reference sheet with full body views.", category: "Fursuit", price: 500 },
];

const categories = ["All", "Emotes", "Badges", "Banners", "Overlays", "Thumbnails", "Fursuit", "VTuber"];

const Pricing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("id, title, description, category, price")
      .not("price", "is", null)
      .order("price", { ascending: true });

    if (!error && data && data.length > 0) {
      setProducts(data);
    }
    setLoading(false);
  };

  const displayItems = products.length > 0 ? products : defaultPricing;
  const filteredItems = selectedCategory === "All" 
    ? displayItems 
    : displayItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      <CursorEffect />
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl text-center tracking-wider text-foreground mb-6">
                PRICING
              </h1>
              <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                Transparent pricing for all your creative needs. Custom quotes available for complex projects.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <ScrollReveal key={item.id} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-card border border-border/50 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10 flex-1">
                        <span className="inline-block px-3 py-1 text-xs text-primary bg-primary/10 rounded-full uppercase tracking-wider font-semibold mb-4">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="relative z-10 mt-6 pt-4 border-t border-border/50">
                        <div className="flex items-baseline gap-1 mb-4">
                          <span className="text-xs text-muted-foreground">from</span>
                          <span className="text-4xl font-display text-primary">
                            ${item.price}
                          </span>
                          <span className="text-muted-foreground text-sm">USD</span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>High quality delivery</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>Revisions included</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>Commercial use</span>
                          </div>
                        </div>

                        <Link to="/contact">
                          <Button variant="outline" size="sm" className="w-full group">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {filteredItems.length === 0 && !loading && (
              <p className="text-center text-muted-foreground py-20">
                No pricing items found in this category.
              </p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-5xl tracking-wider text-foreground mb-4">
                NEED SOMETHING CUSTOM?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Every project is unique. Contact us for a personalized quote tailored to your specific needs.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
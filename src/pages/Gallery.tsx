import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

// Import default images
import mascotLogo from "@/assets/mascot-logo.jpg";
import bannerDesign from "@/assets/banner-design.jpg";
import emotes from "@/assets/emotes.jpg";
import subBadges from "@/assets/sub-badges.jpg";
import streamOverlay from "@/assets/stream-overlay.jpg";
import vtuberModel from "@/assets/vtuber-model.jpg";
import thumbnails from "@/assets/thumbnails.jpg";

interface Product {
  id: string;
  title: string;
  description: string | null;
  category: string;
  image_url: string | null;
  price: number | null;
}

const defaultImages: Record<string, string> = {
  "fursuit": mascotLogo,
  "banners": bannerDesign,
  "emotes": emotes,
  "badges": subBadges,
  "overlays": streamOverlay,
  "vtuber": vtuberModel,
  "thumbnails": thumbnails,
};

const categories = ["All", "Fursuit", "Banners", "Emotes", "Badges", "Overlays", "VTuber", "Thumbnails"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  // Default gallery items when no products exist
  const defaultItems = [
    { id: "1", title: "Fierce Lion Mascot", category: "Fursuit", image_url: mascotLogo, description: "Custom fursuit head design", price: 150 },
    { id: "2", title: "Gaming Banner", category: "Banners", image_url: bannerDesign, description: "YouTube channel banner", price: 50 },
    { id: "3", title: "Emote Pack", category: "Emotes", image_url: emotes, description: "Custom Twitch emotes", price: 80 },
    { id: "4", title: "Sub Badges Set", category: "Badges", image_url: subBadges, description: "Loyalty badges", price: 60 },
    { id: "5", title: "Stream Overlay", category: "Overlays", image_url: streamOverlay, description: "Animated overlay", price: 120 },
    { id: "6", title: "VTuber Model", category: "VTuber", image_url: vtuberModel, description: "Live2D character", price: 300 },
    { id: "7", title: "Thumbnail Pack", category: "Thumbnails", image_url: thumbnails, description: "YouTube thumbnails", price: 40 },
  ];

  const displayItems = products.length > 0 ? filteredProducts : defaultItems.filter(
    item => selectedCategory === "All" || item.category === selectedCategory
  );

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
              <h1 className="font-display text-5xl md:text-7xl text-center tracking-wider text-gradient mb-6">
                GALLERY
              </h1>
              <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
                Explore our portfolio of custom designs and artwork
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

        {/* Gallery Grid */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {displayItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative bg-card rounded-xl overflow-hidden border border-border/50"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image_url || defaultImages[item.category.toLowerCase()] || mascotLogo}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs text-primary uppercase tracking-wider">{item.category}</span>
                        <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                        {item.price && (
                          <p className="text-primary font-bold mt-1">${item.price}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {displayItems.length === 0 && !loading && (
              <p className="text-center text-muted-foreground py-20">
                No items found in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;

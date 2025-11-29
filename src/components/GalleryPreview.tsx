import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

import mascotLogo from "@/assets/mascot-logo.jpg";
import bannerDesign from "@/assets/banner-design.jpg";
import emotes from "@/assets/emotes.jpg";
import subBadges from "@/assets/sub-badges.jpg";
import streamOverlay from "@/assets/stream-overlay.jpg";
import vtuberModel from "@/assets/vtuber-model.jpg";

interface Product {
  id: string;
  title: string;
  category: string;
  image_url: string | null;
}

const defaultImages: Record<string, string> = {
  "fursuit": mascotLogo,
  "banners": bannerDesign,
  "emotes": emotes,
  "badges": subBadges,
  "overlays": streamOverlay,
  "vtuber": vtuberModel,
};

const defaultItems = [
  { id: "1", title: "Fierce Lion Mascot", category: "Fursuit", image_url: mascotLogo },
  { id: "2", title: "Gaming Banner", category: "Banners", image_url: bannerDesign },
  { id: "3", title: "Emote Pack", category: "Emotes", image_url: emotes },
  { id: "4", title: "Sub Badges Set", category: "Badges", image_url: subBadges },
  { id: "5", title: "Stream Overlay", category: "Overlays", image_url: streamOverlay },
  { id: "6", title: "VTuber Model", category: "VTuber", image_url: vtuberModel },
];

const GalleryPreview = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("id, title, category, image_url")
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data && data.length > 0) {
      setProducts(data);
    }
    setLoading(false);
  };

  const displayItems = products.length > 0 ? products : defaultItems;

  return (
    <section className="py-24 relative overflow-hidden" id="gallery">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-4">
              GALLERY
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our latest custom designs and artwork
            </p>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {displayItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-border/50"
                >
                  <img
                    src={item.image_url || defaultImages[item.category.toLowerCase()] || mascotLogo}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-primary uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link to="/gallery">
            <Button variant="hero" size="lg" className="group">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
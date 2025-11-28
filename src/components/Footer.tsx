import { Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl tracking-wider text-gradient mb-4">
              DIGI DESIGNS
            </h3>
            <p className="text-muted-foreground text-sm">
              The Ultimate Solutions for Streamers, Gamers, And Content Creators
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services 1 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Mascot Gaming Logo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Gaming Banners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Emotes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Subs Badges</a></li>
            </ul>
          </div>

          {/* Services 2 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">More Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Stream Overlays</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">VTuber Models</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Thumbnails</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Need Help?</h4>
            <p className="text-muted-foreground text-sm mb-4">Chat with us on WhatsApp</p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Copyright © 2025 Digi Designs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

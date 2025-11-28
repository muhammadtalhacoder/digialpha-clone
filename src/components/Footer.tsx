import { Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl tracking-wider text-gradient mb-4">
              FURSUIT DESIGN X
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium Fursuit Design & Custom Character Art for Creators Worldwide
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
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Fursuit Designs</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Banners</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Emotes</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Subs Badges</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About Us</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Need Help?</h4>
            <p className="text-muted-foreground text-sm mb-4">Chat with us on Discord or WhatsApp</p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Copyright © 2025 FurSuit Design X. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

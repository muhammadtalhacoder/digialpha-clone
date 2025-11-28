import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-2xl md:text-3xl tracking-wider text-gradient">
          DIGI DESIGNS
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          <Button variant="hero" size="sm">Contact Us</Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <Button variant="hero" size="sm">Contact Us</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

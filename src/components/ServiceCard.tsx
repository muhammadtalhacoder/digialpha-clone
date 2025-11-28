import { Button } from "./ui/button";

interface ServiceCardProps {
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
  ctaText?: string;
}

const ServiceCard = ({ 
  subtitle, 
  title, 
  description, 
  features, 
  image, 
  reversed = false,
  ctaText = "View More"
}: ServiceCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`space-y-6 ${reversed ? 'md:order-2' : ''}`}>
        <div>
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground">
            {title}
          </h2>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <Button variant="hero" size="lg">
          {ctaText}
        </Button>
      </div>

      {/* Image */}
      <div className={`relative group ${reversed ? 'md:order-1' : ''}`}>
        <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card">
          <img 
            src={image} 
            alt={title}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

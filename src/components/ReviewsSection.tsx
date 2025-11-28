import { Star } from "lucide-react";

const reviews = [
  { name: "StreamerKing", rating: 5, text: "Amazing mascot logo! Exceeded expectations." },
  { name: "GamerGirl99", rating: 5, text: "Best emotes I've ever had. So expressive!" },
  { name: "ProPlayer_X", rating: 5, text: "The overlays transformed my stream completely." },
  { name: "VTuberStar", rating: 5, text: "My VTuber model is absolutely perfect!" },
  { name: "ContentKing", rating: 5, text: "Thumbnails that actually get clicks. Worth it!" },
  { name: "TwitchLegend", rating: 5, text: "Fast delivery, incredible quality. 10/10!" },
];

const ReviewCard = ({ name, rating, text }: { name: string; rating: number; text: string }) => (
  <div className="flex-shrink-0 w-80 bg-card border border-border/50 rounded-xl p-6 mx-4">
    <div className="flex items-center gap-1 mb-3">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-muted-foreground mb-4">{text}</p>
    <p className="font-semibold text-foreground">{name}</p>
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2 text-center">
          Riding the Creative Currents
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-center">
          DIGI DESIGN REVIEWS
        </h2>
        <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
          DesignWaves inundates with a tsunami of creativity, blending innovation and style seamlessly.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

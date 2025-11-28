import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  { name: "FurryCreator_X", rating: 5, text: "Amazing fursuit design! Exceeded all expectations." },
  { name: "StreamerWolf99", rating: 5, text: "Best emotes I've ever had. So expressive and cute!" },
  { name: "VTuberFox", rating: 5, text: "The VTuber model is absolutely perfect. Love it!" },
  { name: "GamingFurry", rating: 5, text: "My channel looks professional now. Worth every penny!" },
  { name: "ArtistPanda", rating: 5, text: "Fast delivery, incredible quality. 10/10 recommend!" },
  { name: "FurConArtist", rating: 5, text: "Reference sheets are so detailed and accurate!" },
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
        <ScrollReveal>
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2 text-center">
            What Our Clients Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-center">
            FURSUIT DESIGN X REVIEWS
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            Join hundreds of satisfied creators who brought their characters to life with us
          </p>
        </ScrollReveal>
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

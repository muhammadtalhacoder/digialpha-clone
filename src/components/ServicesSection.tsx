import ServiceCard from "./ServiceCard";
import ScrollReveal from "./ScrollReveal";
import mascotLogo from "@/assets/mascot-logo.jpg";
import bannerDesign from "@/assets/banner-design.jpg";
import emotes from "@/assets/emotes.jpg";
import subBadges from "@/assets/sub-badges.jpg";
import streamOverlay from "@/assets/stream-overlay.jpg";
import vtuberModel from "@/assets/vtuber-model.jpg";
import thumbnails from "@/assets/thumbnails.jpg";

const services = [
  {
    subtitle: "Custom And Professional 🐺🔥",
    title: "FURSUIT DESIGNS",
    description: "Professional Fursuit Design – Perfect Blend of Creativity and Precision for Your Fursona",
    features: [
      "Custom Fursuit Head Design",
      "Full Body Fursuit Art",
      "Reference Sheet Design",
      "Character Turnarounds",
      "Color Palette Selection"
    ],
    image: mascotLogo,
    ctaText: "View Designs"
  },
  {
    subtitle: "Professional 😎",
    title: "BANNERS",
    description: "Custom Banner Design – Professional Visuals for Every Platform",
    features: [
      "Banner Design",
      "YouTube Cover Design",
      "Furry Art Banners",
      "Convention Banners",
      "Social Media Headers"
    ],
    image: bannerDesign,
    ctaText: "View Banners"
  },
  {
    subtitle: "Express Your Feelings 😄😖",
    title: "EMOTES",
    description: "Custom Emote Design – Express Your Unique Style with Your Fursona",
    features: [
      "Custom Furry Emotes",
      "Twitch Emotes",
      "Discord Emotes",
      "Telegram Stickers",
      "Expression Packs"
    ],
    image: emotes,
    ctaText: "View Emotes"
  },
  {
    subtitle: "Own Tier 🥈🥉",
    title: "SUBS BADGES",
    description: "Custom Subscription Badges – Reward Loyalty with Style",
    features: [
      "Subscription Badges",
      "Custom Twitch Badges",
      "YouTube Subscriber Badges",
      "Channel Loyalty Badges",
      "Milestone Badges"
    ],
    image: subBadges,
    ctaText: "View Badges"
  },
  {
    subtitle: "Professional 😎",
    title: "STREAM OVERLAYS",
    description: "Custom Stream Overlays – Enhance Your Streaming Experience",
    features: [
      "Stream Overlays",
      "Custom Twitch Overlays",
      "Furry Themed Overlays",
      "Animated Overlays",
      "Alert Animations"
    ],
    image: streamOverlay,
    ctaText: "View Overlays"
  },
  {
    subtitle: "Completely Rigged 🧡😻",
    title: "VTUBER MODELS",
    description: "Custom VTuber Models – Bring Your Fursona to Life",
    features: [
      "Furry VTuber Models",
      "Custom 2D Models",
      "3D Furry Characters",
      "Live2D Rigging",
      "Expression Toggle Setup"
    ],
    image: vtuberModel,
    ctaText: "View VTuber Models"
  },
  {
    subtitle: "New Startup ❤🚀",
    title: "THUMBNAILS",
    description: "Eye-catching thumbnails that get clicks and showcase your content",
    features: [
      "YouTube Thumbnails",
      "Custom Thumbnail Design",
      "Furry Art Thumbnails",
      "Gaming Thumbnails",
      "Click-Worthy Designs"
    ],
    image: thumbnails,
    ctaText: "View Thumbnails"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <ServiceCard
                {...service}
                reversed={index % 2 === 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

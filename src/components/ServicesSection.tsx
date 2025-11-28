import ServiceCard from "./ServiceCard";
import mascotLogo from "@/assets/mascot-logo.jpg";
import bannerDesign from "@/assets/banner-design.jpg";
import emotes from "@/assets/emotes.jpg";
import subBadges from "@/assets/sub-badges.jpg";
import streamOverlay from "@/assets/stream-overlay.jpg";
import vtuberModel from "@/assets/vtuber-model.jpg";
import thumbnails from "@/assets/thumbnails.jpg";

const services = [
  {
    subtitle: "Custom And Professional 🤗🔥",
    title: "MASCOT GAMING LOGO",
    description: "Mascot Gaming Logo Design – Perfect Blend of Creativity and Precision",
    features: [
      "Mascot Gaming Logo Design",
      "Custom Mascot Design",
      "2D & 3D Logo Design",
      "Esports Logo Design",
      "Professional Logo Design"
    ],
    image: mascotLogo,
    ctaText: "View Logo"
  },
  {
    subtitle: "Professional 😎",
    title: "BANNERS",
    description: "Custom Banner Design – Professional Visuals for Every Platform",
    features: [
      "Banner Design",
      "YouTube Cover Design",
      "VTuber Thumbnails",
      "Gaming VTubers",
      "Education Banners"
    ],
    image: bannerDesign,
    ctaText: "View Banners"
  },
  {
    subtitle: "Express Your Feelings 😄😖",
    title: "EMOTES",
    description: "Custom Emote Design – Express Your Unique Style",
    features: [
      "Custom Emotes",
      "Twitch Emotes",
      "Discord Emotes",
      "VTuber Emotes",
      "Gaming Emotes"
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
      "VTuber Overlays",
      "Animated Overlays",
      "Static Stream Overlays"
    ],
    image: streamOverlay,
    ctaText: "View Overlays"
  },
  {
    subtitle: "Completely Rigged 🧡😻",
    title: "VTUBER MODELS",
    description: "Custom VTuber Models – Bring Your Virtual Persona to Life",
    features: [
      "VTuber Models",
      "Custom VTuber Design",
      "2D VTuber Models",
      "3D VTuber Characters",
      "VTuber Rigging"
    ],
    image: vtuberModel,
    ctaText: "View VTuber Models"
  },
  {
    subtitle: "New Startup ❤🚀",
    title: "THUMBNAILS",
    description: "VTubers encompass a diverse range of models and services tailored to various audiences and interests.",
    features: [
      "YouTube Thumbnails",
      "Custom Thumbnail Design",
      "Gaming Thumbnails",
      "VTuber Thumbnails",
      "Click-Worthy Thumbnails"
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
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                {...service}
                reversed={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

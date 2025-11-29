import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GalleryPreview from "@/components/GalleryPreview";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorEffect />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <GalleryPreview />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

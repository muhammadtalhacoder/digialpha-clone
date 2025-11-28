import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
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
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WasteSegregation from "@/components/waste-segregation";
import PracticesSection from "@/components/practices-section";
import QuizSection from "@/components/quiz-section";
import ImpactSection from "@/components/impact-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WasteSegregation />
      <PracticesSection />
      <QuizSection />
      <ImpactSection />
      <Footer />
      
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-2xl hover-lift ripple z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'hsl(158, 78%, 38%)' }}
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </div>
  );
}

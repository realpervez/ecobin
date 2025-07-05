import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Recycle, Sprout, Trash2 } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-pulse">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Waste Into Wonder
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Learn smart waste management techniques that protect our environment and create value for rural communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('learn')}
              className="ripple bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover-lift shadow-2xl hover:bg-gray-50"
            >
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('quiz')}
              className="ripple glass-effect text-white px-8 py-4 rounded-2xl font-semibold text-lg hover-lift border-white/20 hover:border-white/40"
              variant="outline"
            >
              Take Quiz
              <Play className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce">
          <Recycle className="text-white/30 w-12 h-12" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse">
          <Sprout className="text-white/30 w-10 h-10" />
        </div>
        <div className="absolute bottom-1/4 left-1/3" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <Trash2 className="text-white/30 w-10 h-10" />
        </div>
      </div>
    </section>
  );
}

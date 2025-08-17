import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Leaf className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-white">EcoWaste</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${location === '/' ? 'text-green-400 font-semibold' : 'text-gray-300 hover:text-green-400'}`}
            >
              Home
            </Link>
            <Link
              href="/our-story"
              className={`transition-colors ${location === '/our-story' ? 'text-green-400 font-semibold' : 'text-gray-300 hover:text-green-400'}`}
            >
              Our Story
            </Link>
            {location === '/' && (
              <>
                <button
                  onClick={() => scrollToSection('learn')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Learn
                </button>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Practices
                </button>
                <button
                  onClick={() => scrollToSection('quiz')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Quiz
                </button>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Impact
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-green-400 hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-700/50 pt-4">
            <Link
              href="/"
              className={`block w-full text-left transition-colors ${location === '/' ? 'text-green-400 font-semibold' : 'text-gray-300 hover:text-green-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/our-story"
              className={`block w-full text-left transition-colors ${location === '/our-story' ? 'text-green-400 font-semibold' : 'text-gray-300 hover:text-green-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>
            {location === '/' && (
              <>
                <button
                  onClick={() => scrollToSection('learn')}
                  className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors"
                >
                  Learn
                </button>
                <button
                  onClick={() => scrollToSection('practices')}
                  className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors"
                >
                  Practices
                </button>
                <button
                  onClick={() => scrollToSection('quiz')}
                  className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors"
                >
                  Quiz
                </button>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors"
                >
                  Impact
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

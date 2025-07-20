import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Quote, Lightbulb, Target, Heart } from "lucide-react";

// Field photos paths
const fieldPhotos = [
  "/attached_assets/IMG_1465_1753010450199.JPG",
  "/attached_assets/IMG_1468_1753010450200.JPG", 
  "/attached_assets/IMG_1470_1753010450200.JPG",
  "/attached_assets/IMG_1472_1753010450201.JPG",
  "/attached_assets/IMG_1473_1753010450201.JPG",
  "/attached_assets/IMG_1475_1753010450201.JPG",
  "/attached_assets/IMG_1476_1753010450201.JPG"
];

export default function OurStory() {
  const testimonials = [
    {
      name: "Lakshmi",
      age: 43,
      quote: "Drainage issues are causing insects to breed more.",
      location: "Thotapalli Gudur"
    },
    {
      name: "Rafiq",
      age: 28,
      quote: "The government cleans all this only once in a blue moon.",
      location: "Thotapalli Gudur"
    },
    {
      name: "Meena",
      age: 17,
      quote: "Mosquitoes from the dirty water make studying, resting at night hard.",
      location: "Thotapalli Gudur"
    }
  ];

  const problems = [
    "They aren't clear on simple categories (what exactly goes where)",
    "There's no immediate system or habit to make it stick",
    "Burning or dumping feels faster"
  ];

  const solutions = [
    {
      title: "Waste Sorting Game",
      description: "Drag & drop items into basic categories (Wet / Dry / Hazardous) so people see how simple it is",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Quick Quiz",
      description: "Short MCQs to reinforce the basics and build confidence",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Straightforward Guides",
      description: "Minimal text + visuals on: what to compost, what to store for recycling, what to keep separate",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <MapPin className="w-4 h-4 mr-2" />
            Thotapalli Gudur, Andhra Pradesh
          </Badge>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A simple college trip that opened our eyes to the real challenges of waste management in rural India
          </p>
        </div>

        {/* The Beginning */}
        <Card className="glass-effect rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Users className="w-8 h-8 mr-3 text-green-600" />
            The Beginning - May 2025
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Our college took us to a remote area in <strong>Thotapalli Gudur</strong> in May 2025. We walked the lanes, 
              looked at drains full of mixed trash, plastic packets, food waste, stagnant water, mosquitoes—basic unmanaged waste.
            </p>
            <p>
              We didn't "run a big program." We just asked people what bugs them most about waste and cleanliness.
            </p>
          </div>
        </Card>

        {/* Photo Gallery */}
        <Card className="glass-effect rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What We Witnessed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <img 
                src={fieldPhotos[0]} 
                alt="Field research team in Thotapalli Gudur"
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={fieldPhotos[1]} 
                alt="Community interaction in rural area"
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4">
              <img 
                src={fieldPhotos[2]} 
                alt="Local resident discussing waste issues"
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={fieldPhotos[3]} 
                alt="Housing area showing waste management challenges"
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4">
              <img 
                src={fieldPhotos[4]} 
                alt="Drainage system with mixed waste"
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={fieldPhotos[5]} 
                alt="Stagnant water and waste accumulation"
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="mt-6">
            <img 
              src={fieldPhotos[6]} 
              alt="Polluted drainage canal in Thotapalli Gudur"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </Card>

        {/* What People Told Us */}
        <Card className="glass-effect rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <Quote className="w-8 h-8 mr-3 text-blue-600" />
            What People Told Us
          </h2>
          <p className="text-gray-600 mb-8 text-lg">A few straight examples from our conversations:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">Age {testimonial.age}</p>
                  <Badge variant="outline" className="mt-2">
                    {testimonial.location}
                  </Badge>
                </div>
                <blockquote className="text-gray-700 italic text-center">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </Card>

        {/* The Common Thread */}
        <Card className="glass-effect rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            The Common Thread
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg mb-6">
            <p className="text-lg text-amber-800 font-semibold">
              No one really separates waste. Not because they hate cleanliness, but because:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-red-50 border border-red-200 rounded-xl p-6 hover:bg-red-100 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-red-600 mb-2">{index + 1}</div>
                <p className="text-red-800 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* What We Actually Did */}
        <Card className="glass-effect rounded-3xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Actually Did After That
          </h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-8">
            <p className="text-lg text-green-800 font-semibold">
              We built this website. That's it. No fake success stories.
            </p>
          </div>
          
          <p className="text-gray-700 text-lg mb-8">
            Just a clean, interactive site with:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-green-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{solution.title}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Why a Website */}
        <Card className="glass-effect rounded-3xl p-8 bg-gradient-to-r from-blue-100 to-green-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why a Website?
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Because <strong>teaching the logic once</strong> (with immediate feedback) beats handing out 
              another boring pamphlet nobody reads.
            </p>
            <p className="text-xl font-semibold text-green-800">
              If a few households learn the 3-bin idea and stop dumping wet waste + plastic together, 
              that's already a win.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Badge className="bg-green-600 text-white text-lg px-6 py-2">
              Simple. Effective. Real.
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
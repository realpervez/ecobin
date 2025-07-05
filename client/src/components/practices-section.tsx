import { Card } from "@/components/ui/card";
import { Recycle, Leaf, CheckCircle } from "lucide-react";

export default function PracticesSection() {
  const compostingSteps = [
    {
      step: 1,
      title: "Collect",
      description: "Gather organic waste from kitchen and garden",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      step: 2,
      title: "Layer",
      description: "Alternate green and brown materials in layers",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      step: 3,
      title: "Turn",
      description: "Mix regularly to maintain proper air flow",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      step: 4,
      title: "Harvest",
      description: "Use rich compost for healthy soil and plants",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
  ];

  const practices = [
    {
      title: "Plastic Reuse Ideas",
      icon: <Recycle className="w-6 h-6" />,
      items: [
        "Turn bottles into planters",
        "Create storage containers",
        "Make bird feeders",
        "Craft watering tools",
      ],
    },
    {
      title: "Reduce & Prevent",
      icon: <Leaf className="w-6 h-6" />,
      items: [
        "Use reusable bags",
        "Buy in bulk to reduce packaging",
        "Refuse single-use items",
        "Choose products with minimal packaging",
      ],
    },
  ];

  return (
    <section id="practices" className="py-20 bg-gradient-to-br from-green-500 to-blue-500 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Waste-to-Value Practices</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Turn your waste into valuable resources with these low-cost methods
          </p>
        </div>
        
        {/* Composting Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Composting Made Easy</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {compostingSteps.map((step, index) => (
              <Card
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover-lift transition-all duration-300"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 font-bold text-xl">{step.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-white/80 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Sustainable Practices */}
        <div className="grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <Card
              key={index}
              className="glass-effect rounded-2xl p-8 hover-lift transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                {practice.icon}
                <span className="ml-3">{practice.title}</span>
              </h4>
              <ul className="space-y-3 text-white/90">
                {practice.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <CheckCircle className="text-yellow-400 w-5 h-5 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Trash2, Check, X } from "lucide-react";
import WasteSortingGame from "@/components/ui/waste-sorting-game";

export default function WasteSegregation() {
  const wasteCategories = [
    {
      title: "Organic Waste",
      icon: <Leaf className="text-white text-xl" />,
      color: "from-green-50 to-emerald-50",
      iconBg: "bg-green-500",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      description: "Kitchen scraps, food waste, garden clippings that can be composted",
      items: [
        { name: "Vegetable peels", icon: <Check className="text-green-500 w-4 h-4" /> },
        { name: "Fruit waste", icon: <Check className="text-green-500 w-4 h-4" /> },
        { name: "Garden waste", icon: <Check className="text-green-500 w-4 h-4" /> },
        { name: "Paper napkins", icon: <Check className="text-green-500 w-4 h-4" /> },
      ],
    },
    {
      title: "Recyclable",
      icon: <Recycle className="text-white text-xl" />,
      color: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      description: "Materials that can be processed and reused",
      items: [
        { name: "Plastic bottles", icon: <Check className="text-blue-500 w-4 h-4" /> },
        { name: "Glass containers", icon: <Check className="text-blue-500 w-4 h-4" /> },
        { name: "Metal cans", icon: <Check className="text-blue-500 w-4 h-4" /> },
        { name: "Paper & cardboard", icon: <Check className="text-blue-500 w-4 h-4" /> },
      ],
    },
    {
      title: "Non-Recyclable",
      icon: <Trash2 className="text-white text-xl" />,
      color: "from-red-50 to-orange-50",
      iconBg: "bg-red-500",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      description: "Items that need special disposal methods",
      items: [
        { name: "Sanitary waste", icon: <X className="text-red-500 w-4 h-4" /> },
        { name: "Broken glass", icon: <X className="text-red-500 w-4 h-4" /> },
        { name: "Electronics", icon: <X className="text-red-500 w-4 h-4" /> },
        { name: "Batteries", icon: <X className="text-red-500 w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section id="learn" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Master Waste Segregation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn to separate waste effectively for a cleaner environment
          </p>
        </div>
        
        {/* Waste Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {wasteCategories.map((category, index) => (
            <Card
              key={index}
              className={`card-glow bg-gradient-to-br ${category.color} rounded-3xl p-8 hover-lift transition-all duration-300`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-500">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        {/* Interactive Waste Sorting Game */}
        <WasteSortingGame />
      </div>
    </section>
  );
}

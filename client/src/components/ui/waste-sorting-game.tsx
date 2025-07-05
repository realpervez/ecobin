import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Leaf, Recycle, Trash2, Apple, PillBottle, Battery, Newspaper, Banana, Milk, Zap, Package, Lightbulb, Salad, Coffee, Smartphone, Scissors, Sandwich } from "lucide-react";

interface WasteItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: 'organic' | 'recyclable' | 'non-recyclable';
}

const wasteItems: WasteItem[] = [
  { id: '1', name: 'Apple Core', icon: <Apple className="w-5 h-5" />, category: 'organic' },
  { id: '2', name: 'Plastic Bottle', icon: <PillBottle className="w-5 h-5" />, category: 'recyclable' },
  { id: '3', name: 'Battery', icon: <Battery className="w-5 h-5" />, category: 'non-recyclable' },
  { id: '4', name: 'Newspaper', icon: <Newspaper className="w-5 h-5" />, category: 'recyclable' },
  { id: '5', name: 'Banana Peel', icon: <Banana className="w-5 h-5" />, category: 'organic' },
  { id: '6', name: 'Milk Carton', icon: <Milk className="w-5 h-5" />, category: 'recyclable' },
  { id: '7', name: 'LED Bulb', icon: <Lightbulb className="w-5 h-5" />, category: 'non-recyclable' },
  { id: '8', name: 'Cardboard Box', icon: <Package className="w-5 h-5" />, category: 'recyclable' },
  { id: '9', name: 'Vegetable Scraps', icon: <Salad className="w-5 h-5" />, category: 'organic' },
  { id: '10', name: 'Coffee Grounds', icon: <Coffee className="w-5 h-5" />, category: 'organic' },
  { id: '11', name: 'Old Phone', icon: <Smartphone className="w-5 h-5" />, category: 'non-recyclable' },
  { id: '12', name: 'Broken Scissors', icon: <Scissors className="w-5 h-5" />, category: 'non-recyclable' },
  { id: '13', name: 'Food Wrapper', icon: <Sandwich className="w-5 h-5" />, category: 'non-recyclable' },
  { id: '14', name: 'Electric Wire', icon: <Zap className="w-5 h-5" />, category: 'non-recyclable' },
];

export default function WasteSortingGame() {
  const [draggedItem, setDraggedItem] = useState<WasteItem | null>(null);
  const [sortedItems, setSortedItems] = useState<Record<string, WasteItem[]>>({
    organic: [],
    recyclable: [],
    'non-recyclable': [],
  });
  const [fadingItems, setFadingItems] = useState<string[]>([]);
  const [returningItem, setReturningItem] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDragStart = (item: WasteItem) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, category: string) => {
    e.preventDefault();
    
    if (!draggedItem) return;

    const isCorrect = draggedItem.category === category;
    
    if (isCorrect) {
      // Start fade animation for correct item
      setFadingItems(prev => [...prev, draggedItem.id]);
      
      // Show success toast
      toast({
        title: "Correct!",
        description: `${draggedItem.name} belongs in ${category} waste.`,
        duration: 2000,
      });
      
      // Add to sorted items after fade animation
      setTimeout(() => {
        setSortedItems(prev => ({
          ...prev,
          [category]: [...prev[category], draggedItem],
        }));
        setFadingItems(prev => prev.filter(id => id !== draggedItem.id));
      }, 600);
    } else {
      // Show error toast
      toast({
        title: "Try Again",
        description: `${draggedItem.name} doesn't belong in ${category} waste.`,
        variant: "destructive",
        duration: 2000,
      });
      
      // Start return animation
      setReturningItem(draggedItem.id);
      setTimeout(() => setReturningItem(null), 800);
    }

    setDraggedItem(null);
  };

  const resetGame = () => {
    setSortedItems({
      organic: [],
      recyclable: [],
      'non-recyclable': [],
    });
    setFadingItems([]);
    setReturningItem(null);
  };

  const availableItems = wasteItems.filter(item => 
    !Object.values(sortedItems).some(category => 
      category.some(sorted => sorted.id === item.id)
    )
  );

  return (
    <Card className="glass-effect rounded-3xl p-8 mb-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Interactive Waste Sorting
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Available Items */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-gray-700">Drag items to correct bins:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableItems.map((item, index) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item)}
                className={`bg-white rounded-xl p-4 shadow-lg cursor-move transition-all duration-500 flex items-center space-x-3 border-2 border-gray-200 hover:border-green-300 hover:scale-105 ${
                  fadingItems.includes(item.id) ? 'opacity-0 blur-sm scale-75' : ''
                } ${
                  returningItem === item.id ? 'animate-bounce border-red-400' : ''
                }`}
                style={{
                  transform: fadingItems.includes(item.id) ? 'translateY(-20px)' : 'translateY(0)',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="text-gray-600">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
          
          {availableItems.length === 0 && (
            <div className="text-center p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl border-2 border-green-300">
              <h5 className="text-xl font-bold text-green-800 mb-2">🎉 Congratulations!</h5>
              <p className="text-green-700">You've sorted all items correctly! Great job learning waste segregation.</p>
            </div>
          )}
          
          <Button onClick={resetGame} className="w-full">
            Reset Game
          </Button>
        </div>

        {/* Drop Zones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className="bg-green-100 border-2 border-dashed border-green-400 rounded-xl p-6 text-center min-h-[140px] flex flex-col items-center justify-center transition-all duration-300 hover:border-green-500 hover:bg-green-200 hover:scale-105"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'organic')}
          >
            <Leaf className="text-green-600 w-10 h-10 mb-2" />
            <span className="text-green-600 font-bold text-lg">Organic</span>
            <div className="mt-2 text-sm text-green-600 font-medium">
              {sortedItems.organic.length} items sorted
            </div>
            {sortedItems.organic.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1 justify-center">
                {sortedItems.organic.slice(0, 3).map((item, index) => (
                  <div key={index} className="w-2 h-2 bg-green-500 rounded-full"></div>
                ))}
                {sortedItems.organic.length > 3 && <span className="text-xs text-green-600">+{sortedItems.organic.length - 3}</span>}
              </div>
            )}
          </div>

          <div
            className="bg-blue-100 border-2 border-dashed border-blue-400 rounded-xl p-6 text-center min-h-[140px] flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-200 hover:scale-105"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'recyclable')}
          >
            <Recycle className="text-blue-600 w-10 h-10 mb-2" />
            <span className="text-blue-600 font-bold text-lg">Recyclable</span>
            <div className="mt-2 text-sm text-blue-600 font-medium">
              {sortedItems.recyclable.length} items sorted
            </div>
            {sortedItems.recyclable.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1 justify-center">
                {sortedItems.recyclable.slice(0, 3).map((item, index) => (
                  <div key={index} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                ))}
                {sortedItems.recyclable.length > 3 && <span className="text-xs text-blue-600">+{sortedItems.recyclable.length - 3}</span>}
              </div>
            )}
          </div>

          <div
            className="bg-red-100 border-2 border-dashed border-red-400 rounded-xl p-6 text-center min-h-[140px] flex flex-col items-center justify-center transition-all duration-300 hover:border-red-500 hover:bg-red-200 hover:scale-105"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'non-recyclable')}
          >
            <Trash2 className="text-red-600 w-10 h-10 mb-2" />
            <span className="text-red-600 font-bold text-lg">Non-Recyclable</span>
            <div className="mt-2 text-sm text-red-600 font-medium">
              {sortedItems['non-recyclable'].length} items sorted
            </div>
            {sortedItems['non-recyclable'].length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1 justify-center">
                {sortedItems['non-recyclable'].slice(0, 3).map((item, index) => (
                  <div key={index} className="w-2 h-2 bg-red-500 rounded-full"></div>
                ))}
                {sortedItems['non-recyclable'].length > 3 && <span className="text-xs text-red-600">+{sortedItems['non-recyclable'].length - 3}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
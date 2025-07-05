import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Trash2, Apple, PillBottle, Battery, Newspaper } from "lucide-react";

interface WasteItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: 'organic' | 'recyclable' | 'non-recyclable';
}

const wasteItems: WasteItem[] = [
  { id: '1', name: 'Apple Core', icon: <Apple className="w-5 h-5" />, category: 'organic' },
  { id: '2', name: 'Plastic PillBottle', icon: <PillBottle className="w-5 h-5" />, category: 'recyclable' },
  { id: '3', name: 'Battery', icon: <Battery className="w-5 h-5" />, category: 'non-recyclable' },
  { id: '4', name: 'Newspaper', icon: <Newspaper className="w-5 h-5" />, category: 'recyclable' },
];

export default function WasteSortingGame() {
  const [draggedItem, setDraggedItem] = useState<WasteItem | null>(null);
  const [sortedItems, setSortedItems] = useState<Record<string, WasteItem[]>>({
    organic: [],
    recyclable: [],
    'non-recyclable': [],
  });
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

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
      setSortedItems(prev => ({
        ...prev,
        [category]: [...prev[category], draggedItem],
      }));
      setFeedback({ type: 'success', message: '✓ Correct!' });
    } else {
      setFeedback({ type: 'error', message: '✗ Try Again' });
    }

    setDraggedItem(null);
    
    setTimeout(() => setFeedback(null), 2000);
  };

  const resetGame = () => {
    setSortedItems({
      organic: [],
      recyclable: [],
      'non-recyclable': [],
    });
    setFeedback(null);
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
          <div className="flex flex-wrap gap-3">
            {availableItems.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item)}
                className="bg-white rounded-xl p-3 shadow-lg cursor-move hover-lift transition-all duration-300 flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          
          {feedback && (
            <div className={`text-center p-4 rounded-xl ${
              feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {feedback.message}
            </div>
          )}
          
          <Button onClick={resetGame} className="w-full">
            Reset Game
          </Button>
        </div>

        {/* Drop Zones */}
        <div className="grid grid-cols-3 gap-4">
          <div
            className="bg-green-100 border-2 border-dashed border-green-400 rounded-xl p-6 text-center min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:border-green-500 hover:bg-green-200"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'organic')}
          >
            <Leaf className="text-green-600 w-8 h-8 mb-2" />
            <span className="text-green-600 font-semibold">Organic</span>
            <div className="mt-2 text-sm text-green-600">
              {sortedItems.organic.length} items
            </div>
          </div>

          <div
            className="bg-blue-100 border-2 border-dashed border-blue-400 rounded-xl p-6 text-center min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-200"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'recyclable')}
          >
            <Recycle className="text-blue-600 w-8 h-8 mb-2" />
            <span className="text-blue-600 font-semibold">Recyclable</span>
            <div className="mt-2 text-sm text-blue-600">
              {sortedItems.recyclable.length} items
            </div>
          </div>

          <div
            className="bg-red-100 border-2 border-dashed border-red-400 rounded-xl p-6 text-center min-h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:border-red-500 hover:bg-red-200"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'non-recyclable')}
          >
            <Trash2 className="text-red-600 w-8 h-8 mb-2" />
            <span className="text-red-600 font-semibold">Non-Recyclable</span>
            <div className="mt-2 text-sm text-red-600">
              {sortedItems['non-recyclable'].length} items
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

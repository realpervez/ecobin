import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import AnimatedCounter from "@/components/ui/animated-counter";
import { User } from "lucide-react";

export default function ImpactSection() {
  const { data: impact } = useQuery({
    queryKey: ['/api/community/impact'],
  });

  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      after: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      beforeTitle: "Polluted Riverbank",
      afterTitle: "Clean Natural Environment",
      beforeDesc: "Plastic waste and garbage scattered along the water",
      afterDesc: "Restored ecosystem with proper waste management",
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Village Leader",
      story: "Our village has been transformed! We now have clean streets and our composting program feeds 50 families with organic vegetables.",
      color: "bg-green-500",
    },
    {
      name: "Rajesh Kumar",
      role: "School Teacher",
      story: "Teaching children about waste segregation has created a ripple effect. Now entire families are practicing sustainable waste management.",
      color: "bg-blue-500",
    },
    {
      name: "Maya Patel",
      role: "Community Organizer",
      story: "We've reduced mosquito breeding by 80% through proper waste management. Our community is healthier and happier.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Community Impact</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See the positive changes happening in communities worldwide
          </p>
        </div>
        
        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-effect rounded-2xl p-6 text-center hover-lift transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter target={impact?.familiesPracticing || 1250} />
            </div>
            <div className="text-white/80">Families Practicing</div>
          </Card>
          <Card className="glass-effect rounded-2xl p-6 text-center hover-lift transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter target={impact?.wasteReduced || 340} />
            </div>
            <div className="text-white/80">Tons Waste Reduced</div>
          </Card>
          <Card className="glass-effect rounded-2xl p-6 text-center hover-lift transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter target={impact?.compostCreated || 15600} />
            </div>
            <div className="text-white/80">Kg Compost Created</div>
          </Card>
          <Card className="glass-effect rounded-2xl p-6 text-center hover-lift transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter target={impact?.areasCompleted || 89} />
            </div>
            <div className="text-white/80">Areas Cleaned</div>
          </Card>
        </div>
        
        {/* Before/After Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Before & After</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="space-y-4">
                <Card className="glass-effect rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={item.beforeTitle}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{item.beforeTitle}</h4>
                    <p className="text-white/80">{item.beforeDesc}</p>
                  </div>
                </Card>
                
                <Card className="glass-effect rounded-2xl overflow-hidden hover-lift transition-all duration-300">
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={item.afterTitle}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                      After
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{item.afterTitle}</h4>
                    <p className="text-white/80">{item.afterDesc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${story.color} rounded-full flex items-center justify-center mr-4`}>
                  <User className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{story.name}</h4>
                  <p className="text-white/60 text-sm">{story.role}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">"{story.story}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

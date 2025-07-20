import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationName: 'gentleFloat',
            animationDuration: '15s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

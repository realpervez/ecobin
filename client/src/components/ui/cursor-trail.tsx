import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      setTrail(prev => [
        { x: trailX, y: trailY, opacity: 1 },
        ...prev.slice(0, 9).map((point, index) => ({
          ...point,
          opacity: 1 - (index + 1) * 0.1,
        })),
      ]);

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={index}
          className="fixed w-5 h-5 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            left: point.x - 10,
            top: point.y - 10,
            background: `radial-gradient(circle, rgba(16, 185, 129, ${point.opacity}) 0%, rgba(59, 130, 246, ${point.opacity * 0.5}) 50%, transparent 100%)`,
          }}
        />
      ))}
    </>
  );
}

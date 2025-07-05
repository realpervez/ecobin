import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <Card className={cn("glass-effect hover-lift transition-all duration-300", className)}>
      {children}
    </Card>
  );
}

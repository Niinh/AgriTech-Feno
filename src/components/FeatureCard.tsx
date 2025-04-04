import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("feature-card group h-full flex flex-col", className)}>
      <div className="mb-4 p-3 bg-agro-beige/30 rounded-full inline-block group-hover:bg-agro-yellow/20 transition-colors">
        <Icon size={24} className="text-agro-green" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-agro-brown">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;

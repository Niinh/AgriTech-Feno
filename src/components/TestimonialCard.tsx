
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, image, className }: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-md border border-agro-beige/30", className)}>
      <Quote className="text-agro-yellow mb-4 h-8 w-8" />
      <blockquote className="mb-4 text-gray-700 italic">"{quote}"</blockquote>
      <div className="flex items-center mt-4">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <div className="font-medium text-agro-brown">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

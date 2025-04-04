
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
}

const PageBanner = ({ title, subtitle, backgroundImage, className }: PageBannerProps) => {
  return (
    <div 
      className={cn(
        "relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center",
        className
      )}
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }}
    >
      <div className="text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-text-shadow">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-2xl mx-auto hero-text-shadow">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;

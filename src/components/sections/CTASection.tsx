
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-agro-green text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            {title}
          </h2>
          <p className="mb-8 opacity-90 animate-on-scroll" style={{animationDelay: '0.1s'}}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <Link to={primaryButtonLink} className="bg-white text-agro-green font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
              {primaryButtonText}
            </Link>
            <Link to={secondaryButtonLink} className="bg-agro-yellow text-agro-brown font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
              {secondaryButtonText} <ArrowRight size={16} className="ml-1 inline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

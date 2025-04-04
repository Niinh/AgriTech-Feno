
import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  className?: string;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps, className }) => {
  return (
    <div className={cn("space-y-12", className)}>
      {steps.map((step, index) => (
        <div 
          key={step.number} 
          className={cn(
            "flex flex-col md:flex-row items-start gap-6",
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          )}
        >
          <div className="bg-agro-green text-white font-bold text-2xl w-14 h-14 flex items-center justify-center rounded-full shrink-0">
            {step.number}
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-agro-brown">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;

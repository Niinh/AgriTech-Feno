
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Advantage {
  title: string;
  description: string;
}

const NutritionalAdvantagesSection = () => {
  const advantages: Advantage[] = [
    {
      title: "Maior Teor de Umidade",
      description: "Com 45-55% de umidade, favorece animais que precisam de maior hidratação na dieta."
    },
    {
      title: "Maior Preservação de Folhas",
      description: "Menor perda de folhas durante o processo produtivo, aumentando o valor nutricional final."
    },
    {
      title: "Melhor Digestibilidade",
      description: "O processo de fermentação aumenta a digestibilidade das fibras, melhorando o aproveitamento pelo animal."
    },
    {
      title: "Menor Risco de Mofo",
      description: "O processo de ensilagem elimina oxigênio, impedindo o desenvolvimento de fungos e mofo."
    },
    {
      title: "Maior Palatabilidade",
      description: "Sabor e aroma característicos que aumentam a aceitação pelo animal."
    },
    {
      title: "Retenção de Vitaminas",
      description: "Preserva mais vitaminas e minerais que seriam perdidos na desidratação completa."
    }
  ];

  return (
    <section className="py-20 bg-agro-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
            Vantagens Nutricionais
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            O feno pré-secado oferece uma combinação única de benefícios que o torna uma escolha superior 
            para a alimentação de animais exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title} 
              className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start mb-3">
                <CheckCircle className="h-6 w-6 text-agro-green mr-2 mt-1" />
                <h3 className="text-xl font-semibold text-agro-brown">{advantage.title}</h3>
              </div>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionalAdvantagesSection;

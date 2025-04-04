
import React from 'react';

const WhatIsPreDriedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
              alt="Feno Pré-Secado" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">O que é o Feno Pré-Secado?</h2>
            <p className="text-gray-700">
              O feno pré-secado é um produto intermediário entre o feno tradicional e a silagem, combinando os benefícios 
              de ambos em um único alimento de alta qualidade para animais.
            </p>
            <p className="text-gray-700">
              Diferente do feno tradicional, que possui umidade entre 10% e 15%, o pré-secado mantém um teor de umidade entre 
              45% e 55%, o que permite uma fermentação controlada que preserva mais nutrientes e aumenta a digestibilidade.
            </p>
            <p className="text-gray-700">
              O processo envolve uma secagem parcial no campo, seguida de enfardamento e embalagem em plástico especial que 
              cria um ambiente anaeróbico, onde ocorre uma fermentação benéfica que preserva as qualidades nutricionais do alimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPreDriedSection;

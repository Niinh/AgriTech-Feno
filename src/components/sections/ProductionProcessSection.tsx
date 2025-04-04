
import React from 'react';
import ProcessSteps from '@/components/ProcessSteps';

const ProductionProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Corte Preciso",
      description: "As forragens são cortadas no ponto ideal de maturação, garantindo o máximo de nutrientes e palatabilidade."
    },
    {
      number: 2,
      title: "Pré-Secagem",
      description: "O material cortado passa por um processo controlado de desidratação parcial em campo, até atingir o teor de umidade ideal."
    },
    {
      number: 3,
      title: "Enfardamento",
      description: "Após a pré-secagem, o material é coletado e enfardado com equipamentos de última geração, geralmente em fardos cilíndricos envolvidos com plástico."
    },
    {
      number: 4,
      title: "Fermentação Controlada",
      description: "Dentro do fardo selado, ocorre uma fermentação anaeróbica controlada, que preserva nutrientes e aumenta a digestibilidade do alimento."
    },
    {
      number: 5,
      title: "Controle de Qualidade",
      description: "Cada lote é monitorado e testado para garantir que atenda aos nossos rigorosos padrões nutricionais e microbiológicos."
    }
  ];

  return (
    <section className="py-20 bg-agro-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
            Processo de Produção Passo a Passo
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Nosso processo produtivo combina tecnologia de ponta e conhecimento técnico para 
            garantir um produto final de qualidade consistente.
          </p>
        </div>

        <div className="animate-on-scroll">
          <ProcessSteps steps={processSteps} className="max-w-4xl mx-auto" />
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <img 
            src="https://i.im.ge/2025/04/05/pCCNMX.image.png" 
            alt="Processo de produção do pré-secado" 
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductionProcessSection;

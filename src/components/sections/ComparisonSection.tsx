
import React from 'react';

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
            Comparação: Feno Tradicional vs. Pré-Secado
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Entenda as diferenças entre os dois tipos de alimentos e escolha o ideal para suas necessidades.
          </p>
        </div>

        <div className="overflow-x-auto animate-on-scroll">
          <div className="md:min-w-full w-[800px] md:w-auto md:overflow-visible">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr className="bg-agro-green text-white">
                  <th className="py-3 px-4 text-left">Característica</th>
                  <th className="py-3 px-4 text-left">Feno Tradicional</th>
                  <th className="py-3 px-4 text-left">Feno Pré-Secado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Teor de Umidade</td>
                  <td className="py-3 px-4">10-15%</td>
                  <td className="py-3 px-4">45-55%</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Digestibilidade</td>
                  <td className="py-3 px-4">Boa</td>
                  <td className="py-3 px-4">Excelente</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Conservação de Nutrientes</td>
                  <td className="py-3 px-4">Parcial</td>
                  <td className="py-3 px-4">Superior</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Palatabilidade</td>
                  <td className="py-3 px-4">Boa</td>
                  <td className="py-3 px-4">Muito Alta</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Vida Útil (armazenado)</td>
                  <td className="py-3 px-4">Até 2 anos</td>
                  <td className="py-3 px-4">Até 1 ano</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Ideal para</td>
                  <td className="py-3 px-4">Equinos, ruminantes</td>
                  <td className="py-3 px-4">Equinos de alta performance, animais idosos, transição alimentar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex justify-center animate-on-scroll">
          <div className="max-w-3xl bg-agro-beige/20 p-6 rounded-lg border border-agro-beige">
            <h3 className="text-xl font-semibold mb-2 text-agro-brown">Qual escolher?</h3>
            <p className="text-gray-700">
              A escolha entre feno tradicional e pré-secado depende das necessidades específicas dos seus animais. 
              Animais de alta performance, idosos ou com problemas dentários geralmente se beneficiam mais do pré-secado, 
              enquanto o feno tradicional pode ser mais econômico para uso cotidiano. Nossa equipe está disponível para 
              ajudá-lo a determinar a melhor opção para seu caso específico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

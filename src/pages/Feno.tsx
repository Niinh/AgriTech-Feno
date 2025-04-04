
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Feno = () => {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const qualityCriteria = [
    {
      title: "Coloração",
      description: "Verde vibrante, indicando alto teor de nutrientes preservados durante o processo de desidratação.",
    },
    {
      title: "Aroma",
      description: "Odor fresco e agradável, livre de mofo ou qualquer outro tipo de contaminação.",
    },
    {
      title: "Textura",
      description: "Macio ao toque, com folhas e caules preservados, sem excesso de poeira ou material quebrado.",
    },
    {
      title: "Valor Nutricional",
      description: "Alto teor de proteínas, fibras e nutrientes essenciais para a saúde animal.",
    }
  ];

  const benefits = [
    "Disponibilidade durante todo o ano, independentemente das condições climáticas",
    "Fácil armazenamento e transporte",
    "Redução de desperdício de alimentos",
    "Menos suscetível a pragas e doenças",
    "Maior controle sobre a alimentação dos animais",
    "Melhor desempenho dos animais, especialmente em competições",
    "Menor risco de problemas digestivos e alergias respiratórias"
  ];

  return (
    <>
      <NavBar />

      <PageBanner
        title="Feno de Alta Qualidade"
        subtitle="Produção cuidadosa para nutrição animal superior"
        backgroundImage="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* What is Hay Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">O que é o Feno?</h2>
              <p className="text-gray-700">
                O feno é o resultado de um processo cuidadoso de desidratação de forragens, como alfafa, tifton e outras gramíneas, 
                que preserva os nutrientes essenciais para a alimentação animal.
              </p>
              <p className="text-gray-700">
                Durante o processo de fenação, a forragem é cortada no momento ideal de seu desenvolvimento, quando apresenta o maior 
                equilíbrio entre quantidade e qualidade nutricional. Em seguida, é exposta ao sol para desidratação controlada, 
                preservando seus nutrientes, e depois enfardada para armazenamento e transporte.
              </p>
              <p className="text-gray-700">
                O resultado é um alimento com baixo teor de umidade (geralmente entre 10% e 15%), alta concentração de nutrientes, 
                e excelente vida útil quando armazenado adequadamente.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Processo de fenação" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-agro-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
              Benefícios do Feno para a Nutrição Animal
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              O feno é um componente essencial na dieta de diversos animais, principalmente equinos e ruminantes, 
              oferecendo inúmeras vantagens nutricionais e logísticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 md:order-1">
              <img 
                src="https://i.im.ge/2025/04/05/pCCNMX.image.png" 
                alt="Cavalos comendo feno" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6 animate-on-scroll order-1 md:order-2">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1">
                      <Check className="h-5 w-5 text-agro-green" />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Criteria Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
              Critérios de Qualidade do Feno
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Produzimos feno seguindo rigorosos padrões de qualidade em toda a cadeia produtiva, 
              garantindo um produto final que atende aos mais exigentes requisitos nutricionais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityCriteria.map((item, index) => (
              <div 
                key={item.title} 
                className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-semibold mb-3 text-agro-brown">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-bold text-agro-brown">Nosso Processo de Produção</h3>
              <p className="text-gray-700">
                Utilizamos técnicas modernas de manejo de pastagens, irrigação eficiente e monitoramento constante 
                das condições climáticas para garantir que nosso feno seja cortado e enfardado no momento ideal.
              </p>
              <p className="text-gray-700">
                Nossa equipe altamente treinada supervisiona cada etapa do processo, desde o plantio até a embalagem final, 
                garantindo que apenas produtos que atendam aos nossos rigorosos padrões de qualidade cheguem até você.
              </p>
              <p className="text-gray-700">
                O resultado é um feno consistente, livre de contaminantes, com alto valor nutricional e altamente palatável 
                para os animais.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Processo de produção 1" 
                className="w-full h-auto rounded-xl shadow-md"
              />
              <img 
                src="https://i.im.ge/2025/04/05/pCCHuT.image.png" 
                alt="Processo de produção 2" 
                className="w-full h-auto rounded-xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Processo de produção 3" 
                className="w-full h-auto rounded-xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Processo de produção 4" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-agro-green text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Interessado em Nosso Feno de Alta Qualidade?
            </h2>
            <p className="mb-8 opacity-90 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              Entre em contato conosco para mais informações sobre nossos produtos, 
              disponibilidade e preços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <Link to="/contato" className="bg-white text-agro-green font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                Solicitar Orçamento
              </Link>
              <Link to="/pre-secado" className="bg-agro-yellow text-agro-brown font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                Conhecer Feno Pré-Secado <ArrowRight size={16} className="ml-1 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Feno;

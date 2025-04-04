
import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { Droplets, Sprout, LineChart, BarChart3, Leaf, CloudRain, ArrowRight } from "lucide-react";

const Irrigacao = () => {
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

  const benefits = [
    {
      title: "Produtividade Constante",
      description: "Manutenção da produção mesmo em períodos de seca, garantindo oferta consistente durante todo o ano.",
      icon: LineChart
    },
    {
      title: "Qualidade Superior",
      description: "Plantas adequadamente irrigadas produzem forragem de maior valor nutricional e palatabilidade.",
      icon: Leaf
    },
    {
      title: "Uso Eficiente da Terra",
      description: "Maximização do potencial produtivo das áreas cultivadas, otimizando a operação agrícola.",
      icon: Sprout
    },
    {
      title: "Previsibilidade",
      description: "Redução da dependência de fatores climáticos, permitindo planejamento mais preciso da produção.",
      icon: BarChart3
    },
    {
      title: "Sustentabilidade",
      description: "Sistemas de irrigação modernos que utilizam água de forma consciente e eficiente.",
      icon: CloudRain
    },
    {
      title: "Redução de Estresse Hídrico",
      description: "Plantas constantemente hidratadas produzem forragem com melhor composição nutricional.",
      icon: Droplets
    }
  ];

  return (
    <>
      <NavBar />

      <PageBanner
        title="Irrigação de Excelência"
        subtitle="90% da nossa área produtiva com irrigação de última geração"
        backgroundImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* Importance of Irrigation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
                A Importância da Irrigação na Produção de Feno
              </h2>
              <p className="text-gray-700">
                A irrigação é um dos pilares fundamentais da nossa produção, permitindo que alcancemos níveis 
                excepcionais de qualidade, produtividade e consistência em nossos produtos.
              </p>
              <p className="text-gray-700">
                Com 90% da nossa área de produção irrigada, somos um dos poucos produtores capazes de manter 
                uma oferta estável e de alta qualidade durante todo o ano, independentemente das condições climáticas.
              </p>
              <p className="text-gray-700">
                Nossos sistemas de irrigação são cuidadosamente projetados e monitorados continuamente para 
                garantir que cada planta receba exatamente a quantidade de água necessária para seu desenvolvimento 
                ideal, resultando em forragem com máximo valor nutricional.
              </p>

              <div className="pt-4">
                <div className="flex items-center gap-2 text-agro-green font-semibold">
                  <Droplets className="h-6 w-6" />
                  <span className="text-xl">90% da área produtiva irrigada</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Sistema de irrigação em funcionamento" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Irrigation Section */}
      <section className="py-20 bg-agro-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
              Benefícios da Irrigação
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Nossa infraestrutura avançada de irrigação proporciona inúmeras vantagens que se traduzem
              diretamente na qualidade dos nossos produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div className="animate-on-scroll" key={benefit.title} style={{animationDelay: `${index * 0.1}s`}}>
                <FeatureCard
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Irrigation Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
              Nossa Tecnologia de Irrigação
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Utilizamos sistemas avançados que combinam eficiência hídrica e precisão na distribuição de água.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sistema de irrigação 1" 
                className="w-full h-auto rounded-xl shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sistema de irrigação 2" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>

            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-bold text-agro-brown">Pivôs Centrais de Alta Eficiência</h3>
              <p className="text-gray-700">
                Nossos pivôs centrais cobrem grandes áreas com distribuição uniforme de água, 
                garantindo que cada planta receba a hidratação necessária para seu desenvolvimento ideal.
              </p>
              <p className="text-gray-700">
                Equipados com tecnologia de ponta, nossos sistemas podem ser controlados remotamente e 
                ajustados com base em dados meteorológicos em tempo real, otimizando o uso de recursos.
              </p>
              
              <h3 className="text-2xl font-bold text-agro-brown pt-4">Gestão Hídrica Inteligente</h3>
              <p className="text-gray-700">
                Utilizamos sensores de umidade do solo e estações meteorológicas próprias para monitorar 
                continuamente as condições e aplicar água apenas quando e onde necessário.
              </p>
              <p className="text-gray-700">
                Este sistema inteligente nos permite economizar água, reduzir custos operacionais e 
                minimizar nosso impacto ambiental, ao mesmo tempo que maximizamos a produtividade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Irrigation Section */}
      <section className="py-20 bg-agro-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Irrigação Sustentável
              </h2>
              <p className="opacity-90">
                Nossa abordagem à irrigação vai além da produtividade – incorporamos práticas sustentáveis 
                que respeitam o meio ambiente e garantem a viabilidade a longo prazo da nossa operação.
              </p>
              <p className="opacity-90">
                Utilizamos técnicas de captação e armazenamento de água da chuva, recirculação de água 
                e aplicação precisa para maximizar a eficiência do uso deste recurso vital.
              </p>
              <p className="opacity-90">
                Além disso, mantemos áreas de preservação permanente em nossas propriedades, contribuindo 
                para a saúde dos ecossistemas locais e para o ciclo natural da água na região.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Irrigação sustentável" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-agro-beige/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
              Resultados Comprovados
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Nossa infraestrutura de irrigação tem um impacto direto e mensurável na qualidade 
              dos nossos produtos e na satisfação dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 text-center animate-on-scroll">
              <div className="text-4xl font-bold text-agro-green mb-2">+40%</div>
              <p className="text-gray-700">Aumento de produtividade em relação a áreas não irrigadas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 text-center animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-bold text-agro-green mb-2">12</div>
              <p className="text-gray-700">Meses de produção contínua durante o ano</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 text-center animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-agro-green mb-2">+25%</div>
              <p className="text-gray-700">Maior valor nutricional em comparação com produtos convencionais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown animate-on-scroll">
              Experimente a Diferença da Produção Irrigada
            </h2>
            <p className="text-gray-700 mb-8 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              Entre em contato conosco para conhecer nossa operação ou para fazer um pedido 
              personalizado para suas necessidades específicas.
            </p>
            <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <Link to="/contato" className="btn-primary">
                Fale Conosco <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Irrigacao;

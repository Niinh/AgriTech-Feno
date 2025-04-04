import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BarChart, Droplets, Leaf, ShieldCheck, Truck, Users } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import VideoPlayer from '@/components/VideoPlayer';

const Index = () => {
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

  const features = [
    {
      title: 'Parceria',
      description: 'Construímos relações duradouras com nossos clientes, entendendo suas necessidades específicas.',
      icon: Users
    },
    {
      title: 'Qualidade',
      description: 'Controle rigoroso em todas as etapas de produção garante um produto final de excelência.',
      icon: Award
    },
    {
      title: 'Tecnologia',
      description: 'Utilizamos equipamentos modernos para otimizar cada fase do processo produtivo.',
      icon: ShieldCheck
    },
    {
      title: 'Consistência',
      description: 'Mantemos um padrão uniforme em todos os nossos produtos, entrega após entrega.',
      icon: BarChart
    },
    {
      title: 'Experiência',
      description: 'Anos de conhecimento acumulado nos permitem oferecer as melhores soluções.',
      icon: Leaf
    },
    {
      title: 'Irrigação',
      description: 'Somos um dos poucos produtores com 90% da área irrigada, garantindo produção mesmo em períodos secos.',
      icon: Droplets
    },
    {
      title: 'Escala',
      description: 'Capacidade para atender demandas de diferentes portes, sem comprometer a qualidade.',
      icon: Truck
    }
  ];

  const testimonials = [
    {
      quote: "A qualidade do feno é excelente, meus animais estão mais saudáveis e com melhor desempenho desde que comecei a usar.",
      author: "João Silva",
      role: "Haras Estrela"
    },
    {
      quote: "O pré-secado fornecido é consistente e de alta qualidade. A entrega sempre pontual faz toda diferença na minha operação.",
      author: "Ana Oliveira",
      role: "Fazenda Belo Monte"
    },
    {
      quote: "A diferença é visível. Desde que mudamos para este fornecedor, nossos cavalos de competição apresentaram melhor rendimento.",
      author: "Carlos Mendes",
      role: "Centro Equestre Alvorada"
    }
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Video Background or Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://i.im.ge/2025/04/05/pCtGJY.image.png" 
            alt="Campo de feno"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight hero-text-shadow max-w-5xl mx-auto">
            Alimentação de qualidade forma campeões. Produzimos Feno e Pré-Secado com qualidade, tecnologia e consistência.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contato" className="btn-primary">
              Entre em contato
            </Link>
            <Link to="/feno" className="btn-secondary">
              Saiba mais
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">Nossa História</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Há mais de uma década, nos dedicamos à produção de alimentos de alta qualidade para animais, 
              combinando tradição, tecnologia e compromisso com a excelência.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <VideoPlayer 
                src="/fenovid-tech.mp4" 
                poster="https://i.im.ge/2025/04/05/pCtcgx.img-fenooo.jpeg"
              />
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-bold text-agro-green">Tecnologia e Tradição</h3>
              <p>
                Nossa jornada começou com a visão de transformar a produção de alimentos para animais, 
                especialmente cavalos e gado, através da combinação perfeita entre métodos tradicionais e 
                tecnologias avançadas de produção e irrigação.
              </p>
              <p>
                Hoje, contamos com uma área de produção de mais de 1.000 hectares, dos quais 90% são irrigados, 
                o que nos permite manter uma produção constante e de alta qualidade ao longo de todo o ano.
              </p>
              <div>
                <Link to="/irrigacao" className="inline-flex items-center text-agro-green font-medium hover:text-agro-green/80 transition-colors">
                  Conheça nosso sistema de irrigação
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-agro-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">Por Que Escolher Nossos Produtos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso compromisso com a excelência se reflete em cada aspecto do nosso trabalho, do plantio à entrega.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div className="animate-on-scroll" key={feature.title} style={{animationDelay: `${index * 0.1}s`}}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">Nossos Produtos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Produzimos alimentos de alta qualidade que garantem nutrição adequada e saúde para seus animais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feno Card */}
            <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll h-full flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Feno" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-agro-brown">Feno</h3>
                <p className="text-gray-600 mb-4">
                  Produzido a partir de gramíneas selecionadas, nosso feno passa por um processo 
                  cuidadoso de desidratação que preserva os nutrientes essenciais.
                </p>
                <Link 
                  to="/feno" 
                  className="inline-flex items-center text-agro-green font-medium hover:text-agro-green/80 transition-colors"
                >
                  Saiba mais sobre nosso feno
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Pre-Secado Card */}
            <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll h-full flex flex-col" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Pré-Secado" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-agro-brown">Pré-Secado</h3>
                <p className="text-gray-600 mb-4">
                  Uma alternativa nutritiva com maior teor de umidade, ideal para animais que necessitam 
                  de uma dieta mais úmida ou em períodos de transição alimentar.
                </p>
                <Link 
                  to="/pre-secado" 
                  className="inline-flex items-center text-agro-green font-medium hover:text-agro-green/80 transition-colors"
                >
                  Conheça nosso pré-secado
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Irrigação Card */}
            <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll h-full flex flex-col" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="Irrigação" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-white flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-agro-brown">Irrigação</h3>
                <p className="text-gray-600 mb-4">
                  Com 90% da nossa área de produção irrigada, garantimos qualidade e produtividade 
                  constante durante todo o ano, independente das condições climáticas.
                </p>
                <Link 
                  to="/irrigacao" 
                  className="inline-flex items-center text-agro-green font-medium hover:text-agro-green/80 transition-colors"
                >
                  Conheça nossa tecnologia de irrigação
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-agro-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="max-w-3xl mx-auto opacity-90">
              A satisfação dos nossos clientes é o melhor testemunho da qualidade dos nossos produtos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div className="animate-on-scroll" key={testimonial.author} style={{animationDelay: `${index * 0.1}s`}}>
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-agro-beige">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown animate-on-scroll">
              Pronto para Melhorar a Alimentação de Seus Animais?
            </h2>
            <p className="text-gray-700 mb-8 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              Entre em contato conosco hoje mesmo para saber mais sobre nossos produtos 
              ou para fazer um orçamento personalizado.
            </p>
            <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <Link to="/contato" className="btn-primary">
                Fazer Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;

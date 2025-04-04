import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contato = () => {
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

  return (
    <>
      <NavBar />

      <PageBanner
        title="Entre em Contato"
        subtitle="Estamos prontos para atender suas necessidades"
        backgroundImage="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-agro-brown">Fale Conosco</h2>
              <p className="text-gray-700 mb-8">
                Preencha o formulário abaixo para solicitar um orçamento ou obter mais informações 
                sobre nossos produtos. Nossa equipe entrará em contato em até 24 horas.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll lg:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-agro-brown">Informações de Contato</h2>
              <p className="text-gray-700 mb-8">
                Você também pode entrar em contato diretamente através dos canais abaixo 
                ou visitar nossa sede para conhecer nossa operação.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-agro-green mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-agro-brown">Telefone</h3>
                    <p className="text-gray-700">(xx) xxxx-xxxx</p>
                    <p className="text-gray-700">(xx) xxxxx-xxxx (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-agro-green mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-agro-brown">E-mail</h3>
                    <p className="text-gray-700">contato@agritechfeno.com.br</p>
                    <p className="text-gray-700">vendas@agritechfeno.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-agro-green mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-agro-brown">Endereço</h3>
                    <p className="text-gray-700">
                      Zona Central de São Paulo - República<br />
                      São Paulo - SP<br />
                      CEP: 01037-010
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-agro-green mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-agro-brown">Horário de Atendimento</h3>
                    <p className="text-gray-700">Segunda a Sexta: 8h às 17h</p>
                    <p className="text-gray-700">Sábado: 8h às 12h</p>
                  </div>
                </div>

                <div className="flex items-center pt-2">
                  <h3 className="font-semibold text-agro-brown mr-4">Redes Sociais:</h3>
                  <a href="#" className="text-agro-green hover:text-agro-green/80 transition-colors mr-4">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-agro-green hover:text-agro-green/80 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 text-agro-brown">Nossa Localização</h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video relative w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58587.126682838105!2d-46.52289079830421!3d-23.39923346852315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5853d96a1441%3A0xebba5cad95ff31bb!2sZona%20Central%20de%20S%C3%A3o%20Paulo%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001037-010!5e0!3m2!1spt-BR!2sbr!4v1743803684273!5m2!1spt-BR!2sbr" 
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da AgriTech Feno"
                aria-label="Mapa mostrando a localização da AgriTech Feno em São Paulo">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-agro-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agro-brown">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossos produtos e serviços.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-2 text-agro-brown">Qual a área mínima para entrega?</h3>
              <p className="text-gray-700">
                Trabalhamos com entregas a partir de XX fardos ou X toneladas, dependendo da localização. 
                Para pedidos menores, podemos organizar retiradas em nossa sede.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-semibold mb-2 text-agro-brown">Vocês entregam em todo o Brasil?</h3>
              <p className="text-gray-700">
                Sim, realizamos entregas para todo o território nacional. O custo e prazo de entrega 
                variam conforme a distância e quantidade solicitada.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-2 text-agro-brown">Como devo armazenar o feno e o pré-secado?</h3>
              <p className="text-gray-700">
                O feno deve ser armazenado em local seco e coberto, protegido da umidade. Já o pré-secado, 
                por ser embalado em plástico, pode ser armazenado ao ar livre, mas deve-se evitar danos à embalagem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-agro-beige/30 animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold mb-2 text-agro-brown">Posso visitar a fazenda para conhecer o processo produtivo?</h3>
              <p className="text-gray-700">
                Sim, oferecemos visitas técnicas mediante agendamento prévio. É uma excelente oportunidade 
                para conhecer nossa infraestrutura de irrigação e processo de produção.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-700 mb-6">
              Não encontrou o que procura? Entre em contato diretamente conosco.
            </p>
            <Link to="#" className="btn-primary">
              Ver Todas as Perguntas <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contato;

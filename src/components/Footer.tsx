
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agro-green text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AgriTech Feno</h3>
            <p className="mb-4 text-agro-beige/90">
              Produzimos Feno e Pré-Secado com qualidade, tecnologia e consistência para alimentação de qualidade.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-agro-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-agro-yellow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-agro-beige/90 hover:text-agro-yellow transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/feno" className="text-agro-beige/90 hover:text-agro-yellow transition-colors">
                  Feno
                </Link>
              </li>
              <li>
                <Link to="/pre-secado" className="text-agro-beige/90 hover:text-agro-yellow transition-colors">
                  Pré-Secado
                </Link>
              </li>
              <li>
                <Link to="/irrigacao" className="text-agro-beige/90 hover:text-agro-yellow transition-colors">
                  Irrigação
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-agro-beige/90 hover:text-agro-yellow transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneCall size={18} className="mr-2 text-agro-yellow" />
                <span className="text-agro-beige/90">(xx) xxxxx-xxxx</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-agro-yellow" />
                <span className="text-agro-beige/90">contato@agritechfeno.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-agro-yellow" />
                <span className="text-agro-beige/90">Rodovia XX, Km XX, Zona Rural<br />Cidade - Estado, Brasil</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-agro-beige/90">
              Receba novidades e atualizações sobre nossos produtos.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 text-white placeholder-agro-beige/50 rounded-l-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-agro-yellow flex-grow"
              />
              <button className="bg-agro-yellow text-agro-brown p-2 rounded-r-md hover:bg-agro-yellow/90 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-agro-beige/60">
          <p>&copy; {currentYear} AgriTech Feno. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

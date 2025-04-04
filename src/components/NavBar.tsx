import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Custom link component that closes mobile menu on click
  const NavLink = ({ to, children, className }: { to: string, children: React.ReactNode, className?: string }) => {
    return (
      <Link 
        to={to} 
        className={className}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300', 
      scrolled ? 'header-scrolled' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-agro-green">
              <span className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12" stroke="#4B7F52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7V12L15 15" stroke="#4B7F52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3L15 9" stroke="#E7BB41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3H21V9" stroke="#E7BB41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                AgriTech Feno
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={`font-medium transition-colors ${scrolled ? 'text-agro-brown hover:text-agro-green' : 'text-white hover:text-agro-yellow'}`}>Início</NavLink>
            <NavLink to="/feno" className={`font-medium transition-colors ${scrolled ? 'text-agro-brown hover:text-agro-green' : 'text-white hover:text-agro-yellow'}`}>Feno</NavLink>
            <NavLink to="/pre-secado" className={`font-medium transition-colors ${scrolled ? 'text-agro-brown hover:text-agro-green' : 'text-white hover:text-agro-yellow'}`}>Pré-Secado</NavLink>
            <NavLink to="/irrigacao" className={`font-medium transition-colors ${scrolled ? 'text-agro-brown hover:text-agro-green' : 'text-white hover:text-agro-yellow'}`}>Irrigação</NavLink>
            <NavLink to="/contato" className="bg-agro-green hover:bg-agro-green/90 text-white py-2 px-4 rounded-md">
              Contato
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-agro-brown focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-4 py-4 px-6 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className="text-agro-brown font-medium hover:text-agro-green transition-colors"
              >
                Início
              </NavLink>
              <NavLink 
                to="/feno" 
                className="text-agro-brown font-medium hover:text-agro-green transition-colors"
              >
                Feno
              </NavLink>
              <NavLink 
                to="/pre-secado" 
                className="text-agro-brown font-medium hover:text-agro-green transition-colors"
              >
                Pré-Secado
              </NavLink>
              <NavLink 
                to="/irrigacao" 
                className="text-agro-brown font-medium hover:text-agro-green transition-colors"
              >
                Irrigação
              </NavLink>
              <NavLink 
                to="/contato" 
                className="bg-agro-green text-white py-2 px-4 rounded-md text-center hover:bg-agro-green/90 transition-colors"
              >
                Contato
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;

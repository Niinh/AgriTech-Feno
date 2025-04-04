
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <div className="min-h-[80vh] flex items-center justify-center bg-agro-beige/30">
        <div className="text-center px-4">
          <div className="mb-6 text-agro-green">
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 120 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM60 100C37.9 100 20 82.1 20 60C20 37.9 37.9 20 60 20C82.1 20 100 37.9 100 60C100 82.1 82.1 100 60 100Z" fill="currentColor"/>
              <path d="M65 40H55V65H65V40Z" fill="currentColor"/>
              <path d="M65 75H55V85H65V75Z" fill="currentColor"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-agro-brown">404</h1>
          <p className="text-xl text-gray-700 mb-8">Oops! Página não encontrada</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            A página que você está procurando foi removida, teve seu nome alterado ou está temporariamente indisponível.
          </p>
          <Link to="/" className="btn-primary">
            <Home size={18} className="mr-2" />
            Voltar para o Início
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

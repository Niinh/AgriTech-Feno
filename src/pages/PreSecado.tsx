
import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import WhatIsPreDriedSection from '@/components/sections/WhatIsPreDriedSection';
import NutritionalAdvantagesSection from '@/components/sections/NutritionalAdvantagesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ProductionProcessSection from '@/components/sections/ProductionProcessSection';
import CTASection from '@/components/sections/CTASection';

const PreSecado = () => {
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
        title="Feno Pré-Secado"
        subtitle="A evolução na nutrição animal"
        backgroundImage="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      <WhatIsPreDriedSection />
      <NutritionalAdvantagesSection />
      <ComparisonSection />
      <ProductionProcessSection />
      
      <CTASection 
        title="Descubra o Diferencial do Nosso Feno Pré-Secado"
        description="Agende uma visita técnica para conhecer nosso processo produtivo ou solicite uma amostra para testar com seus animais."
        primaryButtonText="Solicitar Amostra"
        primaryButtonLink="/contato"
        secondaryButtonText="Conheça Nossa Irrigação"
        secondaryButtonLink="/irrigacao"
      />

      <Footer />
    </>
  );
};

export default PreSecado;

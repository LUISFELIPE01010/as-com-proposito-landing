
import React, { useState, useEffect } from 'react';

const FixedCTAButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Mostra o botão após rolar 100vh
      setIsVisible(scrollTop > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <a 
        href="https://pay.kiwify.com.br/pJETYxg" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="btn-gold text-white px-8 py-4 rounded-full font-semibold shadow-gold hover:shadow-gold-hover transition-all duration-300 text-sm md:text-base light-glow animate-pulse-glow">
          Quero organizar minhas finanças
        </button>
      </a>
    </div>
  );
};

export default FixedCTAButton;

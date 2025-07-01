
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-elegant-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-elegant-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-elegant-brown rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-elegant-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-elegant-black mb-8 leading-tight">
            Organize sua vida financeira com
            <span className="text-elegant-gold"> leveza</span>,
            <span className="text-elegant-brown"> clareza</span> e
            <span className="text-elegant-gold"> autonomia</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-inter font-medium text-elegant-brown mb-8 max-w-3xl mx-auto">
            Mesmo que você ganhe pouco. Mesmo começando do zero. O que você precisa é de direção, não de mais dinheiro.
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-10 max-w-3xl mx-auto shadow-lg">
            <p className="text-lg font-inter text-elegant-black leading-relaxed">
              A sua realidade financeira não vai mudar só porque você começou a ganhar mais. 
              Ela muda quando você aprende a lidar com o que já tem. Se hoje você sente que o dinheiro some, 
              as contas acumulam e a ansiedade não dá trégua, esse curso é para você.
            </p>
          </div>

          <a 
            href="https://pay.kiwify.com.br/pJETYxg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-gold text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Quero organizar minhas finanças agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/heros.png" 
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-elegant-gold/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-elegant-brown/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-elegant-gold/15 to-transparent rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-elegant-brown/10 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Foto - primeira no mobile, segunda no desktop */}
          <div className="animate-on-scroll order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl blur opacity-20 animate-pulse-glow"></div>
              <img 
                src="/perfil.JPG" 
                alt="Vitória Mendes - Especialista em Finanças"
                className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-gold hover:shadow-gold-hover transition-all duration-300 border-elegant light-glow"
              />
            </div>
          </div>

          {/* Conteúdo - segundo no mobile, primeiro no desktop */}
          <div className="animate-on-scroll space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-elegant-white text-center lg:text-left leading-tight px-2 lg:px-0">
              Organize sua vida financeira com
              <span className="text-elegant-gold"> leveza</span>,
              <span className="text-elegant-brown"> clareza</span> e
              <span className="text-elegant-gold"> autonomia</span>
            </h1>
            
            <h2 className="text-base sm:text-lg lg:text-xl text-elegant-gold text-center lg:text-left font-medium px-4 lg:px-0">
              Mesmo que você ganhe pouco. Mesmo começando do zero. O que você precisa é de direção, não de mais dinheiro.
            </h2>

            <div className="bg-gradient-card shadow-elegant p-4 sm:p-6 lg:p-8 rounded-2xl border-elegant-light mx-4 lg:mx-0">
              <p className="text-sm sm:text-base !text-white text-center lg:text-left leading-relaxed">
                A sua realidade financeira não vai mudar só porque você começou a ganhar mais. 
                Ela muda quando você aprende a lidar com o que já tem. Se hoje você sente que o dinheiro some, 
                as contas acumulam e a ansiedade não dá trégua, esse curso é para você.
              </p>
            </div>

            <div className="text-center lg:text-left px-4 lg:px-0">
              <a 
                href="https://pay.kiwify.com.br/pJETYxg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-gold text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4">
                  Quero organizar minhas finanças agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

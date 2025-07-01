
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-elegant-cream via-white to-elegant-cream relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-elegant-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-elegant-brown rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-elegant-gold rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-elegant-brown rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo à esquerda */}
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-elegant-black mb-6 leading-tight text-left">
              Organize sua vida financeira com
              <span className="text-elegant-gold"> leveza</span>,
              <span className="text-elegant-brown"> clareza</span> e
              <span className="text-elegant-gold"> autonomia</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-inter font-medium text-elegant-brown mb-6 text-left">
              Mesmo que você ganhe pouco. Mesmo começando do zero. O que você precisa é de direção, não de mais dinheiro.
            </h2>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-xl border border-elegant-gold/20">
              <p className="text-base font-inter text-elegant-black leading-relaxed text-left">
                A sua realidade financeira não vai mudar só porque você começou a ganhar mais. 
                Ela muda quando você aprende a lidar com o que já tem. Se hoje você sente que o dinheiro some, 
                as contas acumulam e a ansiedade não dá trégua, esse curso é para você.
              </p>
            </div>

            <div className="text-left">
              <a 
                href="https://pay.kiwify.com.br/pJETYxg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-gold text-white px-10 py-5 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  Quero organizar minhas finanças agora
                </Button>
              </a>
            </div>
          </div>

          {/* Foto à direita */}
          <div className="animate-on-scroll lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-elegant-gold to-elegant-brown rounded-2xl blur opacity-20"></div>
              <img 
                src="/lovable-uploads/49d4e77f-7ae9-4ccf-a14b-3f3df35a22bb.png" 
                alt="Vitória Mendes - Especialista em Finanças"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-elegant-gold/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Foto da autora */}
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-elegant-gold to-elegant-brown rounded-lg blur opacity-20"></div>
                <img 
                  src="/lovable-uploads/49d4e77f-7ae9-4ccf-a14b-3f3df35a22bb.png" 
                  alt="Vitória Mendes - Especialista em Finanças"
                  className="relative w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-6">
                Quem está por trás do
                <span className="text-elegant-gold"> Finanças com Propósito</span>
              </h2>

              <div className="space-y-6 text-lg font-inter text-elegant-black leading-relaxed">
                <p>
                  Eu sou <strong className="text-elegant-brown">Vitória Mendes</strong>, especialista em recuperação de crédito, 
                  consultora financeira e CEO do Instituto Vitória Mendes. Atuo há mais de cinco anos ajudando 
                  famílias a recuperarem sua estabilidade financeira com orientação prática, realista e acessível.
                </p>

                <p>
                  Minha missão é empoderar mulheres com conhecimento e ferramentas que funcionam. 
                  Nada de fórmulas mágicas ou promessas vazias. Você vai aprender, aplicar e sentir 
                  os resultados na sua rotina.
                </p>
              </div>

              <div className="mt-10">
                <a 
                  href="https://pay.kiwify.com.br/pJETYxg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-elegant-brown hover:bg-elegant-black text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
                    Conheça o método que já mudou centenas de vidas
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

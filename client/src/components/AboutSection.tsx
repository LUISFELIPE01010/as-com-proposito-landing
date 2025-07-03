
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="elegant-section bg-gradient-section">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Foto da autora */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-gold rounded-2xl blur-2xl opacity-20 animate-pulse-glow"></div>
              <div className="bg-gradient-card shadow-elegant hover:shadow-elegant-hover transition-all duration-300 overflow-hidden rounded-2xl border-elegant-light light-glow">
                <img 
                  src="/perfil 2.JPG" 
                  alt="Vitória Mendes - Especialista em Finanças"
                  className="relative w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="animate-on-scroll space-y-8">
            <h2 className="heading-secondary text-elegant-white">
              Quem está por trás do
              <span className="text-elegant-gold"> Finanças com Propósito</span>
            </h2>

            <div className="space-y-6">
              <p className="text-body !text-white">
                Eu sou <strong className="text-elegant-gold font-semibold">Vitória Mendes</strong>, especialista em recuperação de crédito, 
                consultora financeira e CEO do Instituto Vitória Mendes. Atuo há mais de cinco anos ajudando 
                famílias a recuperarem sua estabilidade financeira com orientação prática, realista e acessível.
              </p>

              <p className="text-body !text-white">
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
                <Button className="btn-gold text-white text-lg font-semibold">
                  Conheça o método que já mudou centenas de vidas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

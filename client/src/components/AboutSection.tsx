
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-section flickering-lights">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Foto da autora */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 lg:-inset-6 bg-gradient-gold rounded-2xl blur-2xl opacity-20 animate-pulse-glow"></div>
              <div className="bg-gradient-card shadow-elegant hover:shadow-elegant-hover transition-all duration-300 overflow-hidden rounded-2xl border-elegant-light light-glow">
                <img 
                  src="/perfil 2.JPG" 
                  alt="Vitória Mendes - Especialista em Finanças"
                  className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="animate-on-scroll space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-elegant-white text-center lg:text-left">
              Quem está por trás do
              <span className="text-elegant-gold block sm:inline"> Finanças com Propósito</span>
            </h2>

            <div className="space-y-4 lg:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                Eu sou <strong className="text-elegant-gold font-semibold">Vitória Mendes</strong>, especialista em recuperação de crédito, 
                consultora financeira e CEO do Instituto Vitória Mendes. Atuo há mais de cinco anos ajudando 
                famílias a recuperarem sua estabilidade financeira com orientação prática, realista e acessível.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                Minha missão é empoderar pessoas com conhecimento e ferramentas que funcionam. 
                Nada de fórmulas mágicas ou promessas vazias. Você vai aprender, aplicar e sentir 
                os resultados na sua rotina.
              </p>
            </div>

            <div className="mt-8 lg:mt-10 text-center lg:text-left">
              <a 
                href="https://pay.kiwify.com.br/pJETYxg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <Button className="btn-gold text-white text-sm sm:text-base lg:text-lg font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto leading-tight">
                  <span className="text-center block sm:inline">
                    Conheça o método que já mudou<br className="sm:hidden" /> centenas de vidas
                  </span>
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

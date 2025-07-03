
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, GraduationCap, BarChart3 } from 'lucide-react';

const CopyCentralSection = () => {
  const benefits = [
    "Como entender exatamente para onde seu dinheiro está indo",
    "Como dividir sua renda mesmo que o valor pareça insuficiente",
    "Como pagar contas, lidar com dívidas e ainda começar a guardar",
    "Como sair do ciclo de ganhar e gastar tudo",
    "Como lidar com cartão de crédito sem culpa",
    "Como criar uma rotina de organização que você realmente consegue manter"
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-warm twinkling-stars">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-elegant-white mb-6 sm:mb-8">
            Você não precisa de mais dinheiro.
            <br />
            <span className="text-elegant-gold">Precisa de clareza.</span>
          </h2>

          <div className="text-left max-w-3xl mx-auto space-y-4 sm:space-y-6 text-base sm:text-lg font-inter text-elegant-white leading-relaxed mb-8 sm:mb-12">
            <p className="text-center text-lg sm:text-xl font-medium text-elegant-gold">
              Quantas vezes você já se prometeu que esse seria o mês da virada?
            </p>
            
            <p>
              Mas os boletos vencem, o cartão estoura, e sobra só frustração.
              O problema não está na sua renda. Está na ausência de método.
            </p>

            <p className="font-semibold text-elegant-gold text-lg sm:text-xl text-center">
              O Finanças com Propósito vai te mostrar, passo a passo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-card shadow-elegant hover:shadow-elegant-hover rounded-xl border-elegant-light transition-all duration-300 light-glow">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-elegant-gold flex-shrink-0 mt-1" />
                <p className="text-elegant-white font-medium text-sm sm:text-base">{benefit}</p>
              </div>
            ))}
          </div>

          {/* O que você recebe */}
          <div className="bg-gradient-card shadow-gold p-8 rounded-2xl border-elegant max-w-4xl mx-auto mb-12 light-glow">
            <h3 className="text-2xl font-playfair font-bold text-elegant-white text-center mb-8">
              O que você recebe no <span className="text-elegant-gold">Finanças com Propósito</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-elegant-gold mb-3">Aulas Completas</h4>
                <p className="text-elegant-white leading-relaxed">
                  Vídeo aulas práticas e diretas ao ponto que ensinam o método passo a passo. 
                  Aprenda no seu ritmo, quantas vezes precisar.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-elegant-gold mb-3">Planilha Inteligente</h4>
                <p className="text-elegant-white leading-relaxed">
                  Uma planilha financeira exclusiva, simples de usar e totalmente adaptada ao método. 
                  Organize tudo de forma visual e prática.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-400/20">
              <p className="text-lg text-elegant-white text-center font-medium">
                <span className="text-elegant-gold font-semibold">Acesso vitalício:</span> 
                Assista às aulas e use a planilha pelo tempo que precisar, sem pressa!
              </p>
            </div>
          </div>

          <a 
            href="https://pay.kiwify.com.br/pJETYxg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-gold text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Quero começar agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CopyCentralSection;

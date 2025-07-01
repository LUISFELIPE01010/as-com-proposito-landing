
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

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
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-8">
            Você não precisa de mais dinheiro.
            <br />
            <span className="text-elegant-gold">Precisa de clareza.</span>
          </h2>

          <div className="text-left max-w-3xl mx-auto space-y-6 text-lg font-inter text-elegant-black leading-relaxed mb-12">
            <p className="text-center text-xl font-medium text-elegant-brown">
              Quantas vezes você já se prometeu que esse seria o mês da virada?
            </p>
            
            <p>
              Mas os boletos vencem, o cartão estoura, e sobra só frustração.
              O problema não está na sua renda. Está na ausência de método.
            </p>

            <p className="font-semibold text-elegant-brown text-xl text-center">
              O Finanças com Propósito vai te mostrar, passo a passo:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-card shadow-elegant hover:shadow-elegant-hover rounded-xl border-elegant-light transition-all duration-300 light-glow">
                <CheckCircle className="w-6 h-6 text-elegant-gold flex-shrink-0 mt-1" />
                <p className="text-elegant-black font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-card shadow-gold p-8 rounded-2xl border-elegant max-w-3xl mx-auto mb-12 light-glow">
            <p className="text-lg text-elegant-black leading-relaxed">
              <strong className="text-elegant-brown">Além das aulas práticas</strong>, você recebe uma 
              <span className="text-elegant-gold font-semibold"> planilha financeira inteligente</span>, 
              simples de usar e adaptada à sua realidade.
            </p>
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

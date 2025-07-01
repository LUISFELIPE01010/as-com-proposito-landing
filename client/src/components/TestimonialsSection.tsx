
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Juliana Andrade",
      description: "Empresária, 32 anos",
      text: "Sempre achei que precisava ganhar mais. Mas o curso me mostrou que organização vem antes. Hoje tenho paz com meu dinheiro.",
      image: "/lovable-uploads/8f439b39-2cc0-452d-8ce5-bf13a63dbb23.png"
    },
    {
      name: "Mariana Silva",
      description: "Profissional Liberal, 28 anos",
      text: "Em 3 meses consegui quitar minhas dívidas e ainda criar uma reserva. O método da Vitória realmente funciona!",
      image: "/lovable-uploads/f45aab3c-f72f-483d-80c4-947930a20dd4.png"
    },
    {
      name: "Ana Carolina",
      description: "Mãe e Empreendedora, 35 anos",
      text: "Finalmente entendi para onde meu dinheiro estava indo. A planilha é simples e prática, uso todos os dias.",
      image: "/lovable-uploads/0dab972b-e0d5-4056-9ac0-acbf690b6f4e.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#332816' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-elegant-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-elegant-gold rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-elegant-gold rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-16">
            Resultados reais de quem colocou o
            <span className="text-elegant-gold animate-pulse"> método em prática</span>
          </h2>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-elegant-gold/20 animate-fade-in">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-elegant-gold shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <blockquote className="text-xl md:text-2xl text-elegant-black font-medium leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-elegant-brown text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-elegant-black opacity-70">
                      {testimonials[currentTestimonial].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-elegant-gold hover:bg-elegant-gold/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-elegant-gold hover:bg-elegant-gold/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-elegant-gold shadow-lg' : 'bg-white opacity-50 hover:opacity-75'
                }`}
              />
            ))}
          </div>

          <div className="mt-12">
            <a 
              href="https://pay.kiwify.com.br/pJETYxg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-gold text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                Quero ter esses resultados também
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

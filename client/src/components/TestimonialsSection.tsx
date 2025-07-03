import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Eu sempre tive dificuldade para guardar dinheiro. Com as aulas e a planilha do curso, consegui organizar minhas finanças e em 3 meses já tinha uma reserva de emergência. Mudou completamente minha relação com o dinheiro!",
      rating: 5
    },
    {
      name: "Ana Carolina",
      location: "Rio de Janeiro, RJ",
      text: "O curso é muito prático e direto ao ponto. A planilha é incrível, simples de usar mas muito eficiente. Agora sei exatamente para onde vai cada centavo do meu salário e consigo planejar melhor meus gastos.",
      rating: 5
    },
    {
      name: "Carla Mendes",
      location: "Belo Horizonte, MG",
      text: "Estava sempre no vermelho e com cartão estourado. Depois das aulas aprendi a usar o cartão de crédito de forma inteligente e organizei todas as minhas contas. Hoje tenho tranquilidade financeira!",
      rating: 5
    },
    {
      name: "Juliana Santos",
      location: "Porto Alegre, RS",
      text: "O método é revolucionário! Não é só sobre guardar dinheiro, é sobre entender seus hábitos financeiros. A planilha me ajuda a acompanhar tudo de forma visual e fácil. Super recomendo!",
      rating: 5
    },
    {
      name: "Fernanda Costa",
      location: "Brasília, DF",
      text: "Sempre achei que ganhava pouco para conseguir guardar dinheiro. As aulas me mostraram que o problema não era minha renda, mas sim a falta de organização. Hoje já tenho meus primeiros R$ 1.000 guardados!",
      rating: 5
    },
    {
      name: "Patricia Lima",
      location: "Fortaleza, CE",
      text: "A clareza que o curso trouxe para minha vida financeira foi incrível. Agora entendo perfeitamente meus gastos e sei como planejar para realizar meus sonhos. A planilha é minha companheira diária!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left - next slide
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swipe right - previous slide
      goToPrev();
    }
  };

  return (
    <section className="py-20 bg-gradient-section flickering-lights relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center animate-on-scroll space-y-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-white mb-6">
            Resultados reais que
            <span className="text-elegant-gold animate-pulse"> inspiram</span>
          </h2>

          <p className="text-xl text-elegant-gray mb-12 max-w-2xl mx-auto">
            Veja o que nossas alunas estão falando sobre sua transformação financeira
          </p>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div 
              ref={carouselRef}
              className="bg-gradient-card shadow-gold rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-elegant min-h-[300px] sm:min-h-[350px] flex items-center cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="w-full">
                <div className="flex justify-center mb-4 sm:mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-elegant-white leading-relaxed mb-6 sm:mb-8 text-center italic px-2">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-elegant-gold mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm sm:text-base text-elegant-gray">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Swipe instruction for mobile */}
            <div className="text-center mt-4 md:hidden">
              <p className="text-xs text-elegant-gray">
                Deslize para ver mais depoimentos
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-yellow-400 w-6 sm:w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <p className="text-lg text-elegant-white mb-6">
              Junte-se a centenas de mulheres que já transformaram suas finanças!
            </p>
            <a 
              href="https://pay.kiwify.com.br/pJETYxg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="btn-gold text-gray-900 px-8 py-4 rounded-full font-semibold shadow-gold hover:shadow-gold-hover transition-all duration-300 text-lg light-glow">
                Quero meu resultado também
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
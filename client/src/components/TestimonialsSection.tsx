
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array com as imagens dos depoimentos
  const testimonialImages = [
    "/1.jpg",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.jpg",
    "/12.jpg",
    "/13.png",
    "/14.jpg",
    "/15.jpg"
  ];

  // Duplicar array para efeito infinito
  const extendedImages = [...testimonialImages, ...testimonialImages, ...testimonialImages];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= testimonialImages.length * 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000); // Muda a cada 3 segundos com pausa

    return () => clearInterval(interval);
  }, [testimonialImages.length]);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#332816' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-elegant-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-elegant-gold rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-elegant-gold rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-16">
            Resultados reais que
            <span className="text-elegant-gold animate-pulse"> inspiram</span>
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${extendedImages.length * (100 / 3)}%`
              }}
            >
              {extendedImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / extendedImages.length}%` }}
                >
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`Resultado ${(index % testimonialImages.length) + 1}`}
                      className="w-full h-auto max-h-[600px] object-contain rounded-xl shadow-2xl border-4 border-elegant-gold/20 group-hover:border-elegant-gold/40 transition-all duration-300"
                      style={{ aspectRatio: '9/16' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  (currentIndex % testimonialImages.length) === index 
                    ? 'bg-elegant-gold shadow-lg scale-125' 
                    : 'bg-white opacity-50 hover:opacity-75'
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

      {/* CSS for mobile responsiveness */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .flex-shrink-0 {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
          }
          
          img {
            max-height: 400px;
          }
        }
        
        @media (max-width: 480px) {
          img {
            max-height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;

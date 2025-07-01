import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 2000); // Pausa de 2 segundos

    return () => clearInterval(interval);
  }, [testimonialImages.length]);

  return (
    <section className="elegant-section relative overflow-hidden" style={{ backgroundColor: '#332816' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-elegant-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-elegant-gold rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-elegant-gold rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center animate-on-scroll space-y-12">
          <h2 className="heading-secondary text-white">
            Resultados reais que
            <span className="text-elegant-gold animate-pulse"> inspiram</span>
          </h2>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8">
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md">
                <div className="relative">
                  <img
                    src={testimonialImages[currentIndex]}
                    alt={`Resultado ${currentIndex + 1}`}
                    className={`w-full h-auto max-h-[600px] object-contain rounded-xl shadow-2xl border-4 border-elegant-gold/20 transition-all duration-500 ${
                      isTransitioning ? 'opacity-100 scale-100' : 'opacity-90 scale-95'
                    }`}
                    style={{ aspectRatio: '9/16' }}
                    onLoad={() => setIsTransitioning(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsTransitioning(true);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
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
              <Button className="btn-gold text-white text-lg font-semibold">
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
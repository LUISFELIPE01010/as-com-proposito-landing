
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 video-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Assista o vídeo abaixo e dê esse passo tão importante para
            <span className="text-elegant-gold"> alcançar seus objetivos!</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Veja como o método Finanças com Propósito pode transformar sua relação com o dinheiro
          </p>

          {/* Video do YouTube */}
          <div className="relative glass-effect-dark rounded-2xl overflow-hidden shadow-gold max-w-3xl mx-auto border-elegant light-glow">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/LuBiroSOnNQ?autoplay=1&mute=1&rel=0&showinfo=0&controls=1"
                title="Finanças com Propósito"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="https://pay.kiwify.com.br/pJETYxg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="btn-gold text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quero começar minha transformação agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

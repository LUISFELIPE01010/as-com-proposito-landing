
import React from 'react';
import { Play } from 'lucide-react';

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

          {/* Video placeholder - substitua pela URL do vídeo real */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-elegant-brown to-elegant-black">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-elegant-gold rounded-full mb-4 hover:bg-opacity-90 transition-all duration-300 cursor-pointer">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white text-lg font-medium">Clique para assistir o vídeo</p>
              </div>
            </div>
            
            {/* Overlay para futura integração do vídeo */}
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"></div>
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

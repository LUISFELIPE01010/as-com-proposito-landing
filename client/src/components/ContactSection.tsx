
import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-elegant moving-circles relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-white mb-8">
            Precisa falar comigo?
          </h2>
          
          <p className="text-xl text-elegant-gold mb-12 max-w-2xl mx-auto">
            Caso tenha dúvidas antes de comprar, estou à disposição no WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <a 
              href="https://wa.me/5513996888557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 btn-elegant shadow-elegant hover:shadow-elegant-hover transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>

            <a 
              href="https://www.instagram.com/ivitoriamendes_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 btn-elegant shadow-elegant hover:shadow-elegant-hover transform hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-2xl shadow-gold border-elegant light-glow">
            <a 
              href="https://pay.kiwify.com.br/pJETYxg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <button className="btn-gold text-white px-12 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full transform hover:scale-105">
                Sim, quero organizar minha vida financeira agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

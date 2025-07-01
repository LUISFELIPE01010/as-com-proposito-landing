
import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-elegant-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-black mb-8">
            Precisa falar comigo?
          </h2>
          
          <p className="text-xl text-elegant-brown mb-12 max-w-2xl mx-auto">
            Caso tenha dúvidas antes de comprar, estou à disposição no WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <a 
              href="https://wa.me/5513996888557" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>

            <a 
              href="https://www.instagram.com/ivitoriamendes_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <a 
              href="https://pay.kiwify.com.br/pJETYxg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <button className="btn-gold text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full">
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

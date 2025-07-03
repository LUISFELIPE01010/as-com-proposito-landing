
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "Para quem é indicado o curso Finanças com Propósito?",
      answer: "O curso é perfeito para mulheres que querem organizar suas finanças, independentemente da renda. Se você sente que o dinheiro some, tem dificuldade para guardar ou vive no vermelho, esse método vai te ajudar."
    },
    {
      question: "Preciso ter conhecimento prévio em finanças?",
      answer: "Não! O curso foi desenvolvido para iniciantes. Começamos do básico e avançamos gradualmente, sempre com linguagem simples e exemplos práticos."
    },
    {
      question: "A planilha funciona para qualquer tipo de renda?",
      answer: "Sim! A planilha é adaptável e funciona tanto para quem tem renda fixa quanto para quem tem renda variável. O importante é seguir o método ensinado no curso."
    },
    {
      question: "Como funciona o acesso ao curso?",
      answer: "Após a compra, você receberá o acesso imediato à plataforma com todas as aulas e a planilha financeira. Você pode assistir quando e onde quiser, no seu ritmo."
    },
    {
      question: "Por quanto tempo tenho acesso ao conteúdo?",
      answer: "O acesso é vitalício! Você poderá assistir às aulas e usar a planilha pelo tempo que precisar, sem data de expiração."
    },
    {
      question: "E se eu não conseguir aplicar o método?",
      answer: "O método é simples e prático, desenvolvido especialmente para quem tem pouco tempo. Além disso, você conta com suporte para tirar dúvidas e garantir que consiga colocar tudo em prática."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Oferecemos opções de parcelamento para facilitar o seu investimento na organização financeira. Verifique as condições disponíveis na página de checkout."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-soft floating-lights">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-white text-center mb-16">
            Perguntas
            <span className="text-elegant-gold"> Frequentes</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item bg-gradient-card shadow-elegant hover:shadow-elegant-hover rounded-xl overflow-hidden border-elegant-light light-glow">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-elegant-black pr-4">
                    {faq.question}
                  </h3>
                  {openItem === index ? (
                    <ChevronUp className="w-6 h-6 text-elegant-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-elegant-gold flex-shrink-0" />
                  )}
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-6">
                    <p className="text-elegant-black leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://pay.kiwify.com.br/pJETYxg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="btn-gold text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Quero começar agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

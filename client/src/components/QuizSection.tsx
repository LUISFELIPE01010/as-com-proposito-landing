
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Você sabe quanto gasta por mês com coisas supérfluas?",
      options: [
        { text: "Sim, tenho controle total", score: 3 },
        { text: "Mais ou menos, tenho uma ideia", score: 2 },
        { text: "Não faço ideia", score: 1 }
      ]
    },
    {
      question: "Você costuma parcelar compras sem saber se vai conseguir pagar?",
      options: [
        { text: "Nunca, sempre calculo antes", score: 3 },
        { text: "Às vezes, quando é necessário", score: 2 },
        { text: "Frequentemente", score: 1 }
      ]
    },
    {
      question: "Tem uma reserva para emergências?",
      options: [
        { text: "Sim, tenho pelo menos 6 meses de gastos", score: 3 },
        { text: "Tenho um pouco guardado", score: 2 },
        { text: "Não tenho nada guardado", score: 1 }
      ]
    },
    {
      question: "Sente culpa ou ansiedade ao gastar?",
      options: [
        { text: "Raramente, só quando é desnecessário", score: 3 },
        { text: "Às vezes", score: 2 },
        { text: "Quase sempre", score: 1 }
      ]
    },
    {
      question: "Já tentou se organizar e desistiu por ser complicado demais?",
      options: [
        { text: "Não, consigo manter a organização", score: 3 },
        { text: "Já aconteceu algumas vezes", score: 2 },
        { text: "Várias vezes", score: 1 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getTotalScore = () => {
    return answers.reduce((sum, score) => sum + score, 0);
  };

  const getResult = () => {
    const total = getTotalScore();
    if (total >= 12) {
      return {
        level: "Satisfatório",
        message: "Você já tem uma base sólida, mas sempre há espaço para aperfeiçoamento!",
        color: "text-green-600"
      };
    } else if (total >= 8) {
      return {
        level: "Em construção",
        message: "Você está no caminho certo, mas precisa de mais estrutura e método.",
        color: "text-elegant-gold"
      };
    } else {
      return {
        level: "Baixo",
        message: "É hora de tomar as rédeas da sua vida financeira. O momento é agora!",
        color: "text-red-600"
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-20 bg-gradient-cream floating-elements">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-elegant-white mb-6">
            Em que nível está sua
            <span className="text-elegant-gold"> vida financeira</span> hoje?
          </h2>
          
          <p className="text-xl text-elegant-gold mb-12">
            Responda a perguntas rápidas e descubra se você tem controle real sobre o seu dinheiro. 
            No final, receba um diagnóstico e um convite para agir.
          </p>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant border-elegant-light light-glow">
            {!showResult ? (
              <div>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-elegant-brown font-medium">
                      Pergunta {currentQuestion + 1} de {questions.length}
                    </span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-elegant-gold h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-semibold text-elegant-black mb-8">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full p-4 text-left bg-gradient-card rounded-lg border-2 border-elegant-light hover:border-elegant-gold hover:shadow-elegant transition-all duration-300 light-glow"
                    >
                      <span className="text-elegant-black font-medium">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-elegant-black mb-6">
                  Seu resultado:
                </h3>
                
                <div className="mb-8">
                  <div className={`text-4xl font-bold mb-4 ${getResult().color}`}>
                    Nível: {getResult().level}
                  </div>
                  <p className="text-lg text-elegant-black mb-6">
                    {getResult().message}
                  </p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://pay.kiwify.com.br/pJETYxg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="btn-gold text-white px-8 py-4 text-lg font-semibold rounded-lg w-full">
                      Quero começar meu plano de organização agora
                    </Button>
                  </a>
                  
                  <button
                    onClick={resetQuiz}
                    className="text-elegant-brown hover:text-elegant-black transition-colors duration-300 underline"
                  >
                    Refazer o quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;

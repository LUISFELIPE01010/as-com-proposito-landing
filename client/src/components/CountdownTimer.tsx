import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { mins: mins.toString().padStart(2, '0'), secs: secs.toString().padStart(2, '0') };
  };

  const { mins, secs } = formatTime(timeLeft);

  return (
    <div className="fixed top-0 left-0 right-0 z-50" style={{ 
      background: 'linear-gradient(90deg, #1a1a1a 0%, #332816 15%, #332816 85%, #1a1a1a 100%)' 
    }}>
      <div className="px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">

          {/* Texto simples */}
          <span className="text-white text-sm font-medium">
            A OFERTA ENCERRA EM:
          </span>

          {/* Cronômetro minimalista */}
          <div className="flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex items-center gap-1">
              <span className="text-white text-2xl font-bold">
                {mins}
              </span>
              <span className="text-white/70 text-xs">MIN</span>
            </div>

            <span className="text-white/50 text-xl">:</span>

            <div className="flex items-center gap-1">
              <span className="text-white text-2xl font-bold">
                {secs}
              </span>
              <span className="text-white/70 text-xs">SEG</span>
            </div>
          </div>

          {/* Botão simples */}
          <a 
            href="https://pay.kiwify.com.br/pJETYxg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black font-bold text-sm px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            GARANTA AGORA
          </a>

        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
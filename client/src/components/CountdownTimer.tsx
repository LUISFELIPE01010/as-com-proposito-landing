import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 23); // 14 minutos e 23 segundos

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
      <div className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 mt-[7px] mb-[7px]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">

          {/* Texto responsivo */}
          <span className="text-white text-xs sm:text-sm lg:text-base font-medium">
            <span className="hidden sm:inline">A OFERTA ENCERRA EM:</span>
            <span className="sm:hidden">OFERTA:</span>
          </span>

          {/* Cronômetro responsivo */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                {mins}
              </span>
              <span className="text-white/70 text-xs">MIN</span>
            </div>

            <span className="text-white/50 text-lg sm:text-xl">:</span>

            <div className="flex items-center gap-0.5 sm:gap-1">
              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                {secs}
              </span>
              <span className="text-white/70 text-xs">SEG</span>
            </div>
          </div>

          {/* Botão responsivo */}
          <a 
            href="https://pay.kiwify.com.br/pJETYxg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black font-bold text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded hover:bg-gray-100 transition-colors"
          >
            <span className="hidden sm:inline">GARANTA AGORA</span>
            <span className="sm:hidden">GARANTA</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
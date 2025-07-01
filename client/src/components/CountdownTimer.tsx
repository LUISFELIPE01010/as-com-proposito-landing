
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-2xl">
      <div className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent animate-pulse"></div>
        
        <div className="relative px-4 py-4 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Texto de urgência */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-sm lg:text-base tracking-wide">
                ⚡ A OFERTA ENCERRA EM:
              </span>
            </div>

            {/* Cronômetro principal */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {/* Minutos */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-amber-700 to-amber-900 border-2 border-amber-600 rounded-xl px-4 py-3 min-w-[80px] flex flex-col items-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-black text-amber-100 leading-none font-mono">
                      {mins}
                    </div>
                    <div className="text-xs font-semibold text-amber-200 mt-1 tracking-widest">
                      MIN
                    </div>
                  </div>
                </div>

                {/* Separador */}
                <div className="text-amber-200 text-3xl font-bold animate-pulse mx-1">
                  :
                </div>

                {/* Segundos */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-amber-700 to-amber-900 border-2 border-amber-600 rounded-xl px-4 py-3 min-w-[80px] flex flex-col items-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-black text-amber-100 leading-none font-mono">
                      {secs}
                    </div>
                    <div className="text-xs font-semibold text-amber-200 mt-1 tracking-widest">
                      SEG
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão CTA */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <a 
                href="https://pay.kiwify.com.br/pJETYxg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-sm lg:text-base px-6 py-3 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-500"
              >
                <div className="flex items-center gap-2">
                  <span>🔥 GARANTA AGORA</span>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Barra de progresso animada */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-950">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000 ease-linear"
            style={{ width: `${((15 * 60 - timeLeft) / (15 * 60)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

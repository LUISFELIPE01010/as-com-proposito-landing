
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-elegant-black via-elegant-brown to-elegant-black text-white py-3 shadow-lg animate-slide-down">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">A OFERTA ENCERRA EM:</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div className="bg-elegant-gold/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-elegant-gold/30">
              <span className="text-2xl font-bold text-elegant-gold">{mins}</span>
            </div>
            <span className="text-elegant-gold font-bold">:</span>
            <div className="bg-elegant-gold/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-elegant-gold/30">
              <span className="text-2xl font-bold text-elegant-gold">{secs}</span>
            </div>
          </div>
          <div className="text-xs text-gray-300">
            <div>Minutos</div>
            <div>Segundos</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-elegant-gold to-yellow-400 px-4 py-2 rounded-lg shadow-lg">
          <span className="text-elegant-black font-bold text-sm">PLANILHA R$ 19,90</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

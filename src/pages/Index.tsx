
import React, { useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import VideoSection from '../components/VideoSection';
import CopyCentralSection from '../components/CopyCentralSection';
import QuizSection from '../components/QuizSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

const Index = () => {
  useEffect(() => {
    // Intersection Observer para animações
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CountdownTimer />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <CopyCentralSection />
      <QuizSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default Index;

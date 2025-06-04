
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostra o botão assim que o usuário faz scroll para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl hover:shadow-red-600/40 transform hover:scale-110 transition-all duration-300 animate-fade-in p-0"
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTopButton;

import React, { useEffect } from 'react';

interface ScreenReaderProps {
  isActive: boolean;
}

const ScreenReader: React.FC<ScreenReaderProps> = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const text = target.innerText || target.getAttribute('alt') || '';
        if (text) {
          speak(text);
        }
      };

      const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
      };

      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [isActive]);

  return null;
};

export default ScreenReader;
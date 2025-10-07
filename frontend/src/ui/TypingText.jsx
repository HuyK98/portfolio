import { useState, useEffect } from 'react';

export function TypingText({ text, className = '', speed = 80, showCursor = true, cursorClassName = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className={`animate-blink ${cursorClassName}`}>|</span>
      )}
    </span>
  );
}
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  width?: "100%" | "auto";
  delay?: number;
  duration?: number;
  variant?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  width = "100%",
  delay = 0,
  duration = 0.8,
  variant = 'up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold,
        rootMargin: "50px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getTransform = () => {
    if (!isVisible) {
      switch (variant) {
        case 'up': return 'translateY(40px)';
        case 'down': return 'translateY(-40px)';
        case 'left': return 'translateX(40px)'; // Comes from right
        case 'right': return 'translateX(-40px)'; // Comes from left
        case 'scale': return 'scale(0.90)';
        default: return '';
      }
    }
    return 'translate(0) scale(1)';
  };

  const getOpacity = () => isVisible ? 1 : 0;

  return (
    <div
      ref={ref}
      className={className}
      style={{ 
        width,
        transition: `opacity ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1), transform ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1)`,
        transitionDelay: `${delay}s`,
        opacity: getOpacity(),
        transform: getTransform()
      }}
    >
      {children}
    </div>
  );
};
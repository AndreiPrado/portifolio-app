"use client";

import { ReactNode, useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset when section comes into view
      if (top < windowHeight && top > -windowHeight) {
        const scrollPosition = window.scrollY;
        const sectionPosition = scrollPosition + top;
        const parallaxOffset = (scrollPosition - sectionPosition) * speed;
        
        setOffset(parallaxOffset);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div className={`parallax-container ${className}`} ref={sectionRef}>
      <div 
        className="w-full h-full"
        style={{ 
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)'
        }}
      >
        {children}
      </div>
    </div>
  );
}

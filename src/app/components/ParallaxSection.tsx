"use client";

import { ReactNode } from 'react';
import { Parallax } from 'react-scroll-parallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * ParallaxSection - Componente que aplica efeito de parallax usando react-scroll-parallax
 * 
 * @param children - Elementos a serem renderizados dentro do componente
 * @param speed - Velocidade do efeito parallax (positivo move para baixo, negativo move para cima)
 * @param className - Classes CSS adicionais
 */
export default function ParallaxSection({ 
  children, 
  speed = 2, 
  className = "" 
}: ParallaxSectionProps) {
  // Convertemos a velocidade para se adequar à API do react-scroll-parallax
  // O sinal é invertido já que a direção é diferente da nossa implementação anterior
  const parallaxSpeed = speed * -10; 
  
  return (
    <Parallax 
      className={`relative ${className}`}
      speed={parallaxSpeed}
      style={{ isolation: 'isolate' }}
    >
      {children}
    </Parallax>
  );
}

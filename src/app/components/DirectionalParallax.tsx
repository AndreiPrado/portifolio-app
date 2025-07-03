"use client";

import { ReactNode, useEffect, useState, useCallback } from 'react';
import { Parallax, useParallaxController } from 'react-scroll-parallax';

interface DirectionalParallaxProps {
  speed: number;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function DirectionalParallax({ 
  speed, 
  children, 
  className = '',
  disabled = false 
}: DirectionalParallaxProps) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const parallaxController = useParallaxController();
  
  // Lógica melhorada para detecção de direção de scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
      
      // Força a atualização do controlador de parallax para refletir a mudança imediatamente
      if (parallaxController) {
        parallaxController.update();
      }
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY, scrollDirection, parallaxController]);
  
  // Configura o listener de scroll com debounce para melhor performance
  useEffect(() => {
    // Utiliza throttle para não sobrecarregar com muitos eventos de scroll
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10); // 10ms throttle é suficiente para uma experiência suave
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Inicializa o estado com a posição atual
    setLastScrollY(window.scrollY);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);
  
  // Calcula a velocidade efetiva com base na direção
  // Aplicamos um multiplicador para tornar o efeito mais pronunciado quando rolamos para cima
  const directionMultiplier = scrollDirection === 'up' ? 1.5 : 1;
  const effectiveSpeed = disabled ? 0 : (scrollDirection === 'up' ? -speed * directionMultiplier : speed);
  
  // Log para debug
  useEffect(() => {
    console.log(`DirectionalParallax: direction=${scrollDirection}, speed=${effectiveSpeed}`);
  }, [scrollDirection, effectiveSpeed]);
  
  return (
    <Parallax 
      className={className}
      speed={effectiveSpeed}
      // Não usamos translateY={[0, 0]} para permitir o comportamento padrão de parallax
    >
      {children}
    </Parallax>
  );
}

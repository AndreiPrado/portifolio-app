"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  direction?: "up" | "down" | "left" | "right"; // Direction of animation
  distance?: string; // Distance to animate (e.g., "50px")
  duration?: number; // Animation duration in milliseconds
  className?: string; // Additional CSS classes
  triggerOnce?: boolean; // Whether to trigger animation only once
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = "50px",
  duration = 800,
  className = "",
  triggerOnce = false, // Alterado para false por padrão para o elemento sempre reaparecer com animação
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Calculate transform based on direction
  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance})`;
      case "down":
        return `translateY(-${distance})`;
      case "left":
        return `translateX(${distance})`;
      case "right":
        return `translateX(-${distance})`;
      default:
        return `translateY(${distance})`;
    }
  };

  useEffect(() => {
    // Skip client-side only code in SSR
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update state when observer callback fires
          if (entry.isIntersecting) {
            // Elemento entrou na viewport - mostrar com animação
            setIsVisible(true);
            
            // Se triggerOnce, parar de observar após a primeira vez
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else {
            // Elemento saiu da viewport - esconder para recriar animação na próxima vez
            if (!triggerOnce) {
              setIsVisible(false);
            }
          }
        },
        {
          root: null, // Use viewport as root
          rootMargin: "0px", // No margin
          threshold: 0.1, // Trigger when at least 10% of the element is visible
        }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [triggerOnce]);

  const style = {
    transform: isVisible ? "translate(0)" : getTransform(),
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

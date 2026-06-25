"use client";

import { ReactNode, useEffect, useState, useCallback } from "react";
import { Parallax, useParallaxController } from "react-scroll-parallax";

interface DirectionalParallaxProps {
  speed: number;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function DirectionalParallax({
  speed,
  children,
  className = "",
  disabled = false,
}: DirectionalParallaxProps) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [isMobile, setIsMobile] = useState(false);
  const parallaxController = useParallaxController();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY ? "down" : "up";

    if (direction !== scrollDirection) {
      setScrollDirection(direction);
      if (parallaxController) {
        parallaxController.update();
      }
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, scrollDirection, parallaxController]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16);
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    setLastScrollY(window.scrollY);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const effectiveSpeed =
    disabled || isMobile
      ? 0
      : scrollDirection === "up"
      ? -speed * 1.5
      : speed;

  return (
    <Parallax className={className} speed={effectiveSpeed} disabled={disabled || isMobile}>
      {children}
    </Parallax>
  );
}

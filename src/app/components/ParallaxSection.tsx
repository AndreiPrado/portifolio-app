"use client";

import { ReactNode, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 2,
  className = "",
}: ParallaxSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const parallaxSpeed = speed * -10;

  return (
    <Parallax
      className={`relative ${className}`}
      speed={parallaxSpeed}
      disabled={isMobile}
      style={{ isolation: "isolate" }}
    >
      {children}
    </Parallax>
  );
}

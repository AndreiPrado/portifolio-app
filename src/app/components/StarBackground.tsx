"use client";

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  velocity: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Star[] = [];

    function createStars() {
      stars.length = 0;
      const numStars = Math.floor((canvas!.width * canvas!.height) / 1000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          velocity: Math.random() * 0.05,
        });
      }
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      createStars();
    }

    let rafId: number;

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      stars.forEach(star => {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx!.fill();
        star.alpha = star.alpha > 0.1 ? star.alpha - 0.01 + (Math.random() * 0.01) : 0.1;
        if (Math.random() > 0.99) star.alpha = 1;
      });
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

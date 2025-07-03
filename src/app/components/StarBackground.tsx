"use client";

import { useEffect, useRef } from 'react';

// Define Star interface
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
    // Get canvas reference - early return if not available
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Get 2D context - early return if not available
    // Using non-null assertion (!) to tell TypeScript this will never be null after this check
    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;
    
    // Initialize stars array first, before any function references it
    // This ensures stars is defined before any function tries to use it
    const stars: Star[] = [];
    
    /**
     * Creates a new collection of random stars based on canvas dimensions
     */
    function createStars() {
      // Clear the stars array while keeping the same reference
      stars.length = 0;
      
      // Calculate star density based on screen size
      const numStars = Math.floor((canvas!.width * canvas!.height) / 1000);
      
      // Generate new stars
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          velocity: Math.random() * 0.05
        });
      }
    }
    
    /**
     * Handles canvas resize and recreates stars
     */
    function resize() {
      // Using non-null assertion operator (!) since we've already checked canvas isn't null
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      createStars();
    }
    
    /**
     * Animation loop for the star field
     */
    function animate() {
      // Clear the canvas for the next frame
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Draw and animate each star
      stars.forEach(star => {
        // Draw the star
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx!.fill();
        
        // Update star opacity (twinkling effect)
        star.alpha = star.alpha > 0.1 ? star.alpha - 0.01 + (Math.random() * 0.01) : 0.1;
        
        // Randomly make some stars fully bright (twinkle)
        if (Math.random() > 0.99) {
          star.alpha = 1;
        }
      });
      
      // Continue animation loop
      requestAnimationFrame(animate);
    }
    
    // Setup event listeners
    window.addEventListener('resize', resize);
    
    // Initial setup
    resize();
    
    // Start animation
    animate();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resize);
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

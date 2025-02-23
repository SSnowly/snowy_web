'use client';
import { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrame = useRef<number>(0);

  useEffect(() => {
    const initParticles = () => {
      const newParticles = Array.from({ length: 60 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        size: Math.random() * 3 + 2,
      }));
      setParticles(newParticles);
    };

    initParticles();
    window.addEventListener('resize', initParticles);
    return () => window.removeEventListener('resize', initParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p1, i) => {
        p1.x += p1.vx;
        p1.y += p1.vy;
        
        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(55, 65, 81, 0.4)';
        ctx.fill();

        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(55, 65, 81, ${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        const dx = p1.x - mousePos.x;
        const dy = p1.y - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = `rgba(55, 65, 81, ${1 - dist / 200})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrame.current = requestAnimationFrame(draw);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [particles, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
    />
  );
};

export default ParticleSystem; 
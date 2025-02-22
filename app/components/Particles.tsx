'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Particle = ({ x, y, size, delay }: ParticleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [x, x + Math.random() * 100 - 50],
        y: [y, y + Math.random() * 100 - 50]
      }}
      transition={{ 
        duration: Math.random() * 4 + 2,
        delay,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default function Particles({ count = 30 }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {Array.from({ length: count }).map((_, i) => (
        <Particle
          key={i}
          x={Math.random() * window.innerWidth}
          y={Math.random() * window.innerHeight}
          size={Math.random() * 6 + 2}
          delay={Math.random() * 2}
        />
      ))}
    </div>
  );
} 
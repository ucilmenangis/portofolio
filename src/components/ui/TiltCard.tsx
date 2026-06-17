'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '../../lib/utils';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({
  children,
  className,
  intensity = 15,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5); // 0 to 1
  const y = useMotionValue(0.5); // 0 to 1

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map 0-1 values to degrees based on intensity
  const rotateX = useTransform(springY, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(springX, [0, 1], [-intensity, intensity]);
  
  // Subtle glare effect based on mouse position
  const glareX = useTransform(springX, [0, 1], [-100, 100]);
  const glareY = useTransform(springY, [0, 1], [-100, 100]);
  const glareOpacity = useTransform(springY, [0, 1], [0.1, 0.3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized position (0 to 1)
    const normalizedX = (e.clientX - rect.left) / rect.width;
    const normalizedY = (e.clientY - rect.top) / rect.height;
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={cn(
        "relative rounded-3xl overflow-hidden glass-panel-hover",
        className
      )}
      {...props}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          x: glareX,
          y: glareY,
          opacity: isHovered ? glareOpacity : 0,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Parallax Content Wrapper */}
      <motion.div
        style={{
          z: isHovered ? 20 : 0,
        }}
        className="relative z-10 w-full h-full transform-style-3d"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

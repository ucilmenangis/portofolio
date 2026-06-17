'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '../../lib/utils';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  staggerChildren?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  staggerChildren,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const getVariants = () => {
    const hidden = { opacity: 0 };
    const visible = {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay,
        staggerChildren
      }
    };

    switch (direction) {
      case 'up': return { hidden: { ...hidden, y: 40 }, visible: { ...visible, y: 0 } };
      case 'down': return { hidden: { ...hidden, y: -40 }, visible: { ...visible, y: 0 } };
      case 'left': return { hidden: { ...hidden, x: 40 }, visible: { ...visible, x: 0 } };
      case 'right': return { hidden: { ...hidden, x: -40 }, visible: { ...visible, x: 0 } };
      default: return { hidden, visible };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

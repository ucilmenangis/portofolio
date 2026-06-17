'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '../../lib/utils';

interface BlurFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 24,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: inViewMargin as any });

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
      animate={
        isInView
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: yOffset, opacity: 0, filter: `blur(${blur})` }
      }
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

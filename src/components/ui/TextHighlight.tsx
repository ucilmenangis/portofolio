'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '../../lib/utils';

export function TextHighlight({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className={cn("relative inline-block w-fit px-2", className)}>
      <motion.span
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-emerald-500/20 rounded-md -z-10"
        style={{ originX: 0 }}
      />
      {children}
    </span>
  );
}

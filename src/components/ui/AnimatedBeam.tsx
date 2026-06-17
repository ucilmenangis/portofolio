'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function AnimatedBeam({
  className,
  duration = 3,
  delay = 0,
}: {
  className?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-slate-800/80", className)}>
      <motion.div
        initial={{ top: "-100%" }}
        animate={{ top: "200%" }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[50%] bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-80"
      />
    </div>
  );
}

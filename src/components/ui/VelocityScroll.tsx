'use client';

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity, useAnimationFrame, useMotionValue } from "motion/react";
import { cn } from "../../lib/utils";

interface VelocityScrollProps {
  text?: string;
  defaultVelocity?: number;
  className?: string;
  children?: React.ReactNode;
}

export function VelocityScroll({ text, defaultVelocity = 2, className, children }: VelocityScrollProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * defaultVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const Content = children ? (
    <div className={cn("flex items-center px-4", className)}>{children}</div>
  ) : (
    <span className={cn("block text-6xl md:text-8xl font-black uppercase tracking-tight text-slate-800/40 pr-8", className)}>
      {text} 
    </span>
  );

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap w-full">
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }}>
        {Content}
        {Content}
        {Content}
        {Content}
      </motion.div>
    </div>
  );
}

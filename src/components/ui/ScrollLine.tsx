"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className={cn("absolute top-0 bottom-0 w-[2px] bg-slate-800/80 transform", className)}>
      <motion.div
        className="absolute top-0 w-full bg-gradient-to-b from-emerald-300 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"
        style={{ height }}
      />
    </div>
  );
}

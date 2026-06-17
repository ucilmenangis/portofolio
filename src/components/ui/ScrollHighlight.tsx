"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface ScrollHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollHighlight({ children, className }: ScrollHighlightProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-30% 0px -30% 0px" }}
      className={cn("w-full", className)}
    >
      <motion.div
        variants={{
          hidden: { scale: 1, opacity: 0.8, filter: "brightness(0.8)" },
          visible: { scale: 1.05, opacity: 1, filter: "brightness(1.2)" }
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

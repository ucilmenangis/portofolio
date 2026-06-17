'use client';

import React, { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { cn } from "../../lib/utils";

export function CoolMode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    // Calculate relative click position
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Fire confetti from the click origin inside the button!
    // But confetti uses viewport coordinates for origin, so:
    const originX = e.clientX / window.innerWidth;
    const originY = e.clientY / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: originX, y: originY },
      colors: ['#10b981', '#34d399', '#059669', '#ffffff'],
      disableForReducedMotion: true,
      zIndex: 9999,
    });
  };

  return (
    <div className={cn("inline-block", className)} ref={ref} onClick={handleClick}>
      {children}
    </div>
  );
}

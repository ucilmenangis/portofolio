'use client';

import React from "react";
import { cn } from "../../lib/utils";

interface AnimatedGridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

export function AnimatedGridPattern({
  className,
  width = 40,
  height = 40,
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 3,
}: AnimatedGridPatternProps) {
  const [squares, setSquares] = React.useState<{ id: number; pos: [number, number] }[]>([]);

  React.useEffect(() => {
    const updateSquares = () => {
      const newSquares = Array.from({ length: numSquares }).map((_, i) => ({
        id: i,
        pos: [
          Math.floor(Math.random() * 20),
          Math.floor(Math.random() * 20),
        ] as [number, number],
      }));
      setSquares(newSquares);
    };

    updateSquares();
    const interval = setInterval(updateSquares, duration * 1000);
    return () => clearInterval(interval);
  }, [numSquares, duration]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full opacity-50",
        className
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="animatedGrid"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#animatedGrid)" />
        <svg className="overflow-visible">
          {squares.map((sq, i) => (
            <rect
              key={`${sq.id}-${i}`}
              width={width - 1}
              height={height - 1}
              x={sq.pos[0] * width + 1}
              y={sq.pos[1] * height + 1}
              fill="rgba(16, 185, 129, 0.1)" /* emerald-500 with low opacity */
              className="animate-in fade-in duration-1000"
              style={{
                transition: `opacity ${duration}s ease-in-out`,
                opacity: Math.random() * maxOpacity,
              }}
            />
          ))}
        </svg>
      </svg>
    </div>
  );
}

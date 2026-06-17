import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface InteractiveGridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  squares?: [number, number]; // [columns, rows]
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  className,
  width = 40,
  height = 40,
  squares = [100, 50],
  squaresClassName,
}: InteractiveGridPatternProps) {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <div className={cn("absolute inset-0 h-full w-full overflow-hidden pointer-events-none", className)}>
      <svg
        width={width * squares[0]}
        height={height * squares[1]}
        className="absolute inset-0 h-full w-full object-cover text-emerald-500/20 stroke-emerald-500/10 pointer-events-auto"
      >
        {Array.from({ length: squares[0] * squares[1] }).map((_, index) => {
          const x = (index % squares[0]) * width;
          const y = Math.floor(index / squares[0]) * height;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-[1px] transition-all duration-300 ease-in-out cursor-crosshair",
                hoveredSquare === index ? "fill-emerald-500/30 duration-0" : "fill-transparent",
                squaresClassName
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}

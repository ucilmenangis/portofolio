import { useId } from "react";
import { cn } from "../../lib/utils";

interface HexagonPatternProps {
  size?: number;
  className?: string;
  [key: string]: any;
}

export function HexagonPattern({
  size = 32,
  className,
  ...props
}: HexagonPatternProps) {
  const id = useId();
  // Math for a regular hexagon
  const width = size * Math.sqrt(3);
  const height = size * 2;
  
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height * 1.5}
          patternUnits="userSpaceOnUse"
        >
          {/* First Hexagon */}
          <path
            d={`M ${width/2} ${height*0.25} L ${width} 0 L ${width} ${height*0.5} L ${width/2} ${height*0.75} L 0 ${height*0.5} L 0 0 Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Second Hexagon (Offset) */}
          <path
            d={`M ${width/2} ${height*1.75} L ${width} ${height*1.5} L ${width} ${height*2} L ${width/2} ${height*2.25} L 0 ${height*2} L 0 ${height*1.5} Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

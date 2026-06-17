'use client';

import React, { useId } from "react";
import { cn } from "../../lib/utils";

interface DotPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  cx?: any;
  cy?: any;
  cr?: any;
  className?: string;
  [key: string]: any;
}

export function DottedMap({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-950", className)}>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full fill-slate-800"
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
      
      {/* Location Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full relative z-10"></div>
          <span className="absolute top-6 whitespace-nowrap text-xs font-bold text-emerald-400 tracking-widest uppercase">
            Jember, ID
          </span>
        </div>
      </div>
      
      {/* Gradient Mask for fading out edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950"></div>
    </div>
  );
}

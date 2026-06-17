import React from "react";
import { cn } from "../../lib/utils";

interface SafariProps {
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

export function SafariMockup({
  url = "https://portfolio.local",
  className,
  children,
}: SafariProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-t-xl border border-slate-800 bg-slate-950 shadow-2xl",
        className
      )}
    >
      <div className="flex h-10 w-full items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex h-6 w-full max-w-[200px] items-center justify-center rounded-md bg-slate-800/80 text-[10px] text-slate-400 font-mono">
            {url}
          </div>
        </div>
        <div className="w-10"></div> {/* Spacer for symmetry */}
      </div>
      <div className="relative flex-1 bg-slate-950 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

import React from "react";
import { cn } from "../../lib/utils";

export function IphoneMockup({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[500px] w-[250px] rounded-[3rem] border-[8px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden",
        className
      )}
    >
      {/* Dynamic Island / Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-[25px] w-[100px] -translate-x-1/2 rounded-b-3xl bg-slate-800"></div>
      
      {/* Screen Content */}
      <div className="relative h-full w-full overflow-hidden bg-slate-950">
        {children}
      </div>
    </div>
  );
}

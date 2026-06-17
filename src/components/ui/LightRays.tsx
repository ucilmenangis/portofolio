import { cn } from "../../lib/utils";

export function LightRays({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Soft Top Glow */}
      <div className="absolute top-0 left-1/2 w-full h-[500px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/20 to-transparent blur-[120px]"></div>
      
      {/* Sweeping Rays */}
      <div 
        className="absolute -top-[50%] left-1/2 w-[200%] h-[150%] -translate-x-1/2 opacity-30 mix-blend-screen"
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, 
            rgba(16, 185, 129, 0) 0deg, 
            rgba(16, 185, 129, 0.1) 45deg, 
            rgba(16, 185, 129, 0) 90deg, 
            rgba(16, 185, 129, 0.1) 135deg, 
            rgba(16, 185, 129, 0) 180deg, 
            rgba(16, 185, 129, 0.1) 225deg, 
            rgba(16, 185, 129, 0) 270deg, 
            rgba(16, 185, 129, 0.1) 315deg, 
            rgba(16, 185, 129, 0) 360deg)`
        }}
      ></div>
    </div>
  );
}

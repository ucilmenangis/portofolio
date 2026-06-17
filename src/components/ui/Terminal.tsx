'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function Terminal({ className }: { className?: string }) {
  const [text, setText] = useState('');
  
  const lines = [
    "~ $ whoami",
    "> Irfan Ar-Rafi",
    "> Fullstack Developer & Designer",
    "~ $ git clone https://github.com/ucilmenangis/portfolio.git",
    "Cloning into 'portfolio'...",
    "~ $ cd portfolio && npm install",
    "Installing dependencies...",
    "added 100+ packages in 2s",
    "~ $ npm run dev",
    "v5.18.0 ready in 107 ms",
    "Local: http://localhost:4321/"
  ];
  
  const fullText = lines.join("\n");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 20); // Faster typing because there is more text
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className={cn("rounded-xl border border-slate-800 bg-slate-950/50 p-4 font-mono text-xs sm:text-sm shadow-xl backdrop-blur-md w-full max-w-lg min-h-[300px]", className)}>
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        <span className="text-slate-500 text-xs ml-2 flex-1 text-center">irfan@macbook-pro:~</span>
      </div>
      <div className="text-emerald-400 whitespace-pre-wrap flex">
        <span>
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle"
          />
        </span>
      </div>
    </div>
  );
}

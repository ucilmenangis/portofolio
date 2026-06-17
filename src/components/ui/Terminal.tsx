'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function Terminal({ className }: { className?: string }) {
  const [displayedLines, setDisplayedLines] = useState<{text: string, color: string}[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const lines = [
    { text: "~ $ whoami", color: "text-blue-400 font-bold" },
    { text: "> Irfan Ar-Rafi", color: "text-slate-300" },
    { text: "> Fullstack Developer & Designer", color: "text-slate-300" },
    { text: "~ $ git clone https://github.com/ucilmenangis/portfolio.git", color: "text-blue-400 font-bold" },
    { text: "Cloning into 'portfolio'...", color: "text-slate-400" },
    { text: "~ $ cd portfolio && npm install", color: "text-blue-400 font-bold" },
    { text: "Installing dependencies...", color: "text-slate-400" },
    { text: "added 100+ packages in 2s", color: "text-emerald-400" },
    { text: "~ $ npm run dev", color: "text-blue-400 font-bold" },
    { text: "v5.18.0 ready in 107 ms", color: "text-emerald-400 font-bold" },
    { text: "Local: http://localhost:4321/", color: "text-blue-300 underline" }
  ];

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentTargetLine = lines[currentLineIndex];
    
    const timer = setTimeout(() => {
      setDisplayedLines(prev => {
        const newLines = [...prev];
        if (!newLines[currentLineIndex]) {
          newLines[currentLineIndex] = { text: "", color: currentTargetLine.color };
        }
        newLines[currentLineIndex].text = currentTargetLine.text.slice(0, currentCharIndex + 1);
        return newLines;
      });

      if (currentCharIndex + 1 < currentTargetLine.text.length) {
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }, 25); // typing speed

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className={cn("rounded-xl border border-slate-800 bg-slate-950/50 p-4 font-mono text-xs sm:text-sm shadow-xl backdrop-blur-md w-full max-w-lg min-h-[300px]", className)}>
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        <span className="text-slate-500 text-xs ml-2 flex-1 text-center">irfan@macbook-pro:~</span>
      </div>
      <div className="whitespace-pre-wrap flex flex-col gap-1">
        {displayedLines.map((line, idx) => (
          <span key={idx} className={line.color}>
            {line.text}
            {idx === currentLineIndex && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-slate-400 ml-1 align-middle"
              />
            )}
          </span>
        ))}
        {currentLineIndex >= lines.length && (
          <span className="text-blue-400 font-bold">
            ~ $ 
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-slate-400 ml-1 align-middle"
            />
          </span>
        )}
      </div>
    </div>
  );
}

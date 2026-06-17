"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface DayData {
  intensity: number;
  count: number;
  date: string;
}

// Generate realistic looking mock contributions
const generateMockCommits = (): DayData[][] => {
  const weeks = [];
  const today = new Date();
  for (let w = 51; w >= 0; w--) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      let intensity = 0;
      let count = 0;
      if (r > 0.85) { intensity = 4; count = Math.floor(Math.random() * 10) + 10; }
      else if (r > 0.65) { intensity = 3; count = Math.floor(Math.random() * 5) + 5; }
      else if (r > 0.4) { intensity = 2; count = Math.floor(Math.random() * 3) + 2; }
      else if (r > 0.25) { intensity = 1; count = 1; }
      
      const date = new Date(today.getTime() - (w * 7 + d) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      days.push({ intensity, count, date });
    }
    weeks.push(days);
  }
  return weeks;
};

export function GitCommitGrid() {
  const [weeks, setWeeks] = React.useState<DayData[][]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [hoveredDay, setHoveredDay] = React.useState<{ day: DayData, x: number, y: number } | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("https://github-contributions-api.deno.dev/ucilmenangis.json");
        const data = await res.json();
        if (data && data.contributions) {
          const parsedWeeks = data.contributions.map((week: any[]) => 
            week.map(day => {
              const count = day.contributionCount;
              let intensity = 0;
              if (count >= 10) intensity = 4;
              else if (count >= 5) intensity = 3;
              else if (count >= 2) intensity = 2;
              else if (count > 0) intensity = 1;
              return { intensity, count, date: day.date };
            })
          );
          setWeeks(parsedWeeks);
          setTotal(data.totalContributions || 0);
          return;
        }
      } catch (err) {
        console.error("Failed to fetch GitHub commits, using fallback.", err);
      }
      
      // Fallback
      setWeeks(generateMockCommits());
      setTotal(482);
    }

    fetchGitHubData();
  }, []);

  const getColor = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-slate-800/40";
      case 1: return "bg-emerald-900/60";
      case 2: return "bg-emerald-700/60";
      case 3: return "bg-emerald-500/80";
      case 4: return "bg-emerald-400";
      default: return "bg-slate-800/40";
    }
  };

  const handleMouseMove = (e: React.MouseEvent, day: DayData) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate coordinates relative to the outer container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoveredDay({ day, x, y });
  };

  if (weeks.length === 0) {
    return <div className="w-full h-[180px] mt-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 animate-pulse"></div>;
  }

  return (
    <div ref={containerRef} className="relative w-full flex flex-col gap-4 p-6 mt-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-200">GitHub Contributions</h3>
        <span className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">{total} commits this year</span>
      </div>
      
      <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide" onMouseLeave={() => setHoveredDay(null)}>
        {weeks.map((week, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            {week.map((day, j) => (
              <motion.div 
                key={j} 
                whileHover={{ scale: 1.2 }}
                onMouseMove={(e) => handleMouseMove(e, day)}
                className={`w-3.5 h-3.5 rounded-sm ${getColor(day.intensity)} transition-colors duration-300 cursor-pointer`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2 text-xs text-slate-400 mt-2">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-slate-800/40" />
          <div className="w-3 h-3 rounded-sm bg-emerald-900/60" />
          <div className="w-3 h-3 rounded-sm bg-emerald-700/60" />
          <div className="w-3 h-3 rounded-sm bg-emerald-500/80" />
          <div className="w-3 h-3 rounded-sm bg-emerald-400" />
        </div>
        <span>More</span>
      </div>

      <AnimatePresence>
        {hoveredDay && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute z-50 pointer-events-none px-3 py-2 bg-slate-800 border border-slate-700 shadow-xl shadow-black/50 rounded-lg flex flex-col items-center gap-1 w-max"
            style={{ 
              left: hoveredDay.x, 
              top: hoveredDay.y - 65, // Offset above cursor
              transform: "translateX(-50%)" 
            }}
          >
            <span className="text-emerald-400 font-bold text-sm">
              {hoveredDay.day.count} {hoveredDay.day.count === 1 ? 'commit' : 'commits'}
            </span>
            <span className="text-slate-400 text-xs font-medium">
              {new Date(hoveredDay.day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

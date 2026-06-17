'use client';

import React from "react";
import { AnimatedList } from "./AnimatedList";
import { skillCategories } from "../../data/skills";

export function TechList() {
  return (
    <div className="grid sm:grid-cols-2 gap-12">
      {skillCategories.map((category, catIdx) => (
        <div key={category.title} className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-slate-300 border-b border-slate-800 pb-4">
            {category.title}
          </h3>

          <AnimatedList delay={500} className="w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 group w-full"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/30 group-hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    width="32"
                    height="32"
                    className="opacity-80 group-hover:opacity-100 transition-opacity z-10"
                    loading="lazy"
                  />
                </div>
                <span className="text-base font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </AnimatedList>
        </div>
      ))}
    </div>
  );
}

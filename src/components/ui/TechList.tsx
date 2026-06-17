'use client';

import React from "react";
import { Tree, Folder, File, type TreeViewElement } from "./FileTree";

const ELEMENTS: TreeViewElement[] = [
  {
    id: "1",
    isSelectable: true,
    name: "Mobile Development",
    children: [
      {
        id: "1-1",
        isSelectable: true,
        name: "Dart",
      },
      {
        id: "1-2",
        isSelectable: true,
        name: "Flutter",
      },
    ],
  },
  {
    id: "2",
    isSelectable: true,
    name: "Web Development",
    children: [
      {
        id: "2-1",
        isSelectable: true,
        name: "Core Stack",
        children: [
          { id: "2-1-1", isSelectable: true, name: "HTML" },
          { id: "2-1-2", isSelectable: true, name: "CSS" },
          { id: "2-1-3", isSelectable: true, name: "React" },
          { id: "2-1-4", isSelectable: true, name: "Tailwind CSS" },
        ],
      },
      {
        id: "2-2",
        isSelectable: true,
        name: "Backend & Databases",
        children: [
          { id: "2-2-1", isSelectable: true, name: "PHP" },
          { id: "2-2-2", isSelectable: true, name: "Laravel" },
          { id: "2-2-3", isSelectable: true, name: "MySQL" },
          { id: "2-2-4", isSelectable: true, name: "PostgreSQL" },
          { id: "2-2-5", isSelectable: true, name: "Supabase" },
        ],
      },
    ],
  },
];

export function TechList() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-slate-300 border-b border-slate-800 pb-4">
        Technology Stack
      </h3>
      <div className="relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-800 bg-slate-900/30 p-4">
        <Tree
          className="w-full h-full p-2"
          initialExpandedItems={["1", "2", "2-1", "2-2"]}
          elements={ELEMENTS}
        >
          <Folder element="Mobile Development" value="1">
            <File value="1-1">
              <p>Dart</p>
            </File>
            <File value="1-2">
              <p>Flutter</p>
            </File>
          </Folder>
          <Folder element="Web Development" value="2">
            <Folder element="Core Stack" value="2-1">
              <File value="2-1-1">
                <p>HTML</p>
              </File>
              <File value="2-1-2">
                <p>CSS</p>
              </File>
              <File value="2-1-3">
                <p>React</p>
              </File>
              <File value="2-1-4">
                <p>Tailwind CSS</p>
              </File>
            </Folder>
            <Folder element="Backend & Databases" value="2-2">
              <File value="2-2-1">
                <p>PHP</p>
              </File>
              <File value="2-2-2">
                <p>Laravel</p>
              </File>
              <File value="2-2-3">
                <p>MySQL</p>
              </File>
              <File value="2-2-4">
                <p>PostgreSQL</p>
              </File>
              <File value="2-2-5">
                <p>Supabase</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>
    </div>
  );
}

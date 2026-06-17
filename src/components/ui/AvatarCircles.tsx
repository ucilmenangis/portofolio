import React from 'react';
import { cn } from '../../lib/utils';

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

export function AvatarCircles({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full border-2 border-slate-900 object-cover"
          src={url}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople && numPeople > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-center text-xs font-medium text-white hover:bg-slate-700"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
}

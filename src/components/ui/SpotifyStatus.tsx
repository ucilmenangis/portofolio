import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export function SpotifyStatus({ discordId = "290862658536603670" }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        if (res.ok) {
          const json = await res.json();
          setData(json.data);
        }
      } catch (e) {
        console.error("Failed to fetch Spotify status:", e);
      }
    };

    fetchStatus();
    // Poll every 3 seconds for updates
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, [discordId]);

  const spotify = data?.spotify;

  return (
    <AnimatePresence>
      {spotify && (
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, x: -20 }}
          className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 rounded-full pl-1 pr-3 py-1 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/60 transition-colors"
        >
          {/* Running Circle Music (Rotating Album Art) */}
          <div className="relative w-7 h-7 shrink-0 rounded-full overflow-hidden border border-slate-700 shadow-inner">
            <motion.img 
              src={spotify.album_art_url} 
              alt={spotify.song}
              className="w-full h-full object-cover"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            {/* Center vinyl hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 rounded-full border border-slate-700/50"></div>
          </div>

          {/* Music Name */}
          <div className="flex flex-col justify-center max-w-[100px] overflow-hidden">
            <span className="text-[10px] font-bold text-slate-100 truncate leading-tight">
              {spotify.song}
            </span>
            <span className="text-[9px] font-medium text-slate-400 truncate leading-tight">
              {spotify.artist}
            </span>
          </div>

          {/* Music Equalizer Animation */}
          <div className="flex items-end gap-[2px] h-3 ml-1 shrink-0">
            <motion.div 
              className="w-[2px] bg-emerald-400 rounded-t-full origin-bottom" 
              animate={{ height: ["3px", "10px", "3px"] }} 
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} 
            />
            <motion.div 
              className="w-[2px] bg-emerald-400 rounded-t-full origin-bottom" 
              animate={{ height: ["10px", "4px", "10px"] }} 
              transition={{ repeat: Infinity, duration: 0.7, delay: 0.1, ease: "easeInOut" }} 
            />
            <motion.div 
              className="w-[2px] bg-emerald-400 rounded-t-full origin-bottom" 
              animate={{ height: ["5px", "12px", "5px"] }} 
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.2, ease: "easeInOut" }} 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

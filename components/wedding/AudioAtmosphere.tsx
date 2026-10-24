"use client";

import React from "react";
import { useAudio } from "@/components/audio/AudioContext";

interface AudioAtmosphereProps {
  isTamil?: boolean;
}

export function AudioAtmosphere({ isTamil = false }: AudioAtmosphereProps) {
  const { isPlaying, isMuted, toggleAudio } = useAudio();

  const active = isPlaying && !isMuted;

  return (
    <button
      id="btn-music-toggle"
      onClick={toggleAudio}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm active:scale-90 select-none cursor-pointer flex-shrink-0 ${
        active
          ? "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white border border-amber-300/90 shadow-gold ring-2 ring-amber-400/30"
          : "bg-white/90 hover:bg-white text-stone-700 hover:text-amber-700 border border-gold-300/80 shadow-xs"
      }`}
      title={active ? (isTamil ? "இசையை நிறுத்த" : "Pause Music") : (isTamil ? "இசை கேட்க" : "Play Music")}
      aria-label={active ? "Pause wedding music" : "Play wedding music"}
    >
      <span
        className={`text-base sm:text-lg inline-block transition-transform duration-300 ${
          active ? "animate-music-bounce" : "opacity-65 scale-95"
        }`}
      >
        🎵
      </span>

      {/* Subtle indicator ring when playing */}
      {active && (
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
        </span>
      )}
    </button>
  );
}


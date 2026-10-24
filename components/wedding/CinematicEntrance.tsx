"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  VolumeX,
  ArrowRight,
} from "lucide-react";
import { useAudio } from "@/components/audio/AudioContext";
import { DrummerAnimation } from "@/components/wedding/DrummerAnimation";

interface CinematicEntranceProps {
  onEnter: () => void;
  isTamil?: boolean;
  onToggleLanguage?: () => void;
}

export function CinematicEntrance({
  onEnter,
  isTamil = false,
  onToggleLanguage,
}: CinematicEntranceProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Global audio controller:
  // Single continuous wedding audio track across intro and main frame
  const { isPlaying, isMuted, toggleMute, playAudio } = useAudio();

  const handleEnter = useCallback(() => {
    // Keep single audio playing smoothly
    if (!isMuted) {
      playAudio();
    }

    try {
      // Gentle celebratory petal shower on entering
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x: 0.5, y: 0.7 },
        colors: ["#C59B27", "#E5A93C", "#7D1824", "#FF8C00", "#FAF7F2"],
        disableForReducedMotion: true,
      });
    } catch {}

    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onEnter();
    }, 450);
  }, [onEnter, isMuted, playAudio]);

  // Keyboard accessibility
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        handleEnter();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, toggleMute, handleEnter]);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Animated South Indian Wedding Film — Thavil Drummer and Nadaswaram Celebration"
      onClick={() => {
        if (!isPlaying && !isMuted) {
          playAudio();
        }
      }}
      className={`fixed inset-0 w-screen h-screen min-h-[100svh] min-w-full z-50 overflow-hidden bg-stone-950 transition-opacity duration-1000 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* =========================================================================
          LAYER 1: CINEMATIC ARTWORK & SYNCHRONIZED DRUMMER ANIMATION
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full min-h-[100svh] overflow-hidden select-none animate-film-dolly">
        <Image
          src="/images/welcome/grand-welcome-entrance.jpg"
          alt="Traditional South Indian Wedding Entrance with Thavil and Nadaswaram Musicians and Flower Petals Showering"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center filter brightness-105"
        />

        {/* Cinematic Vignette Overlay for Warmth and Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-full max-w-2xl h-80 bg-gradient-to-b from-amber-400/20 via-yellow-200/10 to-transparent blur-3xl pointer-events-none animate-sun-glow" />

        {/* =====================================================================
            LAYER 2: AUTHENTIC THAVIL DRUMMER PLAYING ANIMATION
            ===================================================================== */}
        <DrummerAnimation isPlaying={isPlaying && !isMuted} />

        {/* =====================================================================
            LAYER 3: ANIMATED FLOWER PETAL SHOWER (Rose, Jasmine & Marigold)
            ===================================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[
            // Group 1: Left Women Showering
            { left: "5%", delay: "0s", duration: "5.5s", size: "w-3 h-3.5", color: "bg-rose-500/85" },
            { left: "8%", delay: "1.2s", duration: "6.2s", size: "w-3.5 h-4", color: "bg-amber-400/90" },
            { left: "12%", delay: "0.4s", duration: "5.8s", size: "w-2.5 h-3", color: "bg-white/95" },
            { left: "16%", delay: "2.5s", duration: "6.5s", size: "w-3 h-3.5", color: "bg-rose-400/85" },
            { left: "20%", delay: "1.8s", duration: "5.2s", size: "w-3.5 h-3.5", color: "bg-amber-300/90" },
            { left: "24%", delay: "0.8s", duration: "6.8s", size: "w-2.5 h-2.5", color: "bg-white/95" },
            { left: "28%", delay: "2.1s", duration: "5.6s", size: "w-3 h-3.5", color: "bg-rose-600/80" },

            // Group 2: Center Pathway & Musicians Showering
            { left: "34%", delay: "0.5s", duration: "6.0s", size: "w-3 h-3", color: "bg-amber-400/85" },
            { left: "40%", delay: "1.6s", duration: "7.0s", size: "w-2.5 h-3", color: "bg-white/90" },
            { left: "46%", delay: "0.2s", duration: "5.4s", size: "w-3.5 h-3.5", color: "bg-rose-400/85" },
            { left: "52%", delay: "2.8s", duration: "6.3s", size: "w-3 h-3", color: "bg-amber-300/90" },
            { left: "58%", delay: "1.1s", duration: "5.9s", size: "w-2.5 h-3", color: "bg-white/95" },
            { left: "64%", delay: "2.0s", duration: "6.6s", size: "w-3 h-3.5", color: "bg-rose-500/85" },

            // Group 3: Right Women Showering
            { left: "74%", delay: "0.3s", duration: "5.3s", size: "w-3 h-3.5", color: "bg-amber-400/90" },
            { left: "78%", delay: "1.7s", duration: "6.1s", size: "w-2.5 h-3", color: "bg-white/95" },
            { left: "82%", delay: "0.9s", duration: "5.7s", size: "w-3.5 h-4", color: "bg-rose-500/85" },
            { left: "86%", delay: "2.3s", duration: "6.4s", size: "w-3 h-3", color: "bg-amber-300/90" },
            { left: "90%", delay: "1.4s", duration: "5.5s", size: "w-2.5 h-2.5", color: "bg-white/95" },
            { left: "94%", delay: "0.6s", duration: "6.7s", size: "w-3 h-3.5", color: "bg-rose-400/85" },
          ].map((p, i) => (
            <div
              key={i}
              className={`absolute -top-4 rounded-full shadow-sm animate-petal-shower ${p.size} ${p.color}`}
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          LAYER 4: TOP CONTROLS (Top-Left Music / Mute Button - NO TEXT, Top-Right Language)
          ========================================================================= */}
      <div className="relative z-40 w-full pt-[max(1rem,env(safe-area-inset-top))] px-4 sm:px-8 flex items-center justify-between pointer-events-auto">
        {/* Top-Left: Music Mute / Unmute Button (Music emoji alone, no text) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/55 hover:bg-black/80 border border-white/20 text-white backdrop-blur-md shadow-lg active:scale-90 transition-all flex items-center justify-center group"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-amber-300/90 transition-transform group-hover:scale-110" />
          ) : (
            <span className="text-lg leading-none inline-block animate-music-bounce">🎵</span>
          )}
        </button>

        {/* Top-Right: Language Switcher */}
        {onToggleLanguage && (
          <button
            onClick={onToggleLanguage}
            className="px-3.5 py-1.5 rounded-full bg-black/50 hover:bg-black/75 border border-white/20 backdrop-blur-md text-xs font-semibold text-stone-200 hover:text-amber-300 transition-colors shadow-sm active:scale-95"
            title="Toggle English / Tamil"
            aria-label="Toggle English and Tamil"
          >
            <span>{isTamil ? "தமிழ் / EN" : "EN / தமிழ்"}</span>
          </button>
        )}
      </div>

      {/* =========================================================================
          LAYER 5: BOTTOM CALL-TO-ACTION (Enter Wedding / Skip - Perfectly aligned on all devices)
          ========================================================================= */}
      <div className="absolute inset-x-0 bottom-3 sm:bottom-6 z-40 px-3 sm:px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex flex-col items-center pointer-events-none">
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 w-full max-w-md pointer-events-auto">
          {/* Main Enter Action Button */}
          <button
            id="btn-enter-wedding"
            onClick={handleEnter}
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-2xl border-2 border-amber-300/80 transform active:scale-95 transition-all inline-flex items-center justify-center gap-2 group animate-pulse"
            aria-label="Enter wedding celebration"
          >
            <span>ENTER WEDDING →</span>
            <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Couple Names Sub-caption */}
        <p className="text-[10px] sm:text-[11px] font-serif font-bold tracking-widest text-amber-200/95 drop-shadow-md mt-2 sm:mt-2.5 uppercase text-center px-2">
          Vignesh & Sowmi • 10 & 11 November 2026 • Tamil Nadu
        </p>
      </div>
    </div>
  );
}

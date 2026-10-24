"use client";

import React from "react";

interface DrummerAnimationProps {
  isPlaying?: boolean;
}

export function DrummerAnimation({ isPlaying = true }: DrummerAnimationProps) {
  return (
    <svg
      viewBox="0 0 1376 768"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none z-20 select-none"
      aria-hidden="true"
    >
      <defs>
        {/* Soft drumhead parchment impact resonance (warm temple gold) */}
        <radialGradient id="drumHeadResonance" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 246, 215, 0.75)" />
          <stop offset="55%" stopColor="rgba(245, 205, 110, 0.35)" />
          <stop offset="100%" stopColor="rgba(210, 155, 45, 0)" />
        </radialGradient>

        {/* Left rim contact resonance */}
        <radialGradient id="leftRimResonance" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 240, 190, 0.65)" />
          <stop offset="60%" stopColor="rgba(235, 185, 90, 0.25)" />
          <stop offset="100%" stopColor="rgba(190, 140, 40, 0)" />
        </radialGradient>

        {/* Golden glow filter */}
        <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* =====================================================================
          1. REAL DRUMHEAD SKIN IMPACT (Synchronized to musician's real stick)
          (Zero duplicate limbs, zero orbital rings — organic parchment flex)
          ===================================================================== */}
      {isPlaying && (
        <g>
          {/* Main Drum Skin Elastic Resonance (Matches exact drumhead oval) */}
          <g transform="rotate(14 825 546)">
            <ellipse
              cx="825"
              cy="546"
              rx="22"
              ry="36"
              fill="url(#drumHeadResonance)"
              className="animate-drum-skin-vibrate"
            />
          </g>

          {/* Percussive strike impact at the exact tip of the musician's stick */}
          <ellipse
            cx="824"
            cy="547"
            rx="7"
            ry="9"
            fill="rgba(255, 255, 240, 0.65)"
            className="animate-drum-skin-vibrate"
            filter="url(#goldGlow)"
          />

          {/* Micro auspicious festive vibration flecks rising from the strike */}
          <circle
            cx="820"
            cy="542"
            r="2"
            fill="#FFD700"
            className="animate-ping"
            style={{ animationDuration: "0.85s" }}
          />
          <circle
            cx="828"
            cy="548"
            r="1.6"
            fill="#FFE066"
            className="animate-ping"
            style={{ animationDuration: "0.85s", animationDelay: "0.22s" }}
          />

          {/* Left Drum Rim Counter-Tap Vibration (Where left stick taps rim) */}
          <circle
            cx="730"
            cy="510"
            r="10"
            fill="url(#leftRimResonance)"
            className="animate-drum-skin-vibrate"
            style={{ animationDelay: "0.18s" }}
          />
        </g>
      )}

      {/* =====================================================================
          2. NADASWARAM MELODIC NOTES (Flowing from the brass pipe into sky)
          ===================================================================== */}
      {isPlaying && (
        <g transform="translate(488, 442)" filter="url(#goldGlow)">
          <text
            x="0"
            y="0"
            fill="#FFE885"
            fontSize="18"
            fontFamily="serif"
            className="animate-music-note"
            style={{ animationDelay: "0s" }}
          >
            ♪
          </text>
          <text
            x="-10"
            y="-10"
            fill="#FFD54F"
            fontSize="22"
            fontFamily="serif"
            className="animate-music-note"
            style={{ animationDelay: "0.8s" }}
          >
            ♫
          </text>
          <text
            x="-5"
            y="-5"
            fill="#FFF176"
            fontSize="16"
            fontFamily="serif"
            className="animate-music-note"
            style={{ animationDelay: "1.6s" }}
          >
            ♩
          </text>
        </g>
      )}
    </svg>
  );
}

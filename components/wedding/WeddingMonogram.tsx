"use client";

import React from "react";

interface WeddingMonogramProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  withAura?: boolean;
}

export function WeddingMonogram({
  className = "",
  size = "md",
  withAura = false,
}: WeddingMonogramProps) {
  const sizeMap = {
    xs: "w-8 h-8",
    sm: "w-10 h-10 sm:w-11 sm:h-11",
    md: "w-14 h-14 sm:w-16 sm:h-16",
    lg: "w-20 h-20 sm:w-24 sm:h-24",
    xl: "w-28 h-28 sm:w-36 sm:h-36",
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {withAura && (
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 via-gold-200/40 to-emerald-200/25 rounded-full blur-md -z-10" />
      )}
      <div className={`relative ${sizeMap} drop-shadow-sm transition-transform duration-300 hover:scale-105 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Vignesh & Gowri Wedding Monogram Crest"
        >
          <defs>
            <linearGradient id="goldGradientMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C59B27" />
              <stop offset="35%" stopColor="#E5A93C" />
              <stop offset="70%" stopColor="#F6E0A4" />
              <stop offset="100%" stopColor="#9E7818" />
            </linearGradient>
            <linearGradient id="goldBorderMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8C6A12" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Outer Ornamental Sacred Circle */}
          <circle cx="50" cy="50" r="46" stroke="url(#goldBorderMonogram)" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="42" stroke="url(#goldGradientMonogram)" strokeWidth="1" opacity="0.6" />

          {/* Tiny Lotus Buds at Cardinal Points */}
          <circle cx="50" cy="5" r="2.2" fill="url(#goldGradientMonogram)" />
          <circle cx="50" cy="95" r="2.2" fill="url(#goldGradientMonogram)" />
          <circle cx="5" cy="50" r="2.2" fill="url(#goldGradientMonogram)" />
          <circle cx="95" cy="50" r="2.2" fill="url(#goldGradientMonogram)" />

          {/* Auspicious Botanical Leaf Accents */}
          <path d="M48 9 C50 6 52 9 50 12 C48 9 50 6 48 9 Z" fill="url(#goldGradientMonogram)" />
          <path d="M48 91 C50 88 52 91 50 94 C48 91 50 88 48 91 Z" fill="url(#goldGradientMonogram)" />

          {/* Royal Interlocking VG Monogram Letters */}
          <text
            x="36"
            y="58"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="34"
            fontWeight="700"
            fill="url(#goldGradientMonogram)"
            textAnchor="middle"
            letterSpacing="-1"
          >
            V
          </text>
          <text
            x="64"
            y="58"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="34"
            fontWeight="700"
            fill="url(#goldGradientMonogram)"
            textAnchor="middle"
            letterSpacing="-1"
          >
            G
          </text>

          {/* Elegant Floral Ampersand / Sacred Knot Center */}
          <text
            x="50"
            y="65"
            fontFamily="'Great Vibes', cursive, serif"
            fontSize="20"
            fill="url(#goldGradientMonogram)"
            textAnchor="middle"
            opacity="0.85"
          >
            &amp;
          </text>
        </svg>
      </div>
    </div>
  );
}


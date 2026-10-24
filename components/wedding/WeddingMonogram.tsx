"use client";

import React from "react";
import Image from "next/image";

interface WeddingMonogramProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  withAura?: boolean;
  variant?: "floral" | "vector";
}

export function WeddingMonogram({
  className = "",
  size = "md",
  withAura = false,
  variant = "floral",
}: WeddingMonogramProps) {
  const sizeMap = {
    xs: "w-8 h-8",
    sm: "w-10 h-10 sm:w-11 sm:h-11",
    md: "w-14 h-14 sm:w-16 sm:h-16",
    lg: "w-20 h-20 sm:w-24 sm:h-24",
    xl: "w-28 h-28 sm:w-36 sm:h-36",
  }[size];

  if (variant === "floral") {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        {withAura && (
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/40 via-red-400/25 to-gold-200/35 rounded-full blur-md -z-10" />
        )}
        <div
          className={`relative ${sizeMap} rounded-full p-[1.5px] bg-gradient-to-br from-amber-300 via-gold-400 to-amber-700 shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center overflow-hidden border border-gold-200/90`}
          title="Vignesh & Gowri — Royal Floral Monogram Crest"
          aria-label="Vignesh & Gowri Wedding Monogram Crest"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-maroon-900">
            <Image
              src="/images/branding/floral-vg-monogram.jpg"
              alt="Vignesh & Gowri Floral Monogram Crest"
              fill
              className="object-cover scale-105"
              sizes="(max-width: 640px) 80px, 144px"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

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

          {/* Auspicious Botanical Accents */}
          <circle cx="50" cy="5" r="2.2" fill="url(#goldGradientMonogram)" />
          <circle cx="50" cy="95" r="2.2" fill="url(#goldGradientMonogram)" />
          <circle cx="5" cy="50" r="2.2" fill="url(#goldGradientMonogram)" />
          <circle cx="95" cy="50" r="2.2" fill="url(#goldGradientMonogram)" />

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

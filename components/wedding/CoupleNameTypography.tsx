"use client";

import React from "react";
import Image from "next/image";

interface CoupleNameTypographyProps {
  isTamil?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "gold" | "rose" | "charcoal";
  asImage?: boolean;
}

export function CoupleNameTypography({
  isTamil = false,
  className = "",
  size = "lg",
  color = "gold",
  asImage = true,
}: CoupleNameTypographyProps) {
  if (isTamil) {
    const tamilSizes = {
      sm: "text-lg sm:text-xl",
      md: "text-2xl sm:text-3xl",
      lg: "text-4xl sm:text-5xl md:text-6xl",
      xl: "text-5xl sm:text-6xl md:text-7xl",
    }[size];

    return (
      <span className={`font-tamil font-semibold text-gold-600 leading-tight drop-shadow-sm ${tamilSizes} ${className}`}>
        விக்னேஷ் & கௌரி
      </span>
    );
  }

  const textSizes = {
    sm: "text-2xl sm:text-3xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-5xl sm:text-6xl md:text-7xl",
    xl: "text-6xl sm:text-7xl md:text-8xl",
  }[size];

  const colorClass = {
    gold: "text-gold-600 gold-text-gradient",
    rose: "text-[#B9746A]",
    charcoal: "text-charcoal-900",
  }[color];

  return (
    <span className={`font-amora font-medium tracking-tight inline-flex items-center gap-2 drop-shadow-sm ${colorClass} ${textSizes} ${className}`}>
      <span>Vignesh</span>
      <span className="font-script text-gold-500 font-normal px-1 text-[0.85em]">&amp;</span>
      <span>Gowri</span>
    </span>
  );
}

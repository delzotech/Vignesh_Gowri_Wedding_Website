"use client";

import React from "react";

interface CoupleNameTypographyProps {
  isTamil?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "gold" | "rose" | "charcoal" | "champagne";
  asImage?: boolean;
  layout?: "stacked" | "inline";
}

/**
 * CoupleNameTypography:
 * Renders the couple's names in the exact Roman inscriptional serif typography
 * (Trajan / Cinzel) matching the reference style:
 *    VIGNESH
 *      AND
 *     GOWRI
 */
export function CoupleNameTypography({
  isTamil = false,
  className = "",
  size = "lg",
  color = "gold",
  layout = "stacked",
}: CoupleNameTypographyProps) {
  if (isTamil) {
    const tamilSizes = {
      sm: "text-lg sm:text-xl",
      md: "text-2xl sm:text-3xl",
      lg: "text-4xl sm:text-5xl md:text-6xl",
      xl: "text-5xl sm:text-6xl md:text-7xl",
    }[size];

    if (layout === "stacked") {
      return (
        <div className={`font-tamil font-semibold flex flex-col items-center leading-tight drop-shadow-sm ${className}`}>
          <span className={`text-gold-600 ${tamilSizes}`}>விக்னேஷ்</span>
          <span className="text-xs sm:text-sm font-medium text-gold-700 tracking-widest my-1 uppercase">
            மற்றும்
          </span>
          <span className={`text-gold-600 ${tamilSizes}`}>கௌரி</span>
        </div>
      );
    }

    return (
      <span className={`font-tamil font-semibold text-gold-600 leading-tight drop-shadow-sm ${tamilSizes} ${className}`}>
        விக்னேஷ் &amp; கௌரி
      </span>
    );
  }

  // Exact Roman inscriptional serif typography matching the reference:
  // "JOMANA / AND / MARIO" style using Cinzel with generous tracking and small-caps AND
  const textSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-4xl sm:text-5xl md:text-6xl",
    xl: "text-5xl sm:text-6xl md:text-7xl",
  }[size];

  const andSizes = {
    sm: "text-[9px] sm:text-[10px]",
    md: "text-[10px] sm:text-xs",
    lg: "text-xs sm:text-sm",
    xl: "text-sm sm:text-base",
  }[size];

  const colorClass = {
    gold: "text-gold-600 gold-text-gradient",
    rose: "text-[#B9746A]",
    charcoal: "text-charcoal-900",
    champagne: "text-[#F3EBAE]",
  }[color];

  const andColorClass = {
    gold: "text-gold-700/85",
    rose: "text-[#B9746A]/85",
    charcoal: "text-charcoal-700/85",
    champagne: "text-amber-200/90",
  }[color];

  if (layout === "stacked") {
    return (
      <div
        className={`font-cinzel uppercase select-none inline-flex flex-col items-center text-center leading-tight drop-shadow-sm ${className}`}
      >
        <span className={`font-normal tracking-[0.14em] ${textSizes} ${colorClass}`}>
          VIGNESH
        </span>
        <span
          className={`font-medium tracking-[0.35em] ${andSizes} my-1 sm:my-1.5 ${andColorClass}`}
        >
          AND
        </span>
        <span className={`font-normal tracking-[0.14em] ${textSizes} ${colorClass}`}>
          GOWRI
        </span>
      </div>
    );
  }

  return (
    <span
      className={`font-cinzel font-normal uppercase tracking-[0.12em] inline-flex items-center gap-2.5 sm:gap-4 drop-shadow-sm select-none ${colorClass} ${textSizes} ${className}`}
    >
      <span>VIGNESH</span>
      <span className={`tracking-[0.3em] font-medium ${andSizes} ${andColorClass}`}>AND</span>
      <span>GOWRI</span>
    </span>
  );
}

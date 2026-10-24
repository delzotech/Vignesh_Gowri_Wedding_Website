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
        விக்னேஷ் &amp; கௌரி
      </span>
    );
  }

  const imageSizes = {
    sm: "w-48 sm:w-56",
    md: "w-64 sm:w-80",
    lg: "w-80 sm:w-[460px] md:w-[540px] lg:w-[620px]",
    xl: "w-96 sm:w-[580px] md:w-[700px]",
  }[size];

  if (asImage) {
    return (
      <span className={`relative inline-block select-none ${imageSizes} ${className}`}>
        <Image
          src="/images/branding/vignesh-gowri-editorial-name.jpg"
          alt="Vignesh & Gowri — Haute Couture Wedding Typography"
          width={1200}
          height={675}
          className="w-full h-auto object-contain mix-blend-multiply filter contrast-105 hover:scale-[1.01] transition-transform duration-300"
          priority
        />
        <span className="sr-only">Vignesh &amp; Gowri</span>
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

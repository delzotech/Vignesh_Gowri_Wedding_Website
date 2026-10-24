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
        விக்னேஷ் & சௌமி
      </span>
    );
  }

  // If rendered as graphic wordmark with Amora flourishing swash and blooming lotus
  if (asImage) {
    const imageSizes = {
      sm: "w-44 h-14",
      md: "w-60 sm:w-72 h-18 sm:h-22",
      lg: "w-72 sm:w-96 md:w-[480px] h-24 sm:h-32 md:h-40",
      xl: "w-80 sm:w-[480px] md:w-[580px] h-28 sm:h-40 md:h-48",
    }[size];

    const imgSrc =
      color === "rose"
        ? "/images/typography/vignesh-sowmi-amora-rose.png"
        : "/images/typography/vignesh-sowmi-amora-gold.png";

    return (
      <div className={`relative inline-block ${imageSizes} select-none drop-shadow-sm transition-transform duration-300 hover:scale-[1.02] ${className}`}>
        <Image
          src={imgSrc}
          alt="Vignesh & Sowmi"
          fill
          priority={size === "lg" || size === "xl"}
          className="object-contain object-center lg:object-left"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 480px, 580px"
        />
      </div>
    );
  }

  // Clean HTML text with high-contrast Amora editorial modern serif typography
  const textSizes = {
    sm: "text-xl sm:text-2xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-5xl sm:text-6xl md:text-7xl",
    xl: "text-6xl sm:text-7xl md:text-8xl",
  }[size];

  const colorClass = {
    gold: "text-gold-600",
    rose: "text-[#B9746A]",
    charcoal: "text-charcoal-900",
  }[color];

  return (
    <span className={`font-amora font-medium tracking-tight ${colorClass} ${textSizes} ${className}`}>
      Vignesh &amp; Sowmi
    </span>
  );
}

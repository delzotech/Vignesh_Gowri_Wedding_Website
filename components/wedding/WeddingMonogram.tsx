"use client";

import React from "react";
import Image from "next/image";

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
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-300/25 via-gold-200/30 to-emerald-200/20 rounded-full blur-md -z-10" />
      )}
      <div className={`relative ${sizeMap} drop-shadow-sm transition-transform duration-300 hover:scale-105`}>
        <Image
          src="/images/decorations/wedding-monogram-vs.png"
          alt="Vignesh & Sowmi Botanical Wedding Monogram Crest"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 60px, 140px"
        />
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";

/**
 * DECORATIVE SEGMENTS COMPONENT SUITE
 * Extracted directly from authentic South Indian wedding invitation art:
 * - Hanging Jasmine & Rose Garlands with Blooming Lotus Tassels
 * - Hanging Lotus Oil Lamps (Deepams/Vilakku) on Golden Bead Chains
 * - Auspicious Banana Leaves (Vazhaielai) framing top corners
 * - Sacred Vermilion Red Lord Ganesha Line-Art Motif
 * - Blooming Watercolor Lotus Flower Garden Base Borders
 */

interface DecorGarlandProps {
  side?: "left" | "right" | "both";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DecorHangingGarland({
  side = "both",
  className = "",
  size = "md",
}: DecorGarlandProps) {
  const sizeClasses = {
    sm: "w-6 sm:w-8 h-24 sm:h-32",
    md: "w-7 sm:w-10 h-32 sm:h-44",
    lg: "w-9 sm:w-12 h-40 sm:h-56",
  }[size];

  return (
    <>
      {(side === "left" || side === "both") && (
        <div
          className={`absolute -left-2 sm:-left-3 -top-2 z-20 pointer-events-none drop-shadow-md animate-garland-left ${sizeClasses} ${className}`}
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Traditional Jasmine & Lotus Garland"
            fill
            className="object-contain object-top"
          />
        </div>
      )}
      {(side === "right" || side === "both") && (
        <div
          className={`absolute -right-2 sm:-right-3 -top-2 z-20 pointer-events-none drop-shadow-md animate-garland-right ${sizeClasses} ${className}`}
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Traditional Jasmine & Lotus Garland"
            fill
            className="object-contain object-top"
          />
        </div>
      )}
    </>
  );
}

interface DecorHangingDeepamsProps {
  side?: "left" | "right" | "both";
  withBananaLeaf?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function DecorHangingDeepams({
  side = "both",
  withBananaLeaf = false,
  className = "",
  size = "md",
}: DecorHangingDeepamsProps) {
  // Dimensions for leaf + deepam vs deepam alone
  const sizeClassesWithLeaf = {
    sm: "w-20 sm:w-28 h-48 sm:h-64",
    md: "w-28 sm:w-36 h-60 sm:h-80",
    lg: "w-32 sm:w-44 h-72 sm:h-96",
  }[size];

  const sizeClassesDeepamOnly = {
    sm: "w-14 sm:w-20 h-36 sm:h-48",
    md: "w-20 sm:w-28 h-48 sm:h-64",
    lg: "w-24 sm:w-32 h-56 sm:h-72",
  }[size];

  const leftSrc = withBananaLeaf
    ? "/images/decorations/banana-leaf-deepams-left.png"
    : "/images/decorations/hanging-lotus-deepam-left.png";

  const rightSrc = withBananaLeaf
    ? "/images/decorations/banana-leaf-deepams-right.png"
    : "/images/decorations/hanging-lotus-deepam-right.png";

  const currentSize = withBananaLeaf ? sizeClassesWithLeaf : sizeClassesDeepamOnly;

  return (
    <>
      {(side === "left" || side === "both") && (
        <div
          className={`absolute -left-1 sm:left-1 top-0 z-20 pointer-events-none animate-garland-left animate-diya-flicker ${currentSize} ${className}`}
          aria-hidden="true"
        >
          <Image
            src={leftSrc}
            alt="Hanging Lotus Deepam Oil Lamp"
            fill
            className="object-contain object-top"
          />
        </div>
      )}
      {(side === "right" || side === "both") && (
        <div
          className={`absolute -right-1 sm:right-1 top-0 z-20 pointer-events-none animate-garland-right animate-diya-flicker ${currentSize} ${className}`}
          aria-hidden="true"
        >
          <Image
            src={rightSrc}
            alt="Hanging Lotus Deepam Oil Lamp"
            fill
            className="object-contain object-top"
          />
        </div>
      )}
    </>
  );
}

interface DecorGaneshaMotifProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withAura?: boolean;
}

export function DecorGaneshaMotif({
  className = "",
  size = "md",
  withAura = true,
}: DecorGaneshaMotifProps) {
  const sizeMap = {
    sm: "w-10 h-12",
    md: "w-14 h-16",
    lg: "w-20 h-24",
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      aria-label="Auspicious Lord Ganesha Blessing Motif"
    >
      {withAura && (
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-gold-300/30 to-transparent rounded-full blur-sm -z-10" />
      )}
      <div className={`relative ${sizeMap} select-none drop-shadow-sm`}>
        <Image
          src="/images/decorations/ganesha-mandapam-motif.png"
          alt="Lord Ganesha Sacred Motif"
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

interface DecorBananaLeafCornerProps {
  side?: "left" | "right" | "both";
  className?: string;
}

export function DecorBananaLeafCorner({
  side = "both",
  className = "",
}: DecorBananaLeafCornerProps) {
  return (
    <>
      {(side === "left" || side === "both") && (
        <div
          className={`absolute left-0 top-0 w-28 sm:w-44 md:w-56 h-36 sm:h-56 md:h-72 z-10 pointer-events-none select-none drop-shadow-sm opacity-90 ${className}`}
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/banana-leaf-corner-left.png"
            alt="Auspicious Banana Leaf"
            fill
            className="object-contain object-top-left"
          />
        </div>
      )}
      {(side === "right" || side === "both") && (
        <div
          className={`absolute right-0 top-0 w-28 sm:w-44 md:w-56 h-36 sm:h-56 md:h-72 z-10 pointer-events-none select-none drop-shadow-sm opacity-90 ${className}`}
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/banana-leaf-corner-right.png"
            alt="Auspicious Banana Leaf"
            fill
            className="object-contain object-top-right"
          />
        </div>
      )}
    </>
  );
}

interface DecorBottomLotusBorderProps {
  className?: string;
  opacity?: string;
}

export function DecorBottomLotusBorder({
  className = "",
  opacity = "opacity-90",
}: DecorBottomLotusBorderProps) {
  return (
    <div
      className={`relative w-full h-12 sm:h-16 md:h-20 pointer-events-none select-none ${opacity} ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/decorations/bottom-lotus-border.png"
        alt="Blooming Watercolor Lotus Garden"
        fill
        className="object-contain object-bottom"
      />
    </div>
  );
}

interface DecorTopToranProps {
  className?: string;
}

export function DecorTopToran({ className = "" }: DecorTopToranProps) {
  return (
    <div
      className={`relative w-full max-w-4xl mx-auto h-20 sm:h-32 pointer-events-none select-none z-10 opacity-95 ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/decorations/top-wedding-toran.png"
        alt="Traditional South Indian Wedding Floral Toran"
        fill
        className="object-contain object-top filter drop-shadow-sm"
        priority
      />
    </div>
  );
}

interface DecorCornerThoransProps {
  side?: "left" | "right" | "both";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: string;
}

export function DecorCornerThorans({
  side = "both",
  className = "",
  size = "md",
  opacity = "opacity-60 sm:opacity-80",
}: DecorCornerThoransProps) {
  const sizeMap = {
    sm: "w-12 sm:w-16 md:w-20 h-40 sm:h-52 md:h-64",
    md: "w-14 sm:w-20 md:w-24 h-48 sm:h-64 md:h-76",
    lg: "w-16 sm:w-24 md:w-28 h-56 sm:h-72 md:h-84",
    xl: "w-20 sm:w-28 md:w-36 h-64 sm:h-84 md:h-96",
  }[size];

  return (
    <>
      {(side === "left" || side === "both") && (
        <div
          className={`absolute top-0 left-0 pointer-events-none select-none z-0 ${opacity} animate-garland-left ${sizeMap} ${className}`}
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/banana-leaf-deepams-left.png"
            alt="Auspicious Banana Leaf & Hanging Lotus Deepams"
            fill
            className="object-contain object-top-left filter drop-shadow-sm"
            sizes="(max-width: 640px) 90px, (max-width: 1024px) 130px, 160px"
          />
        </div>
      )}
      {(side === "right" || side === "both") && (
        <div
          className={`absolute top-0 right-0 pointer-events-none select-none z-0 ${opacity} animate-garland-right ${sizeMap} ${className}`}
          aria-hidden="true"
        >
          <Image
            src="/images/decorations/banana-leaf-deepams-right.png"
            alt="Auspicious Banana Leaf & Hanging Lotus Deepams"
            fill
            className="object-contain object-top-right filter drop-shadow-sm"
            sizes="(max-width: 640px) 90px, (max-width: 1024px) 130px, 160px"
          />
        </div>
      )}
    </>
  );
}

export function DecorRightCornerDeepams(props: {
  className?: string;
  size?: "sm" | "md" | "lg";
  opacity?: string;
}) {
  return <DecorCornerThorans side="right" {...props} />;
}


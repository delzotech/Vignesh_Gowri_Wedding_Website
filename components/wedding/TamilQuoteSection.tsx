"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Sparkles, Heart, ChevronRight, Quote } from "lucide-react";
import {
  DecorHangingGarland,
  DecorHangingDeepams,
  DecorGaneshaMotif,
  DecorBottomLotusBorder,
  DecorCornerThorans,
} from "@/components/wedding/DecorSegments";

interface TamilQuoteSectionProps {
  isTamil?: boolean;
}

export function TamilQuoteSection({ isTamil = false }: TamilQuoteSectionProps) {
  const quotes = weddingConfig.poetry.loveQuotes || [
    {
      id: "kurunthogai",
      category: "சங்க இலக்கியம் • Sangam Classic",
      tamil: "செம்புலப் பெயல் நீர் போல அன்புடை நெஞ்சம் தாம் கலந்தனவே",
      english:
        "Like the sweet summer rain melding seamlessly into the crimson earth, our loving hearts have merged as one for all eternity.",
      source: "குறுந்தொகை 40 (Kurunthogai - Classical Sangam Love Poetry)",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentQuote = quotes[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section id="tamil-quote" className="py-20 sm:py-28 px-4 max-w-4xl mx-auto scroll-mt-12 text-center relative overflow-hidden">
      {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Accent */}
      <DecorCornerThorans side="both" size="md" className="top-2" opacity="opacity-55 sm:opacity-75" />

      {/* Decorative Traditional Ganesha & Lamp Blessing */}
      <div className="flex flex-col items-center justify-center mb-6 relative z-10">
        <DecorGaneshaMotif size="md" withAura={true} className="mb-3" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-100 to-amber-100 border border-gold-300 text-maroon-900 text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
          <Heart className="w-3.5 h-3.5 text-maroon-700 fill-maroon-700 animate-pulse" />
          <span>{isTamil ? "காதல் இலக்கிய வரிகள்" : "Sacred Tamil Love Quotes"}</span>
        </div>
      </div>

      {/* Quote Category Pill Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 relative z-10">
        {quotes.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => setActiveIndex(idx)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              idx === activeIndex
                ? "bg-maroon-800 text-white shadow-md scale-105"
                : "bg-white/80 hover:bg-white text-charcoal-700 border border-gold-300/80 shadow-xs"
            }`}
          >
            {q.category}
          </button>
        ))}
      </div>

      {/* The Romantic Quote Display Box */}
      <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-gold-300/80 shadow-xl relative overflow-hidden transition-all duration-300">
        {/* Hanging Jasmine & Lotus Garlands on Corners */}
        <div className="absolute -left-2 -top-2 w-7 sm:w-8 h-28 sm:h-36 z-20 pointer-events-none drop-shadow-md">
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Jasmine Garland"
            fill
            className="object-contain object-top"
            sizes="32px"
          />
        </div>
        <div className="absolute -right-2 -top-2 w-7 sm:w-8 h-28 sm:h-36 z-20 pointer-events-none drop-shadow-md">
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Jasmine Garland"
            fill
            className="object-contain object-top"
            sizes="32px"
          />
        </div>

        {/* Decorative Quote Icon Watermark */}
        <div className="absolute top-3 left-4 text-gold-300/25 select-none pointer-events-none">
          <Quote className="w-10 h-10 rotate-180" />
        </div>
        <div className="absolute bottom-12 right-4 text-gold-300/25 select-none pointer-events-none">
          <Quote className="w-10 h-10" />
        </div>

        {/* Main Tamil Love Quote */}
        <p className="font-tamil text-xl sm:text-2xl md:text-3xl text-maroon-900 font-semibold leading-relaxed mb-4 tracking-wide relative z-10 transition-all">
          &ldquo;{currentQuote.tamil}&rdquo;
        </p>

        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4" />

        {/* English Translation & Romantic Meaning */}
        <p className="font-serif text-sm sm:text-base text-charcoal-800 font-medium leading-relaxed italic max-w-xl mx-auto mb-4 relative z-10">
          &ldquo;{currentQuote.english}&rdquo;
        </p>

        {/* Literary Attribution */}
        <p className="text-xs font-bold text-gold-800 uppercase tracking-widest relative z-10">
          — {currentQuote.source}
        </p>

        {/* Next Quote Interactive Switcher */}
        <div className="mt-6 flex justify-center relative z-10">
          <button
            onClick={handleNext}
            className="px-4 py-1.5 rounded-full bg-gold-50 hover:bg-gold-100 text-maroon-900 border border-gold-300 text-xs font-bold inline-flex items-center gap-1.5 transition-all shadow-xs hover:shadow active:scale-95"
          >
            <span>{isTamil ? "அடுத்த காதல் கவிதை" : "Next Love Quote"}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gold-700" />
          </button>
        </div>

        {/* Bottom Blooming Watercolor Lotus Floral Border */}
        <div className="relative w-full h-12 sm:h-14 mt-6 pointer-events-none select-none opacity-85">
          <DecorBottomLotusBorder className="h-full" />
        </div>
      </div>

      {/* Gentle Blessing Note */}
      <p className="font-serif text-xs sm:text-sm text-charcoal-700/80 mt-6 max-w-md mx-auto italic">
        {isTamil
          ? "அன்பும் காதலும் நிறைந்த புதிய இல்லற வாழ்க்கையை விக்னேஷ் மற்றும் சௌமி தொடங்க உங்கள் நல்வாழ்த்துகளை வேண்டுகிறோம்."
          : "As Vignesh & Sowmi embark on a life of timeless love and shared harmony, your blessings are our greatest treasure."}
      </p>
    </section>
  );
}

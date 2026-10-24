"use client";

import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export function ClosingScene() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 px-4 text-center relative overflow-hidden bg-gradient-to-b from-transparent to-gold-100/40">
      <div className="max-w-2xl mx-auto">
        {/* Sacred Kolam / Motif Icon */}
        <div className="w-16 h-16 rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Sparkles className="w-8 h-8 text-gold-600 animate-pulse-subtle" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-gold-700 block mb-2">
          With Love & Gratitude
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 mb-2 font-normal">
          The Celebration Lasts a Day. The Memories Get to Stay.
        </h2>

        <p className="font-script text-4xl sm:text-5xl text-gold-600 mb-3 leading-tight">
          Vignesh & Sowmi
        </p>

        {/* Closing Couple Photo */}
        <div className="relative w-48 h-60 sm:w-56 sm:h-72 mx-auto rounded-3xl overflow-hidden gold-frame my-6 shadow-2xl">
          <Image
            src={weddingConfig.couple.sharedPhoto.image}
            alt={weddingConfig.couple.sharedPhoto.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 200px, 250px"
          />
        </div>

        <blockquote className="font-serif text-base sm:text-lg text-charcoal-800 italic max-w-lg mx-auto mb-4 leading-relaxed">
          “And so begins our forever hand in hand, heart to heart,
          With love as our journey and this day as our start.”
        </blockquote>

        <p className="font-tamil text-sm text-gold-800 font-medium mb-8">
          உங்கள் அனைவரின் வரவையும் அன்புடன் எதிர்நோக்கும் மணமக்கள் & குடும்பத்தினர்.
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gold-50 border border-gold-300 text-charcoal-800 text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow transition-all group"
        >
          <span>Return To Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-gold-600 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}

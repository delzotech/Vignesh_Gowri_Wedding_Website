"use client";

import React, { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { Heart, Sparkles, Calendar, MapPin, RefreshCw } from "lucide-react";
import { WeddingMonogram } from "@/components/wedding/WeddingMonogram";

interface FooterProps {
  isTamil?: boolean;
}

export function Footer({ isTamil = false }: FooterProps) {
  const quotes = weddingConfig.poetry.loveQuotes || [
    {
      id: "kurunthogai",
      category: "சங்க இலக்கியம்",
      tamil: weddingConfig.poetry.thirukkural.kural,
      english: weddingConfig.poetry.thirukkural.meaning,
      source: "குறுந்தொகை 40 (Kurunthogai)",
    },
  ];

  const [quoteIdx, setQuoteIdx] = useState(0);
  const currentQuote = quotes[quoteIdx];

  const nextQuote = () => {
    setQuoteIdx((prev) => (prev + 1) % quotes.length);
  };

  return (
    <footer className="mt-20 border-t border-gold-200/90 bg-white/50 pt-16 pb-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <WeddingMonogram size="md" withAura={true} />
        </div>

        <h3 className="mb-3">
          {isTamil ? (
            <span className="font-tamil text-2xl sm:text-3xl text-gold-600 font-semibold">விக்னேஷ் & கௌரி</span>
          ) : (
            <span className="font-amora text-3xl sm:text-4xl text-gold-600 font-medium tracking-tight">Vignesh &amp; Gowri</span>
          )}
        </h3>

        {/* Romantic Love Quote in Footer with Tap-to-Change interaction */}
        <div className="max-w-xl mx-auto mb-8 px-4 py-3 rounded-2xl bg-amber-50/60 border border-gold-200/80 shadow-xs">
          <p className="font-tamil text-sm sm:text-base text-maroon-900 font-semibold mb-1.5 leading-relaxed">
            “{currentQuote.tamil}”
          </p>

          <p className="text-xs text-charcoal-700 italic mb-2">
            “{currentQuote.english}”
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="text-[10px] text-gold-800 font-bold uppercase tracking-wider">
              — {currentQuote.source}
            </span>
            <button
              onClick={nextQuote}
              className="text-[11px] text-maroon-700 hover:text-maroon-900 font-semibold inline-flex items-center gap-1 hover:underline transition-colors ml-2"
              title="Read another love quote"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>{isTamil ? "வேறு காதல் வரி ↻" : "Next Quote ↻"}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-8">
          <a href="#hero" className="hover:text-gold-600 transition-colors">
            {isTamil ? "முகப்பு" : "Home"}
          </a>
          <span>•</span>
          <a href="#couple" className="hover:text-gold-600 transition-colors">
            {isTamil ? "மணமக்கள்" : "The Couple"}
          </a>
          <span>•</span>
          <a href="#invitation" className="hover:text-gold-600 transition-colors">
            {isTamil ? "அழைப்பிதழ்" : "Invitation"}
          </a>
          <span>•</span>
          <a href="#matching-game" className="hover:text-gold-600 transition-colors">
            {isTamil ? "விளையாட்டு" : "Game"}
          </a>
        </div>

        <div className="text-[11px] text-charcoal-700/80 border-t border-gold-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-gold-900 transition-colors group text-center sm:text-left"
            title="Open Wedding Venue in Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
            <span className="hover:underline">
              10 & 11 November 2026 • Namperumal Thirumana Mandapam, Vaiyappamalai & Sri Arulmigu Kailasanathar Thirukovil, Elur ↗
            </span>
          </a>
          <div className="inline-flex items-center gap-1.5 text-charcoal-700 text-xs font-medium">
            <span>Made with love 💛</span>
            <a
              href="https://delzo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-700 hover:text-gold-800 font-bold hover:underline transition-colors"
            >
              Delzo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

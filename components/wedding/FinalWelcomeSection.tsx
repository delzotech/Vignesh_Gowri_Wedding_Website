"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Calendar, MapPin, Heart, ArrowUp } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import {
  DecorHangingGarland,
  DecorHangingDeepams,
  DecorGaneshaMotif,
  DecorBottomLotusBorder,
  DecorCornerThorans,
} from "@/components/wedding/DecorSegments";
import { WeddingMonogram } from "@/components/wedding/WeddingMonogram";

interface FinalWelcomeSectionProps {
  isTamil?: boolean;
}

export function FinalWelcomeSection({ isTamil = false }: FinalWelcomeSectionProps) {
  const { couple, events } = weddingConfig;

  return (
    <section id="final-welcome" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12 relative">
      {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Accent */}
      <DecorCornerThorans side="both" size="lg" className="-top-3" opacity="opacity-70 sm:opacity-85" />
      {/* Grand Illustrated Twilight Mandapam Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-300/80 bg-stone-900 text-white">
        {/* Background Dusk Mandapam Artwork */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/welcome/closing-blessing-mandapam.jpg"
            alt="South Indian Kalyana Mandapam glowing under twilight dusk"
            fill
            className="object-cover object-center filter brightness-100"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
          {/* Warm Darkening Gradient for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-stone-950/30" />
        </div>

        {/* Hanging Jasmine & Lotus Garlands on Top Corners of Mandapam */}
        <DecorHangingGarland side="both" size="lg" />

        {/* Foreground Content */}
        <div className="relative z-10 w-full min-h-[580px] sm:min-h-[660px] flex flex-col justify-end p-6 sm:p-12 text-center items-center">
          {/* Sacred Ganesha Motif */}
          <div className="mb-2">
            <DecorGaneshaMotif size="sm" withAura={true} />
          </div>

          {/* Auspicious Tamil Welcome Proclamation */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{isTamil ? "நல்வரவு • எங்கள் திருமண அழைப்பு" : "நல்வரவு! • We Warmly Welcome You"}</span>
          </div>

          {/* Royal Tamil Calligraphy Couple Artwork Badge (Vignesh & Gowri) */}
          <div className="relative my-4 flex flex-col items-center">
            <div className="relative w-64 sm:w-72 md:w-80 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-amber-300/90 overflow-hidden bg-gradient-to-b from-[#2B1708]/95 via-[#1E1006]/95 to-[#120904]/95 backdrop-blur-md p-2 sm:p-2.5 transition-transform duration-300 hover:scale-[1.02] flex flex-col items-center text-center">
              {/* Authentic Tamil Calligraphy Artwork Image */}
              <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-amber-300/40">
                <Image
                  src="/images/branding/tamil-calligraphy-vignesh-gowri.jpg"
                  alt="விக்னேஷ் & கௌரி (Vignesh & Gowri) - Sacred Tamil Wedding Calligraphy Artwork"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                />
              </div>

              {/* Exact Roman Serif English Subtitle */}
              <div className="font-cinzel text-center leading-tight select-none flex flex-col items-center pt-2 pb-1">
                <span className="text-sm sm:text-base font-normal text-[#F3EBAE] tracking-[0.16em] uppercase">
                  VIGNESH
                </span>
                <span className="text-[9px] font-medium text-amber-300/85 tracking-[0.35em] my-0.5 uppercase">
                  AND
                </span>
                <span className="text-sm sm:text-base font-normal text-[#F3EBAE] tracking-[0.16em] uppercase">
                  GOWRI
                </span>
              </div>
            </div>
          </div>

          <p className="font-serif text-sm sm:text-lg text-stone-200 max-w-xl mx-auto leading-relaxed italic mb-6">
            {isTamil
              ? "“எங்கள் இல்லத் திருமண விழாவிற்கு வருகை தந்து, உங்கள் மனமார்ந்த ஆசீர்வாதங்களை வழங்கி, இந்த புதிய தொடக்கத்தை சிறப்பிக்க அன்போடு அழைக்கிறோம்.”"
              : "“Come celebrate with us, share your blessings, and be part of the beginning of our new chapter.”"}
          </p>

          {/* Event Summary Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mb-6">
            <a
              href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 hover:border-amber-400/50 text-left transition-all group block"
              title="Open Reception Venue (Vaiyappamalai) in Google Maps"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  {isTamil ? "வரவேற்பு • 10 நவம்பர் 2026" : "Reception • 10 Nov 2026"}
                </p>
                <MapPin className="w-3.5 h-3.5 text-amber-300 group-hover:scale-125 transition-transform" />
              </div>
              <p className="text-xs font-bold text-white mt-0.5 group-hover:text-amber-200 transition-colors">
                {events.reception.venueName}
              </p>
              <p className="text-[11px] text-stone-300 flex items-center justify-between">
                <span>{events.reception.locationArea} • {events.reception.timeRange}</span>
                <span className="text-[10px] text-amber-300 underline">Maps ↗</span>
              </p>
            </a>

            <a
              href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 hover:border-amber-400/50 text-left transition-all group block"
              title="Open Muhurtham location in Google Maps"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  {isTamil ? "முகூர்த்தம் • 11 நவம்பர் 2026" : "Muhurtham • 11 Nov 2026"}
                </p>
                <MapPin className="w-3.5 h-3.5 text-amber-300 group-hover:scale-125 transition-transform" />
              </div>
              <p className="text-xs font-bold text-white mt-0.5 group-hover:text-amber-200 transition-colors">
                {events.marriage.venueName}
              </p>
              <p className="text-[11px] text-stone-300 flex items-center justify-between">
                <span>{events.marriage.locationArea} • {events.marriage.timeRange}</span>
                <span className="text-[10px] text-amber-300 underline">Maps ↗</span>
              </p>
            </a>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold text-xs tracking-wider backdrop-blur-md transition-colors inline-flex items-center gap-1.5 border border-amber-400/40 shadow-sm"
              title="Open Reception Venue (Vaiyappamalai) in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              <span>{isTamil ? "வரவேற்பு மேப் ↗" : "Reception Map ↗"}</span>
            </a>

            <a
              href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 font-semibold text-xs tracking-wider backdrop-blur-md transition-colors inline-flex items-center gap-1.5 border border-emerald-400/40 shadow-sm"
              title="Open Muhurtham Venue (Elur) in Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>{isTamil ? "முகூர்த்தம் மேப் ↗" : "Muhurtham Map ↗"}</span>
            </a>

            <a
              href="#invitation"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-serif font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all inline-flex items-center gap-2 border border-amber-300/40"
            >
              <span>{isTamil ? "அழைப்பிதழ் காண்க" : "View Invitation & Directions →"}</span>
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-md transition-colors inline-flex items-center gap-1.5 border border-white/20"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{isTamil ? "மேலே செல்க" : "Back to Top"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

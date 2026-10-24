"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { storyContent } from "@/config/storyContent";
import { Calendar, MapPin, Sparkles, Maximize2, X, MailOpen, Lock, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import {
  DecorHangingGarland,
  DecorHangingDeepams,
  DecorGaneshaMotif,
  DecorBottomLotusBorder,
  DecorTopToran,
} from "@/components/wedding/DecorSegments";

interface AestheticInvitationCardProps {
  isTamil?: boolean;
}

export function AestheticInvitationCard({ isTamil = false }: AestheticInvitationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const { couple, events } = weddingConfig;
  const content = storyContent.invitationReveal;

  const handleOpenInvitation = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C59B27", "#E5A93C", "#7D1824", "#1B4D3E"],
        disableForReducedMotion: true,
      });
    } catch {}
  };

  return (
    <>
      <div className="relative max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-300/80 bg-[#FAF7F2] transition-all duration-500 hover:shadow-gold">
        {/* Hanging Jasmine & Lotus Garlands on Top Corners */}
        <div className="absolute -left-2 -top-2 w-7 sm:w-8 h-28 sm:h-36 z-30 pointer-events-none drop-shadow-md">
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Jasmine Garland"
            fill
            className="object-contain object-top"
          />
        </div>
        <div className="absolute -right-2 -top-2 w-7 sm:w-8 h-28 sm:h-36 z-30 pointer-events-none drop-shadow-md">
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Jasmine Garland"
            fill
            className="object-contain object-top"
          />
        </div>

        {/* Subtle decorative gold inner frame */}
        <div className="absolute inset-2 border border-gold-400/40 rounded-[22px] pointer-events-none z-20" />

        {!isOpen ? (
          /* STORY MOMENT: SEALED AUSPICIOUS WEDDING ENVELOPE */
          <div className="p-8 sm:p-12 text-center relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] min-h-[460px] flex flex-col justify-between items-center animate-fade-in">
            {/* Top Auspicious Wedding Floral Toran */}
            <div className="relative w-full max-w-md h-16 sm:h-20 mb-2 pointer-events-none select-none z-10 opacity-90">
              <Image
                src="/images/decorations/top-wedding-toran.png"
                alt="South Indian traditional wedding floral toran"
                fill
                className="object-contain object-top"
              />
            </div>

            {/* Ambient Background Watermark / Kolam */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="font-serif text-[180px] text-gold-800 font-extrabold select-none">V&G</span>
            </div>

            {/* Top Auspicious Seal Badge */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>{isTamil ? content.envelopeBadgeTa : content.envelopeBadgeEn}</span>
              </span>
            </div>

            {/* Central Ornate Floral Gold & Rose Wax Seal */}
            <div className="my-auto py-4 relative z-10">
              <div
                className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 shadow-2xl p-1.5 flex items-center justify-center border-4 border-gold-200 transform hover:scale-105 transition-transform duration-300 cursor-pointer group"
                onClick={handleOpenInvitation}
                title={isTamil ? "அழைப்பிதழைத் திறக்க கிளிக் செய்யவும்" : "Click to break seal & open invitation"}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner border border-gold-200/90">
                  <Image
                    src="/images/branding/floral-vg-monogram.jpg"
                    alt="Vignesh & Gowri Floral Monogram Crest"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="144px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end items-center pb-2">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-gold-200 uppercase drop-shadow">
                      10 &amp; 11 NOV
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-semibold mt-6 mb-2">
                {isTamil ? content.sealedHeadingTa : content.sealedHeadingEn}
              </h3>
              
              <p className="text-xs sm:text-sm text-charcoal-700 max-w-sm mx-auto leading-relaxed">
                {isTamil ? content.sealedDescTa : content.sealedDescEn}
              </p>
            </div>

            {/* Essential Accessible Date & Venue Preview (Never hidden behind animation) */}
            <div className="relative z-10 w-full pt-4 border-t border-gold-200/80">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-serif text-charcoal-800 mb-5">
                <span className="font-bold text-gold-800">
                  {isTamil ? "வரவேற்பு: 10 நவம்பர் (மாலை)" : "Reception: 10 Nov (Evening)"}
                </span>
                <span>•</span>
                <span className="font-bold text-emerald-800">
                  {isTamil ? "முகூர்த்தம்: 11 நவம்பர் (அதிகாலை)" : "Muhurtham: 11 Nov (Dawn)"}
                </span>
              </div>

              {/* Break Seal Action Button */}
              <button
                onClick={handleOpenInvitation}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-serif text-sm font-bold shadow-gold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 transform active:scale-95"
              >
                <MailOpen className="w-4 h-4 text-gold-200" />
                <span>{isTamil ? content.breakSealCtaTa : content.breakSealCtaEn}</span>
              </button>
            </div>

            {/* Bottom Blooming Watercolor Lotus Border */}
            <div className="relative w-full h-10 sm:h-12 mt-4 pointer-events-none select-none opacity-85">
              <DecorBottomLotusBorder className="h-full" />
            </div>
          </div>
        ) : (
          /* UNFOLDED SACRED WATERCOLOR WEDDING INVITATION */
          <div className="animate-fade-in relative">
            {/* Top Watercolor Art Illustration */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#FAF7F2]">
              <Image
                src={couple.invitationCard.image}
                alt={couple.invitationCard.alt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              {/* Subtle gradient overlay to smoothly blend watercolor art into card body */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent opacity-95" />
              
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="p-2 rounded-full bg-white/85 hover:bg-white text-gold-800 shadow-sm transition-all"
                  title="Expand Invitation Card"
                  aria-label="Expand Invitation Card"
                >
                  <Maximize2 className="w-4 h-4 text-gold-600" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/85 hover:bg-white text-charcoal-700 shadow-sm transition-all"
                  title="Reseal Invitation"
                  aria-label="Reseal Invitation"
                >
                  <RotateCcw className="w-4 h-4 text-gold-700" />
                </button>
              </div>
            </div>

            {/* Invitation Text Content */}
            <div className="relative px-6 py-6 sm:px-10 sm:pb-10 text-center -mt-6 z-10">
              <p className="font-script text-2xl sm:text-3xl text-gold-600 mb-1">
                {isTamil ? "அன்புடன் அழைக்கிறோம்" : "Save The Date"}
              </p>

              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-charcoal-700/80 font-semibold mb-3">
                {isTamil
                  ? "குடும்பத்தாரின் ஆசியுடன் நடைபெறும் திருமண விழா"
                  : "Together with their families, cordially invite you to celebrate"}
              </p>

              {/* Couple Names */}
              <div className="my-4 flex flex-col items-center justify-center">
                {isTamil ? (
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal-900 tracking-wide uppercase">
                      {couple.groom.fullName}
                    </h2>
                    <p className="font-script text-2xl sm:text-3xl text-gold-600 my-0.5">
                      மற்றும்
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal-900 tracking-wide uppercase">
                      {couple.bride.fullName}
                    </h2>
                  </div>
                ) : (
                  <div className="w-full max-w-sm sm:max-w-md mx-auto my-1">
                    <Image
                      src="/images/branding/vignesh-gowri-editorial-name.jpg"
                      alt="Vignesh & Gowri"
                      width={800}
                      height={450}
                      className="w-full h-auto object-contain mix-blend-multiply filter contrast-105"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Chic Date Divider Block */}
              <div className="my-6 py-3 px-4 border-y border-gold-300/80 max-w-sm mx-auto flex items-center justify-center gap-4 text-charcoal-900">
                <div className="text-right">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block text-gold-700">
                    {isTamil ? "நவம்பர்" : "NOVEMBER"}
                  </span>
                  <span className="text-[11px] sm:text-xs text-charcoal-700 font-medium block">
                    {isTamil ? "செவ்வாய் & புதன்" : "TUE & WED"}
                  </span>
                </div>

                <div className="font-serif text-3xl sm:text-4xl font-semibold text-gold-600 px-3 border-x border-gold-300">
                  10 & 11
                </div>

                <div className="text-left">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block text-gold-700">
                    2026
                  </span>
                  <span className="text-[11px] sm:text-xs text-charcoal-700 font-medium block">
                    {isTamil ? "சுப முகூர்த்தம்" : "AUSPICIOUS"}
                  </span>
                </div>
              </div>

              {/* Event Schedules & Venues in Hierarchy */}
              <div className="space-y-4 max-w-md mx-auto text-left bg-white/70 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gold-200/80 shadow-sm text-xs sm:text-sm">
                {/* Reception */}
                <div className="flex items-start gap-3 border-b border-gold-100 pb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-charcoal-900">
                        {isTamil ? events.reception.tamilTitle : events.reception.title}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {isTamil ? "மாலை" : "Evening"}
                      </span>
                    </div>
                    <p className="text-charcoal-700 text-xs mt-0.5">
                      {isTamil ? events.reception.dateString : events.reception.dateString} • {isTamil ? events.reception.tamilTime : events.reception.timeRange}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium inline-flex items-center gap-1.5 mt-1 text-gold-800 hover:text-gold-950 hover:underline transition-colors group"
                      title="Open Reception Venue in Google Maps"
                    >
                      <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span>
                        {isTamil ? events.reception.tamilVenueName : events.reception.venueName}, {isTamil ? events.reception.tamilLocationArea : events.reception.locationArea}
                      </span>
                      <span className="text-[10px] text-gold-600 font-bold">↗</span>
                    </a>
                  </div>
                </div>

                {/* Muhurtham */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-maroon-700 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-charcoal-900">
                        {isTamil ? events.marriage.tamilTitle : events.marriage.title}
                      </span>
                      <span className="text-[10px] font-semibold text-maroon-800 bg-maroon-50 px-2 py-0.5 rounded-full border border-maroon-200">
                        {isTamil ? "அதிகாலை" : "Auspicious Dawn"}
                      </span>
                    </div>
                    <p className="text-charcoal-700 text-xs mt-0.5">
                      {isTamil ? events.marriage.dateString : events.marriage.dateString} • {isTamil ? events.marriage.tamilTime : events.marriage.timeRange}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium inline-flex items-center gap-1.5 mt-1 text-maroon-800 hover:text-maroon-950 hover:underline transition-colors group"
                      title="Open in Google Maps"
                    >
                      <MapPin className="w-3.5 h-3.5 text-maroon-700 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span>
                        {isTamil ? events.marriage.tamilVenueName : events.marriage.venueName}, {isTamil ? events.marriage.tamilLocationArea : events.marriage.locationArea}
                      </span>
                      <span className="text-[10px] text-maroon-700 font-bold">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Reseal and Explore Actions */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
                <a
                  href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gold-50/90 hover:bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs hover:shadow"
                  title="Open Reception Venue (Vaiyappamalai) in Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-700" />
                  <span>{isTamil ? "வரவேற்பு இருப்பிடம் ↗" : "Reception Map ↗"}</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs hover:shadow"
                  title="Open Muhurtham Venue (Elur) in Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{isTamil ? "முகூர்த்தம் இருப்பிடம் ↗" : "Muhurtham Map ↗"}</span>
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-full bg-white hover:bg-gold-50 text-charcoal-700 border border-gold-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-gold-600" />
                  <span>{isTamil ? content.resealCtaTa : content.resealCtaEn}</span>
                </button>
                <a
                  href="#matching-game"
                  className="px-5 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-200" />
                  <span>{isTamil ? "மேட்ச் விளையாட்டு காண்க" : "Play Match Game →"}</span>
                </a>
              </div>

              {/* Bottom Blooming Lotus Floral Border */}
              <div className="relative w-full h-12 sm:h-14 mt-6 pointer-events-none select-none opacity-85">
                <DecorBottomLotusBorder className="h-full" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox for Watercolor Invitation Art */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            aria-label="Close enlarged invitation"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-3xl w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden gold-frame shadow-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={couple.invitationCard.image}
              alt={couple.invitationCard.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>
      )}
    </>
  );
}

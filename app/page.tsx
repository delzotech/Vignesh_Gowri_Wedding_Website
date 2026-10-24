"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CinematicEntrance } from "@/components/wedding/CinematicEntrance";
import { CountdownTimer } from "@/components/wedding/CountdownTimer";
import { CoupleSection } from "@/components/wedding/CoupleSection";
import { AestheticInvitationCard } from "@/components/wedding/AestheticInvitationCard";
import { WeddingMatchGame } from "@/components/wedding/WeddingMatchGame";
import { TamilQuoteSection } from "@/components/wedding/TamilQuoteSection";
import { FinalWelcomeSection } from "@/components/wedding/FinalWelcomeSection";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, ArrowDown, MapPin } from "lucide-react";
import {
  DecorHangingGarland,
  DecorHangingDeepams,
  DecorGaneshaMotif,
  DecorBottomLotusBorder,
  DecorTopToran,
  DecorCornerThorans,
} from "@/components/wedding/DecorSegments";
import {
  WelcomeCelebrationModal,
  triggerWeddingConfettiBlast,
} from "@/components/wedding/WelcomeCelebrationModal";
import { CoupleNameTypography } from "@/components/wedding/CoupleNameTypography";
import { FestiveWeddingPopups } from "@/components/wedding/FestiveWeddingPopups";

export default function HomePage() {
  const [isTamil, setIsTamil] = useState(false);
  const [showEntrance, setShowEntrance] = useState(true);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const { couple, events } = weddingConfig;

  // When exiting the opening film, transition and display welcome pop-up
  const handleEnterFromIntro = () => {
    setShowEntrance(false);
    setShowWelcomeModal(true);
    setTimeout(() => {
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-charcoal-900 selection:bg-gold-500 selection:text-white">
      {/* Auspicious Welcome Pop-Up with Multi-stage Celebratory Confetti Cannon Blast */}
      <WelcomeCelebrationModal
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
        isTamil={isTamil}
      />

      {/* =========================================================================
          SECTION 1: FULL-SCREEN CINEMATIC SOUTH INDIAN WEDDING OPENING FILM
          ========================================================================= */}
      {showEntrance && (
        <CinematicEntrance
          onEnter={handleEnterFromIntro}
          isTamil={isTamil}
          onToggleLanguage={() => setIsTamil(!isTamil)}
        />
      )}

      {/* Sticky Responsive Navbar with Audio Atmosphere, Language & Video Replay */}
      <Navbar
        isTamil={isTamil}
        onToggleLanguage={() => setIsTamil(!isTamil)}
        onReplayIntro={() => {
          setShowEntrance(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* =========================================================================
          SECTION 2: BRIDE & GROOM INTRODUCTION WITH REAL PHOTOGRAPHS & DETAILS
          ========================================================================= */}
      <header id="hero" className="relative pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden max-w-7xl mx-auto scroll-mt-16">
        {/* Ambient Warm Golden Aura */}
        <div className="absolute top-12 left-1/3 -translate-x-1/2 w-full max-w-3xl h-[420px] bg-gradient-to-tr from-gold-200/30 via-gold-300/20 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

        {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Framing */}
        <DecorCornerThorans side="both" size="md" className="top-0 sm:top-2" opacity="opacity-55 sm:opacity-75" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Narrative Column (Col 1-7) with safe left padding to prevent thoran overlap */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pl-0 sm:pl-6 lg:pl-16 xl:pl-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/90 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{isTamil ? "மங்களகரமான திருமண அழைப்பு" : "Sacred Wedding Editorial"}</span>
            </div>

            <h1 className="mb-2">
              <CoupleNameTypography isTamil={isTamil} size="lg" color="gold" asImage={!isTamil} />
            </h1>

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 font-normal tracking-wide max-w-xl leading-snug mb-3">
              {isTamil
                ? "இரு இதயங்கள் இணையும் புனிதமான திருமண வைபவம்"
                : "A Celebration of Love, Heritage & Lifelong Togetherness"}
            </p>

            <p className="text-xs sm:text-sm text-charcoal-700/90 italic mb-4 max-w-md">
              {isTamil
                ? "இரண்டு குடும்பங்கள், ஒரு இனிய திருமண விழா, புதிய தொடக்கத்தின் கொண்டாட்டம்."
                : "Two families, one beautiful celebration, and a new chapter waiting to begin."}
            </p>

            {/* Oversized Editorial Date & Venue Display */}
            <div className="my-3 p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-gold-300/80 shadow-sm max-w-lg w-full flex items-center justify-between sm:justify-start gap-5 sm:gap-8">
              <div className="border-r border-gold-200 pr-5 sm:pr-8 text-center sm:text-left">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-600 tracking-tight block">
                  10 & 11
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-700">
                  {isTamil ? "நவம்பர் 2026" : "NOVEMBER 2026"}
                </span>
              </div>
              <div className="text-left flex-1">
                <a
                  href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-xs font-bold text-maroon-800 hover:text-maroon-950 uppercase tracking-wide transition-colors"
                  title="Open Reception Venue (Vaiyappamalai) in Google Maps"
                >
                  <span className="group-hover:underline">
                    {isTamil ? "வரவேற்பு • வையப்பமலை" : "Reception • Vaiyappamalai (10 Nov)"}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-maroon-700 group-hover:scale-125 transition-transform shrink-0 ml-1.5" />
                </a>
                <a
                  href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-xs font-bold text-emerald-800 hover:text-emerald-950 uppercase tracking-wide mt-1 transition-colors"
                  title="Open Muhurtham Venue (Elur) in Google Maps"
                >
                  <span className="group-hover:underline">
                    {isTamil ? "முகூர்த்தம் • ஏளூர்" : "Muhurtham • Elur (11 Nov)"}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 group-hover:scale-125 transition-transform shrink-0 ml-1.5" />
                </a>
                <p className="text-[11px] text-charcoal-700 mt-1 italic">
                  Namakkal District, Tamil Nadu
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <a
                    href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-50/90 hover:bg-gold-100 text-maroon-900 border border-gold-300 text-[11px] font-bold shadow-xs hover:shadow transition-all group"
                    title="Open Reception Venue in Google Maps"
                  >
                    <MapPin className="w-3 h-3 text-maroon-700 group-hover:scale-125 transition-transform shrink-0" />
                    <span className="group-hover:underline">
                      {isTamil ? "வரவேற்பு மேப் ↗" : "Reception Map ↗"}
                    </span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-[11px] font-bold shadow-xs hover:shadow transition-all group"
                    title="Open Muhurtham Venue in Google Maps"
                  >
                    <MapPin className="w-3 h-3 text-emerald-700 group-hover:scale-125 transition-transform shrink-0" />
                    <span className="group-hover:underline">
                      {isTamil ? "முகூர்த்தம் மேப் ↗" : "Muhurtham Map ↗"}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Live Countdown */}
            <div className="w-full max-w-lg my-4">
              <CountdownTimer />
            </div>

            {/* Quick Editorial Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href="#invitation"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-xs sm:text-sm font-bold tracking-wide shadow-gold hover:shadow-xl transition-all inline-flex items-center gap-2 transform active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-gold-200" />
                <span>{isTamil ? "அழைப்பிதழ் காண்க" : "View Wedding Invitation →"}</span>
              </a>
              <a
                href="#matching-game"
                className="px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-charcoal-900 border border-gold-300 text-xs sm:text-sm font-bold tracking-wide shadow-sm hover:shadow transition-all inline-flex items-center gap-2 transform active:scale-95"
              >
                <span>🎮 {isTamil ? "மேட்ச் விளையாட்டு" : "Play Match Game"}</span>
              </a>
            </div>
          </div>

          {/* Right Imposing Temple Arch Couple Photograph Column (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] temple-arch overflow-hidden shadow-2xl bg-gold-100 group border-2 border-gold-300/80">
              <Image
                src={couple.sharedPhoto.image}
                alt={couple.sharedPhoto.alt}
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 460px"
              />
              {/* Text Caption positioned comfortably above the bottom lotus border */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 pb-16 sm:pb-20 text-white z-20">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300 mb-0.5">
                  The Auspicious Moment
                </span>
                <p className="text-sm font-serif font-medium leading-snug drop-shadow-md">
                  {couple.sharedPhoto.caption}
                </p>
              </div>

              {/* Bottom Blooming Watercolor Lotus Floral Accent (Adjusted to anchor the base without covering text) */}
              <div className="absolute bottom-0 inset-x-0 h-12 sm:h-14 pointer-events-none z-10 opacity-85">
                <Image
                  src="/images/decorations/bottom-lotus-border.png"
                  alt="Blooming Lotus Floral Border"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 text-gold-600/70">
          <a href="#couple" className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest font-semibold hover:text-gold-700 transition-colors">
            <span>Explore The Couple</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </header>

      {/* The Individual Portraits Section */}
      <div id="couple" className="scroll-mt-16">
        <CoupleSection />
      </div>

      {/* =========================================================================
          SECTION 3: TRADITIONAL WEDDING INVITATION SECTION
          ========================================================================= */}
      <section id="invitation" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-16 relative overflow-hidden">
        {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Framing */}
        <DecorCornerThorans side="both" size="md" className="top-4" opacity="opacity-60 sm:opacity-80" />

        <div className="text-center mb-10 relative z-10">
          <Badge variant="gold" className="mb-2">
            {isTamil ? "பாரம்பரிய திருமண அழைப்பிதழ்" : "Traditional Wedding Invitation"}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
            {isTamil ? "மங்களகரமான திருமண அழைப்பிதழ்" : "The Auspicious Invitation"}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-md mx-auto">
            {isTamil
              ? "பாரம்பரிய தென்னிந்திய வாட்டர்கலர் வடிவில், சப்தபதி சுவடுகள் மற்றும் வாழ்த்துக்களுடன்."
              : "Crafted in authentic South Indian watercolor stationery with verified event dates, Google Maps directions, and calendar sync."}
          </p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
        </div>

        <AestheticInvitationCard isTamil={isTamil} />
      </section>

      {/* =========================================================================
          SECTION 4: FUNNY BRIDE-AND-GROOM MATCHING GAME
          ========================================================================= */}
      <div id="matching-game" className="scroll-mt-16">
        <WeddingMatchGame isTamil={isTamil} />
      </div>

      {/* =========================================================================
          SECTION 6: BEAUTIFUL TAMIL QUOTE SECTION (THIRUKKURAL & MEANING)
          ========================================================================= */}
      <div id="tamil-quote" className="scroll-mt-16">
        <TamilQuoteSection isTamil={isTamil} />
      </div>

      {/* =========================================================================
          SECTION 7: FINAL TRADITIONAL WELCOME & BLESSING INVITATION
          ========================================================================= */}
      <div id="final-welcome" className="scroll-mt-16">
        <FinalWelcomeSection isTamil={isTamil} />
      </div>

      {/* Replay Video Action in Footer Bar */}
      <div className="text-center py-6 bg-[#FAF7F2] border-t border-gold-200/60">
        <button
          onClick={() => {
            setShowEntrance(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs text-amber-900 hover:text-amber-950 font-bold underline underline-offset-4 transition-colors inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/90 border border-amber-300 shadow-sm"
        >
          <span>🎬 {isTamil ? "தொடக்க வீடியோவை மீண்டும் பார்க்க" : "Replay Opening Wedding Film"}</span>
        </button>
      </div>

      {/* Cultural Footer */}
      <Footer isTamil={isTamil} />

      {/* Interactive Festive Wedding Popups (Shower Petals, Calendar Reminders, Route Guide, Live Blessings) */}
      <FestiveWeddingPopups isTamil={isTamil} />
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Sparkles, X, Heart, Calendar, MapPin, ArrowRight } from "lucide-react";
import { DecorGaneshaMotif, DecorBottomLotusBorder } from "@/components/wedding/DecorSegments";
import { WeddingMonogram } from "@/components/wedding/WeddingMonogram";

interface WelcomeCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTamil?: boolean;
}

/**
 * Elegant wedding party popper & celebratory confetti effect (calibrated for pleasant aesthetics)
 */
export function triggerWeddingConfettiBlast() {
  try {
    // Wave 1: Gentle dual-side poppers from bottom corners
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.8 },
      colors: ["#FFD700", "#C59B27", "#7D1824", "#FF69B4", "#1B4D3E", "#FFFFFF"],
      startVelocity: 42,
      gravity: 0.9,
      scalar: 0.95,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.8 },
      colors: ["#FFD700", "#C59B27", "#7D1824", "#FF69B4", "#1B4D3E", "#FFFFFF"],
      startVelocity: 42,
      gravity: 0.9,
      scalar: 0.95,
      disableForReducedMotion: true,
    });

    // Wave 2: Soft center starburst (200ms)
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 75,
        origin: { x: 0.5, y: 0.45 },
        colors: ["#FFD700", "#FF8C00", "#7D1824", "#E5A93C", "#FFF8DC"],
        startVelocity: 35,
        ticks: 200,
        scalar: 1.0,
        disableForReducedMotion: true,
      });
    }, 200);

    // Wave 3: Light raining golden sparkles & flower petals finale (450ms)
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 90,
        origin: { x: 0.5, y: 0.25 },
        colors: ["#FFD700", "#FF69B4", "#C59B27", "#FAF7F2"],
        gravity: 0.7,
        scalar: 0.85,
        ticks: 220,
        disableForReducedMotion: true,
      });
    }, 450);
  } catch (err) {
    console.error("Confetti blast error:", err);
  }
}

export function WelcomeCelebrationModal({
  isOpen,
  onClose,
  isTamil = false,
}: WelcomeCelebrationModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Trigger the spectacular blast upon opening
      triggerWeddingConfettiBlast();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden border-2 border-gold-400 bg-[#FFFDF9] shadow-2xl p-6 sm:p-8 text-center animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top traditional hanging garland accents on modal corners */}
        <div className="absolute -left-1 -top-1 w-6 sm:w-8 h-24 sm:h-28 pointer-events-none drop-shadow-sm select-none">
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Garland"
            fill
            className="object-contain object-top"
          />
        </div>
        <div className="absolute -right-1 -top-1 w-6 sm:w-8 h-24 sm:h-28 pointer-events-none drop-shadow-sm select-none">
          <Image
            src="/images/decorations/hanging-garland-lotus.png"
            alt="Garland"
            fill
            className="object-contain object-top"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gold-100 hover:bg-gold-200 border border-gold-300 text-gold-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          aria-label="Close welcome modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Botanical VG Wedding Monogram Crest & Ganesha Blessing */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <WeddingMonogram size="sm" withAura={true} />
          <DecorGaneshaMotif size="sm" withAura={true} />
        </div>

        {/* Celebratory Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-gold-100 via-amber-100 to-gold-100 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-spin" style={{ animationDuration: "6s" }} />
          <span>{isTamil ? "நல்வரவு • திருமண விழா" : "WELCOME • WEDDING CELEBRATION"}</span>
        </div>

        {/* Couple Names - Roman Inscriptional Serif Typography */}
        <div className="mb-3">
          {isTamil ? (
            <span className="font-tamil text-3xl sm:text-4xl text-gold-600 font-semibold leading-tight drop-shadow-sm">விக்னேஷ் &amp; கௌரி</span>
          ) : (
            <div className="font-cinzel text-center leading-tight select-none inline-flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gold-600 gold-text-gradient tracking-[0.14em] uppercase">
                VIGNESH
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-gold-700 tracking-[0.35em] my-1 uppercase">
                AND
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gold-600 gold-text-gradient tracking-[0.14em] uppercase">
                GOWRI
              </span>
            </div>
          )}
        </div>

        <p className="font-serif text-base sm:text-lg text-charcoal-900 font-medium mb-1">
          {isTamil
            ? "இரு குடும்பங்களின் அன்பான திருமண வரவேற்பு!"
            : "Together with our families, we warmly welcome you!"}
        </p>

        <p className="text-xs text-charcoal-700 italic max-w-sm mx-auto mb-5">
          {isTamil
            ? "எங்கள் வாழ்வின் இனிய தொடக்கத்தை உங்களின் நல்லாசிகளுடன் கொண்டாடுகிறோம்."
            : "Step into our sacred celebration of love, heritage, and timeless togetherness."}
        </p>

        {/* Date & Mandapam Details */}
        <div className="my-3 p-3.5 rounded-2xl bg-amber-50/70 border border-gold-200/90 shadow-sm max-w-md mx-auto text-left flex flex-col gap-2 text-xs">
          <a
            href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2.5 text-charcoal-800 hover:text-maroon-900 transition-colors group cursor-pointer"
            title="Open Reception Venue (Vaiyappamalai) in Google Maps"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="font-semibold text-maroon-800 group-hover:underline">
                {isTamil ? "10 நவம்பர் 2026 • வரவேற்பு (மாலை 6:00 - 9:00)" : "10 November 2026 • Reception (6:00 - 9:00 PM)"}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-maroon-700 bg-amber-100/90 px-2 py-0.5 rounded-full border border-gold-300 font-bold">
              <MapPin className="w-3 h-3" />
              Map ↗
            </span>
          </a>
          <a
            href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2.5 text-charcoal-800 hover:text-emerald-950 transition-colors group cursor-pointer"
            title="Open Muhurtham Venue (Elur) in Google Maps"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="font-semibold text-emerald-800 group-hover:underline">
                {isTamil ? "11 நவம்பர் 2026 • முகூர்த்தம் (காலை 4:30 - 6:00)" : "11 November 2026 • Muhurtham (4:30 - 6:00 AM)"}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300 font-bold">
              <MapPin className="w-3 h-3" />
              Map ↗
            </span>
          </a>
          <div className="flex items-center gap-2 text-charcoal-700 text-[11px] pt-1.5 border-t border-gold-200/60">
            <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span className="flex-1">Vaiyappamalai & Elur, Namakkal District, Tamil Nadu</span>
          </div>
        </div>

        {/* Action Button to enter celebration */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-xs sm:text-sm font-bold tracking-wide shadow-gold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 transform active:scale-95"
          >
            <span>{isTamil ? "விழாவிற்குள் நுழைக" : "Enter Celebration"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Blooming Lotus Border */}
        <div className="relative w-full h-8 mt-4 pointer-events-none select-none opacity-85">
          <DecorBottomLotusBorder className="h-full" />
        </div>
      </div>
    </div>
  );
}

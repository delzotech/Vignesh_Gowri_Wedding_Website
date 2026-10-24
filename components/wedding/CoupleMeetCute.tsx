"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

export function CoupleMeetCute() {
  const [progress, setProgress] = useState(0.2); // 0 to 1
  const [hasUnited, setHasUnited] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (val >= 0.95 && !hasUnited) {
      setHasUnited(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#C59B27", "#E5A93C", "#7D1824", "#1B4D3E"],
          disableForReducedMotion: true,
        });
      } catch {}
    }
  };

  const handleAutoUnite = () => {
    setProgress(1);
    setHasUnited(true);
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C59B27", "#E5A93C", "#7D1824", "#1B4D3E"],
        disableForReducedMotion: true,
      });
    } catch {}
  };

  const handleReset = () => {
    setProgress(0.2);
    setHasUnited(false);
  };

  // Interpolated translation for groom (starts at -120px to 0px) and bride (starts at 120px to 0px)
  const groomOffset = (1 - progress) * -110;
  const brideOffset = (1 - progress) * 110;
  const unitedScale = progress >= 0.95 ? 1.05 : 1;

  return (
    <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center relative overflow-hidden">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold mb-2 block">
          Scroll & Discover
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          When Two Worlds Meet
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-md mx-auto">
          Drag the slider or click below to bring Vignesh & Gowri together into their sacred union.
        </p>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Stage Container */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-300/80 shadow-card relative overflow-hidden">
        {/* Glow when united */}
        {hasUnited && (
          <div className="absolute inset-0 bg-gold-300/20 rounded-3xl blur-2xl pointer-events-none animate-pulse-subtle" />
        )}

        <div className="relative h-64 sm:h-80 flex items-center justify-center my-4">
          {hasUnited ? (
            /* Revealed Real Couple Photograph */
            <div className="relative w-52 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden gold-frame shadow-2xl animate-fade-in">
              <Image
                src={weddingConfig.couple.sharedPhoto.image}
                alt={weddingConfig.couple.sharedPhoto.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 250px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-serif font-semibold tracking-wide drop-shadow mx-auto">
                  Vignesh & Gowri • United Forever
                </span>
              </div>
            </div>
          ) : (
            /* Moving Groom and Bride Silhouettes */
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              {/* Groom Avatar */}
              <div
                style={{ transform: `translateX(${groomOffset}px) scale(${unitedScale})` }}
                className="absolute flex flex-col items-center transition-transform duration-150"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden gold-frame shadow-lg bg-gold-100 flex items-center justify-center">
                  <Image
                    src={weddingConfig.couple.groom.portraitImage}
                    alt={weddingConfig.couple.groom.fullName}
                    width={128}
                    height={128}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <span className="text-xs font-semibold text-charcoal-800 mt-2 font-serif">
                  Vignesh
                </span>
              </div>

              {/* Heart Symbol in the center */}
              <div
                style={{ opacity: progress }}
                className="absolute text-gold-500 flex items-center justify-center pointer-events-none"
              >
                <Heart className="w-8 h-8 fill-gold-500 animate-pulse-subtle" />
              </div>

              {/* Bride Avatar */}
              <div
                style={{ transform: `translateX(${brideOffset}px) scale(${unitedScale})` }}
                className="absolute flex flex-col items-center transition-transform duration-150"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden gold-frame shadow-lg bg-gold-100 flex items-center justify-center">
                  <Image
                    src={weddingConfig.couple.bride.portraitImage}
                    alt={weddingConfig.couple.bride.fullName}
                    width={128}
                    height={128}
                    className="object-cover object-[center_20%] w-full h-full"
                  />
                </div>
                <span className="text-xs font-semibold text-charcoal-800 mt-2 font-serif">
                  Gowri
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Controls */}
        <div className="max-w-xs mx-auto mt-6">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={progress}
            onChange={handleSliderChange}
            aria-label="Slide to bring bride and groom together"
            className="w-full h-2 bg-gold-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
          />
          <div className="flex justify-between items-center text-[11px] text-charcoal-700 font-medium mt-2">
            <span>Two Paths</span>
            <span>Slide to unite 💫</span>
            <span>Together</span>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          {!hasUnited ? (
            <button
              onClick={handleAutoUnite}
              className="px-5 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold shadow-sm transition-all inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Bring Them Together ✨
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-1.5 rounded-full bg-white text-charcoal-700 hover:text-gold-700 border border-gold-200 text-xs font-medium transition-all inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3 h-3" />
              Replay Moment
            </button>
          )}
        </div>

        {/* Reveal Invitation Verse */}
        {hasUnited && (
          <div className="mt-8 pt-6 border-t border-gold-200/80 animate-fade-in max-w-lg mx-auto">
            <blockquote className="font-serif text-base sm:text-lg text-charcoal-800 italic leading-relaxed">
              “And so begins their forever hand in hand, heart to heart,
              With love as their journey and this day as their start.”
            </blockquote>
            <p className="font-tamil text-xs text-gold-700 font-medium mt-2">
              — விக்னேஷ் & கௌரி
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Heart, Sparkles } from "lucide-react";
import {
  DecorHangingGarland,
  DecorHangingDeepams,
  DecorGaneshaMotif,
  DecorBananaLeafCorner,
  DecorBottomLotusBorder,
  DecorCornerThorans,
} from "@/components/wedding/DecorSegments";
import { WeddingMonogram } from "@/components/wedding/WeddingMonogram";

export function CoupleSection() {
  const { groom, bride } = weddingConfig.couple;

  return (
    <section className="py-16 sm:py-24 px-4 max-w-6xl mx-auto relative overflow-hidden">
      {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Framing */}
      <DecorCornerThorans side="both" size="md" opacity="opacity-50 sm:opacity-70" />

      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <div className="mb-2">
          <DecorGaneshaMotif size="sm" withAura={true} />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold-700 font-bold mb-1 block">
          The Bride & The Groom
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          Two Souls, One Sacred Bond
        </h2>
        <p className="font-tamil text-sm text-gold-800 font-medium mt-1">
          இரு மனங்கள் இணையும் இனிய வைபவம்
        </p>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
      </div>

      {/* Editorial Split Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        {/* Groom Profile (Col 1-5) */}
        <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right group relative">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden mb-6 gold-frame shadow-2xl bg-gold-50">
            <Image
              src={groom.portraitImage}
              alt={`Portrait of ${groom.fullName}`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 280px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 justify-center md:justify-end z-10">
              <span className="text-white text-xs font-serif tracking-widest uppercase">
                Vignesh
              </span>
            </div>
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-300 mb-1">
            {groom.role}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-semibold mb-1">
            {groom.fullName}
          </h3>
          <p className="font-tamil text-base text-gold-800 font-medium mb-2">
            {groom.tamilName}
          </p>
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-xs leading-relaxed">
            {groom.bioSummary}
          </p>
        </div>

        {/* Center Connecting Medallion (Col 6-7) */}
        <div className="md:col-span-2 flex flex-col items-center justify-center my-4 md:my-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold-50 via-white to-gold-100 border-2 border-gold-400 shadow-gold flex items-center justify-center p-2 group hover:scale-105 transition-transform">
            <WeddingMonogram size="sm" />
            <div className="absolute -inset-2 border border-dashed border-gold-400/50 rounded-full animate-spin" style={{ animationDuration: "25s" }} />
          </div>
          <span className="font-script text-2xl text-gold-600 mt-2">
            forever
          </span>
        </div>

        {/* Bride Profile (Col 8-12) */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left group relative">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 temple-arch overflow-hidden mb-6 shadow-2xl bg-gold-50 border-2 border-gold-300/80">
            <Image
              src={bride.portraitImage}
              alt={`Portrait of ${bride.fullName}`}
              fill
              className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 280px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 justify-center md:justify-start z-10">
              <span className="text-white text-xs font-serif tracking-widest uppercase">
                Gowri
              </span>
            </div>
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-300 mb-1">
            {bride.role}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-semibold mb-1">
            {bride.fullName}
          </h3>
          <p className="font-tamil text-base text-gold-800 font-medium mb-2">
            {bride.tamilName}
          </p>
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-xs leading-relaxed">
            {bride.bioSummary}
          </p>
        </div>
      </div>

      {/* Section Bottom Blooming Lotus Border Divider */}
      <div className="relative w-full max-w-2xl mx-auto h-12 sm:h-16 mt-12 pointer-events-none select-none opacity-85">
        <DecorBottomLotusBorder className="h-full" />
      </div>
    </section>
  );
}

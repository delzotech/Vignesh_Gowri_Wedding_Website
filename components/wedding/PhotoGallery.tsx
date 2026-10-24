"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { DecorCornerThorans } from "@/components/wedding/DecorSegments";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: string;
  aspectClass: string;
}

interface PhotoGalleryProps {
  isTamil?: boolean;
}

export function PhotoGallery({ isTamil = false }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      src: weddingConfig.couple.sharedPhoto.image,
      alt: weddingConfig.couple.sharedPhoto.alt,
      title: isTamil ? "கோயில் தரிசனம்" : "Sacred Union",
      subtitle: isTamil
        ? "கோயில் பிரகாரத்தில் விக்னேஷ் & சௌமி பாரம்பரிய ஆடை அலங்காரத்தில்"
        : "Vignesh & Sowmi in sacred temple courtyard attire",
      category: isTamil ? "இனிய ஜோடி" : "Temple Union",
      aspectClass: "aspect-[3/4] sm:aspect-[4/5]",
    },
    {
      id: 1,
      src: weddingConfig.couple.bride.portraitImage,
      alt: `Portrait of ${weddingConfig.couple.bride.fullName}`,
      title: isTamil ? "மணமகள் — சௌமி (கௌரி)" : "The Bride — Sowmi (Gowri)",
      subtitle: isTamil
        ? "காஞ்சிப்பட்டு மற்றும் பாரம்பரிய நகைகளுடன் மணப்பெண் புன்னகை"
        : "Sowmi in vibrant Kanchipuram silk saree and traditional jewelry",
      category: isTamil ? "மணப்பெண்" : "Bridal Portrait",
      aspectClass: "aspect-[3/4] sm:aspect-[9/16]",
    },
    {
      id: 2,
      src: weddingConfig.couple.groom.portraitImage,
      alt: `Portrait of ${weddingConfig.couple.groom.fullName}`,
      title: isTamil ? "மணமகன் — விக்னேஷ்" : "The Groom — Vignesh",
      subtitle: isTamil
        ? "புதிய இல்லற வாழ்வைத் தொடங்க பேரார்வத்துடன் விக்னேஷ்"
        : "Vignesh ready to begin this blessed new journey",
      category: isTamil ? "மணமகன்" : "Groom Portrait",
      aspectClass: "aspect-[3/4] sm:aspect-[4/5]",
    },
    {
      id: 3,
      src: weddingConfig.couple.invitationCard.image,
      alt: weddingConfig.couple.invitationCard.alt,
      title: isTamil ? "வாட்டர்கலர் அழைப்பிதழ்" : "Watercolor Keepsake",
      subtitle: isTamil
        ? "சப்தபதி பாதங்கள், செவ்வந்தி மாலைகள் மற்றும் மங்கள தோரணங்கள்"
        : "Saptapadi sacred steps, marigold garlands & banana leaves",
      category: isTamil ? "மங்கள அழைப்பிதழ்" : "Artistic Card",
      aspectClass: "aspect-[3/4] sm:aspect-[4/5]",
    },
  ];

  const handleNext = useCallback(() => {
    if (activeIndex !== null) {
      setActiveIndex((prev) => ((prev ?? 0) + 1) % galleryItems.length);
    }
  }, [activeIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (activeIndex !== null) {
      setActiveIndex((prev) => ((prev ?? 0) - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [activeIndex, galleryItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto scroll-mt-16 relative overflow-hidden">
      {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Framing */}
      <DecorCornerThorans side="both" size="md" className="top-2" opacity="opacity-55 sm:opacity-75" />

      <div className="text-center mb-12 relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-bold mb-1 block">
          {isTamil ? "நினைவுப் பெட்டகம் & புகைப்படங்கள்" : "Visual Memories & Keepsakes"}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          {isTamil ? "எங்கள் அழகிய தருணங்களின் தொகுப்பு" : "Moments That Deserve Another Look"}
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-md mx-auto">
          {isTamil
            ? "விக்னேஷ் மற்றும் சௌமியின் பாரம்பரிய திருமண பயணத்தின் அழகிய புகைப்படங்கள்."
            : "Authentic moments celebrating the warmth, grace, and sacred journey of Vignesh & Sowmi."}
        </p>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Asymmetric Editorial Lookbook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(idx)}
            className="group relative rounded-3xl overflow-hidden bg-white border border-gold-200/90 shadow-card cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-2 sm:p-2.5 flex flex-col justify-between"
          >
            <div className={`relative w-full ${item.aspectClass} rounded-2xl overflow-hidden bg-gold-50`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300">
                  {item.category}
                </span>
                <p className="text-xs font-serif font-medium line-clamp-2 mt-0.5 text-white/95">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <div className="p-3 text-center">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gold-700 block">
                {item.category}
              </span>
              <h3 className="font-serif text-base font-semibold text-charcoal-900 mt-0.5">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal with Keyboard Navigation */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            aria-label="Close photo lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors hidden sm:block"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors hidden sm:block"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-2xl w-full max-h-[92vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-gold-300 overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden mb-4 gold-frame">
              <Image
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 750px"
              />
            </div>

            <div className="text-center px-4 w-full">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-700">
                {galleryItems[activeIndex].category} • {activeIndex + 1} of {galleryItems.length}
              </span>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-0.5">
                {galleryItems[activeIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 mt-1 max-w-md mx-auto">
                {galleryItems[activeIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

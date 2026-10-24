"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, RotateCcw, Award, CheckCircle2, Heart, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import {
  DecorGaneshaMotif,
  DecorBottomLotusBorder,
  DecorCornerThorans,
} from "@/components/wedding/DecorSegments";

interface WeddingMatchGameProps {
  isTamil?: boolean;
}

interface CardItem {
  id: number;
  pairId: number;
  nameEn: string;
  nameTa: string;
  icon: string;
  categoryEn: string;
  categoryTa: string;
}

const CARDS_DATA: Omit<CardItem, "id">[] = [
  { pairId: 1, nameEn: "Thavil", nameTa: "தவில்", icon: "🥁", categoryEn: "Mangala Isai", categoryTa: "மங்கள இசை" },
  { pairId: 1, nameEn: "Nadaswaram", nameTa: "நாதஸ்வரம்", icon: "🎺", categoryEn: "Mangala Isai", categoryTa: "மங்கள இசை" },
  
  { pairId: 2, nameEn: "Madurai Malli", nameTa: "மதுரை மல்லி", icon: "🌸", categoryEn: "Fragrant Florals", categoryTa: "மலர்கள்" },
  { pairId: 2, nameEn: "Kalyana Maalai", nameTa: "மணமாலை", icon: "💐", categoryEn: "Fragrant Florals", categoryTa: "மலர்கள்" },
  
  { pairId: 3, nameEn: "Kuthu Vilakku", nameTa: "குத்துவிளக்கு", icon: "🪔", categoryEn: "Auspicious Light", categoryTa: "மங்கல விளக்கு" },
  { pairId: 3, nameEn: "Sacred Deepam", nameTa: "தீபச்சுடர்", icon: "✨", categoryEn: "Auspicious Light", categoryTa: "மங்கல விளக்கு" },
  
  { pairId: 4, nameEn: "Panchakacham Veshti", nameTa: "பஞ்சகச்ச வேஷ்டி", icon: "🥋", categoryEn: "Sacred Attire", categoryTa: "பட்டு ஆடை" },
  { pairId: 4, nameEn: "Kanchipuram Silk", nameTa: "காஞ்சிபுரம் பட்டு", icon: "🥻", categoryEn: "Sacred Attire", categoryTa: "பட்டு ஆடை" },
  
  { pairId: 5, nameEn: "Filter Coffee", nameTa: "ஃபில்டர் காபி", icon: "☕", categoryEn: "Feast Delights", categoryTa: "விருந்து உபசரிப்பு" },
  { pairId: 5, nameEn: "Banana Leaf Feast", nameTa: "தலைவாழை விருந்து", icon: "🍃", categoryEn: "Feast Delights", categoryTa: "விருந்து உபசரிப்பு" },
  
  { pairId: 6, nameEn: "Sacred Thaali", nameTa: "மங்கல நாண்", icon: "💍", categoryEn: "Eternal Union", categoryTa: "புனித பந்தம்" },
  { pairId: 6, nameEn: "Saptapadi Steps", nameTa: "சப்தபதி", icon: "👣", categoryEn: "Eternal Union", categoryTa: "புனித பந்தம்" },
];

export function WeddingMatchGame({ isTamil = false }: WeddingMatchGameProps) {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; type: "match" | "mismatch" | "idle" }>({
    text: isTamil ? "கார்டுகளைத் தட்டி பொருத்தங்களை கண்டுபிடியுங்கள்!" : "Tap cards to uncover Tamil wedding pairs!",
    type: "idle",
  });
  const [isGameOver, setIsGameOver] = useState(false);

  // Initialize and shuffle cards
  const initializeGame = React.useCallback(() => {
    const shuffled = [...CARDS_DATA]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, id: index }));
    setCards(shuffled);
    setFlippedIndices([]);
    setMatchedPairIds([]);
    setMoves(0);
    setIsGameOver(false);
    setFeedback({
      text: isTamil ? "கார்டுகளைத் தட்டி பொருத்தங்களை கண்டுபிடியுங்கள்!" : "Tap cards to uncover Tamil wedding pairs!",
      type: "idle",
    });
  }, [isTamil]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleCardClick = (index: number) => {
    // Prevent clicking already flipped or matched cards or when 2 cards are already open
    if (flippedIndices.length === 2 || flippedIndices.includes(index)) return;
    const card = cards[index];
    if (matchedPairIds.includes(card.pairId)) return;

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const card1 = cards[newFlipped[0]];
      const card2 = cards[newFlipped[1]];

      if (card1.pairId === card2.pairId) {
        // MATCH!
        const matchJokesEn = [
          "Correct match! The aunties approve.",
          "Periyavanga aasirovaadham unlocked!",
          "Match made in heaven (and approved by the horoscope)!",
          "The catering team just served extra payasam!",
        ];
        const matchJokesTa = [
          "சரியான பொருத்தம்! சொந்தக்கார அத்தைகள் சம்மதித்துவிட்டார்கள்.",
          "பெரியவங்க ஆசீர்வாதம் அன்லாக் செய்யப்பட்டது!",
          "ஜாதகப் பொருத்தம் 10/10 சூப்பர் மேட்ச்!",
          "சமையல் பந்தியில் எக்ஸ்ட்ரா பாயாசம் உறுதி!",
        ];

        const randomJoke = isTamil
          ? matchJokesTa[Math.floor(Math.random() * matchJokesTa.length)]
          : matchJokesEn[Math.floor(Math.random() * matchJokesEn.length)];

        setFeedback({ text: randomJoke, type: "match" });
        setMatchedPairIds((prev) => {
          const next = [...prev, card1.pairId];
          if (next.length === 6) {
            // ALL MATCHED!
            setIsGameOver(true);
            try {
              confetti({
                particleCount: 90,
                spread: 75,
                origin: { y: 0.6 },
                colors: ["#C59B27", "#1B4D3E", "#7D1824", "#FF8C00"],
                disableForReducedMotion: true,
              });
            } catch {}
          }
          return next;
        });

        setTimeout(() => {
          setFlippedIndices([]);
        }, 800);
      } else {
        // MISMATCH
        const mismatchJokesEn = [
          "Almost! Even the wedding playlist got confused.",
          "Oops! The wedding photographer missed that angle.",
          "Not quite! Aunties are watching closely...",
        ];
        const mismatchJokesTa = [
          "கொஞ்சம் மிஸ் ஆகிடுச்சு! டிஜே பாட்டே குழம்பிடுச்சு.",
          "அடடா! கேமராமேன் கூட இந்த ஆங்கிளை கவனிக்கல.",
          "தவறான தேர்வு! சொந்தக்காரங்க உத்துப் பாக்குறாங்க...",
        ];

        const randomJoke = isTamil
          ? mismatchJokesTa[Math.floor(Math.random() * mismatchJokesTa.length)]
          : mismatchJokesEn[Math.floor(Math.random() * mismatchJokesEn.length)];

        setFeedback({ text: randomJoke, type: "mismatch" });

        setTimeout(() => {
          setFlippedIndices([]);
        }, 1100);
      }
    }
  };

  return (
    <section id="matching-game" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12 relative overflow-hidden">
      {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Accent */}
      <DecorCornerThorans side="both" size="md" className="top-2" opacity="opacity-50 sm:opacity-75" />

      <div className="text-center mb-8 relative z-10">
        <div className="mb-2">
          <DecorGaneshaMotif size="sm" withAura={true} />
        </div>
        <Badge variant="gold" className="mb-2">
          {isTamil ? "கல்யாண மேட்ச் விளையாட்டு" : "Funny Couple Match Game"}
        </Badge>
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          {isTamil ? "சொந்தக்காரர்கள் மெச்சிய ஜோடிப் பொருத்தம்" : "The Auspicious Wedding Match"}
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-md mx-auto">
          {isTamil
            ? "நாதஸ்வரம், மல்லிகை, பட்டு வேஷ்டி, விருந்து சாப்பாடு... பாரம்பரிய திருமண ஜோடிகளை கண்டுபிடியுங்கள்!"
            : "Flip and pair the iconic South Indian wedding items! Approved by the aunties & catering crew."}
        </p>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Game Dashboard Header */}
      <div className="flex items-center justify-between max-w-lg mx-auto mb-6 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gold-300 shadow-sm text-xs font-semibold">
        <div className="flex items-center gap-2 text-charcoal-800">
          <Heart className="w-4 h-4 text-maroon-700 fill-maroon-700" />
          <span>
            {isTamil ? "ஜோடிகள்:" : "Matched:"} {matchedPairIds.length} / 6
          </span>
        </div>

        <div className="text-charcoal-700">
          {isTamil ? "முயற்சிகள்:" : "Moves:"} {moves}
        </div>

        <button
          onClick={initializeGame}
          className="inline-flex items-center gap-1 text-gold-700 hover:text-gold-900 font-bold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{isTamil ? "மீண்டும் தொடங்கு" : "Reset"}</span>
        </button>
      </div>

      {/* Comedic Feedback Banner */}
      <div
        className={`max-w-lg mx-auto mb-6 p-3 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all ${
          feedback.type === "match"
            ? "bg-emerald-100/90 text-emerald-900 border border-emerald-300 animate-bounce"
            : feedback.type === "mismatch"
            ? "bg-rose-100/90 text-rose-900 border border-rose-300"
            : "bg-gold-50/90 text-gold-900 border border-gold-200"
        }`}
      >
        {feedback.text}
      </div>

      {/* 4x3 Cards Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto">
        {cards.map((card, idx) => {
          const isFlipped = flippedIndices.includes(idx) || matchedPairIds.includes(card.pairId);
          const isMatched = matchedPairIds.includes(card.pairId);

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(idx)}
              disabled={isMatched || flippedIndices.length === 2}
              className={`relative aspect-[3/4] rounded-2xl border-2 transition-all duration-300 transform perspective-1000 ${
                isMatched
                  ? "border-emerald-400 bg-emerald-50/90 shadow-md scale-95"
                  : isFlipped
                  ? "border-gold-500 bg-white shadow-lg rotate-y-180"
                  : "border-gold-300/80 bg-gradient-to-br from-amber-50 to-gold-100/60 hover:border-gold-500 hover:shadow-md hover:-translate-y-0.5"
              }`}
              title={card.nameEn}
              aria-label={`Card ${idx + 1}`}
            >
              {isFlipped ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                  <span className="text-3xl sm:text-4xl mb-1">{card.icon}</span>
                  <p className="font-serif font-bold text-charcoal-900 text-xs sm:text-sm leading-tight">
                    {isTamil ? card.nameTa : card.nameEn}
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-gold-700 font-semibold mt-0.5">
                    {isTamil ? card.categoryTa : card.categoryEn}
                  </p>
                  {isMatched && (
                    <span className="absolute top-1 right-1 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                  <span className="w-8 h-8 rounded-full border border-gold-300 flex items-center justify-center font-serif font-bold text-gold-700 text-xs shadow-sm bg-white/80">
                    VS
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 mt-2" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Completion Modal / Banner */}
      {isGameOver && (
        <div className="max-w-md mx-auto mt-8 p-6 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-gold-400 shadow-2xl text-center animate-fade-slide-up">
          <div className="w-14 h-14 mx-auto rounded-full bg-gold-100 border border-gold-400 flex items-center justify-center text-gold-700 text-2xl shadow-sm mb-3">
            🏆
          </div>
          <h3 className="font-serif text-2xl text-gold-800 font-bold mb-1">
            {isTamil ? "100% கல்யாண எக்ஸ்பர்ட்!" : "100% Certified Kalyana Expert!"}
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-700 mb-4">
            {isTamil
              ? `அபார சாதனை! வெறும் ${moves} நகர்வுகளில் அனைத்து கல்யாணப் பொருட்களையும் சரியாகப் பொருத்திவிட்டீர்கள். பெரியவங்க ஆசீர்வாதம் உங்களுக்கு உண்டு!`
              : `Flawless celebration matchmaking in only ${moves} moves! Even the chief catering master and reception aunties give you a standing ovation.`}
          </p>
          <button
            onClick={initializeGame}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-serif font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isTamil ? "மீண்டும் விளையாடு" : "Play Again"}</span>
          </button>
        </div>
      )}
      {/* Section Bottom Blooming Lotus Divider */}
      <div className="relative w-full max-w-xl mx-auto h-12 mt-12 pointer-events-none select-none opacity-85">
        <DecorBottomLotusBorder className="h-full" />
      </div>
    </section>
  );
}

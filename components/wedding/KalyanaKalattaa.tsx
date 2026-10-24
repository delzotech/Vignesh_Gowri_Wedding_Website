"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  Heart, 
  Sun, 
  CloudSun, 
  CheckCircle2, 
  Circle, 
  UtensilsCrossed, 
  Camera, 
  RotateCcw, 
  Award,
  Smile,
  Gift
} from "lucide-react";
import confetti from "canvas-confetti";
import { storyContent } from "@/config/storyContent";

interface KalyanaKalattaaProps {
  isTamil?: boolean;
}

export function KalyanaKalattaa({ isTamil = false }: KalyanaKalattaaProps) {
  const [activeTab, setActiveTab] = useState<"weather" | "checklist" | "feast" | "photo" | "scratch">("weather");
  const content = storyContent.funCorner;

  // --- CHECKLIST STATE (Local component state only, no tracking) ---
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      if (next.length === content.checklist.items.length) {
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#C59B27", "#1B4D3E", "#7D1824"],
            disableForReducedMotion: true,
          });
        } catch {}
      }
      return next;
    });
  };

  // --- FEAST FORECAST REVEAL STATE ---
  const [feastRevealed, setFeastRevealed] = useState(false);

  // --- SCRATCH CARD STATE ---
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    if (activeTab === "scratch") {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      canvas.width = 340;
      canvas.height = 180;

      // Fill with golden shimmer surface
      const grad = ctx.createLinearGradient(0, 0, 340, 180);
      grad.addColorStop(0, "#D4AF37");
      grad.addColorStop(0.5, "#FFF2B2");
      grad.addColorStop(1, "#AA771C");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 340, 180);

      // Decorative text on scratch layer
      ctx.fillStyle = "#6B4C08";
      ctx.font = "bold 14px serif";
      ctx.textAlign = "center";
      ctx.fillText("✦ SCRATCH HERE FOR SACRED BLESSINGS ✦", 170, 95);
      ctx.font = "11px sans-serif";
      ctx.fillText("உரசி ஆசீர்வாதத்தை காண்க", 170, 118);

      let isDrawing = false;
      let scratchedPixels = 0;

      const scratch = (x: number, y: number) => {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, Math.PI * 2, false);
        ctx.fill();

        scratchedPixels += 1;
        if (scratchedPixels > 45 && !isScratched) {
          setIsScratched(true);
          try {
            confetti({
              particleCount: 40,
              spread: 50,
              origin: { y: 0.7 },
              colors: ["#C59B27", "#E5A93C", "#7D1824"],
              disableForReducedMotion: true,
            });
          } catch {}
        }
      };

      const handleMouseDown = (e: MouseEvent) => {
        isDrawing = true;
        const rect = canvas.getBoundingClientRect();
        scratch(e.clientX - rect.left, e.clientY - rect.top);
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        scratch(e.clientX - rect.left, e.clientY - rect.top);
      };

      const handleMouseUp = () => {
        isDrawing = false;
      };

      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      };

      canvas.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        canvas.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [activeTab, isScratched]);

  return (
    <section id="kalattaa" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-700 font-bold mb-2 block">
          {isTamil ? content.tagTa : content.tagEn}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          {isTamil ? content.titleTa : content.titleEn}
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700 mt-2 max-w-lg mx-auto">
          {isTamil ? content.descTa : content.descEn}
        </p>
        <div className="w-20 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Interactive Tabs Menu */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { key: "weather", labelEn: "Weather Report ☀️", labelTa: "வானிலை அறிக்கை ☀️" },
          { key: "checklist", labelEn: "Guest Checklist ✅", labelTa: "விருந்தினர் கடமைகள் ✅" },
          { key: "feast", labelEn: "Feast Forecast 🍨", labelTa: "விருந்து முன்னறிவிப்பு 🍨" },
          { key: "photo", labelEn: "Photo Challenge 📸", labelTa: "புகைப்பட சேலஞ்ச் 📸" },
          { key: "scratch", labelEn: "Gold Scratch Card 🎟️", labelTa: "தங்க உரசு அட்டை 🎟️" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === tab.key
                ? "bg-gold-500 text-white shadow-gold transform scale-105"
                : "bg-white text-charcoal-700 border border-gold-200 hover:bg-gold-50 hover:text-gold-900"
            }`}
          >
            {isTamil ? tab.labelTa : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage Box */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-300/80 shadow-card bg-[#FCFBF7] min-h-[380px] flex flex-col justify-center">
        {/* MODULE 1: WEDDING WEATHER REPORT */}
        {activeTab === "weather" && (
          <div className="text-center max-w-md mx-auto animate-fade-in py-4">
            <div className="relative w-20 h-20 mx-auto rounded-full bg-gold-100 border-2 border-gold-400 flex items-center justify-center text-gold-600 mb-6 shadow-inner">
              <Sun className="w-10 h-10 animate-spin" style={{ animationDuration: "30s" }} />
              <CloudSun className="w-6 h-6 absolute -bottom-1 -right-1 text-gold-700" />
            </div>

            <span className="text-[11px] font-mono uppercase tracking-widest text-gold-800 font-bold block mb-2">
              MANDAPAM METEOROLOGICAL SERVICE
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-bold mb-4">
              {isTamil ? content.weather.titleTa : content.weather.titleEn}
            </h3>

            <div className="p-6 rounded-2xl bg-white border border-gold-300 shadow-md my-4">
              <p className="font-serif text-lg sm:text-xl text-maroon-800 font-semibold leading-relaxed">
                &ldquo;{isTamil ? content.weather.forecastTa : content.weather.forecastEn}&rdquo;
              </p>
            </div>

            <p className="text-[11px] text-charcoal-600 italic">
              {isTamil ? content.weather.humorNoteTa : content.weather.humorNoteEn}
            </p>
          </div>
        )}

        {/* MODULE 2: WEDDING MISSION CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="max-w-lg mx-auto w-full animate-fade-in py-2">
            <div className="flex items-center justify-between border-b border-gold-200/80 pb-3 mb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                  {isTamil ? content.checklist.titleTa : content.checklist.titleEn}
                </h3>
                <span className="text-xs text-gold-800 font-semibold">
                  Progress: {checkedItems.length} of {content.checklist.items.length} Completed
                </span>
              </div>
              <button
                onClick={() => setCheckedItems([])}
                className="text-xs text-charcoal-600 hover:text-gold-700 underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="space-y-3">
              {content.checklist.items.map((item) => {
                const isDone = checkedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isDone
                        ? "bg-emerald-50/90 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-white border-gold-200 hover:bg-gold-50/50 text-charcoal-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                      )}
                      <span className={`text-xs sm:text-sm ${isDone ? "line-through opacity-75" : ""}`}>
                        {isTamil ? item.textTa : item.textEn}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gold-700">0{item.id}</span>
                  </div>
                );
              })}
            </div>

            {checkedItems.length === content.checklist.items.length && (
              <div className="mt-5 p-4 rounded-2xl bg-gold-100 border border-gold-400 text-center animate-bounce">
                <span className="text-xs sm:text-sm font-bold text-gold-950 block">
                  {isTamil ? content.checklist.completedTa : content.checklist.completedEn}
                </span>
              </div>
            )}
          </div>
        )}

        {/* MODULE 3: THE FEAST FORECAST */}
        {activeTab === "feast" && (
          <div className="text-center max-w-md mx-auto animate-fade-in py-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 mb-4 shadow-sm">
              <UtensilsCrossed className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mb-2">
              {isTamil ? content.feastForecast.titleTa : content.feastForecast.titleEn}
            </h3>

            {!feastRevealed ? (
              <div className="p-6 rounded-2xl bg-white border border-gold-300 shadow-md my-4">
                <p className="text-xs sm:text-sm text-charcoal-700 mb-4">
                  {isTamil
                    ? "கல்யாண சாப்பாடு பந்தியில் எந்த வரிசையில் எதை சாப்பிட வேண்டும் என்ற ரகசிய முன்னறிவிப்பு!"
                    : "Curious about the gastronomic wonders awaiting your banana leaf at the feast hall?"}
                </p>
                <button
                  onClick={() => {
                    setFeastRevealed(true);
                    try {
                      confetti({ particleCount: 30, spread: 45, origin: { y: 0.65 } });
                    } catch {}
                  }}
                  className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-xs shadow-sm transition-all"
                >
                  {isTamil ? content.feastForecast.revealCtaTa : content.feastForecast.revealCtaEn}
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-white border-2 border-gold-400 shadow-xl my-4 text-left animate-fade-in">
                <span className="text-[10px] uppercase tracking-wider font-bold text-maroon-700 block mb-1">
                  OFFICIAL GASTRONOMIC DIRECTIVE
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-charcoal-900 leading-snug mb-2">
                  {isTamil ? content.feastForecast.announcementTa : content.feastForecast.announcementEn}
                </p>
                <div className="w-12 h-0.5 bg-gold-400 my-2" />
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  {isTamil ? content.feastForecast.detailsTa : content.feastForecast.detailsEn}
                </p>
                <div className="text-center mt-4 pt-3 border-t border-gold-100">
                  <button
                    onClick={() => setFeastRevealed(false)}
                    className="text-xs text-gold-700 hover:text-gold-900 font-semibold underline flex items-center justify-center gap-1 mx-auto"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Hide & Replay</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODULE 4: THE FAMILY PHOTO CHALLENGE */}
        {activeTab === "photo" && (
          <div className="max-w-lg mx-auto w-full animate-fade-in py-2">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mb-2">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                {isTamil ? content.photoChallenge.titleTa : content.photoChallenge.titleEn}
              </h3>
              <p className="text-xs text-charcoal-700 mt-1">
                {isTamil
                  ? "மண்டபத்தில் இந்த 4 சுவாரசியமான தருணங்களை உங்கள் சொந்த கேமராவில் படம் பிடிக்க முயற்சி செய்யுங்கள்!"
                  : "Try to capture these four heartwarming moments on your personal camera during the wedding!"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.photoChallenge.prompts.map((p) => (
                <div key={p.id} className="p-4 rounded-2xl bg-white border border-gold-200/90 shadow-sm flex flex-col justify-between hover:border-gold-400 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 block mb-1">
                      CHALLENGE 0{p.id}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-charcoal-900">
                      {isTamil ? p.titleTa : p.titleEn}
                    </h4>
                    <p className="text-[11px] text-charcoal-600 mt-1 italic leading-relaxed">
                      {p.tipEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-charcoal-500 text-center mt-4">
              * Friendly offline fun challenge. No uploads or camera permissions required.
            </p>
          </div>
        )}

        {/* MODULE 5: GOLD SCRATCH CARD */}
        {activeTab === "scratch" && (
          <div className="text-center max-w-sm mx-auto animate-fade-in py-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-gold-700 block mb-1">
              AUSPICIOUS BLESSING
            </span>
            <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">
              Scratch & Reveal Blessing
            </h3>

            <div className="relative w-[340px] h-[180px] mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-gold-300 bg-white flex items-center justify-center p-4">
              {/* Underlying Revealed Sacred Blessing */}
              <div className="text-center">
                <span className="text-2xl mb-1 block">✨ 🕊️ ✨</span>
                <p className="font-serif text-base font-bold text-maroon-800">
                  {isTamil ? "வாழ்க வளமுடன்!" : "A Lifetime of Boundless Love & Joy!"}
                </p>
                <p className="font-tamil text-xs text-gold-800 mt-1">
                  &ldquo;இரு மனம் இணையும் இனிய தருணம்&rdquo;
                </p>
                <span className="text-[10px] font-mono text-emerald-800 font-bold mt-2 block">
                  BLESSINGS UNLOCKED ✦ VIGNESH & SOWMI
                </span>
              </div>

              {/* Scratchable Top Canvas */}
              <canvas
                ref={canvasRef}
                className={`absolute inset-0 cursor-crosshair touch-none transition-opacity duration-700 ${
                  isScratched ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />
            </div>

            <p className="text-xs text-charcoal-600 mt-3 italic">
              {isScratched ? "🎉 Blessing revealed!" : "Use your mouse or finger to scratch off the gold foil."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

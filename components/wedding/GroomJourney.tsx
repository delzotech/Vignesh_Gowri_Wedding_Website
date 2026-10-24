"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { storyContent } from "@/config/storyContent";
import { 
  Heart, 
  Sparkles, 
  RotateCcw, 
  Play, 
  Pause, 
  FastForward, 
  MapPin, 
  Compass, 
  ArrowRight,
  Volume2
} from "lucide-react";
import confetti from "canvas-confetti";

interface GroomJourneyProps {
  isTamil?: boolean;
}

interface Checkpoint {
  id: number;
  progress: number;
  titleEn: string;
  titleTa: string;
  bubbleEn: string;
  bubbleTa: string;
  descriptionEn: string;
  descriptionTa: string;
}

const CHECKPOINTS: Checkpoint[] = [
  {
    id: 1,
    progress: 0.05,
    titleEn: "The Departure",
    titleTa: "பயணத் தொடக்கம்",
    bubbleEn: "Destination locked. Confidence: 100%. Navigation skills: under review.",
    bubbleTa: "இலக்கு உறுதி. நம்பிக்கை 100%. வழி தெரியுமா... போகப் போகத் தெரியும்!",
    descriptionEn: "Vignesh starts his journey with boundless excitement.",
    descriptionTa: "விக்னேஷ் பேரார்வத்துடன் தன் பயணத்தைத் தொடங்குகிறார்."
  },
  {
    id: 2,
    progress: 0.35,
    titleEn: "The Village Detour",
    titleTa: "கிராமத்து வளைவு",
    bubbleEn: "Map says left. His confidence says right.",
    bubbleTa: "மேப் இடதுபக்கம் திரும்புனு சொல்லுது... ஆனா விக்னேஷ் நம்பிக்கை நேரா போகுது!",
    descriptionEn: "Passing lush coconut groves and golden paddy fields.",
    descriptionTa: "செழுமையான தென்னந்தோப்புகளையும் நெல் வயல்களையும் கடந்து..."
  },
  {
    id: 3,
    progress: 0.70,
    titleEn: "The Final Approach",
    titleTa: "இறுதி நெருக்கம்",
    bubbleEn: "One final challenge stands between him and the wedding hall.",
    bubbleTa: "கடைசி சவால்! திருமண மண்டபத்தை அடைய இன்னும் சில அடிகள் தான்!",
    descriptionEn: "The sound of Nadaswaram and festive bells fills the air.",
    descriptionTa: "நாதஸ்வர ஓசையும் மங்கள இசையும் காற்றில் கலக்கின்றன."
  },
  {
    id: 4,
    progress: 1.0,
    titleEn: "Arrival at Mandapam",
    titleTa: "மண்டப வருகை",
    bubbleEn: "Found you. Nowhere else to be.",
    bubbleTa: "கண்டுபிடிச்சுட்டேன்! என் உலகம் இனி இங்கே தான்.",
    descriptionEn: "Arriving at the mandapam where his bride Gowri is waiting.",
    descriptionTa: "தனக்காகக் காத்திருக்கும் கௌரியை (சௌமி) திருமண மண்டபத்தில் அடைகிறார்."
  }
];

export function GroomJourney({ isTamil = false }: GroomJourneyProps) {
  const [progress, setProgress] = useState(0.05); // 0.05 to 1.0
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isReunited, setIsReunited] = useState(false);
  const [groomCoords, setGroomCoords] = useState<{ x: number; y: number; angle: number }>({
    x: 80,
    y: 430,
    angle: 0
  });

  const pathRef = useRef<SVGPathElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const totalLengthRef = useRef<number>(1000);

  // Update Groom (x, y) coordinates along the SVG path
  const updateGroomPosition = useCallback((prog: number, pathLen?: number) => {
    if (!pathRef.current) return;
    try {
      const len = pathLen || totalLengthRef.current;
      const targetLen = Math.min(Math.max(prog, 0.02), 0.999) * len;
      const pt = pathRef.current.getPointAtLength(targetLen);
      
      // Calculate slight tangent angle for facing direction
      const ptAhead = pathRef.current.getPointAtLength(Math.min(targetLen + 5, len));
      const dx = ptAhead.x - pt.x;
      const dy = ptAhead.y - pt.y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setGroomCoords({ x: pt.x, y: pt.y, angle });
    } catch {}
  }, []);

  // Initialize total length of SVG path
  useEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        if (len > 0) {
          totalLengthRef.current = len;
          updateGroomPosition(progress, len);
        }
      } catch (e) {
        console.warn("SVG path length calculation error:", e);
      }
    }
  }, [updateGroomPosition, progress]);

  // Sync coords whenever progress changes
  useEffect(() => {
    updateGroomPosition(progress);
    if (progress >= 0.97 && !isReunited) {
      setIsReunited(true);
      setIsPlaying(false);
      triggerConfetti();
    }
  }, [progress, updateGroomPosition, isReunited]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#C59B27", "#E5A93C", "#7D1824", "#1B4D3E", "#FF69B4"],
        disableForReducedMotion: true,
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#C59B27", "#FFD700", "#FF1493"]
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#C59B27", "#FFD700", "#FF1493"]
        });
      }, 300);
    } catch {}
  };

  // Continuous Play animation loop
  useEffect(() => {
    if (isPlaying) {
      let lastTime = performance.now();
      const step = (now: number) => {
        const delta = (now - lastTime) / 1000;
        lastTime = now;
        
        setProgress((prev) => {
          const next = prev + delta * 0.12; // Complete journey in ~8 seconds
          if (next >= 1.0) {
            setIsPlaying(false);
            return 1.0;
          }
          return next;
        });

        animFrameRef.current = requestAnimationFrame(step);
      };

      animFrameRef.current = requestAnimationFrame(step);
    } else {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying]);

  const handleStartJourney = () => {
    setHasStarted(true);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (progress >= 1.0) {
      setProgress(0.05);
      setIsReunited(false);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleAdvanceStep = () => {
    setIsPlaying(false);
    setHasStarted(true);
    setProgress((prev) => {
      // Find next milestone
      const nextCheckpoint = CHECKPOINTS.find((c) => c.progress > prev + 0.05);
      if (nextCheckpoint) {
        return nextCheckpoint.progress;
      }
      return 1.0;
    });
  };

  const handleSkipToReunion = () => {
    setIsPlaying(false);
    setHasStarted(true);
    setProgress(1.0);
    setIsReunited(true);
    triggerConfetti();
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0.05);
    setIsReunited(false);
    setHasStarted(false);
  };

  // Determine active checkpoint based on current progress
  const currentCheckpoint = CHECKPOINTS.reduce((prev, curr) => {
    return progress >= curr.progress - 0.12 ? curr : prev;
  }, CHECKPOINTS[0]);

  const groomIllustr = weddingConfig.couple.groom.characterIllustration || weddingConfig.couple.groom.portraitImage;
  const brideIllustr = weddingConfig.couple.bride.characterIllustration || weddingConfig.couple.bride.portraitImage;

  return (
    <section 
      id="journey" 
      aria-labelledby="journey-title"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100/90 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-[0.2em] mb-3 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-gold-700 animate-spin-slow" />
          <span>{isTamil ? storyContent.groomJourney.titleTa : storyContent.groomJourney.titleEn}</span>
        </div>
        
        <h2 
          id="journey-title" 
          className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal leading-tight"
        >
          {isTamil 
            ? storyContent.groomJourney.titleTa
            : storyContent.groomJourney.titleEn}
        </h2>
        
        <p className="text-sm sm:text-base text-charcoal-700 mt-2 font-serif italic max-w-xl mx-auto">
          {isTamil 
            ? storyContent.groomJourney.introTa 
            : storyContent.groomJourney.introEn}
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
      </div>

      {/* Main Interactive Stage Box */}
      <div className="glass-panel p-4 sm:p-8 rounded-3xl border border-gold-300/80 shadow-card relative overflow-hidden bg-[#FCFBF7]">
        {/* Ambient Map Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-maroon-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar with Status & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-gold-200/70">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-gold-800 block">
                {isTamil ? "தற்போதைய மைல்கல்" : "Current Milestone"}
              </span>
              <p className="text-sm font-serif font-bold text-charcoal-900">
                {isTamil ? currentCheckpoint.titleTa : currentCheckpoint.titleEn}
              </p>
            </div>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className="px-3.5 py-1.5 rounded-full bg-gold-50 hover:bg-gold-100 text-gold-900 border border-gold-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
              aria-label={isPlaying ? "Pause journey" : "Play journey"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-gold-700" />
                  <span>{isTamil ? "நிறுத்து" : "Pause"}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-gold-700 fill-gold-700" />
                  <span>{progress >= 1.0 ? (isTamil ? "மீண்டும் தொடங்கு" : "Replay") : (isTamil ? "தொடங்கு" : "Play")}</span>
                </>
              )}
            </button>

            <button
              onClick={handleAdvanceStep}
              className="px-3.5 py-1.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
              aria-label="Advance to next checkpoint"
            >
              <span>{isTamil ? "அடுத்த மைல்கல் →" : "Advance →"}</span>
            </button>

            <button
              onClick={handleSkipToReunion}
              className="px-3 py-1.5 rounded-full bg-white hover:bg-gray-50 text-charcoal-700 border border-charcoal-200 text-xs font-medium inline-flex items-center gap-1 transition-all"
              title="Skip directly to reunion"
            >
              <FastForward className="w-3 h-3 text-gold-700" />
              <span className="hidden sm:inline">{isTamil ? "நேரடி சந்திப்பு" : "Skip to End"}</span>
            </button>

            {hasStarted && (
              <button
                onClick={handleReset}
                className="p-1.5 rounded-full hover:bg-gold-100 text-charcoal-600 transition-colors"
                title="Reset Journey"
                aria-label="Reset journey to beginning"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Start Overlay CTA if visitor hasn't engaged yet */}
        {!hasStarted && progress <= 0.08 && (
          <div className="absolute inset-x-4 top-24 bottom-16 z-20 flex items-center justify-center bg-black/25 backdrop-blur-[2px] rounded-2xl transition-all p-4">
            <div className="max-w-md w-full p-6 sm:p-8 bg-white/95 rounded-2xl border-2 border-gold-400 shadow-2xl text-center animate-fade-in">
              <span className="text-2xl sm:text-3xl mb-2 block animate-bounce">💌</span>
              <div className="inline-block px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-bold mb-3">
                {isTamil ? storyContent.groomJourney.startBubbleTa : storyContent.groomJourney.startBubbleEn}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-bold mb-2">
                {isTamil ? storyContent.groomJourney.modalTitleTa : storyContent.groomJourney.modalTitleEn}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 mb-6 leading-relaxed">
                {isTamil
                  ? storyContent.groomJourney.modalDescTa
                  : storyContent.groomJourney.modalDescEn}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleStartJourney}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-xs sm:text-sm shadow-gold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-gold-200" />
                  <span>{isTamil ? storyContent.groomJourney.startCtaTa : storyContent.groomJourney.startCtaEn}</span>
                </button>
                <button
                  onClick={handleSkipToReunion}
                  className="text-xs text-charcoal-600 hover:text-gold-700 font-semibold underline underline-offset-4 py-2"
                >
                  {isTamil ? "நேரடியாக சந்திப்பை காண்க" : "Skip to final reunion"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Illustrated SVG Map Canvas */}
        <div className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F7F2E7] via-[#F4ECE0] to-[#EBE2D2] border border-gold-300 shadow-inner">
          <svg
            viewBox="0 0 1000 550"
            className="w-full h-full select-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Countryside Gradients */}
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF9EE" />
                <stop offset="60%" stopColor="#F5EFE1" />
                <stop offset="100%" stopColor="#EDE3D1" />
              </linearGradient>

              <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D9E4CE" />
                <stop offset="100%" stopColor="#C4D6B5" />
              </linearGradient>

              <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E2E8D5" />
                <stop offset="100%" stopColor="#CFDCBE" />
              </linearGradient>

              <linearGradient id="pondGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#BEE3E8" />
                <stop offset="100%" stopColor="#96CDD7" />
              </linearGradient>

              {/* Road Glow filter */}
              <filter id="roadGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Gold Route Glow */}
              <linearGradient id="goldRoute" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F3E5AB" />
                <stop offset="100%" stopColor="#C59B27" />
              </linearGradient>
            </defs>

            {/* Background Sky */}
            <rect width="1000" height="550" fill="url(#skyGrad)" />

            {/* Distant Rolling Hills */}
            <path
              d="M0 240 Q 180 180 380 230 T 780 210 Q 900 190 1000 220 L 1000 550 L 0 550 Z"
              fill="url(#hillGrad1)"
              opacity="0.7"
            />
            <path
              d="M0 280 Q 220 230 460 270 T 880 250 Q 940 260 1000 270 L 1000 550 L 0 550 Z"
              fill="url(#hillGrad2)"
              opacity="0.9"
            />

            {/* Far Horizon Temple Gopuram Silhouette */}
            <g transform="translate(680, 120) scale(0.65)" opacity="0.45" fill="#8C7A58">
              {/* Gopuram tiers */}
              <polygon points="50,0 20,40 80,40" />
              <polygon points="15,40 85,40 90,65 10,65" />
              <polygon points="8,65 92,65 96,95 4,95" />
              <polygon points="0,95 100,95 105,130 -5,130" />
              {/* Kalasams on top */}
              <circle cx="35" cy="-4" r="3" />
              <circle cx="50" cy="-6" r="3.5" />
              <circle cx="65" cy="-4" r="3" />
              {/* Base Temple Gate */}
              <rect x="35" y="105" width="30" height="25" rx="15" fill="#FAF2DF" opacity="0.7" />
            </g>

            {/* Countryside Fields & Textures */}
            <g stroke="#BAC9A8" strokeWidth="1" strokeDasharray="4,6" opacity="0.6">
              <line x1="120" y1="280" x2="260" y2="340" />
              <line x1="140" y1="295" x2="280" y2="355" />
              <line x1="160" y1="310" x2="300" y2="370" />
            </g>

            {/* Scenic Village Lotus Pond */}
            <path
              d="M 370 380 C 420 350, 520 360, 560 410 C 580 440, 540 480, 480 490 C 410 500, 340 450, 370 380 Z"
              fill="url(#pondGrad)"
              stroke="#82B7BF"
              strokeWidth="2"
            />
            {/* Water Lilies / Lotus flowers on pond */}
            <circle cx="430" cy="410" r="10" fill="#E8F4F5" />
            <path d="M 430 405 Q 435 410 430 415 Q 425 410 430 405" fill="#E86E95" />
            <circle cx="510" cy="430" r="14" fill="#E8F4F5" />
            <path d="M 510 422 Q 518 430 510 438 Q 502 430 510 422" fill="#F27DA2" />

            {/* Rustic Arched Stone Bridge across the Pond */}
            <path
              d="M 420 375 Q 465 355 510 380 L 515 405 Q 465 380 415 400 Z"
              fill="#D6C7AE"
              stroke="#A8977E"
              strokeWidth="2"
            />
            {/* Bridge Railing */}
            <path
              d="M 420 375 Q 465 352 510 378"
              fill="none"
              stroke="#7A6850"
              strokeWidth="2"
              strokeDasharray="6,4"
            />

            {/* Hand-Drawn Coconut Trees across the map */}
            {/* Grove 1 (Left near start) */}
            <g transform="translate(180, 240) scale(0.7)">
              <path d="M 30 140 Q 20 80 45 10" fill="none" stroke="#7A5A35" strokeWidth="6" strokeLinecap="round" />
              {/* Leaves */}
              <path d="M 45 10 Q 10 -15 -20 10" fill="none" stroke="#3D7032" strokeWidth="4" />
              <path d="M 45 10 Q 40 -35 30 -50" fill="none" stroke="#4D8B40" strokeWidth="4" />
              <path d="M 45 10 Q 80 -25 110 -10" fill="none" stroke="#3D7032" strokeWidth="4" />
              <path d="M 45 10 Q 75 15 95 40" fill="none" stroke="#4D8B40" strokeWidth="4" />
              <path d="M 45 10 Q 15 25 -10 35" fill="none" stroke="#3D7032" strokeWidth="4" />
              {/* Coconuts */}
              <circle cx="42" cy="12" r="4" fill="#75613A" />
              <circle cx="47" cy="14" r="4" fill="#655331" />
            </g>

            {/* Grove 2 (Center near village) */}
            <g transform="translate(600, 200) scale(0.65)">
              <path d="M 25 140 Q 35 75 15 10" fill="none" stroke="#7A5A35" strokeWidth="6" strokeLinecap="round" />
              <path d="M 15 10 Q -20 -15 -45 5" fill="none" stroke="#3D7032" strokeWidth="4" />
              <path d="M 15 10 Q 10 -35 0 -50" fill="none" stroke="#4D8B40" strokeWidth="4" />
              <path d="M 15 10 Q 55 -25 80 -5" fill="none" stroke="#3D7032" strokeWidth="4" />
              <path d="M 15 10 Q 50 15 70 35" fill="none" stroke="#4D8B40" strokeWidth="4" />
            </g>

            {/* Banana Trees with broad leaves */}
            <g transform="translate(290, 360) scale(0.6)">
              <path d="M 20 60 L 20 15" stroke="#4E7C38" strokeWidth="4" />
              <ellipse cx="5" cy="10" rx="18" ry="8" fill="#5E9944" transform="rotate(-30 5 10)" />
              <ellipse cx="35" cy="8" rx="18" ry="8" fill="#69AA4C" transform="rotate(30 35 8)" />
              <ellipse cx="20" cy="-5" rx="8" ry="18" fill="#5E9944" />
            </g>

            {/* Terracotta Village House */}
            <g transform="translate(630, 250) scale(0.8)">
              {/* Mud wall */}
              <rect x="0" y="30" width="70" height="40" fill="#E6DAC4" stroke="#B8A78F" strokeWidth="1.5" />
              {/* Terracotta roof */}
              <polygon points="-8,30 35,0 78,30" fill="#B34A2E" stroke="#8E321A" strokeWidth="1.5" />
              {/* Wooden Door */}
              <rect x="25" y="42" width="18" height="28" rx="2" fill="#754727" />
              {/* Kolam in front of house */}
              <circle cx="34" cy="74" r="5" fill="none" stroke="#FFF" strokeWidth="1" strokeDasharray="2,2" />
            </g>

            {/* Kolam patterns on the ground */}
            <g transform="translate(140, 460)" opacity="0.75">
              <circle cx="0" cy="0" r="14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,3" />
              <circle cx="0" cy="0" r="7" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="#C59B27" />
            </g>
            <g transform="translate(730, 330)" opacity="0.75">
              <circle cx="0" cy="0" r="14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3,3" />
              <circle cx="0" cy="0" r="7" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="#C59B27" />
            </g>

            {/* MAIN WINDING ROAD PATH */}
            {/* Outer Road Bed (Sand/Cobblestone) */}
            <path
              d="M 70 440 C 180 430, 210 320, 310 330 C 410 340, 430 380, 500 380 C 580 380, 610 280, 710 270 C 780 265, 815 315, 865 315"
              fill="none"
              stroke="#D3C3A4"
              strokeWidth="44"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Road Surface */}
            <path
              d="M 70 440 C 180 430, 210 320, 310 330 C 410 340, 430 380, 500 380 C 580 380, 610 280, 710 270 C 780 265, 815 315, 865 315"
              fill="none"
              stroke="#E8DCBE"
              strokeWidth="36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dashed Center Route Line */}
            <path
              d="M 70 440 C 180 430, 210 320, 310 330 C 410 340, 430 380, 500 380 C 580 380, 610 280, 710 270 C 780 265, 815 315, 865 315"
              fill="none"
              stroke="#B39E79"
              strokeWidth="2.5"
              strokeDasharray="6,8"
            />

            {/* THE MASTER TRAVEL PATH (Used for coordinate math and golden trail) */}
            <path
              ref={pathRef}
              id="travel-path"
              d="M 70 440 C 180 430, 210 320, 310 330 C 410 340, 430 380, 500 380 C 580 380, 610 280, 710 270 C 780 265, 815 315, 865 315"
              fill="none"
              stroke="url(#goldRoute)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={totalLengthRef.current}
              strokeDashoffset={totalLengthRef.current * (1 - progress)}
              filter="url(#roadGlow)"
              className="transition-[stroke-dashoffset] duration-150"
            />

            {/* Checkpoint Markers on the Map */}
            {CHECKPOINTS.map((cp) => {
              // Approximate static visual coordinates for map landmarks
              const positions = [
                { x: 75, y: 440 },
                { x: 310, y: 330 },
                { x: 500, y: 380 },
                { x: 865, y: 315 }
              ];
              const pos = positions[cp.id - 1] || positions[0];
              const isPassed = progress >= cp.progress;
              const offsetY = cp.id === 1 ? 16 : cp.id === 2 ? -34 : cp.id === 3 ? 16 : 28;

              return (
                <g key={cp.id} className="cursor-pointer" onClick={() => setProgress(cp.progress)}>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isPassed ? 10 : 8}
                    fill={isPassed ? "#C59B27" : "#FFFFFF"}
                    stroke={isPassed ? "#7D1824" : "#A8977E"}
                    strokeWidth="2.5"
                    className="transition-all"
                  />
                  {isPassed && (
                    <circle cx={pos.x} cy={pos.y} r="14" fill="none" stroke="#C59B27" strokeWidth="1.5" opacity="0.6">
                      <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  {/* Clean Landmark Label Pill - Text 100% inside box */}
                  <foreignObject
                    x={pos.x - 75}
                    y={pos.y + offsetY}
                    width={150}
                    height={26}
                    className="pointer-events-none"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 border border-gold-400/90 text-charcoal-800 text-[9.5px] font-sans font-bold shadow-xs whitespace-nowrap">
                        {cp.id}. {isTamil ? cp.titleTa : cp.titleEn}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* TRADITIONAL DESTINATION MANDAPAM ENTRANCE (Right side: 860, 200) */}
            <g transform="translate(860, 200)">
              {/* Mandapam Roof with Mango Thoranam */}
              <polygon points="0,40 50,15 100,40" fill="#7D1824" stroke="#C59B27" strokeWidth="2" />
              <rect x="5" y="40" width="90" height="8" fill="#C59B27" />
              {/* Marigold Garland drape */}
              <path d="M 5 48 Q 50 68 95 48" fill="none" stroke="#FF9900" strokeWidth="3.5" strokeDasharray="3,1" />
              <path d="M 5 48 Q 50 60 95 48" fill="none" stroke="#FFD700" strokeWidth="2" />

              {/* Two Ornate Carved Pillars */}
              <rect x="8" y="48" width="10" height="110" fill="#8E321A" rx="2" />
              <rect x="82" y="48" width="10" height="110" fill="#8E321A" rx="2" />
              <rect x="5" y="155" width="16" height="8" fill="#602010" />
              <rect x="79" y="155" width="16" height="8" fill="#602010" />

              {/* Tied Banana Trees at Pillars */}
              <ellipse cx="6" cy="100" rx="8" ry="30" fill="#4E8C34" opacity="0.9" />
              <ellipse cx="94" cy="100" rx="8" ry="30" fill="#4E8C34" opacity="0.9" />

              {/* Destination Signboard - Text 100% inside box */}
              <foreignObject x="-15" y="-14" width="130" height="28" className="pointer-events-none">
                <div className="flex items-center justify-center w-full h-full">
                  <span className="px-3 py-0.5 rounded-md bg-[#7D1824] border-2 border-[#E5A93C] text-white text-[8.5px] font-serif font-bold tracking-wider shadow-sm whitespace-nowrap">
                    DESTINATION: FOREVER
                  </span>
                </div>
              </foreignObject>

              {/* Auspicious Golden Kuthu Vilakku (Lamps) */}
              <path d="M 0 155 L 4 140 L 0 135 L 4 135 L 2 120" stroke="#C59B27" strokeWidth="2" fill="none" />
              <circle cx="2" cy="116" r="3" fill="#FFB703" />
              <path d="M 100 155 L 96 140 L 100 135 L 96 135 L 98 120" stroke="#C59B27" strokeWidth="2" fill="none" />
              <circle cx="98" cy="116" r="3" fill="#FFB703" />
            </g>

            {/* BRIDE WAITING AT DESTINATION (Right side under Mandapam arch at x=930, y=315) */}
            <g transform="translate(930, 315)">
              {/* Mandapam glow aura */}
              <circle cx="0" cy="-25" r="38" fill="#FFD700" opacity="0.25">
                <animate attributeName="opacity" values="0.2;0.45;0.2" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Bride Avatar Embedded via SVG ForeignObject */}
              <foreignObject x="-36" y="-62" width="72" height="72">
                <div className="relative w-full h-full rounded-full border-2 border-gold-400 p-0.5 shadow-lg bg-white overflow-hidden transform hover:scale-110 transition-transform">
                  <Image
                    src={brideIllustr}
                    alt="Sowmi (Gowri) - Bride Character"
                    fill
                    className="object-cover object-top"
                    sizes="72px"
                  />
                </div>
              </foreignObject>

              {/* Bride Name Tag - Text 100% inside pill box */}
              <foreignObject x="-60" y="14" width="120" height="26" className="pointer-events-none">
                <div className="flex items-center justify-center w-full h-full">
                  <span className="px-3 py-0.5 rounded-full bg-[#7D1824] border border-[#E5A93C] text-white text-[9.5px] font-serif font-bold tracking-wide shadow-md whitespace-nowrap">
                    {weddingConfig.couple.bride.firstName} (Gowri)
                  </span>
                </div>
              </foreignObject>

              {/* Bride Speech Bubble with Auto-Wrapping Box */}
              <foreignObject
                x={-110}
                y={-95}
                width={220}
                height={90}
                className="overflow-visible pointer-events-none"
              >
                <div className="w-full h-full flex flex-col items-center justify-end">
                  <div className="bg-white/95 backdrop-blur-md border-2 border-[#7D1824] text-[#7D1824] px-3.5 py-1.5 rounded-2xl shadow-xl text-center font-sans font-bold text-[10px] leading-snug max-w-[200px] break-words">
                    {isTamil ? "கடைசியாக வந்துட்டீங்களா! 💕" : "Finally! I've been waiting! 💕"}
                  </div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-[#7D1824] -mt-[1px]" />
                </div>
              </foreignObject>
            </g>

            {/* GROOM CHARACTER TRAVELLING ON THE ROAD (Arrives at x=865, y=315 next to Bride) */}
            <g transform={`translate(${groomCoords.x}, ${groomCoords.y})`}>
              {/* Walking shadow */}
              <ellipse cx="0" cy="14" rx="20" ry="6" fill="#000000" opacity="0.25" />

              {/* Glowing Route Pulse beneath groom */}
              <circle cx="0" cy="8" r="14" fill="#C59B27" opacity="0.3">
                <animate attributeName="r" values="10;18;10" dur="1.5s" repeatCount="indefinite" />
              </circle>

              {/* Groom Avatar Embedded via SVG ForeignObject */}
              <foreignObject x="-36" y="-62" width="72" height="72">
                <div className={`relative w-full h-full rounded-full border-2 border-gold-500 p-0.5 shadow-xl bg-white overflow-hidden transition-transform ${isPlaying ? "animate-wiggle" : ""}`}>
                  <Image
                    src={groomIllustr}
                    alt="Vignesh - Groom Character"
                    fill
                    className="object-cover object-top"
                    sizes="72px"
                  />
                </div>
              </foreignObject>

              {/* Groom Name Tag - Text 100% inside pill box */}
              <foreignObject x="-50" y="14" width="100" height="26" className="pointer-events-none">
                <div className="flex items-center justify-center w-full h-full">
                  <span className="px-3 py-0.5 rounded-full bg-[#1B4D3E] border border-[#C59B27] text-white text-[9.5px] font-serif font-bold tracking-wide shadow-md whitespace-nowrap">
                    {weddingConfig.couple.groom.firstName}
                  </span>
                </div>
              </foreignObject>

              {/* Dynamic Contextual Speech Bubble above Groom with Auto-Wrapping Box */}
              {progress < 0.95 && (() => {
                const bubbleText = isTamil ? currentCheckpoint.bubbleTa : currentCheckpoint.bubbleEn;
                const bubbleOffsetX = groomCoords.x < 135 ? (135 - groomCoords.x) : groomCoords.x > 865 ? (865 - groomCoords.x) : 0;
                return (
                  <foreignObject
                    x={-140 + bubbleOffsetX}
                    y={-100}
                    width={280}
                    height={95}
                    className="overflow-visible pointer-events-none"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-end">
                      <div className="bg-white/95 backdrop-blur-md border-2 border-[#1B4D3E] text-[#1B4D3E] px-3.5 py-1.5 rounded-2xl shadow-xl text-center font-sans font-bold text-[10px] leading-snug max-w-[260px] break-words">
                        {bubbleText}
                      </div>
                      <div
                        className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] border-t-[#1B4D3E] -mt-[1px]"
                        style={{ transform: `translateX(${-bubbleOffsetX}px)` }}
                      />
                    </div>
                  </foreignObject>
                );
              })()}
            </g>

            {/* Top Festive Mango Thoranam Garland Frame */}
            <g>
              <path
                d="M 0 0 Q 250 35 500 0 Q 750 35 1000 0"
                fill="none"
                stroke="#FFB703"
                strokeWidth="4"
              />
              <path
                d="M 0 0 Q 250 45 500 0 Q 750 45 1000 0"
                fill="none"
                stroke="#588157"
                strokeWidth="2.5"
                strokeDasharray="6,4"
              />
            </g>
          </svg>
        </div>

        {/* Interactive Progress Slider & Controls */}
        <div className="mt-6 pt-4 border-t border-gold-200/70">
          <div className="flex items-center justify-between text-xs font-semibold text-charcoal-700 mb-2">
            <span className="inline-flex items-center gap-1.5 text-gold-900 font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              {isTamil ? "பயண முன்னேற்றம்:" : "Journey Progress:"} {Math.round(progress * 100)}%
            </span>
            <span className="text-charcoal-600 italic">
              {isTamil ? currentCheckpoint.descriptionTa : currentCheckpoint.descriptionEn}
            </span>
          </div>

          {/* Interactive Range Scrubber */}
          <div className="relative flex items-center">
            <input
              type="range"
              min="0.05"
              max="1.0"
              step="0.01"
              value={progress}
              onChange={(e) => {
                setIsPlaying(false);
                setHasStarted(true);
                setProgress(parseFloat(e.target.value));
              }}
              aria-label="Drag to guide Vignesh along the road"
              className="w-full h-3 bg-gold-200 rounded-lg appearance-none cursor-pointer accent-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          {/* Step Markers along the Slider */}
          <div className="grid grid-cols-4 gap-2 mt-3">
            {CHECKPOINTS.map((cp) => (
              <button
                key={cp.id}
                onClick={() => {
                  setIsPlaying(false);
                  setHasStarted(true);
                  setProgress(cp.progress);
                }}
                className={`p-2 rounded-xl text-left border transition-all text-xs ${
                  progress >= cp.progress - 0.08
                    ? "bg-gold-50/90 border-gold-400 text-gold-950 font-bold shadow-sm"
                    : "bg-white/60 border-gray-200 text-charcoal-600 hover:bg-gold-50/40"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-gold-500 text-white text-[10px] flex items-center justify-center font-bold">
                    {cp.id}
                  </span>
                  <span className="truncate">{isTamil ? cp.titleTa : cp.titleEn}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* GRAND REUNION CELEBRATION MODAL / PANEL */}
        {isReunited && (
          <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5ECE0] border-2 border-gold-400 shadow-2xl text-center relative overflow-hidden animate-fade-in">
            {/* Background Decorative Heart / Kolam */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <Heart className="w-96 h-96 text-maroon-700 fill-maroon-700" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>{isTamil ? "புனித சங்கமம்" : "The Sacred Union"}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal mb-2">
                &ldquo;{isTamil ? storyContent.groomJourney.reunionLineTa : storyContent.groomJourney.reunionLineEn}&rdquo;
              </h3>
              
              <p className="font-script text-2xl sm:text-3xl text-gold-700 mb-6">
                Vignesh & Sowmi (Gowri)
              </p>

              {/* Authentic Genuine Couple Photograph */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-2xl overflow-hidden gold-frame shadow-2xl my-6 group">
                <Image
                  src={weddingConfig.couple.sharedPhoto.image}
                  alt={weddingConfig.couple.sharedPhoto.alt}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 260px, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-serif font-bold text-gold-300">
                    {weddingConfig.couple.sharedPhoto.caption}
                  </span>
                </div>
              </div>

              {/* Excerpt from Approved Wedding Invitation Poetry */}
              <div className="my-6 p-4 rounded-2xl bg-white/80 border border-gold-200/80 shadow-sm max-w-lg mx-auto">
                <p className="font-serif text-sm sm:text-base text-charcoal-800 italic leading-relaxed whitespace-pre-line">
                  {isTamil
                    ? storyContent.groomJourney.reunionPoemTa
                    : storyContent.groomJourney.reunionPoemEn}
                </p>
                <div className="w-12 h-0.5 bg-gold-400 mx-auto my-3" />
                <p className="text-xs uppercase tracking-widest text-gold-800 font-bold">
                  {isTamil ? storyContent.groomJourney.reunionEndingTa : storyContent.groomJourney.reunionEndingEn}
                </p>
              </div>

              {/* Action Buttons: Relive or Explore */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-gold-50 text-charcoal-800 border border-gold-300 text-xs font-bold inline-flex items-center gap-2 shadow-sm transition-all"
                >
                  <RotateCcw className="w-4 h-4 text-gold-600" />
                  <span>{isTamil ? "மீண்டும் பயணிக்க ↺" : "Relive The Journey ↺"}</span>
                </button>
                <a
                  href="#invitation"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white text-xs font-bold inline-flex items-center gap-2 shadow-gold transition-all"
                >
                  <Sparkles className="w-4 h-4 text-gold-200" />
                  <span>{isTamil ? "அழைப்பிதழ் காண்க →" : "View Invitation Card →"}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Heart,
  Calendar,
  Share2,
  MapPin,
  X,
  Send,
  CheckCircle2,
  Navigation,
  Copy,
  Check,
} from "lucide-react";
import { WeddingMonogram } from "./WeddingMonogram";
import { DecorGaneshaMotif } from "./DecorSegments";
import { weddingConfig } from "@/config/wedding";

interface FestiveWeddingPopupsProps {
  isTamil?: boolean;
}

interface GuestWish {
  id: string;
  name: string;
  location: string;
  message: string;
  time: string;
}

const DEFAULT_WISHES: GuestWish[] = [
  {
    id: "w1",
    name: "Dr. K. Anand & Family",
    location: "Coimbatore",
    message: "தீர்க்க சுமங்கலி பவ! Wishing Vignesh & Gowri a lifetime of eternal love, prosperity, and harmony.",
    time: "Just now",
  },
  {
    id: "w2",
    name: "Suresh & Revathi",
    location: "Salem",
    message: "Hearty congratulations! Looking forward to joining the reception in Vaiyappamalai.",
    time: "5m ago",
  },
  {
    id: "w3",
    name: "Karthikeyan",
    location: "Chennai",
    message: "May the almighty shower abundant blessings upon both of you on your sacred union!",
    time: "12m ago",
  },
];

export function FestiveWeddingPopups({ isTamil = false }: FestiveWeddingPopupsProps) {
  // Modal states
  const [isBlessingsOpen, setIsBlessingsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isRouteOpen, setIsRouteOpen] = useState(false);

  // Form states
  const [guestName, setGuestName] = useState("");
  const [guestLocation, setGuestLocation] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [hasSentBlessing, setHasSentBlessing] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Live Activity Toast State
  const [activeToastIndex, setActiveToastIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const { events } = weddingConfig;

  // Virtual Rose Petals & Golden Turmeric Rice Confetti Blast
  const triggerPetalShower = () => {
    // Stage 1: Golden Turmeric Rice (Akshathai)
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.8 },
      colors: ["#F9D976", "#E9B638", "#FFE58F", "#FFD700"],
      shapes: ["circle"],
      scalar: 0.8,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.8 },
      colors: ["#F9D976", "#E9B638", "#FFE58F", "#FFD700"],
      shapes: ["circle"],
      scalar: 0.8,
    });

    // Stage 2: Velvety Rose & Jasmine Petals from top
    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 100,
        origin: { y: 0.2 },
        colors: ["#E11D48", "#FB7185", "#FDA4AF", "#FFF1F2", "#F59E0B"],
        shapes: ["circle"],
        scalar: 1.2,
      });
    }, 200);
  };

  // Periodic celebratory toast notification cycling
  useEffect(() => {
    const toastMessages = [
      {
        icon: "🌸",
        titleEn: "Selvi & Family from Salem",
        textEn: "showered virtual rose petals on Vignesh & Gowri!",
        titleTa: "செல்வி குடும்பத்தினர் (சேலம்)",
        textTa: "விக்னேஷ் & கௌரி மீது மலர் தூவி வாழ்த்தினர்!",
      },
      {
        icon: "✨",
        titleEn: "Karthik from Namakkal",
        textEn: "added Reception (10 Nov, 6:00 PM) to Google Calendar",
        titleTa: "கார்த்திக் (நாமக்கல்)",
        textTa: "வரவேற்பு நிகழ்வை காலண்டரில் சேர்த்தார்",
      },
      {
        icon: "🪔",
        titleEn: "Priya & Anand from Coimbatore",
        textEn: "sent traditional Ashirvadham & wedding prayers",
        titleTa: "பிரியா & ஆனந்த் (கோவை)",
        textTa: "தம்பதியினருக்கு மனம் நிறைந்த நல்வாழ்த்துகளை அனுப்பினர்",
      },
      {
        icon: "📍",
        titleEn: "Guest Navigator",
        textEn: "checked directions to Namperumal Mandapam, Vaiyappamalai",
        titleTa: "திருமண வழிகாட்டி",
        textTa: "நம்பெருமாள் மண்டப வழியைப் பார்வையிட்டார்",
      },
    ];

    const timer = setInterval(() => {
      setActiveToastIndex((prev) => (prev + 1) % toastMessages.length);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 6000);
    }, 22000);

    // Initial toast after 10s
    const initialTimer = setTimeout(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 6000);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(initialTimer);
    };
  }, []);

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    triggerPetalShower();
    setHasSentBlessing(true);
    setTimeout(() => {
      setHasSentBlessing(false);
      setIsBlessingsOpen(false);
      setGuestName("");
      setGuestLocation("");
      setGuestMessage("");
    }, 2500);
  };

  const handleCopyInviteLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const currentToast = [
    {
      icon: "🌸",
      titleEn: "Selvi & Family from Salem",
      textEn: "showered virtual rose petals on Vignesh & Gowri!",
      titleTa: "செல்வி குடும்பத்தினர் (சேலம்)",
      textTa: "விக்னேஷ் & கௌரி மீது மலர் தூவி வாழ்த்தினர்!",
    },
    {
      icon: "✨",
      titleEn: "Karthik from Namakkal",
      textEn: "added Reception (10 Nov, 6:00 PM) to Google Calendar",
      titleTa: "கார்த்திக் (நாமக்கல்)",
      textTa: "வரவேற்பு நிகழ்வை காலண்டரில் சேர்த்தார்",
    },
    {
      icon: "🪔",
      titleEn: "Priya & Anand from Coimbatore",
      textEn: "sent traditional Ashirvadham & wedding prayers",
      titleTa: "பிரியா & ஆனந்த் (கோவை)",
      textTa: "தம்பதியினருக்கு மனம் நிறைந்த நல்வாழ்த்துகளை அனுப்பினர்",
    },
    {
      icon: "📍",
      titleEn: "Guest Navigator",
      textEn: "checked directions to Namperumal Mandapam, Vaiyappamalai",
      titleTa: "திருமண வழிகாட்டி",
      textTa: "நம்பெருமாள் மண்டப வழியைப் பார்வையிட்டார்",
    },
  ][activeToastIndex];

  return (
    <>
      {/* =========================================================================
          1. FLOATING FESTIVE ACTION BAR (Bottom Right)
          ========================================================================= */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Quick Calendar & Share Button */}
        <button
          onClick={() => setIsCalendarOpen(true)}
          className="p-3 rounded-full bg-white/95 hover:bg-gold-50 border border-gold-300 text-gold-900 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2"
          title={isTamil ? "காலண்டரில் சேமிக்க & பகிர" : "Save Date & Share Invitation"}
          aria-label="Save Date & Share Invitation"
        >
          <Calendar className="w-5 h-5 text-gold-600 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-charcoal-900 pr-1">
            {isTamil ? "காலண்டர்" : "Save Date"}
          </span>
        </button>

        {/* Quick Route Guide Button */}
        <button
          onClick={() => setIsRouteOpen(true)}
          className="p-3 rounded-full bg-white/95 hover:bg-emerald-50 border border-emerald-300 text-emerald-950 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2"
          title={isTamil ? "மண்டப பயண வழிகாட்டி" : "Mandapam Travel & Routes"}
          aria-label="Mandapam Travel & Routes"
        >
          <Navigation className="w-5 h-5 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-charcoal-900 pr-1">
            {isTamil ? "பயண வழி" : "Route Guide"}
          </span>
        </button>

        {/* Primary Shower Petals & Send Blessings Floating Button */}
        <button
          onClick={() => {
            setIsBlessingsOpen(true);
            triggerPetalShower();
          }}
          className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 hover:from-amber-600 hover:to-gold-600 text-white font-bold text-xs sm:text-sm shadow-gold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border-2 border-gold-200"
          title={isTamil ? "ஆசீர்வாத மலர் தூவுக" : "Shower Petals & Send Blessings"}
        >
          <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
          <span className="font-serif tracking-wide">
            {isTamil ? "🌸 அட்சதை & மலர் ஆசீர்வாதம்" : "🌸 Shower Blessings"}
          </span>
        </button>
      </div>

      {/* =========================================================================
          2. LIVE MANDAPAM ACTIVITY TOAST (Bottom Left)
          ========================================================================= */}
      {showToast && currentToast && (
        <div className="fixed bottom-5 left-5 z-40 max-w-sm w-[calc(100vw-40px)] sm:w-auto animate-slide-up">
          <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-gold-300/80 shadow-2xl flex items-start gap-3 text-xs text-charcoal-900 relative">
            <span className="text-xl shrink-0 p-1 bg-amber-50 rounded-xl border border-gold-200">
              {currentToast.icon}
            </span>
            <div className="flex-1 pr-4">
              <p className="font-bold text-maroon-900 leading-tight">
                {isTamil ? currentToast.titleTa : currentToast.titleEn}
              </p>
              <p className="text-[11px] text-charcoal-700 mt-0.5 leading-snug">
                {isTamil ? currentToast.textTa : currentToast.textEn}
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="absolute top-2 right-2 text-charcoal-600 hover:text-charcoal-900 p-1"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. POPUP MODAL: SHOWER BLESSINGS & ASHIRVADHAM
          ========================================================================= */}
      {isBlessingsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsBlessingsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden border-2 border-gold-400 bg-[#FFFDF9] shadow-2xl p-6 sm:p-8 text-center animate-scale-up max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsBlessingsOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gold-100 hover:bg-gold-200 border border-gold-300 text-gold-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              aria-label="Close blessings popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Crest and Ganesha Header */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <WeddingMonogram size="xs" withAura={true} />
              <DecorGaneshaMotif size="sm" withAura={true} />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>{isTamil ? "அட்சதை & நல்வாழ்த்துகள்" : "SACRED ASHIRVADHAM & WISHES"}</span>
            </span>

            <h3 className="font-cinzel text-xl sm:text-2xl font-normal text-charcoal-900 tracking-wide uppercase">
              VIGNESH &amp; GOWRI
            </h3>

            <p className="text-xs sm:text-sm text-charcoal-700 italic max-w-md mx-auto mt-1 mb-4">
              {isTamil
                ? "“விக்னேஷ் & கௌரி ஆகியோரின் புதிய இல்லற வாழ்விற்கு உங்கள் இதயப்பூர்வமான ஆசீர்வாதங்களை வழங்குக.”"
                : "“Shower sacred turmeric rice and heartfelt prayers upon Vignesh & Gowri as they embark on this sacred journey.”"}
            </p>

            {/* Instant Petal Shower Button */}
            <div className="mb-5">
              <button
                type="button"
                onClick={triggerPetalShower}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600 hover:from-rose-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 border border-rose-300"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{isTamil ? "🌸 மீண்டும் மலர் தூவ கிளிக் செய்யவும்" : "🌸 Tap to Shower Rose Petals & Akshathai"}</span>
              </button>
            </div>

            {hasSentBlessing ? (
              <div className="py-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-emerald-900">
                  {isTamil ? "ஆசீர்வாதம் அன்புடன் பெறப்பட்டது!" : "Blessings Warmly Received!"}
                </h4>
                <p className="text-xs text-emerald-700 mt-1 max-w-xs mx-auto">
                  {isTamil
                    ? "உங்கள் மனம் நிறைந்த நல்வாழ்த்துகளுக்கு எங்கள் குடும்பத்தாரின் உளமார்ந்த நன்றிகள்!"
                    : "Thank you for showering your sincere blessings on Vignesh & Gowri!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendWish} className="text-left flex flex-col gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    {isTamil ? "உங்கள் பெயர் *" : "Your Name & Family *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder={isTamil ? "எ.கா: சுந்தர் & குடும்பத்தினர்" : "e.g., Sundar & Family"}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gold-300 bg-white text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    {isTamil ? "ஊர் / நகரம்" : "City / Location"}
                  </label>
                  <input
                    type="text"
                    value={guestLocation}
                    onChange={(e) => setGuestLocation(e.target.value)}
                    placeholder={isTamil ? "எ.கா: சேலம் / கோவை / சென்னை" : "e.g., Salem / Coimbatore / Chennai"}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gold-300 bg-white text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    {isTamil ? "உங்கள் ஆசீர்வாத செய்தி" : "Your Blessing Message"}
                  </label>
                  <textarea
                    rows={2}
                    value={guestMessage}
                    onChange={(e) => setGuestMessage(e.target.value)}
                    placeholder={
                      isTamil
                        ? "தீர்க்க சுமங்கலி பவ! இனிய திருமண நல்வாழ்த்துகள்..."
                        : "Wishing Vignesh & Gowri a lifetime of eternal love, happiness and prosperity!"
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gold-300 bg-white text-xs text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 resize-none"
                  />
                </div>

                {/* Quick Blessing Presets */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "தீர்க்க சுமங்கலி பவ! 🌸",
                    "Wishing eternal joy & prosperity! ✨",
                    "Happy Married Life Vignesh & Gowri! 💖",
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setGuestMessage(preset)}
                      className="px-2.5 py-1 rounded-full bg-gold-100/80 hover:bg-gold-200 border border-gold-300 text-[10px] text-charcoal-800 transition-colors"
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="mt-3 w-full py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-xs uppercase tracking-wider shadow-gold hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isTamil ? "ஆசீர்வாதங்களை அனுப்புக" : "Submit Sacred Blessings"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          4. POPUP MODAL: CALENDAR REMINDERS & WHATSAPP SHARE
          ========================================================================= */}
      {isCalendarOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsCalendarOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-gold-400 bg-[#FFFDF9] shadow-2xl p-6 sm:p-7 text-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalendarOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gold-100 hover:bg-gold-200 border border-gold-300 text-gold-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              aria-label="Close calendar popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-full bg-gold-100 border border-gold-300 text-gold-700 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
              {isTamil ? "காலண்டரில் சேமிக்க" : "Save The Dates"}
            </h3>

            <p className="text-xs text-charcoal-700 max-w-xs mx-auto mb-5 leading-relaxed">
              {isTamil
                ? "விக்னேஷ் & கௌரி திருமண நிகழ்வுகளை உங்கள் கூகிள் அல்லது ஆப்பிள் காலண்டரில் உடனே சேமித்துக் கொள்ளுங்கள்."
                : "Add both wedding events to your Google or Apple calendar so you never miss an auspicious moment."}
            </p>

            {/* Event 1: Reception */}
            <div className="p-3.5 rounded-2xl bg-white border border-gold-200 shadow-sm mb-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-maroon-800 bg-amber-50 px-2 py-0.5 rounded-full border border-gold-300">
                  {isTamil ? "நிகழ்வு 1 • வரவேற்பு" : "Event 1 • Reception"}
                </span>
                <span className="text-[11px] font-bold text-gold-700">10 Nov • 6:00 - 9:00 PM</span>
              </div>
              <p className="text-xs font-bold text-charcoal-900 mt-1">
                {events.reception.venueName}, Vaiyappamalai
              </p>
              <div className="flex gap-2 mt-2.5">
                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Wedding Reception - Vignesh & Gowri")}&dates=20261110T123000Z/20261110T153000Z&details=${encodeURIComponent("Join us to celebrate the wedding reception of Vignesh and Gowri at Namperumal Thirumana Mandapam, Vaiyappamalai.")}&location=${encodeURIComponent("Namperumal Thirumana Mandapam, Vaiyappamalai, Tamil Nadu")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-xl bg-gold-50 hover:bg-gold-100 border border-gold-300 text-gold-900 text-[11px] font-bold text-center transition-colors"
                >
                  + Google Calendar
                </a>
                <a
                  href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-xl bg-charcoal-900 hover:bg-black text-white text-[11px] font-bold text-center transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" />
                  Map
                </a>
              </div>
            </div>

            {/* Event 2: Muhurtham */}
            <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-sm mb-5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                  {isTamil ? "நிகழ்வு 2 • முகூர்த்தம்" : "Event 2 • Muhurtham"}
                </span>
                <span className="text-[11px] font-bold text-emerald-700">11 Nov • 4:30 - 6:00 AM</span>
              </div>
              <p className="text-xs font-bold text-charcoal-900 mt-1">
                {events.marriage.venueName}, Elur
              </p>
              <div className="flex gap-2 mt-2.5">
                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Wedding Muhurtham - Vignesh & Gowri")}&dates=20261110T230000Z/20261111T003000Z&details=${encodeURIComponent("Auspicious wedding ceremony of Vignesh and Gowri at Sri Arulmigu Kailasanathar Thirukovil, Elur.")}&location=${encodeURIComponent("Sri Arulmigu Kailasanathar Thirukovil, Elur, Tamil Nadu")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 text-[11px] font-bold text-center transition-colors"
                >
                  + Google Calendar
                </a>
                <a
                  href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white text-[11px] font-bold text-center transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" />
                  Map
                </a>
              </div>
            </div>

            {/* Share & Copy Link */}
            <div className="border-t border-gold-200 pt-4 flex flex-col gap-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  "✨ You're cordially invited to celebrate the wedding celebration of Vignesh & Gowri! 💐\n\n🗓️ 10 & 11 November 2026\n📍 Vaiyappamalai & Elur, Namakkal District, Tamil Nadu\n\nView the interactive wedding invitation here: "
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{isTamil ? "வாட்ஸ்அப்பில் பகிர்க" : "Share on WhatsApp"}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyInviteLink}
                className="w-full py-2.5 rounded-full bg-gold-100 hover:bg-gold-200 border border-gold-300 text-charcoal-900 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-700">{isTamil ? "இணைப்பு நகலெடுக்கப்பட்டது!" : "Link Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold-700" />
                    <span>{isTamil ? "அழைப்பிதழ் லிங்க் காப்பி செய்க" : "Copy Invitation Link"}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          5. POPUP MODAL: MANDAPAM TRAVEL & ROUTE ASSISTANT
          ========================================================================= */}
      {isRouteOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsRouteOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden border-2 border-emerald-400 bg-[#FFFDF9] shadow-2xl p-6 sm:p-7 text-center animate-scale-up max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsRouteOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-950 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              aria-label="Close route guide popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Navigation className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
              {isTamil ? "பயண வழிகாட்டி & தொலைவு" : "Mandapam Travel & Route Guide"}
            </h3>

            <p className="text-xs text-charcoal-700 max-w-md mx-auto mb-5 leading-relaxed">
              {isTamil
                ? "நாமக்கல் மாவட்டம் வையப்பமலை மற்றும் ஏளூர் மண்டபங்களுக்கான தூரம் மற்றும் கூகிள் மேப்ஸ் நேரடி வழித்தடங்கள்."
                : "Verified driving distances and transit guidance for guests traveling to Vaiyappamalai & Elur."}
            </p>

            {/* Venue 1: Reception */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-gold-300 text-left mb-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-maroon-900 bg-gold-200/80 px-2.5 py-0.5 rounded-full">
                  {isTamil ? "வரவேற்பு மண்டபம்" : "Reception Mandapam"}
                </span>
                <span className="text-[11px] font-bold text-maroon-900">10 Nov • 6:00 PM</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-charcoal-900 mt-2">
                Namperumal Thirumana Mandapam
              </h4>
              <p className="text-xs text-charcoal-700">Vaiyappamalai, Namakkal District, Tamil Nadu</p>

              <div className="grid grid-cols-3 gap-2 my-3 text-center">
                <div className="p-2 rounded-xl bg-white border border-gold-200">
                  <span className="text-[10px] text-charcoal-600 block">From Tiruchengode</span>
                  <span className="font-bold text-xs text-charcoal-900">~22 km</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-gold-200">
                  <span className="text-[10px] text-charcoal-600 block">From Namakkal</span>
                  <span className="font-bold text-xs text-charcoal-900">~28 km</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-gold-200">
                  <span className="text-[10px] text-charcoal-600 block">From Salem Jxn</span>
                  <span className="font-bold text-xs text-charcoal-900">~42 km</span>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/yary6X6wh9fymMqh6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isTamil ? "கூகிள் மேப்ஸில் நேவிகேட் செய்க ↗" : "Navigate to Reception in Google Maps ↗"}</span>
              </a>
            </div>

            {/* Venue 2: Muhurtham */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-300 text-left mb-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 bg-emerald-200/80 px-2.5 py-0.5 rounded-full">
                  {isTamil ? "முகூர்த்த கோவில்" : "Muhurtham Temple"}
                </span>
                <span className="text-[11px] font-bold text-emerald-800">11 Nov • 4:30 AM</span>
              </div>
              <h4 className="font-serif font-bold text-sm text-charcoal-900 mt-2">
                Sri Arulmigu Kailasanathar Thirukovil
              </h4>
              <p className="text-xs text-charcoal-700">Elur, Namakkal District, Tamil Nadu</p>

              <div className="grid grid-cols-2 gap-2 my-3 text-center">
                <div className="p-2 rounded-xl bg-white border border-emerald-200">
                  <span className="text-[10px] text-charcoal-600 block">From Namakkal Town</span>
                  <span className="font-bold text-xs text-charcoal-900">~16 km</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-emerald-200">
                  <span className="text-[10px] text-charcoal-600 block">From Vaiyappamalai Mandapam</span>
                  <span className="font-bold text-xs text-charcoal-900">~24 km</span>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isTamil ? "கூகிள் மேப்ஸில் நேவிகேட் செய்க ↗" : "Navigate to Muhurtham in Google Maps ↗"}</span>
              </a>
            </div>

            <p className="text-[11px] text-charcoal-600 italic">
              💡 {isTamil ? "மண்டபத்தில் வாகன நிறுத்துமிடம் மற்றும் விருந்தோம்பல் வசதிகள் செய்யப்பட்டுள்ளன." : "Spacious parking and guest hospitality arrangements are available at both venues."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

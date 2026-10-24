"use client";

import React, { useState, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";
import { Calendar, Sparkles } from "lucide-react";

interface UnitBoxProps {
  label: string;
  value: number;
}

function UnitBox({ label, value }: UnitBoxProps) {
  return (
    <div className="glass-panel py-3 sm:py-4 px-2 sm:px-3 rounded-2xl flex flex-col items-center justify-center border border-gold-200/90 shadow-sm transition-transform hover:-translate-y-0.5 duration-200">
      <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold-600 tracking-tight">
        {String(Math.max(0, value)).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs text-charcoal-700 uppercase tracking-wider font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [selectedEvent, setSelectedEvent] = useState<"reception" | "marriage">("reception");
  const [mounted, setMounted] = useState(false);
  const [receptionDiff, setReceptionDiff] = useState(0);
  const [marriageDiff, setMarriageDiff] = useState(0);

  useEffect(() => {
    setMounted(true);

    const updateTimes = () => {
      const now = new Date().getTime();
      const rec = weddingConfig.events.reception.timestampIST - now;
      const mar = weddingConfig.events.marriage.timestampIST - now;

      setReceptionDiff(rec);
      setMarriageDiff(mar);

      // Auto-toggle if reception passed
      if (rec <= 0 && mar > 0) {
        setSelectedEvent("marriage");
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center items-center gap-3 sm:gap-4 py-4 max-w-lg mx-auto">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            className="glass-panel w-20 sm:w-28 py-3 rounded-2xl flex flex-col items-center justify-center border border-gold-200"
          >
            <span className="font-serif text-2xl sm:text-3xl text-gold-600">--</span>
            <span className="text-[10px] sm:text-xs text-charcoal-700 uppercase mt-1">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const currentDiff = selectedEvent === "reception" ? receptionDiff : marriageDiff;
  const safeDiff = Math.max(0, currentDiff);
  const isEventToday = currentDiff <= 0;

  const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((safeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((safeDiff % (1000 * 60)) / 1000);

  const activeEventData = weddingConfig.events[selectedEvent];

  return (
    <div className="flex flex-col items-center text-center max-w-xl mx-auto w-full">
      {/* Dual Milestone Selector Tabs */}
      <div className="inline-flex items-center p-1 rounded-full bg-gold-100/80 border border-gold-300 mb-5 text-xs font-semibold">
        <button
          onClick={() => setSelectedEvent("reception")}
          className={`px-4 py-1.5 rounded-full transition-all ${
            selectedEvent === "reception"
              ? "bg-white text-gold-800 shadow-sm"
              : "text-charcoal-700 hover:text-gold-700"
          }`}
        >
          🎉 Reception (10 Nov)
        </button>
        <button
          onClick={() => setSelectedEvent("marriage")}
          className={`px-4 py-1.5 rounded-full transition-all ${
            selectedEvent === "marriage"
              ? "bg-white text-gold-800 shadow-sm"
              : "text-charcoal-700 hover:text-gold-700"
          }`}
        >
          💍 Muhurtham (11 Nov)
        </button>
      </div>

      {isEventToday ? (
        <div className="glass-panel p-6 rounded-3xl border border-gold-400 bg-gold-50/90 text-center animate-pulse-subtle">
          <Sparkles className="w-8 h-8 text-gold-600 mx-auto mb-2" />
          <h3 className="font-serif text-2xl font-bold text-gold-800">
            Today is the Auspicious Day!
          </h3>
          <p className="text-xs text-charcoal-700 mt-1">
            {activeEventData.title} is taking place today at {activeEventData.venueName}, {activeEventData.locationArea}.
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 w-full"
          aria-label={`Countdown to ${activeEventData.title}`}
        >
          <UnitBox label="Days" value={days} />
          <UnitBox label="Hours" value={hours} />
          <UnitBox label="Minutes" value={minutes} />
          <UnitBox label="Seconds" value={seconds} />
        </div>
      )}

      <p className="text-xs text-charcoal-700/85 mt-3.5 font-tamil font-medium">
        {activeEventData.tamilTitle} • {activeEventData.dateString} ({activeEventData.timeRange})
      </p>
    </div>
  );
}

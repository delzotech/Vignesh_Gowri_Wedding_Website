"use client";

import React, { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { storyContent } from "@/config/storyContent";
import { Calendar, Clock, MapPin, Sparkles, CheckCircle2, ShieldCheck, Heart, Radio } from "lucide-react";

interface WeddingControlRoomProps {
  isTamil?: boolean;
}

export function WeddingControlRoom({ isTamil = false }: WeddingControlRoomProps) {
  const [activeTab, setActiveTab] = useState<"reception" | "marriage">("reception");
  const { reception, marriage } = weddingConfig.events;
  const content = storyContent.controlRoom;

  return (
    <section id="operation" className="py-14 sm:py-20 px-4 max-w-5xl mx-auto scroll-mt-16">
      {/* Editorial Header */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-900 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
          <Radio className="w-3.5 h-3.5 text-gold-700 animate-pulse" />
          <span>{isTamil ? content.statusTa : content.statusEn}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          {isTamil ? content.headingTa : content.headingEn}
        </h2>

        <p className="text-xs sm:text-sm text-charcoal-700 mt-2 max-w-md mx-auto">
          {isTamil ? content.subheadingTa : content.subheadingEn}
        </p>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
      </div>

      {/* Control Room Console Dashboard Card */}
      <div className="relative rounded-3xl border-2 border-gold-300 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5ECE0] p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gold-200/80">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-gold-900 uppercase tracking-widest">
              MISSION STATUS: ALL CONFIRMED & AUSPICIOUS
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gold-200 text-xs font-bold text-maroon-800 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-maroon-700 fill-maroon-700 animate-pulse" />
            <span>{isTamil ? content.foreverActivatedTa : content.foreverActivatedEn}</span>
          </div>
        </div>

        {/* Milestone Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {/* Milestone 1: Reception */}
          <button
            onClick={() => setActiveTab("reception")}
            className={`p-5 rounded-2xl border text-left transition-all ${
              activeTab === "reception"
                ? "bg-white border-gold-500 shadow-lg ring-2 ring-gold-400/30 transform -translate-y-0.5"
                : "bg-white/70 border-gold-200 hover:bg-white hover:border-gold-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-300">
                MILESTONE 01 • {isTamil ? content.receptionLabelTa : content.receptionLabelEn}
              </span>
              <span className="font-mono text-xs font-bold text-gold-700">10 NOV 2026</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
              {isTamil ? reception.tamilTitle : reception.title}
            </h3>
            <p className="text-xs text-charcoal-700 mt-1 line-clamp-2">
              {isTamil ? content.receptionRoleTa : content.receptionRoleEn}
            </p>
          </button>

          {/* Milestone 2: Muhurtham */}
          <button
            onClick={() => setActiveTab("marriage")}
            className={`p-5 rounded-2xl border text-left transition-all ${
              activeTab === "marriage"
                ? "bg-white border-gold-500 shadow-lg ring-2 ring-gold-400/30 transform -translate-y-0.5"
                : "bg-white/70 border-gold-200 hover:bg-white hover:border-gold-300"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-maroon-100 text-maroon-800 text-[10px] font-bold uppercase tracking-wider border border-maroon-300">
                MILESTONE 02 • {isTamil ? content.marriageLabelTa : content.marriageLabelEn}
              </span>
              <span className="font-mono text-xs font-bold text-gold-700">11 NOV 2026</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
              {isTamil ? marriage.tamilTitle : marriage.title}
            </h3>
            <p className="text-xs text-charcoal-700 mt-1 line-clamp-2">
              {isTamil ? content.marriageRoleTa : content.marriageRoleEn}
            </p>
          </button>
        </div>

        {/* Active Milestone Deep-Dive Terminal Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-gold-200/90 shadow-inner">
          {activeTab === "reception" ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                  01
                </span>
                <div>
                  <h4 className="font-serif text-xl font-bold text-charcoal-900">
                    {isTamil ? reception.tamilTitle : reception.title} — {isTamil ? "வையப்பமலை" : "Vaiyappamalai"}
                  </h4>
                  <p className="text-xs text-emerald-800 font-semibold">
                    {isTamil ? content.receptionLabelTa : content.receptionLabelEn} • {reception.timeRange}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gold-100 text-xs text-charcoal-800">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-900 uppercase tracking-wider text-[10px]">DATE & DAY</span>
                    <span>{reception.dateString}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-900 uppercase tracking-wider text-[10px]">TIME RANGE</span>
                    <span>{isTamil ? reception.tamilTime : reception.timeRange}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-900 uppercase tracking-wider text-[10px]">VENUE LOCATION</span>
                    <span className="font-medium">{reception.venueName}, {reception.locationArea}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-charcoal-700 italic pt-2">
                &ldquo;{isTamil ? content.receptionRoleTa : content.receptionRoleEn}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-maroon-700 text-white font-bold flex items-center justify-center text-xs">
                  02
                </span>
                <div>
                  <h4 className="font-serif text-xl font-bold text-charcoal-900">
                    {isTamil ? marriage.tamilTitle : marriage.title} — {isTamil ? "ஏளூர்" : "Elur"}
                  </h4>
                  <p className="text-xs text-maroon-800 font-semibold">
                    {isTamil ? content.marriageLabelTa : content.marriageLabelEn} • Auspicious Dawn (4:30 AM – 6:00 AM)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gold-100 text-xs text-charcoal-800">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-900 uppercase tracking-wider text-[10px]">DATE & DAY</span>
                    <span>{marriage.dateString}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-900 uppercase tracking-wider text-[10px]">TIME RANGE</span>
                    <span>{isTamil ? marriage.tamilTime : marriage.timeRange}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gold-900 uppercase tracking-wider text-[10px]">VENUE LOCATION</span>
                    <span className="font-medium">{marriage.venueName}, {marriage.locationArea}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-charcoal-700 italic pt-2">
                &ldquo;{isTamil ? content.marriageRoleTa : content.marriageRoleEn}&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { Calendar, Clock, MapPin, Sparkles, CheckCircle } from "lucide-react";

export function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState<0 | 1>(0);
  const { reception, marriage } = weddingConfig.events;

  const milestones = [
    {
      step: 1,
      title: reception.title,
      tamilTitle: reception.tamilTitle,
      date: reception.dateString,
      time: reception.timeRange,
      venue: reception.venueName,
      location: reception.locationArea,
      theme: "emerald",
      badge: "Evening Celebration",
      notes: "The grand evening reception to welcome guests and shower blessings on Vignesh & Sowmi.",
      mapUrl: "https://maps.app.goo.gl/yary6X6wh9fymMqh6",
    },
    {
      step: 2,
      title: marriage.title,
      tamilTitle: marriage.tamilTitle,
      date: marriage.dateString,
      time: marriage.timeRange,
      venue: marriage.venueName,
      location: marriage.locationArea,
      theme: "maroon",
      badge: "Auspicious Muhurtham",
      notes: "The sacred Brahma Muhurtham ceremony of holy union in the presence of Agni and family.",
      mapUrl: "https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7",
    },
  ];

  return (
    <section id="timeline" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold mb-1 block">
          Two Auspicious Gatherings
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          Wedding Roadmap
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-md mx-auto">
          Follow the journey across the celebration dates from the evening reception to the sacred dawn ceremony.
        </p>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Timeline Path Container */}
      <div className="relative">
        {/* Central Connecting Dotted Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-gold-300 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {milestones.map((m, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={m.title}
                onClick={() => setActiveStep(idx as 0 | 1)}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "border-gold-500 shadow-xl ring-2 ring-gold-400/40 transform -translate-y-1 bg-white/95"
                    : "border-gold-200/80 hover:border-gold-400/70 hover:shadow-md"
                }`}
              >
                {/* Hanging Garland Corner Accent */}
                <div className="absolute -right-1 -top-1 w-6 sm:w-7 h-20 sm:h-24 pointer-events-none opacity-80 drop-shadow-sm z-20">
                  <Image
                    src="/images/decorations/hanging-garland-lotus.png"
                    alt="Garland Accent"
                    fill
                    className="object-contain object-top"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        m.theme === "emerald"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-maroon-100 text-maroon-800 border border-maroon-300"
                      }`}
                    >
                      0{m.step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                      {m.badge}
                    </span>
                  </div>
                  <span className="text-xs text-gold-700 font-serif font-bold">
                    {idx === 0 ? "Day 1" : "Day 2"}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-1">
                  {m.title}
                </h3>
                <p className="font-tamil text-sm text-gold-800 font-medium mb-3">
                  {m.tamilTitle}
                </p>

                <p className="text-xs text-charcoal-700 leading-relaxed mb-5">
                  {m.notes}
                </p>

                <div className="space-y-2 border-t border-gold-100 pt-4 text-xs text-charcoal-800">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span className="font-semibold">{m.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>{m.time}</span>
                  </div>
                  <a
                    href={m.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gold-900 transition-colors group cursor-pointer"
                    title={`Open ${m.venue} in Google Maps`}
                  >
                    <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="group-hover:underline">
                      {m.venue}, {m.location} ↗
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

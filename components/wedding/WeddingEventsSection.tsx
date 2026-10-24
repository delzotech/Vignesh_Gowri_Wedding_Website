"use client";

import React from "react";
import { weddingConfig } from "@/config/wedding";
import { EventCard } from "@/components/wedding/EventCard";
import { InteractiveTimeline } from "@/components/wedding/InteractiveTimeline";
import { DecorCornerThorans } from "@/components/wedding/DecorSegments";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface WeddingEventsSectionProps {
  isTamil?: boolean;
}

export function WeddingEventsSection({ isTamil = false }: WeddingEventsSectionProps) {
  const { reception, marriage } = weddingConfig.events;

  return (
    <section id="events" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16 relative overflow-hidden">
      {/* Both Sides Traditional Banana Leaf & Hanging Lotus Deepams Accent */}
      <DecorCornerThorans side="both" size="md" className="top-2" opacity="opacity-55 sm:opacity-75" />

      {/* Section Header */}
      <div className="text-center mb-12 relative z-10">
        <Badge variant="gold" className="mb-2">
          {isTamil ? "நிகழ்ச்சி நிரல் & இருப்பிடம்" : "Auspicious Schedule & Venues"}
        </Badge>
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          {isTamil ? "வரவேற்பு மற்றும் முகூர்த்த நன்னாட்கள்" : "Two Sacred Gatherings, One Forever"}
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-lg mx-auto">
          {isTamil
            ? "10 & 11 நவம்பர் 2026 அன்று வையப்பமலை மற்றும் ஏளூரில் நடைபெறும் சுப நிகழ்வுகள்."
            : "Complete schedule, Google Maps navigation links, and direct Google Calendar synchronization."}
        </p>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Two Column Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <EventCard event={reception} badgeVariant="gold" />
        <EventCard event={marriage} badgeVariant="maroon" />
      </div>

      {/* Interactive Timeline Roadmap */}
      <div className="relative z-10">
        <InteractiveTimeline />
      </div>
    </section>
  );
}

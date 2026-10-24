import React from "react";
import { EventSchedule } from "@/config/wedding";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";

interface EventCardProps {
  event: EventSchedule;
  badgeVariant?: "gold" | "maroon" | "emerald";
}

export function EventCard({ event, badgeVariant = "gold" }: EventCardProps) {
  // Generate a Google Calendar add event URL
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.calendarEvent.title
  )}&dates=${event.calendarEvent.startTime.replace(/[-:]/g, "").split(".")[0]}/${event.calendarEvent.endTime
    .replace(/[-:]/g, "")
    .split(".")[0]}&details=${encodeURIComponent(
    event.calendarEvent.description
  )}&location=${encodeURIComponent(event.calendarEvent.location)}`;

  const isReception = event.id === "reception" || event.title.toLowerCase().includes("reception");
  const mapUrl = isReception
    ? "https://maps.app.goo.gl/yary6X6wh9fymMqh6"
    : "https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7";

  return (
    <article
      className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-gold-300/60 shadow-card transition-all duration-300 hover:shadow-xl hover:border-gold-400 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant={badgeVariant}>{event.title}</Badge>
          {event.verifiedFromInvitation && (
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium border border-emerald-200">
              <CheckCircle2 className="w-3 h-3" />
              Verified Details
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900 mb-1">
          {event.title}
        </h3>
        <p className="font-tamil text-sm text-gold-700 font-medium mb-3">
          {event.tamilTitle}
        </p>

        <p className="text-sm text-charcoal-700/90 mb-6 italic">
          {event.subTitle}
        </p>

        <div className="space-y-3.5 border-t border-gold-200/60 pt-5">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-charcoal-900">{event.dateString}</p>
              <p className="text-xs text-charcoal-700/80 font-tamil">{event.dayOfWeek} • 2026</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-charcoal-900">{event.timeRange}</p>
              <p className="text-xs text-charcoal-700/80 font-tamil">{event.tamilTime}</p>
            </div>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group/venue hover:bg-gold-50/60 p-1.5 -m-1.5 rounded-lg transition-colors"
            title="Open venue in Google Maps"
          >
            <MapPin className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0 group-hover/venue:scale-125 transition-transform" />
            <div>
              <p className="text-sm font-semibold text-charcoal-900 group-hover/venue:text-gold-900 group-hover/venue:underline">
                {event.venueName} <span className="text-xs text-gold-600 font-normal">↗</span>
              </p>
              <p className="text-xs text-gold-700 font-tamil font-medium">{event.tamilVenueName}</p>
              <p className="text-xs text-charcoal-700/90 mt-0.5">{event.locationArea}, Tamil Nadu</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gold-200/50 flex flex-col sm:flex-row gap-3">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold-50 hover:bg-gold-100 text-gold-900 border border-gold-300 text-xs font-semibold tracking-wide shadow-xs hover:shadow transition-colors"
        >
          <MapPin className="w-4 h-4 text-maroon-700" />
          <span>{isReception ? "Reception Map ↗" : "Muhurtham Map ↗"}</span>
        </a>
        <a
          href={gcalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Add to Google Calendar
        </a>
      </div>
    </article>
  );
}

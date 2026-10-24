"use client";

import React, { useState } from "react";
import { weddingConfig, EventSchedule } from "@/config/wedding";
import { storyContent } from "@/config/storyContent";
import { Calendar, Download, MapPin, Plane, CheckCircle2, Ticket, Sparkles } from "lucide-react";

interface TicketCardProps {
  event: EventSchedule;
  flightCode: string;
  fromCode: string;
  fromCity: string;
  toCode: string;
  toCity: string;
  themeColor: "emerald" | "maroon";
}

function TicketCard({
  event,
  flightCode,
  fromCode,
  fromCity,
  toCode,
  toCity,
  themeColor,
}: TicketCardProps) {
  // Download dynamic .ics calendar file
  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Vignesh & Sowmi Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:${event.calendarEvent.title}
DESCRIPTION:${event.calendarEvent.description}
LOCATION:${event.calendarEvent.location}
DTSTART:${event.calendarEvent.startTime.replace(/[-:]/g, "").split(".")[0]}
DTEND:${event.calendarEvent.endTime.replace(/[-:]/g, "").split(".")[0]}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.id}-vignesh-sowmi.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.calendarEvent.title
  )}&dates=${event.calendarEvent.startTime.replace(/[-:]/g, "").split(".")[0]}/${event.calendarEvent.endTime
    .replace(/[-:]/g, "")
    .split(".")[0]}&details=${encodeURIComponent(
    event.calendarEvent.description
  )}&location=${encodeURIComponent(event.calendarEvent.location)}`;

  return (
    <div className="relative rounded-3xl overflow-hidden border border-gold-300 shadow-xl bg-white flex flex-col md:flex-row group transition-all duration-300 hover:shadow-2xl hover:border-gold-400">
      {/* Left/Main Ticket Body */}
      <div className="flex-grow p-6 sm:p-8 flex flex-col justify-between">
        {/* Top Airline Header */}
        <div className="flex items-center justify-between border-b border-gold-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-gold-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-800">
              LOVE AIRLINES • FIRST CLASS PASS
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-charcoal-700">
            {flightCode}
          </span>
        </div>

        {/* Passenger Names */}
        <div className="mb-4">
          <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-700/80 block">
            HONORED PASSENGER / VIP GUEST
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900 mt-0.5">
            Our Honored Guest & Family
          </h3>
          <p className="text-xs text-gold-700 font-medium">
            Attending: Vignesh & Sowmi (Gowri) Wedding • {event.tamilTitle}
          </p>
        </div>

        {/* Route Details */}
        <div className="flex items-center justify-between max-w-sm my-4 py-3 px-4 rounded-2xl bg-gold-50/70 border border-gold-200/80">
          <div>
            <span className="font-mono text-xl sm:text-2xl font-bold text-charcoal-900 block">
              {fromCode}
            </span>
            <span className="text-[10px] uppercase text-charcoal-700 font-semibold">
              {fromCity}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Plane className="w-5 h-5 text-gold-600 transform rotate-90 my-0.5" />
            <span className="text-[9px] uppercase tracking-widest text-gold-700 font-bold">
              NON-STOP
            </span>
          </div>

          <div className="text-right">
            <span className="font-mono text-xl sm:text-2xl font-bold text-charcoal-900 block">
              {toCode}
            </span>
            <span className="text-[10px] uppercase text-charcoal-700 font-semibold">
              {toCity}
            </span>
          </div>
        </div>

        {/* Boarding Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-gold-100 pt-3 text-xs">
          <div>
            <span className="text-[10px] uppercase text-charcoal-700/80 font-bold block">
              DATE
            </span>
            <span className="font-semibold text-charcoal-900">{event.dateString.split(",")[1]}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-charcoal-700/80 font-bold block">
              TIME
            </span>
            <span className="font-semibold text-charcoal-900">{event.timeRange}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-charcoal-700/80 font-bold block">
              GATE / VENUE
            </span>
            <span className="font-semibold text-charcoal-900 line-clamp-1">{event.venueName}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-charcoal-700/80 font-bold block">
              SEAT
            </span>
            <span className="font-semibold text-charcoal-900">01A & 01B</span>
          </div>
        </div>
      </div>

      {/* Ticket Perforation Notch Divider */}
      <div className="relative w-full md:w-0 border-t-2 md:border-t-0 md:border-l-2 border-dashed border-gold-300 flex items-center justify-between md:flex-col">
        <div className="w-5 h-5 bg-[#FAF7F2] rounded-full -translate-y-1/2 md:-translate-y-0 md:-translate-x-1/2 border border-gold-300" />
        <div className="w-5 h-5 bg-[#FAF7F2] rounded-full translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 border border-gold-300" />
      </div>

      {/* Right/Ticket Stub */}
      <div className="md:w-64 p-6 sm:p-8 bg-gold-50/50 flex flex-col justify-between text-center items-center">
        {/* Verification Stamp */}
        <div className="w-24 h-24 rounded-full border-2 border-dashed border-gold-500/80 p-1 flex flex-col items-center justify-center transform -rotate-12 my-auto">
          <span className="text-[9px] font-bold tracking-widest uppercase text-gold-700">
            OFFICIALLY VERIFIED
          </span>
          <span className="font-serif font-bold text-xs text-maroon-700 my-0.5">
            MANGALAM
          </span>
          <span className="text-[8px] font-mono text-gold-800">
            NOV 2026
          </span>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-2 mt-4">
          <a
            href={gcalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold shadow-sm transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            Google Calendar
          </a>
          <button
            onClick={downloadIcs}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-gold-300 hover:bg-gold-50 text-charcoal-700 text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-gold-600" />
            Download .ICS File
          </button>
        </div>
      </div>
    </div>
  );
}

export function WeddingTickets() {
  const { reception, marriage } = weddingConfig.events;

  return (
    <section id="passes" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold mb-1 block">
          First Class Wedding Passes
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          Your Seat in the Story
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700/80 mt-2 max-w-lg mx-auto italic font-serif">
          &ldquo;Your seat is reserved in the story. Your blessings are the real VIP pass.&rdquo;
        </p>
        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4" />
      </div>

      <div className="space-y-8">
        {/* Reception Pass */}
        <TicketCard
          event={reception}
          flightCode="REC-1011"
          fromCode="SIN"
          fromCity="Singlehood"
          toCode="FOR"
          toCity="Forever"
          themeColor="emerald"
        />

        {/* Marriage Pass */}
        <TicketCard
          event={marriage}
          flightCode="MUH-1111"
          fromCode="LOVE"
          fromCity="Two Hearts"
          toCode="UNION"
          toCity="Sacred Vows"
          themeColor="maroon"
        />
      </div>
    </section>
  );
}

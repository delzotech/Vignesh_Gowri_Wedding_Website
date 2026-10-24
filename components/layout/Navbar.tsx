"use client";

import React, { useState, useEffect } from "react";
import { Languages, Menu, X } from "lucide-react";
import { AudioAtmosphere } from "@/components/wedding/AudioAtmosphere";
import { WeddingMonogram } from "@/components/wedding/WeddingMonogram";

interface NavbarProps {
  isTamil: boolean;
  onToggleLanguage: () => void;
  onReplayIntro?: () => void;
}

export function Navbar({ isTamil, onToggleLanguage, onReplayIntro }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: isTamil ? "முகப்பு" : "Home", href: "#hero" },
    { label: isTamil ? "மணமக்கள்" : "The Couple", href: "#couple" },
    { label: isTamil ? "அழைப்பிதழ்" : "Invitation", href: "#invitation" },
    { label: isTamil ? "விளையாட்டு" : "Game", href: "#matching-game" },
    { label: isTamil ? "காதல் வரிகள்" : "Quotes", href: "#tamil-quote" },
    { label: isTamil ? "நல்வரவு" : "Blessings", href: "#final-welcome" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/92 backdrop-blur-md shadow-sm border-b border-gold-200/80 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Monogram Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <WeddingMonogram size="sm" />
          <span className="font-amora text-xl sm:text-2xl font-medium tracking-tight text-gold-700 hidden sm:inline group-hover:text-gold-800 transition-colors drop-shadow-sm">
            Vignesh & Sowmi
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-charcoal-700 hover:text-gold-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls: Audio & Language Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {onReplayIntro && (
            <button
              id="btn-navbar-watch-video"
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-amber-900 bg-amber-100/90 hover:bg-amber-200 border border-amber-300 transition-colors shadow-sm whitespace-nowrap active:scale-95"
              title="Watch Animated Wedding Video Invitation"
            >
              <span>🎬</span>
              <span className="hidden sm:inline">{isTamil ? "வீடியோ அழைப்பு" : "Watch Film"}</span>
              <span className="sm:hidden">{isTamil ? "வீடியோ" : "Film"}</span>
            </button>
          )}

          <AudioAtmosphere isTamil={isTamil} />

          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-gold-800 bg-gold-100 hover:bg-gold-200 border border-gold-300 transition-colors whitespace-nowrap active:scale-95"
            title="Toggle English / Tamil"
          >
            <Languages className="w-3.5 h-3.5 text-gold-700 flex-shrink-0" />
            <span className="hidden sm:inline">{isTamil ? "English" : "தமிழ்"}</span>
            <span className="sm:hidden">{isTamil ? "EN" : "தமிழ்"}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-charcoal-700 hover:bg-gold-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gold-200 px-4 py-5 shadow-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-gold-600 py-1.5 px-2 rounded-lg hover:bg-gold-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

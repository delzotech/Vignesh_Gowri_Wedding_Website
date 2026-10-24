import React from "react";
import { weddingConfig } from "@/config/wedding";
import { Sparkles, BookOpen } from "lucide-react";

export function InvitationPoetry() {
  const { invitationPoem, thirukkural } = weddingConfig.poetry;

  return (
    <section className="py-12 sm:py-16 px-4 max-w-4xl mx-auto text-center">
      {/* Thirukkural Blessing */}
      <div className="mb-12 glass-panel p-6 sm:p-8 rounded-3xl border border-gold-300/70 shadow-gold relative overflow-hidden">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          திருக்குறள் • குறள் {thirukkural.number} ({thirukkural.chapter})
        </div>
        <blockquote className="font-tamil text-lg sm:text-xl md:text-2xl font-medium text-gold-900 leading-relaxed mb-3">
          “{thirukkural.kural}”
        </blockquote>
        <p className="text-xs sm:text-sm text-charcoal-700 italic max-w-xl mx-auto">
          {thirukkural.meaning}
        </p>
      </div>

      {/* The Invitation Poem */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-200 shadow-card relative">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-6 h-6 text-gold-500 animate-pulse-subtle" />
        </div>

        <h3 className="font-script text-3xl sm:text-4xl text-gold-600 mb-6">
          A Promise of Forever
        </h3>

        <div className="space-y-6 max-w-xl mx-auto">
          {invitationPoem.stanzas.map((stanza, idx) => (
            <p
              key={idx}
              className="font-serif text-base sm:text-lg text-charcoal-800 leading-relaxed whitespace-pre-line"
            >
              {stanza}
            </p>
          ))}
        </div>

        <p className="text-xs uppercase tracking-widest text-gold-700 font-semibold mt-8 border-t border-gold-200/60 pt-4">
          {invitationPoem.attribution}
        </p>
      </div>
    </section>
  );
}

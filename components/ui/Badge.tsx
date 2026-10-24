import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "maroon" | "emerald" | "outline";
  className?: string;
}

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  const variantStyles = {
    gold: "bg-gold-50 text-gold-700 border-gold-300",
    maroon: "bg-maroon-50 text-maroon-700 border-maroon-100",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    outline: "bg-white/80 text-charcoal-700 border-gold-200",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

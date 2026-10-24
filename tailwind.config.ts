import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FAF6ED",
          100: "#F3ECD7",
          200: "#E7D8AE",
          300: "#DBC485",
          400: "#CFB05C",
          500: "#C59B27", // Primary Temple Gold
          600: "#A6801C",
          700: "#7F6215",
          800: "#58440F",
          900: "#312608",
        },
        ivory: {
          50: "#FFFFFF",
          100: "#FDFCF9",
          200: "#FAF7F2", // Kalyana Cream Base
          300: "#F5EFE4",
          400: "#EFE6D5",
          500: "#E5D8BF",
        },
        maroon: {
          50: "#FDF2F4",
          100: "#FBE6E9",
          500: "#9E2A2B",
          700: "#7D1824", // Auspicious Kumkum Maroon
          900: "#4D0C13",
        },
        emerald: {
          500: "#2D6A4F",
          700: "#1B4D3E", // Traditional Silk Temple Green
          900: "#081C15",
        },
        charcoal: {
          800: "#2B2B2B",
          900: "#1A1A1A", // Premium Body Text
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Cormorant Garamond", "serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        tamil: ["var(--font-tamil)", "Tiro Tamil", "serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(197, 155, 39, 0.25)",
        card: "0 15px 35px -5px rgba(0, 0, 0, 0.06), 0 5px 15px rgba(0, 0, 0, 0.03)",
        glass: "0 8px 32px 0 rgba(197, 155, 39, 0.12)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Metadata } from "next";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";
import { AudioProvider } from "@/components/audio/AudioContext";

export const metadata: Metadata = {
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  metadataBase: new URL("https://wedding.vignesh-gowri.com"),
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    url: weddingConfig.meta.siteUrl,
    siteName: "Vignesh & Gowri Wedding",
    images: [
      {
        url: weddingConfig.meta.ogImage,
        width: 1200,
        height: 1600,
        alt: weddingConfig.couple.sharedPhoto.alt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#FAF7F2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ivory-200 text-charcoal-900 min-h-screen flex flex-col selection:bg-gold-500 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-gold-500 text-white px-4 py-2 rounded-md font-medium shadow-lg"
        >
          Skip to main content
        </a>
        <AudioProvider>
          <main id="main-content" className="flex-grow">
            {children}
          </main>
        </AudioProvider>
      </body>
    </html>
  );
}

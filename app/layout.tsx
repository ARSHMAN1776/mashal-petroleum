import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedScrollBar } from "@/components/ui/AnimatedScrollBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

// Optical-size + italic cut of Fraunces for large editorial headlines.
// `font-serif` keeps the original static cut so existing components are unchanged.
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mashaal Petroleum",
    default: "Mashaal Petroleum — Total PARCO & PSO Fuel Stations",
  },
  description:
    "Mashaal Petroleum operates two premier forecourts in Punjab, Pakistan: an authorized Total PARCO station on Khanpur Road, District Rahim Yar Khan and an official PSO station in Raiwind, Lahore. Certified fuel calibration, 24/7 service, and clean travel facilities.",
  keywords: [
    "No 1 petrol in Rahim Yar Khan",
    "No 1 petrol pump Rahim Yar Khan",
    "Mashaal Petroleum",
    "Total PARCO Rahim Yar Khan",
    "PSO Raiwind Lahore",
    "Khanpur Road petrol pump",
    "Raiwind petrol station",
    "Diesel fleet Pakistan",
    "Hi-Octane Rahim Yar Khan",
    "Hi-Octane Lahore",
  ],
  authors: [{ name: "Mashaal Petroleum" }],
  metadataBase: new URL("https://mashalpetroleum.pk"),
  openGraph: {
    title: "Mashaal Petroleum — Total PARCO & PSO Fuel Stations",
    description:
      "Two fuel stations, one standard of integrity. Operating certified Total PARCO (Rahim Yar Khan) and PSO (Raiwind, Lahore) forecourts.",
    url: "https://mashalpetroleum.pk",
    siteName: "Mashaal Petroleum",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${display.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-mashal-gold selection:text-white bg-white text-[#15120D]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-mashal-charcoal focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <AnimatedScrollBar />
        <Navbar />
        <main id="main" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

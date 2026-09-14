import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroStrip } from "@/components/home/IntroStrip";
import { AsymmetricStations } from "@/components/home/AsymmetricStations";
import { QuickServices } from "@/components/home/QuickServices";
import { TrustSection } from "@/components/home/TrustSection";
import { ContactPreview } from "@/components/home/ContactPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroStrip />
      <AsymmetricStations />
      <QuickServices />
      <TrustSection />
      <ContactPreview />
    </>
  );
}

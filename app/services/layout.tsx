import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forecourt Services, Fleet Fueling & Car Wash",
  description:
    "Certified fuel dispensing, 24/7 convenience marts, digital air and radiator water, automated car wash and lube bays, and commercial fleet accounts at Mashaal Petroleum's Total PARCO and PSO forecourts.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

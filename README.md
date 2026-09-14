# ⛽ Mashal Petroleum — Official Digital Web Platform

<div align="center">

![Mashal Petroleum Platform](https://img.shields.io/badge/Platform-Next.js%2014%20App%20Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Animation-Framer%20Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Deployment](https://img.shields.io/badge/Deployment-Vercel%20Production%20Ready-black?style=for-the-badge&logo=vercel&logoColor=white)

<p align="center">
  <strong>Two Iconic Forecourts. One Uncompromising Standard of Fuel Integrity.</strong>
</p>

[Explore Website](#key-pages--routes) • [Station Data](#station-data-architecture) • [Getting Started](#getting-started) • [Design System](#brand--design-system)

</div>

---

## 📌 Executive Overview

**Mashal Petroleum** is an independent petroleum retail enterprise operating two premier forecourts in Punjab, Pakistan:

1. **Mashal Total PARCO Station** — Khanpur Road, District Rahim Yar Khan *(Ranked No. 1 Petrol in Rahim Yar Khan)*
2. **Mashal PSO Station** — Raiwind Road, Raiwind, Lahore

This digital platform is engineered with a **2026 dark-luxury corporate aesthetic**, interactive digital forecourt simulation, GPU-accelerated spring animations, verified volumetric telemetry, and comprehensive traveler amenities.

---

## ✨ Key Features & Interactive Architecture

### 1. 🎛️ Interactive Fuel Pump Dispenser Simulation
- Custom digital forecourt dispenser running real-time volume counters, price calculations, and live flow rate indicators ($L/\text{min}$).
- Interactive grade selector between **Total PARCO Super 92**, **TotalEnergies Excellium 97**, and **Euro-5 Diesel**.
- Pulsing liquid particle stream pipeline and digital status beacon.

### 2. 🔴 Total PARCO Station Forecourt (`/parco`)
- **No. 1 Petrol in Rahim Yar Khan**: Fully optimized for regional search visibility and verified quality reputation.
- **Formulated Fuel Telemetry Cards**: Digital octane rating displays (`RON 92`, `RON 97`, `Euro-5`) with additive package badges.
- **Numbered Amenities Grid**: 6 executive amenity cards (`01`–`06`) highlighting M-Mart convenience, air-conditioned prayer hall with dedicated wudu facilities, sanitized washrooms, tire gauge service, and QUARTZ auto bay.
- **Forecourt Photo Showcase**: Authentic photography of canopy, Excellium islands, and 24/7 Welcome convenience store.
- **Live GPS Navigation**: Direct Google Maps routing (`https://share.google/l7gvmlbK6ZpSo1mBr`) with embedded satellite map.

### 3. 🟢 Pakistan State Oil (PSO) Forecourt (`/pso`)
- **Official PSO Refinery Formulations**: Altron Premium Euro 5 (`RON 92`), Altron X High Octane (`RON 97`), and Action+ Diesel.
- **On-Site Corporate Facilities**: Shop Stop express, 24/7 on-site linked ATM cash point, PSO Fleet Card payment terminals, and heavy transit truck lanes.
- **Cinematic Landscape Gallery**: High-resolution balanced 16:9 photography showcasing night canopy and day multi-lane islands.
- **Live GPS Navigation**: One-click Google Maps navigation to Raiwind Road, Lahore.

### 4. 🧭 Custom GPU-Accelerated Animated Scroll Bar
- Removed standard browser scrollbars for a clean, borderless user experience.
- Top screen-edge animated glowing gradient line tracking scroll position via Framer Motion spring physics.
- Minimalist floating side progress capsule on the right margin.

### 5. 📬 Forecourt Management Contact Desk (`/contact`)
- Interactive station inquiry form with React Hook Form + Zod schema validation.
- Direct WhatsApp instant chat integration.
- Dedicated station managerial desks for fleet credit and bulk fuel delivery.

---

## 🎨 Brand & Design System

| Element | Specification |
| :--- | :--- |
| **Primary Theme** | Dark Luxury Titanium `#030914` & `#0A0707` with Crisp Alabaster `#FAF8F5` |
| **Accent Gold** | `#F3C351` / `#C89A3C` (Warm Antique Gold) |
| **PARCO Brand Colors** | Ruby Red `#C1272D`, Dark Crimson `#961D22`, Soft Surface `#FAECEC` |
| **PSO Brand Colors** | Emerald `#0B4A2D`, Electric Green `#4ADE80`, Soft Surface `#E7F1EB` |
| **Headings Typography** | `Fraunces` (Serif, Weights 400 & 500, tight tracking `-0.015em`) |
| **Body & UI Typography** | `Inter` (Sans-Serif, Weights 400 & 500, line-height `1.55`) |

---

## 📁 Project Structure

```
mashal-petroleum/
├── app/
│   ├── layout.tsx              # Global root layout with SEO metadata & AnimatedScrollBar
│   ├── page.tsx                # High-impact corporate landing page
│   ├── globals.css             # Performance styles, scrollbar removal & typography tokens
│   ├── parco/
│   │   └── page.tsx            # Total PARCO luxury station page (Rahim Yar Khan)
│   ├── pso/
│   │   └── page.tsx            # PSO luxury station page (Raiwind, Lahore)
│   ├── services/
│   │   └── page.tsx            # Forecourt care & commercial fleet services
│   ├── contact/
│   │   └── page.tsx            # Managerial contact desk & WhatsApp integration
│   ├── sitemap.ts              # Automated dynamic XML sitemap
│   └── robots.ts               # Web crawler indexing directives
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx             # 2026 dark luxury corporate hero
│   │   ├── AnimatedPumpDispenser.tsx   # Custom animated dispenser simulation
│   │   ├── AsymmetricStations.tsx      # Symmetrical 16:9 dual forecourt showcase
│   │   ├── IntroStrip.tsx              # Integrity & calibration metrics
│   │   ├── QuickServices.tsx           # Forecourt amenities grid
│   │   ├── TrustSection.tsx            # Refinery sourcing & volumetric testing
│   │   └── ContactPreview.tsx          # Direct station locator
│   ├── layout/
│   │   ├── Navbar.tsx                  # Minimalist glassmorphic navigation
│   │   └── Footer.tsx                  # Cardless balanced 4-column corporate footer
│   └── ui/
│       ├── AnimatedScrollBar.tsx       # GPU-spring scroll progress indicator
│       ├── FlameIcon.tsx               # Custom gold flame vector badge
│       ├── BrandBadges.tsx             # Official Total PARCO & PSO badges
│       └── ParcoGallerySlider.tsx      # Running cinema photo slider
├── lib/
│   ├── station-data.ts         # Single source of truth for all station data & links
│   └── utils.ts                # Tailwind class merge utilities
├── public/
│   └── images/                 # High-resolution optimized forecourt photography
└── next.config.mjs             # Compression, asset caching & performance config
```

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Type Safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: `next/image` (WebP / AVIF formats, 30-day edge cache TTL)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/ARSHMAN1776/Mashal-Petroleum.git
cd Mashal-Petroleum
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Configuration & Content Management

All station addresses, phone numbers, WhatsApp routing, live Google Maps coordinates, fuel grade descriptions, and gallery images are managed in a **single source of truth** file:

📍 [`lib/station-data.ts`](lib/station-data.ts)

To update prices, contact numbers, or station links, modify `lib/station-data.ts` and the updates will automatically propagate site-wide.

---

## 📄 License & Attribution

- **Proprietary Commercial Code**: © 2026 **Mashal Petroleum**. All rights reserved.
- **Franchise Affiliations**: Total PARCO Pakistan Ltd. & Pakistan State Oil (PSO) Ltd.
- **Engineered & Designed by**: [Fastam Solutions](https://www.fastamsolutions.com)

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
        mashal: {
          charcoal: "#15120D",
          dark: "#1F1B14",
          surface: "#29241C",
          ivory: "#F4EFE4",
          "ivory-subtle": "#EBE5D8",
          gold: "#C89A3C",
          "gold-hover": "#B68B34",
          "gold-muted": "#8C7238",
          muted: "#7A7265",
          border: "#E2DBD0",
          "dark-border": "#2E281F",
        },
        parco: {
          red: "#C1272D",
          dark: "#961D22",
          light: "#FDF8F7",
          surface: "#FAECEC",
          border: "#F0D0D1",
        },
        pso: {
          green: "#0B4A2D",
          dark: "#07331F",
          light: "#F5F9F6",
          surface: "#E7F1EB",
          border: "#CBE0D4",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
      },
      lineHeight: {
        headline: "1.1",
        subheadline: "1.2",
      },
    },
  },
  plugins: [],
};

export default config;

import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** "dark" is for use on the charcoal footer / dark bands. */
  tone?: "light" | "dark";
}

/** Small tracked label led by a gold hairline. No pill, no icon. */
export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className,
  tone = "light",
}) => (
  <p
    className={cn(
      "flex items-center gap-3.5 text-[13px] font-medium uppercase tracking-[0.16em]",
      tone === "light" ? "text-mashal-gold-muted" : "text-mashal-gold",
      className
    )}
  >
    <span aria-hidden className="h-px w-8 bg-mashal-gold" />
    <span>{children}</span>
  </p>
);

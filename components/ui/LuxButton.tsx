import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light" | "outline";
type Size = "md" | "sm";

interface LuxButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Brand accent for the arrow disc (defaults to gold). */
  accent?: string;
}

const EASE = "ease-[cubic-bezier(0.32,0.72,0,1)]";

const variants: Record<Variant, { shell: string; disc: string }> = {
  dark: {
    shell: "bg-mashal-charcoal text-mashal-bone hover:bg-[#2B241A]",
    disc: "bg-mashal-gold text-mashal-charcoal",
  },
  light: {
    shell: "bg-mashal-bone text-mashal-charcoal hover:bg-white",
    disc: "bg-mashal-charcoal text-mashal-gold",
  },
  outline: {
    shell:
      "border border-mashal-charcoal/25 text-mashal-charcoal hover:border-mashal-charcoal hover:bg-mashal-charcoal hover:text-mashal-bone",
    disc: "bg-mashal-charcoal/[0.06] text-mashal-charcoal group-hover:bg-mashal-gold group-hover:text-mashal-charcoal",
  },
};

/**
 * Pill button with the arrow nested in its own disc, flush with the
 * trailing edge. The disc drifts diagonally on hover; the shell presses in.
 */
export const LuxButton: React.FC<LuxButtonProps> = ({
  href,
  children,
  variant = "dark",
  size = "md",
  className,
  accent,
}) => {
  const v = variants[variant];
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const classes = cn(
    "group inline-flex items-center rounded-full font-medium tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-500 active:scale-[0.98]",
    EASE,
    size === "md" ? "gap-5 py-1.5 pl-7 pr-1.5 text-[14px]" : "gap-3 py-1 pl-5 pr-1 text-[13px]",
    v.shell,
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "flex items-center justify-center rounded-full transition-[transform,background-color,color] duration-500",
          EASE,
          size === "md" ? "h-10 w-10" : "h-8 w-8",
          v.disc,
          "group-hover:translate-x-[2px] group-hover:-translate-y-px group-hover:scale-105"
        )}
        style={accent ? { backgroundColor: accent, color: "#fff" } : undefined}
      >
        <ArrowUpRight size={size === "md" ? 17 : 15} strokeWidth={1.5} aria-hidden />
      </span>
    </>
  );

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
};

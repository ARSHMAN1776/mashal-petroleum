import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/** Quiet link: label with a hairline that sweeps in, arrow that drifts right. */
export const TextLink: React.FC<TextLinkProps> = ({ href, children, className }) => {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const classes = cn(
    "group inline-flex items-center gap-2.5 text-[14px] font-medium text-mashal-charcoal",
    className
  );

  const content = (
    <>
      <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowRight
        size={15}
        strokeWidth={1.5}
        aria-hidden
        className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
      />
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

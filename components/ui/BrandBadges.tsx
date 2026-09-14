import React from "react";
import { cn } from "@/lib/utils";

export const ParcoBadge: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-tight rounded-sm bg-parco-light text-parco-red border border-parco-border",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-parco-red" />
      PARCO Authorized
    </span>
  );
};

export const PsoBadge: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-tight rounded-sm bg-pso-light text-pso-green border border-pso-border",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-pso-green" />
      PSO Official Forecourt
    </span>
  );
};

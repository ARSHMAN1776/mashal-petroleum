import React from "react";
import { cn } from "@/lib/utils";

export const ParcoBadge: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium tracking-tight rounded-full bg-red-500/10 text-parco-red border border-parco-red/30",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-parco-red" />
      <span>PARCO Authorized</span>
    </span>
  );
};

export const PsoBadge: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium tracking-tight rounded-full bg-emerald-500/10 text-pso-green border border-emerald-500/30",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      <span>PSO Official Forecourt</span>
    </span>
  );
};

"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Heavy, slow fade-up used for every editorial block.
 * Transform + opacity only, runs once, honours reduced-motion.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 28,
  className,
}) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
};

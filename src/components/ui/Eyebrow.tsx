"use client";

import { motion } from "framer-motion";

interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-4 mb-8 md:mb-12"
    >
      <div className="h-px w-8 bg-gold" />
      <h2 className="text-gold uppercase tracking-widest text-sm font-medium font-sans">
        {children}
      </h2>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const title = "Facilitation Proposal";
  const letters = title.split("");

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-ink overflow-hidden px-6 md:px-12">
      {/* Animated gradient mesh background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, var(--color-charcoal) 0%, var(--color-ink) 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(100px)",
        }}
      />

      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/emergence-logo-transparent.png"
            alt="Emergence Global Consulting"
            width={180}
            height={60}
            className="w-32 md:w-48 h-auto"
            priority
          />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 pt-20">
        <div className="mb-16 md:mb-24 relative inline-block">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[96px] text-white tracking-tight leading-none mb-6">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-4 left-0 h-px bg-gold w-full origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="border border-gold/20 bg-charcoal/40 backdrop-blur-md p-8 rounded-sm"
          >
            <h3 className="text-gold uppercase tracking-widest text-xs font-medium mb-6">Prepared by</h3>
            <div className="text-bone space-y-1">
              <p className="font-serif text-xl mb-2">Kelly Plunkett</p>
              <p className="text-slate-warm">Founder & CEO</p>
              <p className="text-slate-warm">Emergence Global Consulting LLC</p>
              <p className="text-slate-warm pt-2">kelly.plunkett@emergenceglobalconsulting.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="border border-gold/20 bg-charcoal/40 backdrop-blur-md p-8 rounded-sm"
          >
            <h3 className="text-gold uppercase tracking-widest text-xs font-medium mb-6">Prepared for</h3>
            <div className="text-bone space-y-1">
              <p className="font-serif text-xl mb-2">John W. Mitchell</p>
              <p className="text-slate-warm">President & CEO</p>
              <p className="text-slate-warm">Global Electronics Association</p>
              <p className="text-slate-warm pt-2">johnmitchell@electronics.org</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-warm"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to begin</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

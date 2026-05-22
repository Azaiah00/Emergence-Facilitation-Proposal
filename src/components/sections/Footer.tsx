"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <section className="bg-ink text-bone py-24 md:py-32 relative overflow-hidden border-t border-gold/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/emergence-logo-transparent.png"
            alt="Emergence Global Consulting"
            width={240}
            height={80}
            className="w-40 md:w-48 h-auto opacity-90"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-16"
        >
          Let&apos;s build something exceptional together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2"
        >
          <p className="font-serif text-2xl text-white">Kelly M. Plunkett</p>
          <p className="text-slate-400">Founder & CEO, Emergence Global Consulting LLC</p>
          <a 
            href="mailto:kelly.plunkett@emergenceglobalconsulting.com"
            className="inline-block text-gold-light mt-4 relative group"
          >
            kelly.plunkett@emergenceglobalconsulting.com
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-slate-muted uppercase tracking-widest">
          © 2026 Emergence Global Consulting LLC
        </p>
      </div>
    </section>
  );
}

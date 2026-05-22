"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Opportunity() {
  const cards = [
    {
      num: "01",
      title: "ISSUE",
      body: "GEA is at a pivotal inflection point. Three new C-level roles (CIO, Chief Communications Officer, COO) have reshaped the executive team, institutional knowledge is transitioning, and silos have quietly re-formed. GEA must finalize a clear, executable strategy before its August board meeting—and then align all 17 leaders around it."
    },
    {
      num: "02",
      title: "IMPACT",
      body: "Without shared decision-making principles, GEA's 17 leaders risk optimizing their piece without rowing together. Resource constraints make this costly: when everything feels equally important, nothing gets done well. Boston will succeed when Atlanta produces real decisions, not just good conversation."
    },
    {
      num: "03",
      title: "RECOMMENDATION",
      body: "Partner with Emergence Global Consulting to facilitate one or both of GEA's August leadership meetings. Kelly will help teams arrive prepared, surface real tensions productively, and leave with strategy defined, decisions made, and every leader clear on their role and the ways in which they will collaborate effectively across teams.",
      highlight: true
    }
  ];

  return (
    <SectionWrapper id="opportunity" eyebrow="OPPORTUNITY" className="bg-ink text-bone">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {cards.map((card, idx) => (
          <motion.div
            key={card.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className={`p-8 rounded-sm border transition-colors duration-500 ${
              card.highlight 
                ? "border-gold/40 bg-charcoal/80 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]" 
                : "border-white/10 bg-charcoal/40 hover:border-white/20"
            }`}
          >
            <div className="text-gold font-serif text-xl mb-4 opacity-80">{card.num}</div>
            <h3 className={`text-sm uppercase tracking-widest font-medium mb-4 ${card.highlight ? "text-gold-light" : "text-white"}`}>
              {card.title}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-4xl mb-8 text-white">Our Partnership</h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Successful facilitation occurs where there is a collaborative partnership built on mutual respect, trust, and commitment.
            </p>
            <p>
              Together, we create a powerful alliance focused on unlocking your potential and achieving both your immediate and long-term goals.
            </p>
            <p>
              Your facilitator will be outcome obsessed, maintaining relentless focus on producing concrete deliverables and decisions, not just good conversations — ensuring the investment of executive time yields tangible results and clear next steps.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-64 md:h-96 flex items-center justify-center"
        >
          {/* Abstract geometric line drawing in gold using SVG */}
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full max-w-md opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" strokeDasharray="2 6" />
            <path d="M100 20 L100 180 M20 100 L180 100" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.5" />
            <path d="M43 43 L157 157 M43 157 L157 43" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.3" />
            <motion.circle 
              cx="100" cy="40" r="3" fill="var(--color-gold)"
              animate={{ cx: [100, 160, 100, 40, 100], cy: [40, 100, 160, 100, 40] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

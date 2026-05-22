"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function StatementOfWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const phases = [
    {
      title: "Phase 1: Discovery & Preparation (July)",
      bullets: [
        "Individual pre-work assignments for each participating leader",
        "Pre-work coordination and collection from all participants",
        "Agenda design customized to GEA's strategic themes and group dynamics",
        "Facilitation materials, decision frameworks, and session tools",
        "Logistics coordination with John's team and executive assistants"
      ]
    },
    {
      title: "Phase 2: Live Facilitation (Atlanta Aug 4–6 and/or Boston Aug 17–21)",
      bullets: [
        "Full facilitation of all sessions (Atlanta: 2.5 days, Aug 4–6; Boston: 5 days, Aug 17–21)",
        "Real-time agenda adaptation to emerging group dynamics and tensions",
        "Structured exercises: decision-making framework, start/stop/continue, silo-busting",
        "Decision capture, commitment tracking, and real-time synthesis",
        "Daily CEO debrief sessions (John and/or Martin as appropriate)"
      ]
    },
    {
      title: "Phase 3: Post-Session Deliverables (within 5 business days of each session)",
      bullets: [
        "Session summary with all decisions, commitments, and action items",
        "Strategic decision-making framework with portfolio prioritization criteria",
        "90-day execution roadmap with clear ownership and accountability",
        "Recommended follow-up mechanisms to sustain alignment post-meeting"
      ]
    }
  ];

  const columns = [
    {
      label: "PRE-ONSITE",
      bullets: [
        "Customized agenda with session objectives and success metrics",
        "Pre-work templates and guidance for all participants",
        "Pre-work synthesis: themes and strategic tensions identified"
      ]
    },
    {
      label: "DURING ONSITE",
      bullets: [
        "Live facilitation of all sessions with real-time capture",
        "Visual documentation of key decisions and frameworks",
        "Daily progress summaries for leadership team"
      ]
    },
    {
      label: "POST-ONSITE",
      bullets: [
        "Executive Summary Report",
        "Detailed Action Plan with owners, timelines, and success metrics",
        "Decision-making framework for portfolio prioritization",
        "90-Day Sprint Plan with milestones and checkpoints",
        "Recommended Accountability Mechanisms for ongoing execution"
      ]
    }
  ];

  return (
    <SectionWrapper id="sow" eyebrow="STATEMENT OF WORK" className="bg-bone text-ink">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          From Clarity to Commitment: GEA&apos;s August Leadership Strategy Series
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-slate-warm text-lg md:text-xl"
        >
          Project Timeline: July 28, 2026 – August 26, 2026 (per chosen option)
        </motion.p>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto mb-24 pl-4 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />
        <motion.div 
          className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gold -translate-x-1/2 origin-top"
          style={{ scaleY }}
        />

        <div className="space-y-16">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row md:even:flex-row-reverse items-start md:items-center gap-8">
              {/* Circle */}
              <div className="absolute left-[15px] md:left-1/2 w-8 h-8 rounded-full bg-bone border-2 border-gold -translate-x-1/2 flex items-center justify-center z-10">
                <span className="text-gold font-serif text-sm">{idx + 1}</span>
              </div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
              >
                <div className="bg-white p-6 md:p-8 shadow-sm border border-gold/10 rounded-sm">
                  <h3 className="font-serif text-xl mb-4 text-ink">{phase.title}</h3>
                  <ul className={`space-y-3 text-slate-warm ${idx % 2 === 0 ? 'md:list-none' : 'list-none'}`}>
                    {phase.bullets.map((bullet, bIdx) => (
                      <motion.li 
                        key={bIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + (bIdx * 0.1) }}
                        className="relative pl-4"
                      >
                        <span className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gold/50 ${idx % 2 === 0 ? 'md:hidden' : ''}`} />
                        {/* Custom bullet for right-aligned desktop */}
                        {idx % 2 === 0 && <span className="hidden md:block absolute right-0 top-2 w-1.5 h-1.5 rounded-full bg-gold/50" />}
                        <span className={idx % 2 === 0 ? 'md:pr-4' : ''}>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {columns.map((col, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px w-full bg-gold mb-6" />
            <h4 className="text-gold-dark uppercase tracking-widest text-sm font-medium mb-6">{col.label}</h4>
            <ul className="space-y-4 text-slate-warm">
              {col.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/30 mt-2 shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

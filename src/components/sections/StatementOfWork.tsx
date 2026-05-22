"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function StatementOfWork() {
  const phases = [
    {
      title: "Phase 1: Discovery & Preparation (July)",
      bullets: [
        "Individual pre-work assignments for each participating leader",
        "Pre-work coordination and collection from all participants",
        "Agenda design customized to GEA’s strategic themes and group dynamics",
        "Facilitation materials, decision frameworks, and session tools",
        "Logistics coordination with John’s team and executive assistants"
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
      label: "Pre-Onsite",
      bullets: [
        "Customized agenda with session objectives and success metrics",
        "Pre-work templates and guidance for all participants",
        "Pre-work synthesis: themes and strategic tensions identified"
      ]
    },
    {
      label: "During Onsite",
      bullets: [
        "Live facilitation of all sessions with real-time capture",
        "Visual documentation of key decisions and frameworks",
        "Daily progress summaries for leadership team"
      ]
    },
    {
      label: "Post-Onsite",
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
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-bold text-2xl md:text-3xl mb-2 text-ink"
        >
          From Clarity to Commitment: GEA’s August Leadership Strategy Series
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-slate-warm text-lg"
        >
          Project Timeline: July 28, 2026 –August 26, 2026 (per chosen option)
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mb-20 space-y-12">
        {phases.map((phase, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-bold text-lg mb-4 text-ink">{phase.title}</h3>
            <ul className="space-y-2 text-slate-warm">
              {phase.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Deliverables Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto bg-white border border-bone rounded-lg shadow-sm overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-bone">
          {columns.map((col, idx) => (
            <div key={idx} className="p-8">
              <h4 className="text-center font-bold text-lg mb-6 text-ink">{col.label}</h4>
              <ul className="space-y-4 text-slate-warm">
                {col.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="leading-relaxed text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";
import { Users, FileCheck, MessageCircle, ShieldCheck, Database, Target } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

export function SuccessMetrics() {
  const outcomes = [
    {
      label: "IMMEDIATE OUTCOMES (End of Offsite)",
      bullets: [
        "Strategy clearly defined: what it is, what it is not, and how decisions will be made against it",
        "Agreed-upon prioritization criteria: what GEA will stop, continue, and start doing",
        "Clear ownership assignments for strategic initiatives and cross-functional workstreams",
        "Every leader can articulate how their work contributes to GEA's three pillars: modernization, speed, and member value"
      ]
    },
    {
      label: "90-DAY IMPACT INDICATORS",
      bullets: [
        "Noticeable reduction in cross-functional friction and silo behavior",
        "Leaders applying shared decision-making criteria when resolving competing priorities",
        "Improved execution speed with fewer headquarters bottlenecks for regional teams"
      ]
    },
    {
      label: "LONG-TERM SUCCESS FACTORS",
      bullets: [
        "Governance model that scales as legacy institutional knowledge transitions out",
        "Strategy that is understood, owned, and embodied throughout the leadership team",
        "GEA positioned to grow membership and revenue with focused, prioritized resource allocation"
      ]
    }
  ];

  const responsibilities = [
    {
      icon: Users,
      title: "Executive Commitment",
      body: "Full presence of all participants for the complete duration of each session"
    },
    {
      icon: FileCheck,
      title: "Pre-work Completion",
      body: "All participants complete assigned pre-work materials before arriving—this is non-negotiable"
    },
    {
      icon: MessageCircle,
      title: "Candid Engagement",
      body: "Open sharing of challenges, concerns, and strategic thinking"
    },
    {
      icon: ShieldCheck,
      title: "Decision Authority",
      body: "Leaders arrive empowered to make binding commitments during sessions"
    },
    {
      icon: Database,
      title: "Resource Access",
      body: "Timely sharing of relevant org data, strategic plans, and board context with Kelly in advance"
    },
    {
      icon: Target,
      title: "Implementation Ownership",
      body: "Post-offsite execution of agreed-upon action items"
    }
  ];

  return (
    <SectionWrapper id="metrics" eyebrow="SUCCESS METRICS" className="bg-ink text-bone">
      <div className="space-y-6 mb-32">
        {outcomes.map((outcome, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-charcoal/40 border border-white/10 p-8 rounded-sm overflow-hidden"
          >
            {/* Subtle gold border glow that fades after entry */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2, delay: 1 + (idx * 0.15) }}
              className="absolute inset-0 border border-gold/40 rounded-sm pointer-events-none"
            />
            
            <h3 className="text-gold uppercase tracking-widest text-sm font-medium mb-6">{outcome.label}</h3>
            <ul className="space-y-4">
              {outcome.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-4 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl mb-12 text-white"
        >
          Client Responsibilities
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsibilities.map((resp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className="bg-charcoal/30 border border-white/5 p-8 rounded-sm transition-colors hover:bg-charcoal/50"
            >
              <motion.div 
                variants={{
                  hover: { rotate: 8, scale: 1.1 }
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold"
              >
                <resp.icon strokeWidth={1.5} />
              </motion.div>
              <h4 className="text-white font-medium mb-3">{resp.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{resp.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

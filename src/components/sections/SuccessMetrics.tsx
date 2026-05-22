"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../ui/SectionWrapper";

export function SuccessMetrics() {
  const outcomes = [
    {
      label: "Immediate Outcomes (End of Offsite):",
      bullets: [
        "Strategy clearly defined: what it is, what it is not, and how decisions will be made against it",
        "Agreed-upon prioritization criteria: what GEA will stop, continue, and start doing",
        "Clear ownership assignments for strategic initiatives and cross-functional workstreams",
        "Every leader can articulate how their work contributes to GEA’s three pillars: modernization, speed, and member value"
      ]
    },
    {
      label: "90-Day Impact Indicators:",
      bullets: [
        "Noticeable reduction in cross-functional friction and silo behavior",
        "Leaders applying shared decision-making criteria when resolving competing priorities",
        "Improved execution speed with fewer headquarters bottlenecks for regional teams"
      ]
    },
    {
      label: "Long-term Success Factors:",
      bullets: [
        "Governance model that scales as legacy institutional knowledge transitions out",
        "Strategy that is understood, owned, and embodied throughout the leadership team",
        "GEA positioned to grow membership and revenue with focused, prioritized resource allocation"
      ]
    }
  ];

  const responsibilities = [
    {
      title: "Executive Commitment",
      body: "Full presence of all participants for the complete duration of each session"
    },
    {
      title: "Pre-work Completion",
      body: "All participants complete assigned pre-work materials before arriving—this is non-negotiable"
    },
    {
      title: "Candid Engagement",
      body: "Open sharing of challenges, concerns, and strategic thinking"
    },
    {
      title: "Decision Authority",
      body: "Leaders arrive empowered to make binding commitments during sessions"
    },
    {
      title: "Resource Access",
      body: "Timely sharing of relevant org data, strategic plans, and board context with Kelly in advance"
    },
    {
      title: "Implementation Ownership",
      body: "Post-offsite execution of agreed-upon action items"
    }
  ];

  return (
    <SectionWrapper id="metrics" eyebrow="SUCCESS METRICS" className="bg-white text-ink">
      <div className="max-w-4xl mx-auto space-y-12 mb-24">
        {outcomes.map((outcome, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-bold text-lg mb-4 text-ink">{outcome.label}</h3>
            <ul className="space-y-3">
              {outcome.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-4 text-slate-warm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full bg-charcoal text-white p-6 z-10 rounded-br-3xl inline-block max-w-max">
            <h3 className="font-sans text-xl md:text-2xl font-medium tracking-wide">Client<br/>Responsibilities</h3>
          </div>
          <Image 
            src="/boardroom-meeting.png" 
            alt="Client Responsibilities" 
            fill 
            className="object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8"
        >
          <ul className="space-y-6">
            {responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-warm text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="leading-relaxed">
                  <span className="font-bold text-ink">{resp.title}:</span> {resp.body}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

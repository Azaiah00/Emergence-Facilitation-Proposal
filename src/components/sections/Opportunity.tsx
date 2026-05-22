"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Opportunity() {
  return (
    <SectionWrapper id="opportunity" eyebrow="OPPORTUNITY" className="bg-white text-ink">
      <div className="max-w-5xl mx-auto mb-24">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg leading-relaxed text-slate-warm"
          >
            <span className="font-bold text-ink">Issue:</span> GEA is at a pivotal inflection point. Three new C-level roles (CIO, Chief Communications Officer, COO) have reshaped the executive team, institutional knowledge is transitioning, and silos have quietly re-formed. GEA must finalize a clear, executable strategy before its August board meeting—and then align all 17 leaders around it.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg leading-relaxed text-slate-warm"
          >
            <span className="font-bold text-ink">Impact:</span> Without shared decision-making principles, GEA’s 17 leaders risk optimizing their piece without rowing together. Resource constraints make this costly: when everything feels equally important, nothing gets done well. Boston will succeed when Atlanta produces real decisions, not just good conversation.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gold-light/20 border border-gold/30 rounded-xl p-8 md:p-10 shadow-sm"
          >
            <p className="text-lg leading-relaxed text-ink">
              <span className="font-bold">Recommendation:</span> Partner with Emergence Global Consulting to facilitate one or both of GEA’s August leadership meetings. Kelly will help teams arrive prepared, surface real tensions productively, and leave with strategy defined, decisions made, and every leader clear on their role and the ways in which they will collaborate effectively across teams.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full bg-charcoal text-white p-6 z-10 rounded-br-3xl inline-block max-w-max">
            <h2 className="font-sans text-2xl md:text-3xl font-medium tracking-wide">Our Partnership</h2>
          </div>
          <Image 
            src="/partnership-highfive.png" 
            alt="Our Partnership" 
            fill 
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-slate-warm text-lg leading-relaxed"
        >
          <p>
            Successful facilitation occurs where there is a collaborative partnership built on mutual respect, trust, and commitment.
          </p>
          <p>
            Together, we create a powerful alliance focused on unlocking your potential and achieving both your immediate and long-term goals.
          </p>
          <p>
            Your facilitator will be outcome obsessed, maintaining relentless focus on producing concrete deliverables and decisions, not just good conversations - ensuring the investment of executive time yields tangible results and clear next steps.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

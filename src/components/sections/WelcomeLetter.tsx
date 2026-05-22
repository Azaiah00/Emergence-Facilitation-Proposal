"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function WelcomeLetter() {
  const paragraphs = [
    "Dear John and Sanjay,",
    "Thank you for taking the time to connect with me regarding Global Electronics Association's critical strategic planning facilitation needs.",
    "It was a pleasure reconnecting with you both and hearing about where GEA is heading. The clarity and candor you brought to our conversation gave me a rich understanding of what this August moment truly requires—and I'm genuinely energized by the work ahead.",
    "This proposal outlines three engagement options for your August leadership meetings: an Executive Leadership Session (August 4–6, Atlanta) with your six XVPs to finalize and align on strategy, a Broader Leadership Alignment Meeting (late August, Boston) to cascade that strategy to all 17 leaders, or both engagements together as a single, seamlessly connected thread. Each option includes pre-work design, facilitation, and post-session deliverables. The pre-work is not optional—it's mission-critical. Leaders who walk into Atlanta having already wrestled with the hard questions will transform your sessions from theoretical strategy into decisions you can actually execute. I've structured pricing for each option below, with a bundled rate if you choose both.",
    "Let me know what questions you have. We'll keep adjusting the proposal until we get it right for you.",
    "Take care,"
  ];

  return (
    <SectionWrapper id="welcome" className="bg-cream">
      <div className="max-w-3xl mx-auto relative">
        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        
        <div className="bg-white p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm border border-bone relative z-10">
          <div className="space-y-6 text-slate-warm text-lg leading-relaxed">
            {paragraphs.map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
              </motion.p>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: paragraphs.length * 0.1 + 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              <div className="font-serif italic text-3xl text-ink mb-2">Kelly M. Plunkett</div>
              <div className="text-sm text-slate-muted">
                Kelly M. Plunkett<br />
                Emergence Global Consulting LLC
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

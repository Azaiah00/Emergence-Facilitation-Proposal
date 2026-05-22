"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../ui/SectionWrapper";

export function WelcomeLetter() {
  const paragraphs = [
    "Dear John and Sanjay,",
    "Thank you for taking the time to connect with me regarding Global Electronics Association’s critical strategic planning facilitation needs.",
    "It was a pleasure reconnecting with you both and hearing about where GEA is heading. The clarity and candor you brought to our conversation gave me a rich understanding of what this August moment truly requires—and I’m genuinely energized by the work ahead.",
    "This proposal outlines three engagement options for your August leadership meetings: an Executive Leadership Session (August 4–6, Atlanta) with your six XVPs to finalize and align on strategy, a Broader Leadership Alignment Meeting (late August, Boston) to cascade that strategy to all 17 leaders, or both engagements together as a single, seamlessly connected thread. Each option includes pre-work design, facilitation, and post-session deliverables. The pre-work is not optional—it’s mission-critical. Leaders who walk into Atlanta having already wrestled with the hard questions will transform your sessions from theoretical strategy into decisions you can actually execute. I’ve structured pricing for each option below, with a bundled rate if you choose both.",
    "Let me know what questions you have.  We’ll keep adjusting the proposal until we get it right for you.",
    "Take care,"
  ];

  return (
    <SectionWrapper id="welcome" className="bg-cream pt-0 md:pt-0">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Image Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[300px] md:h-[400px] w-full rounded-t-lg overflow-hidden shadow-lg mt-12 md:mt-24"
        >
          <Image 
            src="/welcome-handshake.png" 
            alt="Partnership Handshake" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <h2 className="text-white font-sans uppercase tracking-[0.2em] text-2xl md:text-3xl font-medium">
              WELCOME
            </h2>
          </div>
        </motion.div>

        <div className="bg-white p-8 md:p-16 shadow-[0_20px_40px_rgb(0,0,0,0.06)] rounded-b-lg border-x border-b border-bone relative z-10 -mt-2">
          <div className="space-y-6 text-slate-warm text-lg leading-relaxed">
            {paragraphs.map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              >
                {text}
              </motion.p>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              {/* Using a script-like font for signature feel */}
              <div className="font-serif italic text-4xl text-ink mb-4 pr-4">Kelly M. Plunkett</div>
              <div className="text-slate-warm">
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

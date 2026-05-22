"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Facilitator() {
  const pillars = [
    {
      title: "Psychological Safety & Trust",
      body: "Kelly creates an environment where leaders feel safe to be vulnerable, admit uncertainties, and challenge each other constructively without fear of judgment or reputational consequences."
    },
    {
      title: "Strategic Thinking Partnership",
      body: "Kelly goes beyond process management to contribute strategic insights, ask provocative questions that unlock new thinking, and help connect dots across complex organizational challenges."
    },
    {
      title: "Adaptive Expertise",
      body: "Kelly reads the room in real-time and adjusts approach, pacing, and methods based on group energy, resistance patterns, and emerging insights rather than rigidly following a predetermined agenda."
    }
  ];

  const bioParagraphs = [
    "Kelly Plunkett is an ICF certified Executive Leadership Coach, Facilitator and Fortune 20 leader with over 25 years’ experience guiding sizable, cross-functional teams in designing, redesigning and launching cutting-edge business solutions, driving greater efficiency, engagement, and revenues.",
    "As a masterful facilitator, Kelly creates psychologically safe environments where diverse perspectives flourish and collaborative innovation thrives. Her structured yet adaptable facilitation approach guides teams through complex challenges, transforming potential conflicts into productive dialogue and actionable outcomes. Whether facilitating strategic planning sessions, team alignment workshops, or high-stakes decision-making meetings, Kelly expertly balances process discipline with creative exploration.",
    "By skillfully navigating the intersection of business objectives and personal leadership behavior, Kelly helps executives discover breakthrough solutions that elevate both individual performance and organizational impact. Clients consistently report stronger stakeholder relationships, more inclusive team dynamics, and a renewed sense of shared purpose and vision that drives sustainable success."
  ];

  const credentials = [
    "Professional Certified Coach (PCC), International Coaching Federation",
    "Certificate in Executive Leadership Coaching, Georgetown University Institute for Transformational Leadership, Washington, DC.",
    "Facilitation Certification, The Nebo Company",
    "GLA-MWV Assessment Certified, Global Leadership Associates",
    "M.B.A., Columbia Southern University, Orange Beach, Alabama",
    "B.A., Economics, The College of William and Mary, Williamsburg, Virginia",
    "Recognized as one of the Top 50 Women Leaders in Virginia by Women We Admire."
  ];

  return (
    <SectionWrapper id="facilitator" eyebrow="YOUR FACILITATOR" className="bg-white text-ink">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-sans text-4xl md:text-5xl mb-16 text-ink"
      >
        Kelly M. Plunkett, MBA, PCC
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column (Image & Pillars) */}
        <div className="lg:col-span-4 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] border-4 border-gold/20 mx-auto lg:mx-0"
          >
            <Image
              src="/kelly-headshot-circle.png"
              alt="Kelly M. Plunkett"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          <div className="bg-gold-light/10 border border-gold/20 rounded-2xl p-8 space-y-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <h4 className="font-bold text-ink mb-2 text-center lg:text-left">{pillar.title}</h4>
                <p className="text-slate-warm text-sm leading-relaxed text-center lg:text-left">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Bio & Credentials) */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6 text-slate-warm text-lg leading-relaxed">
            {bioParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-bold text-xl mb-6 text-ink"
            >
              Relevant Qualifications and Credentials
            </motion.h3>
            <ul className="space-y-4">
              {credentials.map((cred, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 text-slate-warm text-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="leading-relaxed">{cred}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

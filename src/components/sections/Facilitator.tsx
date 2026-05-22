"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
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
    "Kelly Plunkett is an ICF certified Executive Leadership Coach, Facilitator and Fortune 20 leader with over 25 years' experience guiding sizable, cross-functional teams in designing, redesigning and launching cutting-edge business solutions, driving greater efficiency, engagement, and revenues.",
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
    <SectionWrapper id="facilitator" eyebrow="YOUR FACILITATOR" className="bg-ink text-bone">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative items-start">
        
        {/* Sticky Left Column */}
        <div className="w-full md:w-1/3 md:sticky md:top-32 shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-square relative rounded-full overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <Image
              src="/kelly-headshot-circle.png"
              alt="Kelly M. Plunkett"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <div className="mt-8">
            <h2 className="font-serif text-4xl text-white mb-2">Kelly M. Plunkett, <span className="text-2xl text-gold">MBA, PCC</span></h2>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="w-full md:w-2/3 space-y-20">
          
          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-charcoal/30 border border-white/5 p-6 rounded-sm"
              >
                <h4 className="text-gold-light text-sm font-medium mb-4">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Long Bio */}
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
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

          {/* Credentials */}
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-3xl mb-10 text-white"
            >
              Relevant Qualifications and Credentials
            </motion.h3>
            <div className="space-y-4">
              {credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-gold/10 p-1 rounded-full text-gold shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-slate-400 leading-relaxed">{cred}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

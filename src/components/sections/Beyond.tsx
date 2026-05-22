"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Beyond() {
  const services = [
    {
      title: "Initiative Implementation & Monitoring",
      body: "Strategic management of initiative implementation. Prioritized by impact, initiatives will be refined, planned, scheduled, and implemented. Develop performance monitoring and establish associate accountability for ongoing performance.",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Team Coaching",
      body: "Partner with leadership teams to unlock collective potential and drive sustainable performance improvement. Through structured coaching engagements, help teams establish clear communication protocols, resolve interpersonal dynamics, and build collaborative decision-making capabilities.",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Organizational Design",
      body: "Help organizations structure for optimal performance by aligning people, processes, and systems with strategic objectives. Evaluate current organizational effectiveness, identify structural barriers to success, and design streamlined operating models that enhance decision-making speed and accountability. Focus on creating clear role definitions, efficient reporting relationships, and governance structures that eliminate redundancies while improving cross-functional collaboration.",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <SectionWrapper id="beyond" eyebrow="ADDITIONAL SERVICES" className="bg-ink text-bone">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-4xl md:text-5xl mb-16 text-white"
      >
        Beyond this engagement
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover="hover"
            className={`group relative bg-charcoal/40 border border-white/10 p-8 md:p-10 rounded-sm overflow-hidden cursor-pointer transition-colors hover:bg-charcoal/60 ${service.className}`}
          >
            {/* Animated border on hover */}
            <motion.div 
              variants={{ hover: { opacity: 1 } }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 border border-gold/50 rounded-sm pointer-events-none"
            />
            
            {/* Animated accent line */}
            <motion.div 
              variants={{ hover: { scaleX: 1 } }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 h-1 bg-gold w-full origin-left"
            />

            <motion.div
              variants={{ hover: { scale: 1.02 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full flex flex-col"
            >
              <h3 className="font-serif text-2xl text-white mb-6 pr-8">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mt-auto">{service.body}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

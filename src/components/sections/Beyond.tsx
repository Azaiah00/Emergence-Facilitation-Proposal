"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Beyond() {
  const services = [
    {
      title: "Initiative Implementation & Monitoring",
      body: "Strategic management of initiative implementation. Prioritized by impact, initiatives will be refined, planned, scheduled, and implemented. Develop performance monitoring and establish associate accountability for ongoing performance.",
      image: "/initiative-laptop.png",
      reverse: false
    },
    {
      title: "Team Coaching",
      body: "Partner with leadership teams to unlock collective potential and drive sustainable performance improvement. Through structured coaching engagements, help teams establish clear communication protocols, resolve interpersonal dynamics, and build collaborative decision-making capabilities.",
      image: "/team-coaching.png",
      reverse: true
    },
    {
      title: "Organizational Design",
      body: "Help organizations structure for optimal performance by aligning people, processes, and systems with strategic objectives. Evaluate current organizational effectiveness, identify structural barriers to success, and design streamlined operating models that enhance decision-making speed and accountability. Focus on creating clear role definitions, efficient reporting relationships, and governance structures that eliminate redundancies while improving cross-functional collaboration.",
      image: "/org-design-whiteboard.png",
      reverse: false
    }
  ];

  return (
    <SectionWrapper id="beyond" eyebrow="ADDITIONAL SERVICES" className="bg-bone text-ink">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-sans text-4xl md:text-5xl mb-20 text-ink"
      >
        Beyond this engagement
      </motion.h2>

      <div className="space-y-24 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col gap-12 items-center ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <motion.div
              initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2"
            >
              <h3 className="font-bold text-2xl text-ink mb-6">{service.title}</h3>
              <p className="text-slate-warm text-lg leading-relaxed">{service.body}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

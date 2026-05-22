"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Coaching() {
  const tiers = [
    {
      title: "For Emerging Leaders",
      intro: "Develop the confidence and capabilities to lead with purpose. We help you:",
      bullets: [
        "Master the transition from individual contributor to inspiring team leader",
        "Build emotional intelligence and effective communication skills",
        "Create high-performing teams through trust and clear direction",
        "Navigate organizational dynamics with strategic awareness"
      ]
    },
    {
      title: "For Mid-Level Leaders",
      intro: "Elevate your leadership presence and expand your sphere of influence. Our coaching helps you:",
      bullets: [
        "Scale your impact beyond immediate teams to shape organizational outcomes",
        "Develop advanced strategic thinking and decision-making capabilities",
        "Build and lead cross-functional initiatives",
        "Balance operational excellence with innovation and growth"
      ]
    },
    {
      title: "For Senior Executives",
      intro: "Achieve breakthrough performance at the highest levels of leadership. Together we focus on:",
      bullets: [
        "Crafting and executing transformational organizational strategy",
        "Enhancing executive presence and stakeholder influence",
        "Navigating complex change and uncertainty with confidence",
        "Building sustainable leadership cultures and succession planning"
      ]
    }
  ];

  const approachBullets = [
    "One-on-one coaching sessions tailored to your specific challenges",
    "Data-driven insights from 360 assessments and stakeholder feedback",
    "Action learning projects that deliver immediate organizational impact",
    "Ongoing support to ensure sustainable behavior change"
  ];

  return (
    <SectionWrapper id="coaching" eyebrow="LEADERSHIP COACHING" className="bg-white text-ink">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg md:text-xl text-slate-warm leading-relaxed max-w-5xl mb-20"
      >
        Transform your leadership potential into extraordinary impact. Our executive coaching services are tailored to meet you exactly where you are, whether you&apos;re stepping into your first leadership role or steering organizational strategy at the highest levels. Our partnership deepens your self-awareness, helping you lead with greater authenticity and purpose.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-bone p-8 rounded-xl shadow-sm"
          >
            <h3 className="font-bold text-xl text-ink mb-4">{tier.title}</h3>
            <p className="text-slate-warm text-base mb-6 leading-relaxed">{tier.intro}</p>
            <ul className="space-y-4">
              {tier.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-base text-slate-warm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-charcoal text-white p-8 md:p-12 rounded-2xl shadow-xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-3xl font-medium mb-6 relative z-10"
        >
          Our Approach
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-300 leading-relaxed mb-8 text-lg relative z-10"
        >
          Every coaching engagement is uniquely designed around your goals and context. Through structured reflection, targeted skill development, and actionable feedback, we help you unlock your full leadership potential. Our proven methodology combines:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
          {approachBullets.map((bullet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              className="flex items-start gap-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              <span className="text-slate-300 text-lg leading-relaxed">{bullet}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-ink font-medium leading-relaxed">
          Transform your leadership journey today. Contact us to explore how our coaching partnership can accelerate your success and create lasting organizational impact.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = to / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Investment() {
  const cards = [
    {
      label: "OPTION 01",
      title: "Executive Leadership Session Only",
      subtitle: "Atlanta, Aug 4–6",
      price: 25000,
      priceLabel: "Professional Fee",
      description: "Includes: pre-work design and collection, 2.5-day facilitation (Aug 4 all day, Aug 5 all day, Aug 6 ending 3pm), and post-session summary report with strategy framework and decision-making guide",
      recommended: false
    },
    {
      label: "OPTION 03",
      title: "Both Sessions",
      subtitle: "Atlanta + Boston",
      price: 62000,
      priceLabel: "Professional Fee · save $3,000 vs. booking separately",
      description: "Includes all deliverables from both options above, plus integrated pre-work design that pulls a single thread from Atlanta to Boston—maximizing continuity, trust, and momentum across both sessions",
      recommended: true
    },
    {
      label: "OPTION 02",
      title: "Broader Leadership Alignment Meeting Only",
      subtitle: "Boston, Aug 17–21",
      price: 40000,
      priceLabel: "Professional Fee",
      description: "Includes: pre-work design and collection for all 17 leaders, 5-day facilitation (Boston, Aug 17–21), and post-session deliverables including personal commitment summaries and 90-day action roadmap",
      recommended: false
    }
  ];

  const terms = [
    "Materials & Printing: Provided by client per Kelly's materials list, or billed at cost with receipts if Emergence purchases",
    "Travel Expenses: Billed at cost with receipts, net 30 days post-session (flight, hotel, ground transport, meals & incidentals)",
    "Payment Terms: 50% upon contract signing, 50% upon completion of each session. ACH/check (no fee); credit card (3% fee). Net 30 days from invoice.",
    "Cancellation Policy: 50% fee if cancelled within 14 days of session dates.",
    "Taxes: Emergence Global Consulting LLC is responsible for all applicable taxes."
  ];

  return (
    <SectionWrapper id="investment" eyebrow="INVESTMENT & TERMS" className="bg-cream text-ink">
      <div className="flex flex-col md:flex-row gap-6 mb-24 items-stretch">
        {/* Reorder for mobile (Recommended first) but keep visual order Card 1, Card 3, Card 2 on desktop */}
        {cards.map((card, idx) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
            className={`flex-1 relative bg-white p-8 md:p-10 rounded-sm flex flex-col transition-all duration-500 ${
              card.recommended 
                ? "order-first md:order-none border-2 border-gold shadow-[0_8px_30px_rgb(212,175,55,0.15)] md:-mt-4 md:mb-4 z-10" 
                : "border border-bone shadow-sm"
            }`}
          >
            {card.recommended && (
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 shadow-[0_0_40px_rgba(212,175,55,0.2)] pointer-events-none rounded-sm"
              />
            )}
            
            {card.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                RECOMMENDED
              </div>
            )}

            <div className="text-gold-dark text-xs uppercase tracking-widest font-medium mb-4">{card.label}</div>
            <h3 className="font-serif text-2xl mb-2 text-ink">{card.title}</h3>
            <div className="text-slate-muted text-sm mb-8 pb-8 border-b border-bone">{card.subtitle}</div>
            
            <div className="mb-8">
              <div className="font-serif text-5xl text-ink mb-2">
                $<CountUp to={card.price} />
              </div>
              <div className="text-xs text-slate-muted uppercase tracking-wider">{card.priceLabel}</div>
            </div>

            <p className="text-slate-warm text-sm leading-relaxed mt-auto">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h3 className="font-serif text-3xl mb-10 text-ink">All Options Include</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {terms.map((term, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              <p className="text-slate-warm text-sm leading-relaxed">{term}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

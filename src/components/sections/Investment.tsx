"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";

export function Investment() {
  const options = [
    {
      title: "Option 1 — Executive Leadership Session Only (Atlanta, Aug 4–6)",
      fee: "Professional Fee: $25,000",
      includes: "Includes: pre-work design and collection, 2.5-day facilitation (Aug 4 all day, Aug 5 all day, Aug 6 ending 3pm), and post-session summary report with strategy framework and decision-making guide"
    },
    {
      title: "Option 2 — Broader Leadership Alignment Meeting Only (Boston, Aug 17–21)",
      fee: "Professional Fee: $40,000",
      includes: "Includes: pre-work design and collection for all 17 leaders, 5-day facilitation (Boston, Aug 17–21), and post-session deliverables including personal commitment summaries and 90-day action roadmap"
    },
    {
      title: "Option 3 — Both Sessions (Recommended): Atlanta + Boston",
      fee: "Professional Fee: $62,000 (save $3,000 vs. booking separately)",
      includes: "Includes all deliverables from both options above, plus integrated pre-work design that pulls a single thread from Atlanta to Boston—maximizing continuity, trust, and momentum across both sessions",
      recommended: true
    }
  ];

  const terms = [
    {
      title: "Materials & Printing",
      body: "Provided by client per Kelly’s materials list, or billed at cost with receipts if Emergence purchases"
    },
    {
      title: "Travel Expenses",
      body: "Billed at cost with receipts, net 30 days post-session (flight, hotel, ground transport, meals & incidentals)"
    },
    {
      title: "Payment Terms",
      body: "50% upon contract signing, 50% upon completion of each session. ACH/check (no fee); credit card (3% fee). Net 30 days from invoice."
    },
    {
      title: "Cancellation Policy",
      body: "50% fee if cancelled within 14 days of session dates."
    },
    {
      title: "Taxes",
      body: "Emergence Global Consulting LLC is responsible for all applicable taxes."
    }
  ];

  return (
    <SectionWrapper id="investment" eyebrow="INVESTMENT & TERMS" className="bg-bone text-ink">
      <div className="max-w-4xl mx-auto space-y-12 mb-20">
        {options.map((opt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`p-8 rounded-xl ${opt.recommended ? 'bg-gold-light/10 border-2 border-gold/40 shadow-lg' : 'bg-white border border-bone shadow-sm'}`}
          >
            <h3 className="font-bold text-xl mb-4 text-ink">{opt.title}</h3>
            <ul className="space-y-3 text-slate-warm text-lg">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="leading-relaxed font-medium text-ink">{opt.fee}</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="leading-relaxed">{opt.includes}</span>
              </li>
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-bold text-xl mb-6 text-ink"
        >
          All Options Include:
        </motion.h3>
        <ul className="space-y-4">
          {terms.map((term, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 text-slate-warm text-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              <span className="leading-relaxed">
                <span className="font-bold text-ink">{term.title}:</span> {term.body}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

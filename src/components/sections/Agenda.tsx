"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

interface AgendaDay {
  title: string;
  morning: {
    title: string;
    bullets: string[];
  };
  afternoon: {
    title: string;
    bullets: string[];
  };
}

const atlantaAgenda: AgendaDay[] = [
  {
    title: "Day 1 (Monday, Aug 4): Strategic Context & Priority Tensions",
    morning: {
      title: "Morning: Setting the Foundation\nPre-work Share-Out & Alignment Check",
      bullets: [
        "Where are we aligned? Where do real tensions exist?",
        "Defining our three pillars: modernization, speed of execution, member value creation",
        "What does GEA success look like in 3 years, and how will we measure it?"
      ]
    },
    afternoon: {
      title: "Afternoon: Decision-Making Framework\nHow Will We Make Hard Choices?",
      bullets: [
        "When two initiatives compete for limited resources, how do we decide?",
        "Defining our portfolio pruning criteria: what will we STOP doing?",
        "How do we leverage volunteers and AI tools to do more with current resources?"
      ]
    }
  },
  {
    title: "Day 2 (Tuesday, Aug 5): Integration, Ownership & New Team Dynamics",
    morning: {
      title: "Morning: New Roles, Legacy Knowledge, Working Together\nBridging Legacy & New: CIO, CCO, and COO Integration",
      bullets: [
        "What do the new C-level leaders need to understand about how GEA works?",
        "What do legacy leaders need to embrace from the new perspectives being brought in?",
        "How do we transition John from operator to architect while keeping the team strong?"
      ]
    },
    afternoon: {
      title: "Afternoon: Execution Planning & Accountability\nStart / Stop / Continue Workshop",
      bullets: [
        "Each leader: What will I start, stop, and continue doing to embody this strategy?",
        "Identifying what GEA will commit to shutting down and how to do it with dignity",
        "Half-day Aug 6: Finalizing commitments, strategy narrative, and communication prep for Boston"
      ]
    }
  }
];

const bostonAgenda: AgendaDay[] = [
  {
    title: "Day 1 (Monday, Aug 18): Strategy Unveiled – Understanding the \"Why\"",
    morning: {
      title: "Morning: Leadership Presents the Strategy",
      bullets: [
        "John and executive team present: what we decided, why, and what it means for you",
        "The three pillars defined: modernization, speed of execution, member value creation",
        "What we are focusing on, what we are stopping, and how decisions will be made going forward"
      ]
    },
    afternoon: {
      title: "Afternoon: Making It Personal",
      bullets: [
        "Open Q&A in small groups: surfacing real confusion, concerns, and questions safely",
        "Individual reflection: how does this strategy connect to my work and my team?",
        "Pair shares: what excites me, what worries me, what I need clarity on"
      ]
    }
  },
  {
    title: "Day 2 (Tuesday, Aug 19): From Alignment to Ownership",
    morning: {
      title: "Morning: Start / Stop / Continue – Personal Leadership Application",
      bullets: [
        "Each of the 17 leaders: what will I personally start, stop, and continue doing?",
        "Peer accountability pairs: sharing commitments and agreeing on mutual check-ins",
        "Synthesizing themes: what patterns do we see across the leadership team?"
      ]
    },
    afternoon: {
      title: "Afternoon: Decision-Making in Practice",
      bullets: [
        "Applying the prioritization framework to real competing scenarios from GEA's portfolio",
        "How will I guide my team when two projects compete for resources?",
        "Building shared language and criteria across all 17 leaders"
      ]
    }
  },
  {
    title: "Day 3 (Wednesday, Aug 20): Breaking Down Silos",
    morning: {
      title: "Morning: Working Across Boundaries – Hub-and-Spoke in Practice",
      bullets: [
        "What does \"centralized vs. regional vs. hub-and-spoke\" look like in practice for my team?",
        "How does HQ show up as a resource, not a roadblock? Designing new working norms",
        "Where do we need integration, and where should teams have full autonomy?"
      ]
    },
    afternoon: {
      title: "Afternoon: Live Case Work",
      bullets: [
        "Walk through a real GEA cross-functional project (e.g., events execution) under the new model",
        "Each function identifies: what changes, what stays the same, what I need from others",
        "Drafting our cross-functional working agreement as a leadership team"
      ]
    }
  },
  {
    title: "Day 4 (Thursday, Aug 21): Building for the Future",
    morning: {
      title: "Morning: Modernization & Speed in My Domain",
      bullets: [
        "Where can I automate, streamline, or leverage AI tools within my team?",
        "What legacy processes are slowing us down that I have the authority to change now?",
        "How do I build execution speed as a cultural norm on my team?"
      ]
    },
    afternoon: {
      title: "Afternoon: Volunteer Leverage & Member Value Creation",
      bullets: [
        "How do we re-engage the volunteer community as a force multiplier?",
        "What does 'creating member value' look like day-to-day in my role?",
        "Identifying two or three immediate actions each leader will take in the next 30 days"
      ]
    }
  },
  {
    title: "Day 5 (Friday, Aug 22): Commitment, Accountability & Close",
    morning: {
      title: "Morning: Personal Leadership Commitments",
      bullets: [
        "Each leader states their public commitment to the strategy and their team's contribution",
        "Peer witnesses: pairing leaders to hold each other accountable over the next 90 days",
        "What will I communicate to my team, and how, within the first two weeks?"
      ]
    },
    afternoon: {
      title: "Afternoon: Accountability Architecture & Close",
      bullets: [
        "Designing our check-in cadence: how will the full group sustain alignment post-Boston?",
        "Building the communication cascade: what goes to all staff, when, and from whom?",
        "Closing circle: each leader shares one word that captures their commitment leaving Boston"
      ]
    }
  }
];

function DayCard({ day, index }: { day: AgendaDay; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border border-gold/20 bg-white rounded-sm overflow-hidden mb-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream transition-colors"
      >
        <div className="flex items-center gap-6">
          <span className="font-serif text-4xl text-gold/40">{index + 1}</span>
          <h3 className="font-serif text-xl text-ink">{day.title}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="text-gold" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden print:!h-auto print:!opacity-100"
          >
            <div className="p-6 pt-0 border-t border-bone grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold-dark font-medium mb-4 whitespace-pre-line leading-relaxed">{day.morning.title}</h4>
                <ul className="space-y-3">
                  {day.morning.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-warm text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gold-dark font-medium mb-4 whitespace-pre-line leading-relaxed">{day.afternoon.title}</h4>
                <ul className="space-y-3">
                  {day.afternoon.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-warm text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Agenda() {
  const [activeTab, setActiveTab] = useState<"atlanta" | "boston">("atlanta");

  return (
    <SectionWrapper id="agenda" eyebrow="AGENDA FRAMEWORK" className="bg-bone text-ink">
      
      {/* Tabs */}
      <div className="flex justify-center mb-16">
        <div className="flex p-1 bg-white border border-gold/20 rounded-full relative">
          {(["atlanta", "boston"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-colors z-10 ${
                activeTab === tab ? "text-white" : "text-slate-warm hover:text-ink"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === "atlanta" ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">Global Electronics Association Executive Leadership Session – Atlanta</h2>
                  <p className="text-xl text-gold-dark mb-2">Finalizing Strategy Before the Board Meeting</p>
                  <p className="text-slate-warm">August 4–6, 2026 (All day Aug 4-5; Ends 3pm Aug 6) – Atlanta, GA</p>
                </div>
                <div>
                  {atlantaAgenda.map((day, idx) => (
                    <DayCard key={idx} day={day} index={idx} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">Global Electronics Association Broader Leadership Alignment Meeting – Boston</h2>
                  <p className="text-xl text-gold-dark mb-2">All 17 Leaders: Aligning, Embodying, and Committing to the Strategy</p>
                  <p className="text-slate-warm">August 17–21, 2026 (Travel August 16) – Boston, MA</p>
                </div>
                <div>
                  {bostonAgenda.map((day, idx) => (
                    <DayCard key={idx} day={day} index={idx} />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

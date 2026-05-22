"use client";

import { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  eyebrow,
  children,
  className = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 relative overflow-hidden ${className}`}
    >
      <div className={`max-w-6xl mx-auto px-6 md:px-12 relative z-10 ${containerClassName}`}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {children}
      </div>
    </section>
  );
}

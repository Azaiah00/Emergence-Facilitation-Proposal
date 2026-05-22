"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function TopNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu if we scroll back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Opportunity", href: "#opportunity" },
    { label: "Approach", href: "#approach" },
    { label: "Investment", href: "#investment" },
    { label: "Facilitator", href: "#facilitator" },
    { label: "Agenda", href: "#agenda" },
    { label: "Beyond", href: "#beyond" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-40 bg-ink/90 backdrop-blur-xl border-b border-white/5"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/emergence-logo-transparent.png"
                alt="Emergence Logo"
                width={120}
                height={40}
                className="w-24 h-auto"
              />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-gold-light transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden bg-ink/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
              >
                <div className="px-6 py-4 flex flex-col gap-4">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-gold-light transition-colors text-base font-medium py-2 border-b border-white/5 last:border-0"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

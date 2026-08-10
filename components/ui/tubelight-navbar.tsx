"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface TubelightNavProps {
  items: NavItem[];
}

export function TubelightNav({ items }: TubelightNavProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  // Sync active tab with scroll position
  useEffect(() => {
    const onScroll = () => {
      const sections = items.map((item) => ({
        name: item.name,
        el: document.querySelector(item.url) as HTMLElement | null,
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveTab(sections[i].name);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name);
    const el = document.querySelector(item.url);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-1 bg-white/60 border border-[var(--line)] backdrop-blur-md py-1 px-1 rounded-full shadow-sm">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;
        return (
          <button
            key={item.name}
            onClick={() => handleClick(item)}
            style={{
              position: "relative",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: 999,
              border: "none",
              background: "transparent",
              color: isActive ? "var(--accent)" : "var(--muted)",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {/* Desktop: text */}
            <span className="hidden md:inline">{item.name}</span>
            {/* Mobile: icon */}
            <span className="md:hidden">
              <Icon size={17} strokeWidth={2.2} />
            </span>

            {isActive && (
              <motion.div
                layoutId="tubelight"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: "rgba(0,71,198,0.07)",
                  zIndex: -1,
                }}
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 32 }}
              >
                {/* Tube glow at top */}
                <div style={{
                  position: "absolute",
                  top: -3,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 32,
                  height: 3,
                  borderRadius: "0 0 4px 4px",
                  background: "var(--accent)",
                }}>
                  <div style={{
                    position: "absolute",
                    width: 48,
                    height: 12,
                    background: "rgba(0,71,198,0.25)",
                    borderRadius: "50%",
                    filter: "blur(6px)",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }} />
                </div>
              </motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
}

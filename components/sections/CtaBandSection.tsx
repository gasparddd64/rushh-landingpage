"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { TestezCTA } from "@/components/ui/testez-cta";
import "@/app/closing.css";

const TILES = [
  <path key="p" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  <g key="c"><rect x="3" y="4" width="18" height="18" rx="3" /><path d="M3 10h18M8 2v4M16 2v4" /></g>,
  <path key="m" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
];

const PEOPLE = [
  "/testimonial-david-houiseau.png",
  "/testimonial-marie-lermes.png",
  "/testimonial-camille-delcourt.png",
];

/** Position de repos des deux grandes ombres bleues (en % du bandeau) quand la souris est absente. */
const HOME = { a: { x: 0.22, y: 0.35 }, b: { x: 0.78, y: 0.7 } };

/** Bandeau de conclusion : fond clair, ombres bleues qui suivent la souris, carte vitrée au centre. */
export function CtaBandSection({
  pill = "Passez à l'action",
  title = "Votre prochain mandat ne devrait pas finir sur répondeur.",
  text = "Vos clients appellent, même quand vous êtes occupés. Découvrez comment Rushh prend le relais.",
  titleId = "cb-title",
  demoLabel,
  links,
}: {
  pill?: string;
  title?: string;
  text?: string;
  titleId?: string;
  demoLabel?: string;
  links?: { href: string; label: string }[];
} = {}) {
  const root = useRef<HTMLElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const ga = a.current;
    const gb = b.current;
    if (!el || !ga || !gb) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = el.clientWidth;
    let h = el.clientHeight;
    const pa = { x: HOME.a.x * w, y: HOME.a.y * h };
    const pb = { x: HOME.b.x * w, y: HOME.b.y * h };
    let target: { x: number; y: number } | null = null;
    let raf = 0;
    let visible = false;

    const paint = () => {
      ga.style.transform = `translate3d(${pa.x}px, ${pa.y}px, 0) translate(-50%, -50%)`;
      gb.style.transform = `translate3d(${pb.x}px, ${pb.y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      const ta = target ?? { x: HOME.a.x * w, y: HOME.a.y * h };
      // la 1re ombre suit de près, la 2e arrive de l'autre côté et traîne un peu plus
      const tb = target ? { x: w - target.x * 0.55 - w * 0.1, y: h - target.y * 0.6 } : { x: HOME.b.x * w, y: HOME.b.y * h };
      pa.x += (ta.x - pa.x) * 0.09;
      pa.y += (ta.y - pa.y) * 0.09;
      pb.x += (tb.x - pb.x) * 0.045;
      pb.y += (tb.y - pb.y) * 0.045;
      paint();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const leave = () => {
      target = null;
    };
    const resize = () => {
      w = el.clientWidth;
      h = el.clientHeight;
    };

    paint();
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && fine && !reduce) raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    if (fine && !reduce) {
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
    }
    window.addEventListener("resize", resize);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section ref={root} className="cb" aria-labelledby={titleId}>
      <div className="cb-glows" aria-hidden>
        <div ref={a} className="cb-glow cb-glow--a" />
        <div ref={b} className="cb-glow cb-glow--b" />
        <i className="cb-spot cb-spot--1" />
        <i className="cb-spot cb-spot--2" />
        <i className="cb-spot cb-spot--3" />
      </div>

      <div className="cb-grid">
        <div className="cb-side cb-side--left" aria-hidden>
          {TILES.map((icon, i) => (
            <div key={i} className="cb-row">
              <span className="cb-tile">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
              </span>
              <i className="cb-line" />
            </div>
          ))}
        </div>

        <div className="cb-card">
          <span className="cb-pill">{pill}</span>
          <h2 id={titleId} className="cb-title">
            {title}
          </h2>
          <p className="cb-text">{text}</p>
          <div className="cb-ctas">
            <TestezCTA />
            <DemoCTA label={demoLabel} />
          </div>
          {links && links.length > 0 && (
            <nav className="cb-more" aria-label="Pour aller plus loin">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="cb-side cb-side--right" aria-hidden>
          {PEOPLE.map((src) => (
            <div key={src} className="cb-row">
              <i className="cb-line" />
              <span className="cb-photo">
                <img src={src} alt="" width={64} height={64} loading="lazy" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

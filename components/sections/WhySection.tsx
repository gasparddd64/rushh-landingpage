"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { SparklesIcon, LightningIcon } from "@/components/icons";
import { ButtonColorful } from "@/components/ui/button-colorful";

function WhyTile({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  };
  return (
    <div ref={ref} className="why-tile" onMouseMove={onMove}>
      <div className="why-tile-head">
        <div className="why-tile-icon" style={{ background: "var(--accent-soft)", color: "var(--accent)", width: 44, height: 44, borderRadius: 12, display: "grid", placeItems: "center" }}>
          {icon}
        </div>
        <div className="why-tile-title">{title}</div>
      </div>
      <p className="why-tile-desc">{desc}</p>
    </div>
  );
}

export function WhySection() {
  return (
    <section className="section-pad" id="why">
      <div className="wrap">
        <div className="why-grid" style={{ alignItems: "center" }}>
          <div>
            <span className="section-eyebrow" style={{ marginBottom: 24 }}>Pourquoi Rushh ?</span>
            <h2 className="section-title" style={{ textAlign: "left", margin: "16px 0 20px", maxWidth: 520 }}>
              Ce que votre agence gagne dès le premier appel.
            </h2>
            <p className="section-sub" style={{ textAlign: "left", margin: "0 0 36px", maxWidth: 460 }}>
              Conçu exclusivement pour l&apos;immobilier. Opérationnel dès la première semaine.
            </p>
            <div style={{ display: "flex", gap: 48, alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap" as const }}>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>100%</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Appels<br />décrochés</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>0</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Appels<br />manqués</div>
              </div>
              <div>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>48h</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>Pour être<br />opérationnel</div>
              </div>
            </div>
            <ButtonColorful
              onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
              label="Demander une démo"
            />
          </div>
          <div className="why-side">
            <WhyTile icon={<SparklesIcon size={20} />} title="Spécialisé immobilier" desc="Vendeur, acheteur, bailleur. Rushh connaît les bons mots, les bonnes questions, les bons réflexes." />
            <WhyTile icon={<LightningIcon size={20} />} title="Zéro friction" desc="Pas d'app à installer, pas d'outil à apprendre. Rushh s'intègre à ce que vous utilisez déjà." />
          </div>
        </div>
      </div>
    </section>
  );
}

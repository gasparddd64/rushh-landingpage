import { Phone, TrendingUp, Clock, Inbox, Shield, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const benefits: { icon: LucideIcon; title: string; desc: string; accent?: string }[] = [
  { icon: Phone, title: "Zéro appel manqué", desc: "Chaque appel décroché instantanément, même en visite. Vos prospects ne tombent plus jamais dans le vide.", accent: "#0000FF" },
  { icon: TrendingUp, title: "Plus de mandats", desc: "Un appel raté peut coûter un mandat. Rushh élimine ce risque." },
  { icon: Clock, title: "Gain de temps immédiat", desc: "Fini les interruptions en visite et les rappels dans le vide." },
  { icon: Inbox, title: "Toujours informé", desc: "Une fiche récap après chaque appel. Vous savez qui rappeler et pourquoi." },
  { icon: Shield, title: "Données sécurisées", desc: "Traitement conforme RGPD. Vos prospects protégés." },
  { icon: Sparkles, title: "Zéro changement", desc: "Rushh s'adapte à vos outils. Vous ne changez rien." },
];

export function BenefitsSection() {
  return (
    <section className="section-pad" id="benefits" style={{ background: "white" }}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Bénéfices</span>
          <h2 className="section-title">Ce que ça change concrètement pour votre agence.</h2>
          <p className="section-sub">Moins d&apos;interruptions, plus de mandats, zéro appel manqué.</p>
        </div>
        <div className="benefits-grid-v2">
          {/* Featured card */}
          <div className="benefit-card-v2 benefit-card-featured">
            <div className="benefit-card-featured-badge">Le plus demandé</div>
            <div className="benefit-icon-v2 benefit-icon-featured">
              <Phone size={28} />
            </div>
            <h3 className="benefit-title-v2 benefit-title-featured">{benefits[0].title}</h3>
            <p className="benefit-desc-v2 benefit-desc-featured">{benefits[0].desc}</p>
            <div className="benefit-stat">
              <span className="benefit-stat-number">100%</span>
              <span className="benefit-stat-label">des appels décrochés</span>
            </div>
          </div>

          {/* Right column */}
          <div className="benefits-right-col">
            {benefits.slice(1, 3).map((b, i) => (
              <div key={i} className="benefit-card-v2 benefit-card-compact">
                <div className="benefit-icon-v2">
                  <b.icon size={20} />
                </div>
                <div className="benefit-text-compact">
                  <h3 className="benefit-title-v2">{b.title}</h3>
                  <p className="benefit-desc-v2">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="benefits-bottom-row">
          {benefits.slice(3).map((b, i) => (
            <div key={i} className="benefit-card-v2 benefit-card-bottom">
              <div className="benefit-icon-v2">
                <b.icon size={20} />
              </div>
              <h3 className="benefit-title-v2">{b.title}</h3>
              <p className="benefit-desc-v2">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

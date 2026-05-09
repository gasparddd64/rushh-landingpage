import { Phone, TrendingUp, Clock, Inbox, Shield, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Phone, title: "Zéro appel manqué", desc: "Chaque appel décroché instantanément, même en visite." },
  { icon: TrendingUp, title: "Plus de mandats", desc: "Un appel raté peut coûter un mandat. Rushh élimine ce risque." },
  { icon: Clock, title: "Gain de temps immédiat", desc: "Fini les interruptions en visite et les rappels dans le vide." },
  { icon: Inbox, title: "Toujours informé", desc: "Une fiche récap après chaque appel. Vous savez qui rappeler et pourquoi." },
  { icon: Shield, title: "Données sécurisées", desc: "Traitement conforme RGPD. Vos prospects protégés." },
  { icon: Sparkles, title: "Zéro changement", desc: "Rushh s'adapte à vos outils. Vous ne changez rien." },
];

export function BenefitsSection() {
  return (
    <section className="section-pad bg-soft-section" id="benefits">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Bénéfices</span>
          <h2 className="section-title">Ce que ça change concrètement pour votre agence.</h2>
          <p className="section-sub">Moins d&apos;interruptions, plus de mandats, zéro appel manqué.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <div className="benefit-icon">
                <b.icon size={20} />
              </div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

/* ══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const COMPARE_ROWS = [
  {
    label: "Canaux",
    joe: "Voix, SMS, WhatsApp, email",
    rushh: "Voix uniquement",
  },
  {
    label: "Approche",
    joe: "Plateforme standardisée par métier",
    rushh: "Standard sur-mesure construit autour de votre organisation",
  },
  {
    label: "Configuration",
    joe: "Scénarios pré-conçus par activité",
    rushh: "Blueprint personnalisé — vos règles, votre structure, vos priorités",
  },
  {
    label: "Objectif recherché",
    joe: "Traiter le volume d'appels entrants",
    rushh: "Transformer chaque appel qualifié en rendez-vous ou en deal",
  },
  {
    label: "Déploiement",
    joe: "Quelques heures",
    rushh: "Diagnostic → Blueprint → construction → tests → déploiement → suivi continu",
  },
];

const FAQ = [
  {
    q: "En quoi Rushh est « sur-mesure » concrètement, et pas juste un mot marketing ?",
    a: "Avant tout déploiement, nous étudions le fonctionnement réel de votre agence : vos priorités, votre découpage par site, vos règles de routage, votre façon de vouloir qu'une demande soit traitée. Le Standard est construit à partir de ce diagnostic, pas d'un scénario type appliqué tel quel à toutes les agences immobilières.",
  },
  {
    q: "Pourquoi seulement la voix et pas le SMS/WhatsApp ?",
    a: "Nous faisons le choix de nous concentrer sur un seul canal — le téléphone — pour le construire en profondeur autour de votre organisation, plutôt que de standardiser plusieurs canaux à la fois.",
  },
  {
    q: "Comment Rushh s'assure qu'un appel qualifié devient réellement un rendez-vous ?",
    a: "L'objectif du Standard n'est pas de décrocher, mais de faire avancer la demande selon vos règles : qualification, prise de rendez-vous ou transmission à la bonne personne, avec le contexte nécessaire pour que votre équipe reprenne la conversation efficacement.",
  },
  {
    q: "Est-ce que je peux tester avant de m'engager ?",
    a: "Oui. Un échange initial permet d'étudier votre fonctionnement et de vous montrer concrètement comment le Standard Rushh s'adapterait à votre agence avant tout engagement.",
  },
];

/* ══════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════ */
export function JoeAIVsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="section-pad vs-hero">
        <div className="wrap">
          <div className="vs-hero-inner">
            <span className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              Comparatif
            </span>
            <h1 className="section-title vs-hero-title">
              Rushh vs Joe AI : deux approches différentes de la prise en charge téléphonique
            </h1>
            <p className="section-sub vs-hero-sub">
              Rushh n&apos;est pas une IA qu&apos;on active. C&apos;est un Standard construit sur-mesure autour du fonctionnement réel de votre agence — pensé pour transformer chaque appel en rendez-vous, pas juste en appel décroché.
            </p>
            <DemoCTA label="Réserver une démo" />
          </div>
        </div>
      </section>

      {/* LE VRAI SUJET */}
      <section className="section-pad vs-subject">
        <div className="wrap">
          <div className="vs-copy-block">
            <h2 className="section-title vs-section-title">Ce n&apos;est pas une question de qui a le plus de fonctionnalités</h2>
            <p className="vs-copy">
              Joe AI et Rushh répondent au même problème de départ — le téléphone qui sonne sans que l&apos;organisation puisse toujours répondre. Mais l&apos;approche est différente.
            </p>
            <p className="vs-copy">
              Joe AI est une plateforme multicanale (voix, SMS, WhatsApp, email) pensée pour être déployée rapidement sur un grand nombre d&apos;agences, avec un socle standardisé par métier.
            </p>
            <p className="vs-copy">
              Rushh fait un choix différent : un seul canal — le téléphone — mais construit entièrement autour de votre organisation. Pas un scénario type &laquo; agence immobilière &raquo;. Le vôtre. Vos priorités, votre découpage par site, vos règles de routage, votre façon de vouloir qu&apos;une demande soit traitée.
            </p>
          </div>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="section-pad vs-table-section">
        <div className="wrap">
          <div className="vs-table" role="table">
            <div className="vs-table-row vs-table-row--head" role="row">
              <div className="vs-table-cell vs-table-cell--label" role="columnheader" />
              <div className="vs-table-cell" role="columnheader">Joe AI</div>
              <div className="vs-table-cell vs-table-cell--rushh" role="columnheader">Rushh</div>
            </div>
            {COMPARE_ROWS.map((row) => (
              <div className="vs-table-row" role="row" key={row.label}>
                <div className="vs-table-cell vs-table-cell--label" role="rowheader">{row.label}</div>
                <div className="vs-table-cell" role="cell" data-label="Joe AI">{row.joe}</div>
                <div className="vs-table-cell vs-table-cell--rushh" role="cell" data-label="Rushh">{row.rushh}</div>
              </div>
            ))}
          </div>
          <p className="vs-table-note">Informations Joe AI basées sur leur communication publique.</p>
        </div>
      </section>

      {/* LE POINT LE PLUS IMPORTANT */}
      <section className="section-pad vs-highlight-section">
        <div className="wrap">
          <div className="vs-highlight">
            <h2 className="vs-highlight-title">On ne construit pas un standard pour prendre des appels. On le construit pour récupérer des deals.</h2>
            <p className="vs-highlight-copy">
              Rushh n&apos;est pas une intelligence artificielle qu&apos;on installe et qu&apos;on laisse tourner. C&apos;est un Standard téléphonique, pensé et opéré comme un service : nous concevons, testons, déployons et optimisons la prise en charge de vos appels autour de votre fonctionnement réel.
            </p>
            <p className="vs-highlight-copy">
              La différence ne se voit pas dans une liste de fonctionnalités. Elle se voit dans le résultat recherché.
            </p>
            <p className="vs-highlight-copy">
              Beaucoup de solutions cherchent à maximiser le nombre d&apos;appels traités. Chez Rushh, l&apos;objectif est différent : que chaque appel qualifié devienne une vraie opportunité récupérée — un rendez-vous pris, un mandat conservé, un prospect qui ne part pas ailleurs.
            </p>
            <p className="vs-highlight-copy vs-highlight-copy--strong">
              Décrocher ne suffit pas. Ce qui compte, c&apos;est ce qui se passe une fois que la conversation a eu lieu.
            </p>
            <DemoCTA label="Voir comment ça fonctionne" variant="white" showArrow={false} />
          </div>
        </div>
      </section>

      {/* HONNÊTETÉ SUR LE STADE DE RUSHH */}
      <section className="section-pad vs-honesty-section">
        <div className="wrap">
          <div className="vs-honesty-card">
            <p>
              Rushh n&apos;a pas (encore) des centaines de clients ni les mêmes moyens que des acteurs plus installés. Ce que nous offrons, c&apos;est un Standard réellement construit autour de votre organisation — pas un scénario générique appliqué à toutes les agences.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad faq-section">
        <div className="wrap">
          <div className="faq-layout">
            <div className="faq-heading">
              <span className="section-eyebrow">FAQ</span>
              <h2 className="faq-title section-title">Questions fréquentes.</h2>
            </div>
            <div className="faq-wrap">
              {FAQ.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={item.q} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                    <button
                      className="faq-q"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="faq-chevron" aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div className="faq-a" aria-hidden={!isOpen}>
                      <div className="faq-a-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-kz">
        <div className="wrap">
          <div className="cta-kz-card vs-final-cta-card">
            <h2 className="cta-kz-title">Vous voulez voir comment Rushh transformerait vos appels réels en rendez-vous ?</h2>
            <DemoCTA label="Réserver une démo" />
          </div>
        </div>
      </section>
    </>
  );
}

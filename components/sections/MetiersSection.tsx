"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";

/* ── Icônes (tracé fin, 18px) ── */
const ICONS: Record<string, ReactNode> = {
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />,
  route: <><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></>,
  alert: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
  clipboard: <><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>,
  search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  user: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></>,
  home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /></>,
};

function Icon({ name }: { name: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name]}
    </svg>
  );
}

/* ── Contenu des métiers ── */
const METIERS = [
  {
    id: "syndic",
    name: "Syndic",
    img: "/metier-syndic.png",
    imgWebp: "/metier-syndic.webp",
    alt: "Façade d'un immeuble résidentiel moderne, vue depuis la rue",
    title: "Un standard dédié à la copropriété",
    desc: "Copropriétaires et prestataires sont accueillis avec le bon niveau d'information, sans mobiliser votre équipe sur les demandes courantes.",
    points: [
      { icon: "chat", title: "Réponses aux questions courantes", desc: "Les demandes récurrentes des copropriétaires trouvent une réponse immédiate, sans solliciter votre équipe." },
      { icon: "wrench", title: "Suivi des interventions prestataires", desc: "Les prestataires qui appellent sont identifiés et leur demande est consignée pour votre gestionnaire." },
      { icon: "route", title: "Transmission aux bons interlocuteurs", desc: "Chaque demande est orientée vers la bonne personne, avec le contexte utile pour la traiter." },
    ],
  },
  {
    id: "gerance",
    name: "Gérance",
    img: "/metier-gerance.png",
    imgWebp: "/metier-gerance.webp",
    alt: "Vue aérienne d'une ville et de ses immeubles au crépuscule",
    title: "Vos locataires ne tombent plus sur répondeur",
    desc: "Sinistre, panne ou question administrative : Rushh comprend la demande, applique vos procédures et alerte votre équipe en cas d'urgence.",
    points: [
      { icon: "clipboard", title: "Déclaration de sinistre guidée", desc: "Nature du sinistre, adresse, locataire concerné et degré d'urgence sont recueillis dès l'appel." },
      { icon: "shield", title: "Application de vos procédures", desc: "Vos consignes de gérance sont appliquées à chaque appel, de la simple question à la panne." },
      { icon: "alert", title: "Alerte immédiate si urgence", desc: "Une situation urgente déclenche le transfert ou l'alerte de votre équipe, sans attendre le lendemain." },
    ],
  },
  {
    id: "transaction",
    name: "Transaction",
    img: "/metier-transaction.png",
    imgWebp: "/metier-transaction.webp",
    alt: "Façade d'un immeuble haussmannien, bien à vendre",
    title: "Ne manquez plus jamais un acheteur",
    desc: "Rushh qualifie chaque appel reçu sur vos annonces, identifie le bien concerné et programme la visite selon vos disponibilités.",
    points: [
      { icon: "search", title: "Identification du bien concerné", desc: "Votre équipe rappelle en sachant de quel bien parle l'acquéreur, sans avoir à le redemander." },
      { icon: "target", title: "Qualification du budget et du projet", desc: "Budget, projet d'achat et délais sont recueillis dès le premier appel pour prioriser vos rappels." },
      { icon: "calendar", title: "Prise de rendez-vous automatique", desc: "La visite est proposée selon vos disponibilités et inscrite directement dans votre agenda." },
    ],
  },
  {
    id: "location",
    name: "Location",
    img: "/metier-location.png",
    imgWebp: undefined as string | undefined,
    alt: "Vue sur les toits de Paris et la tour Eiffel",
    title: "Un accueil parfait pour vos candidats locataires",
    desc: "Chaque appel sur un bien en location est pris en charge : les critères du candidat sont recueillis et la visite est planifiée sans effort pour votre équipe.",
    points: [
      { icon: "user", title: "Qualification du dossier candidat", desc: "Situation, date d'entrée souhaitée et critères essentiels sont recueillis selon vos règles." },
      { icon: "home", title: "Présentation des biens disponibles", desc: "Le candidat obtient les informations essentielles sur le bien qui l'intéresse." },
      { icon: "calendar", title: "Planification des visites", desc: "Les visites sont planifiées sans effort pour votre équipe, sur vos créneaux." },
    ],
  },
];

export function MetiersSection() {
  const [active, setActive] = useState(0);
  const current = METIERS[active];
  const barRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const placed = useRef(false);

  // Pastille qui glisse vers l'onglet actif (transitions.dev « tabs sliding »).
  // Premier affichage et redimensionnement : position écrite sans transition.
  useEffect(() => {
    const pill = pillRef.current;
    const tab = tabRefs.current[active];
    if (!pill || !tab) return;
    const place = (animate: boolean) => {
      if (!animate) {
        const prev = pill.style.transition;
        pill.style.transition = "none";
        pill.style.transform = `translateX(${tab.offsetLeft}px)`;
        pill.style.width = `${tab.offsetWidth}px`;
        void pill.offsetWidth;
        pill.style.transition = prev;
      } else {
        pill.style.transform = `translateX(${tab.offsetLeft}px)`;
        pill.style.width = `${tab.offsetWidth}px`;
      }
    };
    place(placed.current);
    placed.current = true;
    const onResize = () => place(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <section id="metiers" aria-labelledby="metiers-title">
      <div className="lf-wrap">
        <div className="lf-head--split">
          <div className="lf-head-left">
            <span className="lf-pill">Pensé pour l&apos;immobilier</span>
            <h2 id="metiers-title" className="lf-h2">Un standard conçu pour tous vos métiers.</h2>
          </div>
          <p className="lf-sub">
            Rushh s&apos;appuie sur des scénarios propres à l&apos;immobilier, puis s&apos;adapte à chaque métier de votre agence et à votre façon de traiter les appels.
          </p>
        </div>

        <div className="mt-tabs" role="tablist" aria-label="Métiers de l'agence" ref={barRef}>
          <span className="mt-pill" ref={pillRef} aria-hidden />
          {METIERS.map((m, i) => (
            <button
              key={m.id}
              ref={(el) => { tabRefs.current[i] = el; }}
              id={`metier-tab-${m.id}`}
              type="button"
              role="tab"
              className="mt-tab"
              aria-selected={active === i}
              aria-controls="metier-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") setActive((active + 1) % METIERS.length);
                if (e.key === "ArrowLeft") setActive((active - 1 + METIERS.length) % METIERS.length);
              }}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div
          id="metier-panel"
          className="lf-card mt-panel"
          role="tabpanel"
          aria-labelledby={`metier-tab-${current.id}`}
        >
          <div className="mt-copy" key={current.id}>
            <h3 className="mt-title">{current.title}</h3>
            <p className="mt-desc">{current.desc}</p>
            <ul className="mt-points">
              {current.points.map((p) => (
                <li key={p.title} className="mt-point">
                  <span className="mt-point-icon"><Icon name={p.icon} /></span>
                  <span>
                    <span className="mt-point-title">{p.title}</span>
                    <span className="mt-point-desc">{p.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <DemoCTA label="Réserver une démo" showArrow={false} />
          </div>

          <div className="mt-media">
            {METIERS.map((m, i) => (
              <picture key={m.id} data-active={active === i}>
                {m.imgWebp && <source srcSet={m.imgWebp} type="image/webp" />}
                <img src={m.img} alt={active === i ? m.alt : ""} loading="lazy" />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

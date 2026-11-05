"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { TestezCTA } from "@/components/ui/testez-cta";

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

/* ── Contenu des métiers (ordre des onglets : Transaction, Location, Gérance, Syndic) ── */
const METIERS = [
  {
    id: "transaction",
    name: "Transaction",
    img: "/metier-transaction.webp",
    imgWebp: undefined as string | undefined,
    alt: "Immeuble haussmannien d'angle et ses balcons en fer forgé",
    title: "Un propriétaire veut vendre. Ne laissez pas passer le mandat.",
    desc: "Pendant vos visites et vos rendez-vous, Rushh répond aux vendeurs et aux acquéreurs, recueille leurs projets et vous permet de reprendre chaque opportunité avec les bonnes informations.",
    points: [
      { icon: "target", title: "Qualification des demandes d'estimation" },
      { icon: "home", title: "Renseignements sur les biens à vendre" },
      { icon: "calendar", title: "Organisation des visites et rendez-vous" },
    ],
  },
  {
    id: "location",
    name: "Location",
    img: "/metier-location.webp",
    imgWebp: undefined as string | undefined,
    alt: "Salon lumineux et meublé d'un appartement",
    title: "Vos prochains locataires n'attendent pas que vous soyez disponible.",
    desc: "Rushh répond aux candidats, les renseigne sur les biens disponibles, recueille leurs critères et peut organiser les visites selon vos disponibilités.",
    points: [
      { icon: "user", title: "Qualification des dossiers candidats" },
      { icon: "home", title: "Informations sur les biens disponibles" },
      { icon: "calendar", title: "Planification des visites" },
    ],
  },
  {
    id: "gerance",
    name: "Gérance",
    img: "/metier-gerance.webp",
    imgWebp: undefined as string | undefined,
    alt: "Hall d'entrée d'un immeuble avec ses boîtes aux lettres",
    title: "Vos gestionnaires ont autre chose à faire que décrocher toute la journée.",
    desc: "Fuite d'eau, question de loyer, demande d'un propriétaire : Rushh identifie le motif de chaque appel, repère les urgences et transmet au bon interlocuteur.",
    points: [
      { icon: "chat", title: "Demandes des locataires et propriétaires" },
      { icon: "alert", title: "Identification des urgences techniques" },
      { icon: "route", title: "Transmission au gestionnaire concerné" },
    ],
  },
  {
    id: "syndic",
    name: "Syndic",
    img: "/metier-syndic.webp",
    imgWebp: undefined as string | undefined,
    alt: "Immeuble résidentiel moderne en bois et verre, vu depuis la rue",
    title: "Une urgence dans un immeuble ? La bonne personne est prévenue.",
    desc: "Panne d'ascenseur, dégât des eaux, question de charges : Rushh recueille les signalements des copropriétaires, identifie les priorités et transmet les informations utiles à votre équipe.",
    points: [
      { icon: "chat", title: "Demandes des copropriétaires" },
      { icon: "alert", title: "Signalement des incidents et urgences" },
      { icon: "route", title: "Transmission des informations au bon contact" },
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
            <h2 id="metiers-title" className="lf-h2">
              À chaque métier ses appels.
              <br />
              À chaque appel la bonne réponse.
            </h2>
          </div>
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
          {/* Les 4 textes sont superposés dans la même cellule : le panneau garde toujours la hauteur du plus long */}
          <div className="mt-copies">
            {METIERS.map((m, i) => (
              <div
                key={m.id}
                className="mt-copy"
                data-active={active === i}
                aria-hidden={active !== i}
              >
                <h3 className="mt-title">{m.title}</h3>
                <p className="mt-desc">{m.desc}</p>
                <ul className="mt-points">
                  {m.points.map((p) => (
                    <li key={p.title} className="mt-point">
                      <span className="mt-point-icon"><Icon name={p.icon} /></span>
                      <span className="mt-point-title">{p.title}</span>
                    </li>
                  ))}
                </ul>
                <TestezCTA />
              </div>
            ))}
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

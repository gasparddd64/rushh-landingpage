import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DemoCTA } from "@/components/ui/demo-cta";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { OfferAccordions } from "@/app/offre/OfferAccordions";
import "@/app/landing-flow.css";
import "@/app/offre.css";
import "@/app/solutions/sol.css";

export const SITE = "https://www.rushh.fr";
export const DEMO_PHONE_LABEL = "01 76 63 57 09";
export const DEMO_PHONE_HREF = "tel:+33176635709";

/* ── Métadonnées et données structurées ── */
export interface SocialImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

// Visuel de partage par défaut (fichier carré existant) : dimensions réelles du fichier.
const DEFAULT_SOCIAL_IMAGE: SocialImage = { src: "/logo-rushh-og.png", width: 365, height: 365, alt: "Rushh" };

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: SocialImage;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE}${path}`;
  const img = image ?? DEFAULT_SOCIAL_IMAGE;
  const images = [{ url: `${SITE}${img.src}`, width: img.width, height: img.height, alt: img.alt }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Rushh", locale: "fr_FR", type, images },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: images.map((i) => i.url),
    },
  };
}

export function webPageSchema({ title, description, path }: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: `${SITE}${path}`,
    description,
    inLanguage: "fr-FR",
    isPartOf: { "@type": "WebSite", name: "Rushh", url: SITE },
    about: { "@type": "Organization", name: "Rushh", url: SITE },
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── Icônes (même trait que le reste du site) ── */
export const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);
export const IconPhone = () => (
  <Svg><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></Svg>
);
export const IconFocus = () => (
  <Svg><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></Svg>
);
export const IconList = () => (
  <Svg><path d="M9 6h11M9 12h11M9 18h11" /><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" /></Svg>
);
export const IconClock = () => (
  <Svg><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></Svg>
);
export const IconArrow = () => (
  <Svg><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const IconBuilding = () => (
  <Svg><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" /><path d="M14 10h5a1 1 0 0 1 1 1v10" /><path d="M8 8h2M8 12h2M8 16h2M3 21h18" /></Svg>
);
export const IconUsers = () => (
  <Svg><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5a3.2 3.2 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2" /></Svg>
);
export const Tick = () => (
  <Svg><path d="m5 12.5 4.5 4.5L19 7.5" /></Svg>
);
export const Cross = () => (
  <Svg><path d="M6 6l12 12M18 6 6 18" /></Svg>
);

/* ── Structure de page ── */
export function SolShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main className={`offre sol${className ? ` ${className}` : ""}`}>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <img src="/logo-rushh.png" alt="Rushh" className="brand-logo" />
            <span>Rushh</span>
          </Link>
          <div className="nav-cta">
            <DemoCTA label="Réserver une démo" showArrow={false} />
          </div>
        </div>
      </header>
      <div className="lf">{children}</div>
      <FooterSection />
      <ScrollReveal />
      <OfferAccordions />
    </main>
  );
}

export function SolHero({
  id,
  label,
  title,
  hook,
  lead,
  note,
  secondary,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  hook?: string;
  lead: string;
  note?: string;
  secondary?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section className="of-hero" data-no-reveal aria-labelledby={id}>
      <div className="lf-wrap">
        <span className="lf-pill vs-label">{label}</span>
        <h1 id={id} className="of-h1">{title}</h1>
        {hook && <p className="vs-hook">{hook}</p>}
        <p className="of-lead">{lead}</p>
        {children ?? (
          <div className="of-actions">
            <DemoCTA label="Réserver une démo" showArrow={false} />
            {secondary && (
              <a className="of-ghost" href={secondary.href}>
                {secondary.label}
                <IconArrow />
              </a>
            )}
          </div>
        )}
        {note && <p className="of-note">{note}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ pill, id, title, sub }: { pill: string; id: string; title: string; sub?: string }) {
  return (
    <div className="lf-head--center">
      <span className="lf-pill">{pill}</span>
      <h2 id={id} className="lf-h2">{title}</h2>
      {sub && <p className="lf-sub">{sub}</p>}
    </div>
  );
}

export function Benefits({ items }: { items: { icon: ReactNode; title: string; text: string }[] }) {
  return (
    <ul className="of-benefits">
      {items.map((b) => (
        <li key={b.title} className="lf-card of-benefit">
          <span className="of-ic">{b.icon}</span>
          <h3>{b.title}</h3>
          <p>{b.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Flow({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className={`of-flow${items.length === 5 ? " of-flow--5" : ""}`}>
      {items.map((s, i) => (
        <li key={s.title} className={`lf-card of-flow-step${i === items.length - 1 ? " of-flow-step--end" : ""}`}>
          <span className="of-flow-n">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="of-ticks">
      {items.map((t) => (
        <li key={t}><Tick />{t}</li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="sol-faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCta({
  id,
  title,
  text,
  label = "Réserver une démo personnalisée",
  links,
}: {
  id: string;
  title: string;
  text?: string;
  label?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <section aria-labelledby={id}>
      <div className="lf-wrap">
        <div className="of-final">
          <span className="of-badge">Tarification sur devis</span>
          <h2 id={id}>{title}</h2>
          {text && <p>{text}</p>}
          <div className="of-actions">
            <DemoCTA label={label} showArrow={false} />
          </div>
          <nav className="of-more" aria-label="Pour aller plus loin">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

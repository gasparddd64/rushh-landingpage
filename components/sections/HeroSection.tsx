import { TestezCTA } from "@/components/ui/testez-cta";

/** Hero plein bleu : barre de navigation transparente, titre léger, sous-titre, un CTA blanc, immeuble détouré qui monte du bas. */
export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="hz">
      <div className="hz-inner">
        <h1 id="home-title" className="hz-title">
          Ne laissez plus passer
          <br className="hz-br" />{" "}
          <span className="hz-title-accent">la moindre opportunité.</span>
        </h1>
        <p className="hz-sub">
          Pendant vos visites, vos rendez-vous ou après la fermeture, Rushh répond à vos appels, qualifie les demandes et
          vous aide à ne manquer aucun mandat potentiel.
        </p>
        <TestezCTA />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hz-building" src="/hero-immeuble-v2.webp" alt="" width={1536} height={1024} decoding="async" />
    </section>
  );
}

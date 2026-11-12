import { TestezCTA } from "@/components/ui/testez-cta";
import { HeroTalk } from "@/components/sections/HeroTalk";

/** Hero plein bleu : barre de navigation transparente, titre léger, sous-titre, un CTA blanc, immeuble détouré qui monte du bas. */
export function HeroSection() {
  return (
    <section aria-labelledby="home-title" className="hz">
      <HeroTalk />
      <div className="hz-inner">
        <h1 id="home-title" className="hz-title">
          Vous êtes en visite.
          <br />
          <span className="hz-anch">
            Un client appelle.
            <span className="hz-bub hz-bub--client" data-who="Propriétaire" data-t="Bonjour, je voudrais vendre ma maison." aria-hidden>
              <i className="hz-tail" />
            </span>
          </span>
          <br />
          <span className="hz-anch hz-title-accent">
            Rushh décroche.
            <span className="hz-bub hz-bub--rushh" data-who="Rushh" data-t="Bien sûr. Quelle est l’adresse du bien ?" aria-hidden>
              <i className="hz-tail" />
            </span>
          </span>
        </h1>
        <p className="hz-sub">
          <span className="hz-sub-d">
            Pendant vos visites, vos rendez-vous ou après la fermeture, Rushh prend vos appels, qualifie les demandes et
            vous transmet les informations essentielles. Aucun appel important ne reste sans réponse.
          </span>
          <span className="hz-sub-m">
            En visite, en rendez-vous ou après la fermeture, Rushh répond à vos appels, qualifie les demandes et vous
            transmet l’essentiel. Aucun appel important ne reste sans réponse.
          </span>
        </p>
        <TestezCTA />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hz-building" src="/hero-immeuble.webp" alt="" width={1536} height={1024} decoding="async" />
    </section>
  );
}

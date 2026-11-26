@AGENTS.md

# Rushh landing (rushh.fr)

Site marketing Next.js, remote `gasparddd64/rushh-landingpage`, branche de prod `main`. Prod = push sur `main` (Vercel).

## Branches en attente (NON poussées, NON fusionnées — attendre le « go » explicite de Gaspard)
- `identite-visuelle` (2 commits d'avance sur `main`) : image Open Graph de marque 1200×630, image Schema.org, fondateur distinct, visuels de marque sur /offre (3 images logo + phrase, preuve sociale, Schema.org, sitemap).
- `maillage-interne` (2 commits) : liens croisés entre guides et vers pages peu liées.
- `audit-technique` : sans commit propre.
Après un « go » : fusionner dans `main`, pousser, puis vérifier rushh.fr (balises OG, Schema.org image/founder, sitemap images, section /offre). IndexNow (`scripts/indexnow.mjs`) seulement avec accord.

## Ouvert
- URL LinkedIn de la société requise pour le `sameAs` du Schema.org.
- Dossiers non suivis par git : `audit/` (audits conversion/global/pages), `validation/` (textes offre, comparatif Joe AI), `docs/calendly-free-sync.md`, `.github/`, `scripts/calendly-sync*.mjs` — à commiter ou ignorer sur décision de Gaspard.

@AGENTS.md

# Rushh landing (rushh.fr)

Site marketing Next.js, remote `gasparddd64/rushh-landingpage`, branche de prod `main`. Prod = push sur `main` (Vercel).

## Fait (2026-11-26)
`identite-visuelle` et `maillage-interne` fusionnées dans `main` (tests 591 OK, build OK) et poussées ; vérifié en ligne sur rushh.fr : og:image 1200×630, Schema.org (image Organization, fondateur Person), sitemap (3 images), 3 logos sur /offre. Les branches et les tags `backup-*-20261126-0855` restent en filet de sécurité (ne pas les supprimer avant quelques jours). IndexNow (`scripts/indexnow.mjs`) seulement avec accord de Gaspard.

## Ouvert
- `sameAs` de l'Organization : seule l'URL LinkedIn de Gaspard est en place ; ajouter celle de la société si elle existe.
- Dossiers non suivis par git : `audit/` (audits conversion/global/pages), `validation/` (textes offre, comparatif Joe AI), `docs/calendly-free-sync.md`, `.github/`, `scripts/calendly-sync*.mjs` — à commiter ou ignorer sur décision de Gaspard.

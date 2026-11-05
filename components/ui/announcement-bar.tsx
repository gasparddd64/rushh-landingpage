/** Bandeau d'annonce tout en haut du site : barre sombre, étiquette blanche « Nouveauté », phrase, lien « Tester ». */
export function AnnouncementBar() {
  return (
    <aside className="ann" aria-label="Annonce">
      <a className="ann-in" href="/demonstrations">
        <span className="ann-tag">Nouveauté</span>
        <span className="ann-text">
          <span className="ann-l1">
            le standard IA qui répond <b>vraiment</b>
          </span>{" "}
          <span className="ann-l2">comme un humain quand vous ne pouvez pas.</span>
        </span>
        <i className="ann-dot" aria-hidden />
        <span className="ann-cta">
          Tester
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m9 5 7 7-7 7" />
          </svg>
        </span>
      </a>
    </aside>
  );
}

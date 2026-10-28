import Link from "next/link";
import "@/app/demo-line.css";

export function DemoLineSection() {
  return (
    <section aria-labelledby="demo-line-title">
      <div className="lf-wrap">
        <div className="dl-card">
          <div className="dl-copy">
            <span className="lf-pill">Ligne de démonstration</span>
            <h2 id="demo-line-title" className="dl-title">Et si vous testiez le Standard Rushh vous-même ?</h2>
            <p className="dl-text">
              Une ligne de démonstration vous permet d&apos;appeler une agence immobilière fictive et de voir comment
              Rushh prend un appel.
            </p>
          </div>
          <div className="dl-action">
            <a className="dl-tel" href="tel:+33176635709" aria-label="Appeler la ligne de démonstration Rushh au 01 76 63 57 09">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
              </svg>
              01 76 63 57 09
            </a>
            <Link className="dl-more" href="/demonstrations">Voir comment tester</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

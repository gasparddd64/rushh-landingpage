import "@/app/terrain.css";

export function TerrainSection() {
  return (
    <section className="tr" aria-labelledby="terrain-title">
      <div className="lf-wrap">
        <div className="tr-grid">
          <figure className="tr-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/equipe-salon-immobilier.webp"
              width={1400}
              height={933}
              alt="Deux membres de l'équipe Rushh, en costume, au salon RENT Paris"
              loading="lazy"
            />
            <figcaption className="tr-caption">L&apos;équipe Rushh, au RENT Paris.</figcaption>
          </figure>
          <div className="tr-copy">
            <span className="lf-pill">Sur le terrain</span>
            <h2 id="terrain-title" className="tr-title">L&apos;immobilier, on connaît votre quotidien.</h2>
            <hr className="tr-rule" />
            <p className="tr-text">
              Visites, estimations, appels de locataires, urgences de gestion… Nous échangeons directement avec les
              professionnels de l&apos;immobilier pour comprendre leurs réalités et concevoir des standards qui s&apos;adaptent
              à leur façon de travailler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import "@/app/terrain.css";

export function TerrainSection() {
  return (
    <section aria-labelledby="terrain-title">
      <div className="lf-wrap">
        <div className="tr-card">
          <figure className="tr-photo">
            <img
              src="/equipe-salon-immobilier.webp"
              width={1400}
              height={933}
              alt="Deux membres de l'équipe Rushh, en costume, lors d'un salon de l'immobilier"
              loading="lazy"
            />
          </figure>
          <div className="tr-copy">
            <span className="lf-pill">Sur le terrain</span>
            <h2 id="terrain-title" className="tr-title">L&apos;immobilier, on connaît votre quotidien.</h2>
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

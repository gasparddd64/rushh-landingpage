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
            <h2 id="terrain-title" className="tr-title">Au contact des professionnels de l&apos;immobilier.</h2>
            <p className="tr-text">
              Nous allons à la rencontre des agences et des acteurs du secteur pour comprendre leurs appels du
              quotidien et concevoir un standard qui leur ressemble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

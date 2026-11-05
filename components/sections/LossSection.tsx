"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { TestezCTA } from "@/components/ui/testez-cta";
import "@/app/loss.css";

/* ---------------------------------------------------------------------------
   Exemple chiffré pour une agence type. Personne ne peut modifier ces chiffres :
   la carte de gauche déroule seule une courte mise en scène, en boucle.
   Hypothèses : 60 appels par semaine, 30 % manqués, 2 % de ces appels deviendraient
   un mandat, 8 000 € d'honoraires (taux usuels de 4 à 8 % du prix de vente).
--------------------------------------------------------------------------- */
const CALLS = 60;
const MISSED = 30;
const VALUE = 8000;
const CLOSE = 2;

const missedCalls = ((CALLS * 52) / 12) * (MISSED / 100);
const mandates = missedCalls * (CLOSE / 100);
const LOSS = Math.round((mandates * VALUE) / 100) * 100;
const M = Math.round(mandates);

const nf = new Intl.NumberFormat("fr-FR");
const fmt = (n: number) => nf.format(n).replace(/ /g, " ");

/* Chronologie d'un cycle (ms), volontairement très vive : carte vide → les 4 lignes apparaissent presque
   d'un coup, les barres montent et redescendent → tout reste lisible 2 s → tout s'efface → 2 s de carte vide. */
const IN = [250, 600, 1150, 1500]; // apparition de chaque ligne
const OUT = 7000; // début de la disparition
const FADE = 300;
const CYCLE = OUT + FADE + 2000;

type Key = [number, number];
const ease = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

function track(t: number, keys: Key[]) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const [t0, v0] = keys[i - 1];
      const [t1, v1] = keys[i];
      return v0 + (v1 - v0) * ease((t - t0) / (t1 - t0));
    }
  }
  return keys[keys.length - 1][1];
}

function frame(t: number) {
  const master = 1 - clamp01((t - OUT) / FADE);
  const op = IN.map((s) => clamp01((t - s) / 250) * master);
  return {
    op,
    calls: track(t, [[IN[0], 0], [IN[0] + 450, CALLS]]),
    missed: track(t, [[IN[1], 0], [IN[1] + 350, MISSED], [IN[1] + 700, 18], [IN[1] + 1050, 36], [IN[1] + 1400, MISSED]]),
    value: track(t, [[IN[2], 0], [IN[2] + 450, VALUE]]),
    close: track(t, [[IN[3], 0], [IN[3] + 350, 4.6], [IN[3] + 700, 1], [IN[3] + 1050, 3.4], [IN[3] + 1400, CLOSE]]),
  };
}


export function LossSection() {
  const [f, setF] = useState(() => frame(0));
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let visible = false;
    let clock = 0; // temps de mise en scène, avance seulement quand la section est visible
    let last = 0;
    let shown = -1;

    const tick = (now: number) => {
      if (visible) {
        clock = (clock + (now - last)) % CYCLE;
        const q = Math.round(clock / 33);
        if (q !== shown) {
          shown = q;
          setF(frame(clock));
        }
      }
      last = now;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        const was = visible;
        visible = entry.isIntersecting;
        if (visible && !was) {
          clock = 0;
          shown = -1;
          last = performance.now();
        }
      },
      { threshold: 0.35 },
    );
    if (wrap.current) io.observe(wrap.current);
    raf = requestAnimationFrame((n) => {
      last = n;
      raf = requestAnimationFrame(tick);
    });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const row = (i: number): CSSProperties => ({ "--o": f.op[i] }) as CSSProperties;
  const calls = Math.round(f.calls);
  const missed = Math.round(f.missed);
  const value = Math.round(f.value / 50) * 50;
  const close = Math.round(f.close);

  return (
    <section className="loss" aria-labelledby="loss-title" data-no-reveal>
      <div className="lf-wrap">
        <div className="lf-head--center loss-head">
          <span className="lf-pill">Mandats manqués</span>
          <h2 id="loss-title" className="lf-h2">
            Et si vos appels manqués vous coûtaient des mandats&nbsp;?
          </h2>
          <p className="lf-sub loss-lead">
            Un propriétaire veut faire estimer son bien. Vous ne décrochez pas. Il appelle l&apos;agence suivante. Et vous
            ne saurez peut-être jamais qu&apos;un mandat vient de vous échapper.
          </p>
        </div>

        <div className="loss-grid" ref={wrap}>
          {/* Carte de gauche : démonstration animée, non modifiable */}
          <div className="loss-card loss-card--form" aria-hidden="true">
            <div className="loss-field" style={row(0)}>
              <span className="loss-label">Appels entrants par semaine</span>
              <div className="loss-input">{calls}</div>
            </div>

            <div className="loss-field" style={row(1)}>
              <div className="loss-row">
                <span className="loss-label">Pourcentage d&apos;appels sans réponse</span>
                <span className="loss-pct">{missed}&nbsp;%</span>
              </div>
              <div className="loss-bar">
                <i style={{ width: `${f.missed}%` }} />
              </div>
            </div>

            <div className="loss-field" style={row(2)}>
              <span className="loss-label">Honoraires moyens par vente</span>
              <div className="loss-input loss-input--eur">
                <span>{fmt(value)}</span>
                <span>€</span>
              </div>
            </div>

            <div className="loss-field" style={row(3)}>
              <div className="loss-row">
                <span className="loss-label">Taux de conversion en vente estimé</span>
                <span className="loss-pct">{close}&nbsp;%</span>
              </div>
              <div className="loss-bar">
                <i style={{ width: `${f.close * 10}%` }} />
              </div>
            </div>
          </div>

          <div className="loss-card loss-card--result">
            <p className="loss-eyebrow">Ce que vos appels manqués pourraient vous coûter chaque mois</p>
            <h3 className="loss-result">
              Jusqu&apos;à <span className="loss-amount">{fmt(LOSS)}&nbsp;€ d&apos;honoraires</span> potentiels qui vous échappent chaque mois.
            </h3>
            <p className="loss-result-sub">
              Soit près de {M} mandat{M > 1 ? "s" : ""} potentiel{M > 1 ? "s" : ""}{" "}
              par mois que vous risquez de laisser à l&apos;agence qui décroche à votre place.
            </p>
            <div className="loss-foot">
              <TestezCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

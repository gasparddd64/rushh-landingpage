"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DemoCTA } from "@/components/ui/demo-cta";

/* ── types ── */
interface SliderField {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  suffix: string;
  defaultValue: number;
}

const FIELDS: SliderField[] = [
  { key: "appelsJour", label: "Appels reçus par jour", min: 5, max: 100, step: 1, suffix: "", defaultValue: 15 },
  { key: "manquesNb", label: "Appels manqués par jour", min: 1, max: 50, step: 1, suffix: "", defaultValue: 5 },
  { key: "commission", label: "Commission moyenne", min: 1000, max: 20000, step: 500, suffix: "€", defaultValue: 4000 },
  { key: "tauxConversion", label: "Taux de conversion", min: 5, max: 100, step: 5, suffix: "%", defaultValue: 20 },
];

type FormValues = Record<string, number>;

const defaults: FormValues = Object.fromEntries(FIELDS.map((f) => [f.key, f.defaultValue]));

function compute(v: FormValues) {
  const appelsManquesJour = v.manquesNb;
  const appelsManquesMois = appelsManquesJour * 22;
  const conversionsMois = appelsManquesMois * (v.tauxConversion / 100);
  const perteMensuelle = conversionsMois * v.commission;
  return { appelsManquesMois: Math.round(appelsManquesMois), conversionsMois: Math.round(conversionsMois), perteMensuelle: Math.round(perteMensuelle) };
}

/* ── Slider row ── */
function SliderRow({ field, value, onChange }: { field: SliderField; value: number; onChange: (v: number) => void }) {
  const pct = ((value - field.min) / (field.max - field.min)) * 100;

  return (
    <div className="calc-row">
      <div className="calc-row-head">
        <span className="calc-label">{field.label}</span>
        <motion.span
          key={value}
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="calc-value"
        >
          {field.suffix === "€"
            ? `${value.toLocaleString("fr-FR")} €`
            : `${value}${field.suffix}`}
        </motion.span>
      </div>
      <div className="calc-track-wrap">
        <input
          type="range"
          min={field.min}
          max={field.max}
          step={field.step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="calc-range"
          style={{ "--pct": `${pct}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

/* ── Main component ── */
export function CalculatorSection() {
  const [values, setValues] = useState<FormValues>(defaults);

  const update = useCallback((key: string, v: number) => {
    setValues((prev) => ({ ...prev, [key]: v }));
  }, []);

  const result = compute(values);

  return (
    <section className="section-pad" id="calculator">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Calculateur</span>
          <h2 className="section-title">
            Combien vous coûtent vos appels manqués&nbsp;?
          </h2>
          <p className="section-sub">
            Estimez le chiffre d&apos;affaires qui vous échappe chaque mois à cause des appels non décrochés.
          </p>
        </div>

        <div className="calc-grid">
          {/* ── LEFT: sliders ── */}
          <div className="calc-sidebar">
            {FIELDS.map((f) => (
              <SliderRow key={f.key} field={f} value={values[f.key]} onChange={(v) => update(f.key, v)} />
            ))}
          </div>

          {/* ── RIGHT: results ── */}
          <div className="calc-results">
            <div className="calc-results-inner">
              <p className="calc-results-label">Manque à gagner estimé</p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={result.perteMensuelle}
                  className="calc-big-number"
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {result.perteMensuelle.toLocaleString("fr-FR")}&nbsp;€
                </motion.p>
              </AnimatePresence>

              <p className="calc-results-sub">par mois</p>

              <div className="calc-stats">
                <div className="calc-stat">
                  <span className="calc-stat-val">{result.appelsManquesMois}</span>
                  <span className="calc-stat-label">appels manqués / mois</span>
                </div>
                <div className="calc-stat">
                  <span className="calc-stat-val">{result.conversionsMois}</span>
                  <span className="calc-stat-label">conversions perdues</span>
                </div>
              </div>

              <div className="calc-rushh-line">
                <p>Avec Rushh, récupérez jusqu&apos;à <strong>80%</strong> de ces opportunités perdues.</p>
              </div>

              <DemoCTA variant="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

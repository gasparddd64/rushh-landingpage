"use client";

import { useState, useEffect, useRef } from "react";
import { CheckIcon, RocketIcon } from "@/components/icons";
import { ButtonColorful } from "@/components/ui/button-colorful";

function Typewriter({ text, active, speed = 28, onDone }: { text: string; active: boolean; speed?: number; onDone?: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) { setI(0); return; }
    if (i >= text.length) { onDone?.(); return; }
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [active, i, text, speed, onDone]);
  return (
    <span>
      {text.slice(0, i)}
      {active && i < text.length && (
        <span style={{ display: "inline-block", width: 2, height: "0.95em", background: "currentColor", verticalAlign: "text-bottom", marginLeft: 1, animation: "caretBlink 0.8s steps(2) infinite" }} />
      )}
    </span>
  );
}

interface StepData {
  num?: string;
  icon?: boolean;
  title: string;
  kicker?: string;
  desc: string;
  cta?: string;
}

function StepCard({ step, active, dark }: { step: StepData; active: boolean; dark: boolean }) {
  const [titleDone, setTitleDone] = useState(false);
  useEffect(() => { if (!active) setTitleDone(false); }, [active]);
  return (
    <div className={`stepcard${dark ? " stepcard-dark" : ""}${active ? " stepcard-active" : ""}`}>
      <div className="stepcard-top">
        {step.icon ? (
          <div className="stepcard-rocket"><RocketIcon size={22} /></div>
        ) : (
          <div className="stepcard-num">{step.num}</div>
        )}
        <div className={`stepcard-check${active ? " on" : ""}`}><CheckIcon size={11} /></div>
      </div>
      <div className="stepcard-body">
        <div>
          <div className="stepcard-title">
            <Typewriter text={step.title} active={active} speed={45} onDone={() => setTitleDone(true)} />
          </div>
          {step.kicker && <div className="stepcard-kicker">{titleDone ? step.kicker : ""}</div>}
          <div className="stepcard-desc">
            <Typewriter text={step.desc} active={active && titleDone} speed={18} />
          </div>
        </div>
        {step.cta && titleDone && (
          <ButtonColorful
            onClick={() => window.open("https://calendly.com/hello-rushhmail/30min", "_blank")}
            label={step.cta}
            variant="white"
            className="!h-[38px] !rounded-xl whitespace-nowrap !text-[12px] self-start mt-4"
          />
        )}
      </div>
    </div>
  );
}

const STEPS: StepData[] = [
  { num: "01", title: "On se parle", desc: "Un appel de 20 minutes pour comprendre votre agence, votre volume et vos typologies de clients." },
  { num: "02", title: "On configure tout", desc: "Script sur mesure, voix calibrée, connexion à votre calendrier. Vous relisez, vous validez." },
  { num: "03", title: "On teste ensemble", desc: "Appels de test sur chaque scénario. Vous écoutez, on ajuste, vous donnez le feu vert." },
  { icon: true, title: "On lance !", kicker: "Rushh décroche", desc: "Dès la mise en ligne, chaque appel est pris, chaque prospect qualifié, chaque fiche transmise.", cta: "Réserver une démo" },
];

export function StepsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setInView(true); }); },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let idx = 0;
    setActiveIdx(0);
    const tick = () => {
      idx++;
      if (idx >= STEPS.length) {
        setTimeout(() => {
          idx = 0;
          setActiveIdx(-1);
          setTimeout(() => setActiveIdx(0), 300);
        }, 2000);
        return;
      }
      setActiveIdx(idx);
    };
    const interval = setInterval(tick, 3000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="section-pad bg-soft-section" id="how" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Comment ça marche</span>
          <h2 className="section-title">De la démo à votre premier appel décroché.</h2>
          <p className="section-sub">On s&apos;occupe de tout. Vous validez à chaque étape.</p>
        </div>
        <div className="stepcards">
          {STEPS.map((s, i) => (
            <StepCard key={i} step={s} active={activeIdx >= i} dark={i === 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

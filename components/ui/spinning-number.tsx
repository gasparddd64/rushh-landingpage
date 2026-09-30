"use client"

import { useEffect, useId, useRef, useState, type CSSProperties } from "react"

import { cn } from "@/lib/utils"

// Compteur à rouleaux (recette « spinning counter » de transitions.dev) :
// chaque chiffre est une colonne 0-9 qui défile plusieurs tours avant d'atterrir,
// avec un décalage par colonne et un flou vertical qui s'estompe à l'arrivée.
const SPINS = 2
const SPIN_BLUR = 3
const DIGITS = Array.from({ length: (SPINS + 1) * 10 }, (_, k) => k % 10)

const easeOut = (u: number) => 1 - Math.pow(1 - u, 3)

export function SpinningNumber({ value, className }: { value: string; className?: string }) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const blurRefs = useRef<(SVGFEGaussianBlurElement | null)[]>([])
  const [live, setLive] = useState(false)
  const [settled, setSettled] = useState(false)
  const uid = useId().replace(/:/g, "")

  const chars = Array.from(value)
  let col = -1
  const cells = chars.map((c) => (/\d/.test(c) ? { c, col: ++col } : { c, col: -1 }))
  const cols = col + 1

  // Lance le compteur quand il entre à l'écran (une seule fois)
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Flou vertical dégressif : fort pendant que le rouleau file, nul quand il se pose
  useEffect(() => {
    if (!live) return
    const root = rootRef.current
    if (!root) return
    const cs = getComputedStyle(root)
    const dur = parseFloat(cs.getPropertyValue("--reel-dur")) || 1400
    const stagger = parseFloat(cs.getPropertyValue("--reel-stagger")) || 90
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return // pas de flou : les rouleaux se posent sans animation (CSS)
    const t0 = performance.now()
    let raf = 0
    const tick = () => {
      const now = performance.now()
      let done = true
      blurRefs.current.forEach((fe, i) => {
        if (!fe) return
        const u = Math.min(1, Math.max(0, (now - t0 - i * stagger) / dur))
        fe.setAttribute("stdDeviation", `0 ${(SPIN_BLUR * (1 - easeOut(u))).toFixed(2)}`)
        if (u < 1) done = false
      })
      if (done) setSettled(true)
      else raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [live])

  return (
    <span ref={rootRef} className={cn("t-reel", className)}>
      <span className="lf-sr">{value}</span>
      {cols > 0 && (
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <defs>
            {Array.from({ length: cols }, (_, i) => (
              <filter key={i} id={`reel-${uid}-${i}`} x="-10%" y="-40%" width="120%" height="180%">
                <feGaussianBlur
                  ref={(el) => {
                    blurRefs.current[i] = el
                  }}
                  stdDeviation="0 0"
                />
              </filter>
            ))}
          </defs>
        </svg>
      )}
      {cells.map(({ c, col: ci }, i) =>
        ci < 0 ? (
          <span key={i} className="t-reel-static" aria-hidden>
            {c === " " ? " " : c}
          </span>
        ) : (
          <span key={i} className="t-reel-col" aria-hidden style={{ "--col": ci } as CSSProperties}>
            <span
              className="t-reel-strip"
              style={
                {
                  "--n": live ? SPINS * 10 + Number(c) : 0,
                  filter: live && !settled ? `url(#reel-${uid}-${ci})` : undefined,
                } as CSSProperties
              }
            >
              {DIGITS.map((d, k) => (
                <span key={k} className="t-reel-digit">
                  {d}
                </span>
              ))}
            </span>
          </span>
        ),
      )}
    </span>
  )
}

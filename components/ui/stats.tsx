import { Card } from "@/components/ui/card"
import { SpinningNumber } from "@/components/ui/spinning-number"
import { cn } from "@/lib/utils"

export type Stat = {
  value: string
  unit?: string
  label: string
  note?: string
}

// Bandeau de chiffres : une seule carte, séparateurs verticaux sur grand écran,
// 2 colonnes (la dernière centrée) sur mobile. Les nombres défilent à l'arrivée.
export function Stats({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <Card
      role="list"
      aria-label="Rushh en chiffres"
      className={cn(
        "grid grid-cols-2 gap-x-2 gap-y-10 p-6 sm:gap-x-4 md:p-10 lg:grid-cols-5 lg:gap-x-0",
        className,
      )}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          role="listitem"
          className={cn(
            "flex flex-col items-center px-3 text-center",
            "lg:border-l lg:border-[#E7E9F3] lg:first:border-l-0",
            i === stats.length - 1 && "col-span-2 lg:col-span-1",
          )}
        >
          <div className="ch-value">
            <SpinningNumber value={s.value} />
            {s.unit && <span className="ch-unit">{s.unit}</span>}
          </div>
          <p className="mt-3 text-[15px] font-semibold leading-snug tracking-tight text-[#0c1024] sm:text-base">
            {s.label}
          </p>
          {s.note && (
            <p className="mt-1.5 max-w-[15rem] text-[13.5px] leading-snug text-[#6b7090]">{s.note}</p>
          )}
        </div>
      ))}
    </Card>
  )
}

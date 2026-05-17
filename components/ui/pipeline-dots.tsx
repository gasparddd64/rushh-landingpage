"use client"

import { cn } from "@/lib/utils"

const stages = ["Détecté", "Contacté", "A répondu", "RDV pris", "Client"] as const

interface PipelineDotsProps {
  currentStage: number
  className?: string
}

export function PipelineDots({ currentStage, className }: PipelineDotsProps) {
  const clamped = Math.max(0, Math.min(4, currentStage))

  return (
    <div className={cn("inline-flex items-center", className)} title={stages[clamped]}>
      {stages.map((stage, i) => {
        const isFilled = i <= clamped
        const isCurrent = i === clamped

        return (
          <div key={stage} className="flex items-center">
            {i > 0 && (
              <div
                className={cn(
                  "h-0 w-3 border-t border-dashed",
                  i <= clamped ? "border-[#2D55FF]/40" : "border-[#D1D5DB]",
                )}
              />
            )}
            <div className="relative flex items-center justify-center">
              {isCurrent && (
                <span className="absolute h-3.5 w-3.5 rounded-full bg-[#2D55FF]/20" />
              )}
              <span
                className={cn(
                  "relative block h-2 w-2 rounded-full",
                  isFilled ? "bg-[#2D55FF]" : "border border-[#D1D5DB] bg-white",
                )}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

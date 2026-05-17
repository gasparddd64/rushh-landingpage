import { cn } from "@/lib/utils"

interface ScoreBarProps {
  score: number
  className?: string
}

export function ScoreBar({ score, className }: ScoreBarProps) {
  const clamped = Math.max(0, Math.min(100, score))

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-sm font-bold text-[#0B0E1A] font-mono tabular-nums">
        {clamped}
      </span>
      <div className="h-[3px] w-16 rounded-full bg-[#EEF0F4]">
        <div
          className="h-full rounded-full bg-[#2D55FF] transition-all"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}

"use client"

import { cn } from "@/lib/utils"

interface PillProps {
  active?: boolean
  onClick?: () => void
  children: React.ReactNode
  count?: number
  className?: string
}

export function Pill({ active = false, onClick, children, count, className }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors",
        active
          ? "bg-[#0B0E1A] text-white"
          : "border border-[#EEF0F4] text-[#0B0E1A] hover:bg-[#EEF0F4]",
        className,
      )}
    >
      {children}
      {count !== undefined && (
        <span
          className={cn(
            "ml-0.5 text-xs",
            active ? "text-white/70" : "text-[#5C6178]",
          )}
        >
          {count}
        </span>
      )}
    </button>
  )
}

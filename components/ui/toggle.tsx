"use client"

import { cn } from "@/lib/utils"

interface ToggleProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function Toggle({ checked = false, onChange, disabled = false, className }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative inline-flex h-[22px] w-[40px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D55FF] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-[#2D55FF]" : "bg-[#D1D5DB]",
        className,
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out",
          checked ? "translate-x-[20px]" : "translate-x-[2px]",
        )}
      />
    </button>
  )
}

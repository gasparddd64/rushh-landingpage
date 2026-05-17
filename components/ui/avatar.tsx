"use client"

import { cn } from "@/lib/utils"

interface AvatarProps {
  name: string
  size?: number
  showStatus?: boolean
  className?: string
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0) return ""
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? ""
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function Avatar({ name, size = 32, showStatus = false, className }: AvatarProps) {
  const initials = getInitials(name)
  const fontSize = Math.round(size * 0.38)

  return (
    <div className={cn("relative inline-flex shrink-0", className)} style={{ width: size, height: size }}>
      <div
        className="flex h-full w-full items-center justify-center rounded-full"
        style={{ backgroundColor: "#5C6178", fontSize }}
      >
        <span className="font-medium leading-none text-white select-none">
          {initials}
        </span>
      </div>
      {showStatus && (
        <span className="absolute bottom-0 right-0 block rounded-full border-2 border-white bg-green-500"
          style={{ width: size * 0.3, height: size * 0.3 }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
        </span>
      )}
    </div>
  )
}

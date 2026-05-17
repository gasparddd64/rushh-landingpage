import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#EEF0F4] bg-white p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

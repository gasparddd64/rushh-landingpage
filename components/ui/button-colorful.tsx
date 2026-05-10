import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "blue" | "white";
}

export function ButtonColorful({
    className,
    label = "Réserver une démo",
    variant = "blue",
    ...props
}: ButtonColorfulProps) {
    const isWhite = variant === "white";

    return (
        <button
            className={cn(
                "relative overflow-hidden rounded-2xl border-none cursor-pointer whitespace-nowrap",
                "h-[52px]",
                isWhite ? "bg-white" : "bg-[#0000FF]",
                isWhite
                    ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                    : "shadow-[0_4px_20px_rgba(0,0,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,255,0.35)]",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-0.5",
                "active:translate-y-0",
                "group",
                className
            )}
            style={{ paddingLeft: 32, paddingRight: 12 }}
            {...props}
        >
            {/* Shimmer effect on hover */}
            <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out",
                isWhite ? "via-[#0000FF]/5" : "via-white/15"
            )} />

            {/* Glow */}
            {!isWhite && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2200f4] to-[#0000cc] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            )}

            {/* Content */}
            <div className="relative flex items-center justify-center gap-4 h-full">
                <span className={cn("text-[15px] font-semibold", isWhite ? "text-[#374151]" : "text-white")}>{label}</span>
                <span className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                    isWhite
                        ? "bg-[#374151]/10 group-hover:bg-[#374151]/15"
                        : "bg-white/20 group-hover:bg-white/30"
                )}>
                    <ArrowUpRight className={cn("w-[16px] h-[16px]", isWhite ? "text-[#374151]" : "text-white")} strokeWidth={2.5} />
                </span>
            </div>
        </button>
    );
}

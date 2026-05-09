"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "aurora-wrap",
        className
      )}
      {...props}
    >
      <div className="aurora-overflow">
        <div
          className={cn(
            "aurora-layer",
            showRadialGradient && "aurora-radial"
          )}
        />
      </div>
      {children}
    </div>
  );
};

"use client";

import { cn } from "cn";
import { StatusEnum } from "./types";

export function TechnicalLabel({
  children,
  status = "online" as StatusEnum,
  className,
}: {
  children: React.ReactNode;
  status?: StatusEnum;
  className?: string;
}) {
  const statusClass = status === "online"
    ? "bg-primary/5 text-primary hover:bg-primary/10"
    : status === "offline"
      ? "bg-destructive/5 text-destructive hover:bg-destructive/10"
      : "bg-amber/5 text-amber hover:bg-amber/10";

  return (
    <div className={cn(
      "inline-flex items-center gap-2 rounded-sm border px-3 py-1 text-xs font-inter",
      "transition-all duration-200",
      statusClass,
      "hover:bg-primary/5",
      className,
    )}>
      <span className={cn(
        "w-2 h-2 rounded-full",
        status === "online" ? "bg-primary" : status === "offline" ? "bg-destructive" : "bg-amber",
      )} />
      <span className="hidden md:inline">{children}</span>
    </div>
  );
}
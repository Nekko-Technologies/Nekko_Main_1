"use client";

import { cn } from "cn";

export function StatusBadge({
  status = "online" as const,
  className,
}: {
  status?: "online" | "offline" | "standby";
  className?: string;
}) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

  let statusClasses = "";
  if (status === "online") {
    statusClasses = "bg-primary/10 text-primary hover:bg-primary/20";
  } else if (status === "offline") {
    statusClasses = "bg-destructive/10 text-destructive hover:bg-destructive/20";
  } else if (status === "standby") {
    statusClasses = "bg-amber/10 text-amber hover:bg-amber/20";
  }

  return (
    <span className={cn(baseClasses, statusClasses, className)}>
      {status}
    </span>
  );
}
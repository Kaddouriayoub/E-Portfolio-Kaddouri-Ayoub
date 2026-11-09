import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "ghost";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-navy/10 text-navy": variant === "default",
          "bg-accent/10 text-accent": variant === "accent",
          "border border-navy/20 text-navy/70": variant === "outline",
          "bg-slate-100 text-slate-600": variant === "ghost",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

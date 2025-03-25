
import { cn } from "@/lib/utils";

interface ChipBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "destructive";
  className?: string;
}

export function ChipBadge({ 
  children, 
  variant = "default",
  className 
}: ChipBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-marketing-100 text-marketing-800": variant === "default",
          "border border-marketing-200 text-marketing-800": variant === "outline",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "bg-destructive text-destructive-foreground": variant === "destructive",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

export default ChipBadge;

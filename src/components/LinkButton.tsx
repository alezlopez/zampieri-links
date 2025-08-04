import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const LinkButton = ({ children, href, variant = "primary", className = "" }: LinkButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90"
  };

  return (
    <Button
      asChild
      className={`w-full justify-between text-left h-auto py-4 px-6 ${variantClasses[variant]} ${className}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="text-base font-medium">{children}</span>
        <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
      </a>
    </Button>
  );
};
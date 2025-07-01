import { LinkedIn, GitHub } from "@/components/Icons/Icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function HeadingWithSubheading({
  variant = "circles",
}: {
  variant?: "circles" | "squares";
}) {
  const outlineClassName = 
    variant === "squares"
      ? "border-3 border-primary"
      : "border-3 border-primary rounded-full";

  const className = `flex items-center justify-center w-12 h-12 ${outlineClassName}`;

  return (
    <div className="text-foreground p-6 pb-10 mb-6">
      <h3 className="text-lg font-bold text-foreground-bright mb-4">Connect</h3>
      <div className="flex gap-4">
        <Link
          href="https://github.com/ryguyk"
          className={className}
          target="_blank"
        >
          <GitHub className="h-6 w-6 text-primary" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ryanakoch/"
          className={className}
          target="_blank"
        >
          <LinkedIn className="h-6 w-6 text-primary" />
        </Link>
        <Link
          href="mailto:ryan.koch.0213@gmail.com"
          className={className}
          target="_blank"
        >
          <Mail className="h-6 w-6 text-primary" />
        </Link>
      </div>
    </div>  
  );
}

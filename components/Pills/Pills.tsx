function Pill({ 
  label, 
  variant = "secondary",
  filled = true,
}: 
{ 
  label: string; 
  variant?: "primary" | "secondary";
  filled?: boolean;
}) {
  let borderClass;
  let fontColorClass;
  let bgClass;
  if (variant === "primary") {
    borderClass = `border-primary`;
    fontColorClass = filled ? `text-white` : `text-primary`;
    bgClass = filled ? `bg-primary` : `bg-transparent`;
  } else {
    borderClass = `border-secondary`;
    fontColorClass = filled ? `text-white` : `text-secondary`;
    bgClass = filled ? `bg-secondary` : `bg-transparent`;
  }  

  return (
    <span
      className={`
        inline-block 
        px-4 py-2 
        text-sm font-medium 
        rounded-full
        border-2
        ${borderClass}
        ${bgClass}
        ${fontColorClass}
      `}
    >
      {label}
    </span>
  );
}

export default function Pills({ 
  labels,
  className = "",
  variant = "secondary",
  filled = true,
}: 
{ 
  labels: string[], 
  className?: string,
  variant?: "primary" | "secondary" 
  filled?: boolean,
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {labels.map((label) => (
        <Pill key={label} label={label} variant={variant} filled={filled} />
      ))}
    </div>
  );
}

function Pill({ 
  label, 
  variant = "primary" 
}: 
{ 
  label: string; 
  variant?: "primary" | "secondary" 
}) {
  return (
    <span
      className={`inline-block px-4 py-2 text-white rounded-full text-sm font-medium ${
        variant === "primary"
          ? "bg-primary"
          : "bg-secondary"
      }`}
    >
      {label}
    </span>
  );
}

export default function Pills({ 
  labels,
  className = "",
  variant = "secondary" 
}: 
{ 
  labels: string[], 
  className?: string,
  variant?: "primary" | "secondary" 
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {labels.map((label) => (
        <Pill key={label} label={label} variant={variant} />
      ))}
    </div>
  );
}

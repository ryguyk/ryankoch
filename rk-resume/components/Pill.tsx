export default function Pill({ 
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

export function Pills({ 
  labels, 
  variant = "primary" 
}: 
{ 
  labels: string[], 
  variant?: "primary" | "secondary" 
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {labels.map((label) => (
        <Pill key={label} label={label} variant={variant} />
      ))}
    </div>
  );
}

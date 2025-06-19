export default function Pill({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
      {label}
    </span>
  );
}

export function Pills({ labels }: { labels: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {labels.map((label) => (
        <Pill key={label} label={label} />
      ))}
    </div>
  );
}

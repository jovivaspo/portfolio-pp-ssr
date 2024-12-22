export default function Subtitle({ subtitle, className }: { subtitle: string; className?: string }) {
  return <h2 className={`text-3xl font-bold ${className}`}>{subtitle}</h2>;
}

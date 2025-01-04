export default function Subtitle({ subtitle, className }: { subtitle: string; className?: string }) {
  return <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${className}`}>{subtitle}</h2>;
}

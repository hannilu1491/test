export default function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return <div><p className="text-xs uppercase tracking-[0.22em] text-warm-700">{eyebrow}</p><h2 className="mt-2 max-w-3xl font-serif text-4xl leading-tight text-warm-900 md:text-5xl">{title}</h2>{desc && <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-700">{desc}</p>}</div>;
}

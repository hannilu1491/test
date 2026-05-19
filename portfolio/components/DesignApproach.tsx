const items = [
  { title: 'Research', blurb: 'Understand users and uncover real needs.' },
  { title: 'Structure', blurb: 'Organize information into clear product flows.' },
  { title: 'Visual System', blurb: 'Build coherent UI language and scalable rules.' },
  { title: 'Interaction', blurb: 'Design intuitive and meaningful micro-moments.' },
  { title: 'Delivery', blurb: 'Polish outcomes and ship impactful experiences.' }
];

export default function DesignApproach() {
  return (
    <section className="rounded-[24px] border border-warm-200 bg-white px-6 py-10 shadow-soft md:px-10">
      <p className="mb-8 text-xs uppercase tracking-[0.2em] text-warm-700">My Design Approach</p>
      <div className="grid gap-4 md:grid-cols-5">
        {items.map((item, idx) => (
          <div key={item.title} className="rounded-2xl border border-warm-200 bg-warm-50 p-5">
            <p className="text-[10px] tracking-[0.2em] text-caramel">0{idx + 1}</p>
            <h3 className="mt-2 font-serif text-2xl leading-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-700">{item.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

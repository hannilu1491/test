import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="fade-in border-b border-warm-200/80">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-12 md:grid-cols-[1.05fr_1fr] md:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs uppercase tracking-[0.24em] text-caramel">Hi, I’m</p>
          <h1 className="font-serif text-[3.2rem] leading-[0.95] text-warm-900 md:text-[6.4rem]">Hanni Lu<span className="text-gold">.</span></h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-warm-700">
            UI/UX Designer with a background in visual communication, branding, packaging, and illustration.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="ghost">Contact Me</Button>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-warm-200 bg-[#ebe5db] shadow-soft md:min-h-[520px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.9),transparent_34%),linear-gradient(120deg,#f2ede5_10%,#e6dece_55%,#ddd1bd_100%)]" />
          <div className="absolute -left-8 top-16 h-44 w-44 rounded-full bg-white/45 blur-2xl" />
          <div className="absolute bottom-12 right-10 h-40 w-40 rounded-full bg-[#c8ab80]/25 blur-2xl" />

          <div className="absolute left-14 top-16 w-[52%] rotate-[-10deg] overflow-hidden rounded-xl border border-black/10 bg-white/85 shadow-[0_30px_50px_rgba(0,0,0,0.2)]">
            <Image src="/images/placeholder.svg" alt="Editorial mockup panel" width={520} height={700} className="h-auto w-full object-cover" priority />
          </div>
          <div className="absolute right-10 top-28 w-[40%] rotate-[8deg] overflow-hidden rounded-xl border border-black/10 bg-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
            <Image src="/images/placeholder.svg" alt="Case study panel" width={420} height={520} className="h-auto w-full object-cover" priority />
          </div>
          <div className="absolute bottom-12 left-20 w-[46%] overflow-hidden rounded-xl border border-black/10 bg-white/90 shadow-[0_16px_32px_rgba(0,0,0,0.18)]">
            <Image src="/images/placeholder.svg" alt="Project detail panel" width={540} height={360} className="h-auto w-full object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}

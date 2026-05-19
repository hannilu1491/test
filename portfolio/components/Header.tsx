'use client';
import Link from 'next/link';
import { useState } from 'react';

const cats = ['UX / Product Design', 'Brand Experience', 'Web Design', 'Illustration', 'Experimental Lab'];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200/80 bg-warm-50/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-[2rem] tracking-wide text-warm-900">Hanni Lu</Link>
        <button className="text-sm uppercase tracking-[0.18em] md:hidden" onClick={() => setOpen(!open)}>Menu</button>
        <ul className="hidden items-center gap-8 text-sm text-warm-900 md:flex">
          <li><Link href="/" className="border-b border-warm-900 pb-1">Home</Link></li>
          <li className="group relative">
            <Link href="/projects">Projects</Link>
            <div className="absolute left-0 top-7 hidden w-64 rounded-2xl border border-warm-200 bg-white p-3 shadow-soft group-hover:block">
              {cats.map((c) => (
                <Link key={c} href={`/projects?category=${encodeURIComponent(c)}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-warm-100">{c}</Link>
              ))}
            </div>
          </li>
          <li><Link href="/about">About</Link></li><li><Link href="/resume">Resume</Link></li><li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact" className="rounded-md bg-warm-900 px-5 py-2 text-warm-50">Let’s Work Together →</Link></li>
        </ul>
      </nav>
      {open && (
        <div className="space-y-2 border-t border-warm-200 px-6 py-4 md:hidden">
          <Link href="/projects" className="block">Projects</Link><Link href="/about" className="block">About</Link><Link href="/resume" className="block">Resume</Link><Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
}

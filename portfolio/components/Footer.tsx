export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#12110f] text-[#ebe5db]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-14 md:grid-cols-[1fr_auto_auto] md:items-end">
        <div>
          <p className="max-w-md font-serif text-4xl leading-tight">Let’s create something meaningful together.</p>
          <p className="mt-4 text-sm text-[#b8ac9c]">I’m always open to new opportunities and thoughtful collaborations.</p>
        </div>
        <a href="mailto:hello@hannilu.design" className="inline-flex items-center rounded-full bg-[#d4b483] px-7 py-3 text-sm text-[#151311] transition hover:bg-[#e2c18f]">Contact Me →</a>
        <div className="space-y-2 text-sm text-[#d5ccbf]">
          <p>LinkedIn</p><p>Instagram</p><p>Behance</p><p>Email</p>
        </div>
      </div>
    </footer>
  );
}

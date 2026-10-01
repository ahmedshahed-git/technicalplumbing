import { MESSENGER, NAV, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const SERVICES = ["Emergency Plumbing", "Drain Cleaning", "Leak Detection", "Water Heaters", "Sewer & Drain", "Pipe Repair"];

export function Footer() {
  return (
    <footer className="border-t border-snow/10 bg-charcoal text-snow/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-snow">Technical<span className="text-terracotta">.</span>Plumbing</p>
          <p className="mt-2">A full service plumbing company</p>
          <p className="mt-6 max-w-sm text-sm">Honest, careful plumbing work for homes, from routine repairs to emergencies.</p>
          <a href={PHONE_HREF} className="mt-6 block text-lg text-beige">{PHONE_DISPLAY}</a>
          <a href={MESSENGER} target="_blank" rel="noopener noreferrer" className="text-sm underline-offset-4 hover:underline">Message us on Facebook</a>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4 text-snow">Explore</p>
          <ul className="space-y-2 text-sm">{NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-terracotta">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="eyebrow mb-4 text-snow">Services</p>
          <ul className="space-y-2 text-sm">{SERVICES.map((s) => <li key={s}><a href="#services" className="hover:text-terracotta">{s}</a></li>)}</ul>
        </div>
      </div>
      <div className="border-t border-snow/10 px-6 py-6 text-center text-xs">© {new Date().getFullYear()} Technical Plumbing. All rights reserved.</div>
    </footer>
  );
}

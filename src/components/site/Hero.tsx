import { motion } from "motion/react";
import { Phone, MessageCircle, Star, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { MESSENGER, NAV, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// To use a looping video, set HERO_VIDEO to an mp4 URL; the image stays as poster/fallback.
const HERO_VIDEO = "";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-charcoal text-snow">
      <div className="absolute inset-0">
        {HERO_VIDEO ? (
          <video className="h-full w-full object-cover" src={HERO_VIDEO} poster={heroImg} autoPlay muted loop playsInline />
        ) : (
          <img src={heroImg} alt="Plumber tightening a brass fitting on copper pipes" width={1920} height={1088} className="h-full w-full object-cover object-[65%_center] animate-kenburns" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="font-display text-xl font-semibold tracking-tight">
          Technical<span className="text-terracotta">.</span>Plumbing
        </a>
        <nav aria-label="Main" className="hidden gap-8 text-sm text-snow/80 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-beige">{n.label}</a>
          ))}
        </nav>
        <a href={PHONE_HREF} className="hidden text-sm font-semibold text-beige sm:block">{PHONE_DISPLAY}</a>
      </header>

      <div className="relative z-10 mx-auto flex h-[calc(100%-88px)] max-w-7xl flex-col justify-center px-6 pb-20 md:px-10">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="eyebrow mb-6 flex items-center gap-3 text-beige">
          <span className="h-px w-10 bg-terracotta" /> A full service plumbing company
        </motion.p>
        <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-[7.5rem]">
          {["Plumbing", "Done Right."].map((w, i) => (
            <motion.span key={w} className="block" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}>
              {w}
            </motion.span>
          ))}
          <motion.span className="block italic text-terracotta" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease }}>
            Every Time.
          </motion.span>
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-8 max-w-xl text-lg text-snow/75">
          Repairs, installs and emergencies handled by plumbers who show up prepared, explain the fix clearly and leave your home clean.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85, ease }} className="mt-10 flex flex-wrap items-center gap-4">
          <a href={PHONE_HREF} className="btn-primary"><Phone className="h-4 w-4" /> Call Now</a>
          <a href={MESSENGER} target="_blank" rel="noopener noreferrer" className="btn-ghost"><MessageCircle className="h-4 w-4" /> Message Us</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a href={PHONE_HREF} className="font-display text-2xl text-snow">{PHONE_DISPLAY}</a>
          <span className="flex items-center gap-2 text-snow/70">
            <span className="flex text-terracotta">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
            7 Verified Customer Reviews
          </span>
        </motion.div>
      </div>

      <a href="#trust" aria-label="Scroll to next section" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-snow/60">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-2">
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </a>
    </section>
  );
}

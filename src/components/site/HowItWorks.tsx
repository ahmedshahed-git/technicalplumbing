import { Play } from "lucide-react";
import { motion } from "motion/react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

// Replace `href` with Facebook/Instagram reel URLs when ready.
const REELS = [
  { step: "01", title: "Tell Us What's Wrong", img: IMG.leak, href: "" },
  { step: "02", title: "We Diagnose & Fix It", img: IMG.hero, href: "" },
  { step: "03", title: "Enjoy a Plumbing System That Works", img: IMG.faucet, href: "" },
];
const tilt = ["md:rotate-[-6deg] md:translate-y-8", "md:scale-110 md:z-10", "md:rotate-[6deg] md:translate-y-8"];

export function HowItWorks() {
  return (
    <section id="process" className="overflow-hidden bg-charcoal py-24 text-snow md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-20 text-center">
          <p className="eyebrow mb-4 text-terracotta">How it works</p>
          <h2 className="text-4xl font-medium md:text-6xl">Three steps. <em className="text-beige">Zero guesswork.</em></h2>
        </Reveal>
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3 sm:gap-6">
          {REELS.map((r, i) => (
            <motion.div key={r.step} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className={tilt[i]}>
              <a href={r.href || "#contact"} {...(r.href ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group relative block aspect-[9/16] overflow-hidden rounded-[2rem] border border-snow/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]" aria-label={`Watch: ${r.title}`}>
                <img src={r.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/40" />
                <div className="absolute left-4 right-4 top-4 flex gap-1">{[0, 1, 2].map((b) => <span key={b} className={`h-0.5 flex-1 rounded ${b <= i ? "bg-snow" : "bg-snow/30"}`} />)}</div>
                <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-snow/15 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-terracotta">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow text-terracotta">Step {r.step}</span>
                  <h3 className="mt-2 text-2xl font-medium leading-tight">{r.title}</h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

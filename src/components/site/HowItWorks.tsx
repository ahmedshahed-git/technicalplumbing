import { Play } from "lucide-react";
import { motion } from "motion/react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

// Drop-in: add `href` (Facebook/Instagram reel URL) or `video` (mp4) per card. Photos are the fallback.
type Reel = { step: string; title: string; text: string; img: string; href?: string; video?: string };
const REELS: Reel[] = [
  { step: "01", title: "Tell Us What's Wrong", text: "Call or message us and describe the problem.", img: IMG.leak },
  { step: "02", title: "We Diagnose & Fix It", text: "We find the cause and explain the fix before we start.", img: IMG.hero },
  { step: "03", title: "Enjoy a Plumbing System That Works", text: "Everything tested, area cleaned up.", img: IMG.faucet },
];
const tilt = ["md:rotate-[-6deg] md:translate-y-8", "md:scale-110 md:z-10", "md:rotate-[6deg] md:translate-y-8"];

export function HowItWorks() {
  return (
    <section id="process" className="overflow-hidden bg-charcoal py-24 text-snow md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-20 text-center">
          <p className="eyebrow mb-4 text-terracotta">How it works</p>
          <h2 className="text-4xl font-medium md:text-6xl">Three steps. <em className="text-beige">No guesswork.</em></h2>
        </Reveal>
        <div className="mx-auto grid max-w-sm gap-10 sm:max-w-5xl sm:grid-cols-3 sm:gap-6">
          {REELS.map((r, i) => {
            const inner = (
              <>
                {r.video ? (
                  <video src={r.video} poster={r.img} muted loop playsInline autoPlay className="h-full w-full object-cover" />
                ) : (
                  <img src={r.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/40" />
                <div className="absolute left-4 right-4 top-4 flex gap-1">{[0, 1, 2].map((b) => <span key={b} className={`h-0.5 flex-1 rounded ${b <= i ? "bg-snow" : "bg-snow/30"}`} />)}</div>
                <div className="absolute left-4 top-7 flex items-center gap-2 text-xs text-snow/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta text-[0.6rem] font-bold">TP</span> Technical Plumbing
                </div>
                {!r.video && (
                  <span aria-hidden className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-snow/30 bg-snow/15 backdrop-blur-md transition group-hover:scale-110 group-hover:bg-terracotta">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="eyebrow text-terracotta">Step {r.step}</span>
                  <h3 className="mt-2 text-2xl font-medium leading-tight">{r.title}</h3>
                  <p className="mt-2 text-sm text-snow/70">{r.text}</p>
                </div>
              </>
            );
            const cls = "group relative block aspect-[9/16] overflow-hidden rounded-[2rem] border border-snow/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]";
            return (
              <motion.div key={r.step} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className={tilt[i]}>
                {r.href ? (
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`Watch: ${r.title}`}>{inner}</a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

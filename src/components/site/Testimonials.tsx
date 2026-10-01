import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/site";

type R = (typeof REVIEWS)[number];

function initials(n: string) {
  return n.replace(/[^A-Za-z .]/g, "").split(/[ .]+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
}

function Card({ r, i, total, progress }: { r: R; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const end = (i + 1) / total;
  const dark = i % 2 === 0;
  const y = useTransform(progress, [Math.max(0, start - 1 / total), start], ["110%", "0%"]);
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.03]);
  const rotate = useTransform(progress, [start, end], [0, i % 2 ? 2 : -2]);
  return (
    <motion.article style={{ y: i === 0 ? 0 : y, scale, rotate, zIndex: i }} className={`absolute inset-0 flex flex-col justify-between rounded-[2rem] p-8 shadow-2xl md:p-14 ${dark ? "bg-charcoal text-snow" : "bg-snow text-charcoal"}`}>
      <CardBody r={r} dark={dark} />
    </motion.article>
  );
}

function CardBody({ r, dark }: { r: R; dark: boolean }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="flex text-terracotta">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}</span>
        <Quote className={`h-10 w-10 ${dark ? "text-beige/30" : "text-brown/30"}`} />
      </div>
      <p className="my-8 font-display text-2xl leading-snug md:text-4xl">{r.text || "Five-star review on Facebook."}</p>
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta font-semibold text-snow">{initials(r.name)}</span>
        <div>
          <p className="font-semibold">{r.name}</p>
          <p className={`text-sm ${dark ? "text-snow/60" : "text-muted-foreground"}`}>Verified customer</p>
        </div>
      </div>
    </>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const total = REVIEWS.length;
  return (
    <section id="reviews" className="bg-beige/40">
      {/* Desktop/tablet: sticky stacked cards */}
      <div ref={ref} className="relative hidden md:block" style={{ height: `${total * 70}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-10 px-10">
            <div className="col-span-4 self-center">
              <p className="eyebrow mb-4 text-brown">Testimonials</p>
              <h2 className="text-6xl font-medium leading-none">Seven reviews. <em className="text-terracotta">Seven five stars.</em></h2>
            </div>
            <div className="relative col-span-8 h-[480px]">
              {REVIEWS.map((r, i) => <Card key={r.name} r={r} i={i} total={total} progress={scrollYProgress} />)}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile: natural swipe row */}
      <div className="py-20 md:hidden">
        <div className="px-6">
          <p className="eyebrow mb-4 text-brown">Testimonials</p>
          <h2 className="text-4xl font-medium leading-tight">Seven reviews. <em className="text-terracotta">Seven five stars.</em></h2>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
          {REVIEWS.map((r, i) => (
            <article key={r.name} className={`flex min-h-[340px] w-[85%] shrink-0 snap-center flex-col justify-between rounded-3xl p-7 shadow-xl ${i % 2 === 0 ? "bg-charcoal text-snow" : "bg-snow text-charcoal"}`}>
              <CardBody r={r} dark={i % 2 === 0} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const FEATURED = [
  { problem: "Clogged drains", solution: "We clear the blockage at its source with professional augers and cleaning, not just the symptom.", img: IMG.drain },
  { problem: "Leaking pipes", solution: "Pinpoint detection, a clean repair and a check of the surrounding lines so it doesn't return.", img: IMG.leak },
  { problem: "Emergency plumbing", solution: "Burst lines and overflows get a fast response, water shut-off and a lasting fix.", img: IMG.emergency },
];
const MORE = ["Running toilets", "Low water pressure", "Water heater problems", "Sewer & drain issues"];

function Row({ item, i }: { item: (typeof FEATURED)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const flip = i % 2 === 1;
  return (
    <div ref={ref} className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${i ? "mt-24 md:mt-36" : ""}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`relative aspect-[4/5] overflow-hidden rounded-2xl md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}
      >
        <motion.img style={{ y }} src={item.img} alt={item.problem} loading="lazy" className="absolute inset-0 h-[116%] w-full -top-[8%] object-cover" />
      </motion.div>
      <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
        <Reveal>
          <span className="font-display text-7xl text-beige md:text-9xl">0{i + 1}</span>
          <p className="eyebrow mt-4 text-brown">The problem</p>
          <h3 className="mt-2 text-4xl font-medium md:text-6xl">{item.problem}</h3>
          <div className="my-8 h-px w-24 bg-terracotta" />
          <p className="eyebrow text-terracotta">The solution</p>
          <p className="mt-3 text-lg text-muted-foreground">{item.solution}</p>
        </Reveal>
      </div>
    </div>
  );
}

export function Problems() {
  return (
    <section id="problems" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-20 max-w-4xl">
          <p className="eyebrow mb-4 text-brown">Problems we solve</p>
          <h2 className="text-5xl font-medium leading-[0.95] md:text-8xl">
            Every problem has a <em className="text-terracotta">right fix.</em>
          </h2>
        </Reveal>
        {FEATURED.map((f, i) => <Row key={f.problem} item={f} i={i} />)}
        <div className="mt-28 border-t border-border">
          {MORE.map((m, i) => (
            <Reveal key={m} delay={i * 0.05}>
              <div className="group flex items-center justify-between border-b border-border py-6">
                <span className="font-display text-3xl transition group-hover:text-terracotta md:text-5xl">{m}</span>
                <span className="eyebrow text-muted-foreground">Solved</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

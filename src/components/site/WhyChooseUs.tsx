import { motion } from "motion/react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

const POINTS = [
  "Professional workmanship",
  "Fast response",
  "Clear communication",
  "Quality-focused service",
  "Respectful cleanup",
  "Practical pricing",
  "Residential & emergency support",
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="relative md:col-span-5">
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="overflow-hidden rounded-2xl">
            <img src={IMG.why} alt="Technical Plumbing technician fitting copper pipes in a home" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="absolute -bottom-8 right-4 rounded-2xl bg-charcoal p-6 text-snow shadow-2xl md:-right-10">
            <p className="font-display text-5xl text-terracotta">5.0</p>
            <p className="mt-1 text-sm text-snow/70">Average from 7 reviews</p>
          </motion.div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow mb-4 text-brown">Why choose us</p>
            <h2 className="text-4xl font-medium leading-tight md:text-6xl">
              Craft you can trust, <em className="text-terracotta">people you'll call again.</em>
            </h2>
          </Reveal>
          <ol className="mt-12">
            {POINTS.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <li className="flex items-baseline gap-6 border-b border-border py-5">
                  <span className="w-8 text-sm font-semibold text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl md:text-3xl">{p}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

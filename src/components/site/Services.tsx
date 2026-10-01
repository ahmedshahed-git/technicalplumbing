import { IMG } from "./images";
import { Reveal } from "./Reveal";

const SERVICES = [
  { title: "Emergency Plumbing", desc: "Burst pipes and floods handled fast.", img: IMG.emergency },
  { title: "Drain Cleaning", desc: "Slow and clogged drains flowing again.", img: IMG.drain },
  { title: "Leak Detection & Repair", desc: "Hidden leaks found and fixed precisely.", img: IMG.leak },
  { title: "Water Heater Service", desc: "Repair, replacement and tankless installs.", img: IMG.heater },
  { title: "Sewer & Drain Services", desc: "Main line clearing and inspection.", img: IMG.before },
  { title: "Faucet & Fixture Repair", desc: "Faucets, toilets and fixtures done right.", img: IMG.faucet },
  { title: "Pipe Repair & Replacement", desc: "Copper and PEX repairs to full repipes.", img: IMG.hero },
  { title: "Residential Plumbing", desc: "Everyday plumbing for every room.", img: IMG.after },
];

export function Services() {
  const loop = [...SERVICES, ...SERVICES];
  return (
    <section id="services" className="overflow-hidden bg-charcoal py-24 text-snow md:py-32">
      <div className="mx-auto mb-14 max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4 text-terracotta">Services</p>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">
            Everything that runs through your walls, <em className="text-beige">handled.</em>
          </h2>
        </Reveal>
      </div>
      <div className="mask-x group/track">
        <ul className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <li key={i} aria-hidden={i >= SERVICES.length} className="group relative h-[420px] w-[280px] shrink-0 overflow-hidden rounded-3xl sm:h-[480px] sm:w-[340px]">
              <img src={s.img} alt={i < SERVICES.length ? s.title : ""} loading="lazy" className="h-full w-full object-cover brightness-75 transition duration-700 group-hover:scale-105 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="eyebrow text-beige">{String((i % SERVICES.length) + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-2xl font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-snow/70">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

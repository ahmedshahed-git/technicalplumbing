import { Reveal } from "./Reveal";

const PROOF = [
  { n: "01", title: "Full-Service Plumbing", note: "From a dripping faucet to a full repipe." },
  { n: "02", title: "Fast Response", note: "Real people answer. Emergencies get priority." },
  { n: "03", title: "Professional Service", note: "Clear quotes, careful work, clean finish." },
  { n: "07", title: "Customer Reviews", note: "Every one of them five stars." },
];

export function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <p className="eyebrow text-brown">The proof wall</p>
          <p className="max-w-md text-muted-foreground">We don't lean on slogans. Here's what our customers come back for.</p>
        </Reveal>

        <div className="relative mb-2 h-px w-full overflow-hidden bg-border">
          <span className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-terracotta to-transparent animate-flow" />
        </div>

        {PROOF.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-border py-8 md:grid-cols-[120px_1fr_280px] md:py-10">
              <span className="font-display text-2xl text-terracotta md:text-4xl">{p.n}</span>
              <h2 className="text-3xl font-medium uppercase leading-none transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl lg:text-7xl">
                {p.title}
              </h2>
              <p className="col-start-2 mt-3 text-muted-foreground md:col-start-3 md:mt-0">{p.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

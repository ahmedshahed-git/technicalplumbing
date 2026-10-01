import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { IMG } from "./images";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((x: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  }, []);

  return (
    <section className="bg-charcoal py-24 text-snow md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 text-terracotta">Before / After</p>
            <h2 className="text-4xl font-medium md:text-6xl">The difference is <em className="text-beige">visible.</em></h2>
          </div>
          <p className="max-w-sm text-snow/60">Drag the handle to compare a corroded under-sink line with our finished replacement.</p>
        </Reveal>
        <div
          ref={ref}
          className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl shadow-2xl md:aspect-[16/9]"
          onPointerDown={(e) => { dragging.current = true; (e.target as Element).setPointerCapture?.(e.pointerId); update(e.clientX); }}
          onPointerMove={(e) => dragging.current && update(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          <img src={IMG.after} alt="After: new clean copper and PEX plumbing under a sink" className="absolute inset-0 h-full w-full object-cover" loading="lazy" draggable={false} />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={IMG.before} alt="Before: corroded, leaking drain pipe" className="h-full w-full object-cover" loading="lazy" draggable={false} />
          </div>
          <span className="eyebrow absolute left-5 top-5 rounded-full bg-charcoal/70 px-3 py-1.5 backdrop-blur">Before</span>
          <span className="eyebrow absolute right-5 top-5 rounded-full bg-terracotta px-3 py-1.5">After</span>
          <div className="absolute inset-y-0 w-0.5 bg-snow" style={{ left: `${pos}%` }}>
            <button
              type="button"
              role="slider"
              aria-label="Before and after comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
                if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
              }}
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-4 border-snow bg-terracotta shadow-xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-beige"
            >
              <MoveHorizontal className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

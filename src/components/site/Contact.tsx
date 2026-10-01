import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Siren, Check } from "lucide-react";
import { MESSENGER, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Reveal } from "./Reveal";

const field = "w-full rounded-xl border border-snow/15 bg-snow/5 px-4 py-3.5 text-snow placeholder:text-snow/40 outline-none transition focus:border-terracotta focus:bg-snow/10";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nIssue: ${d.get("issue")}\n\n${d.get("message")}`;
    navigator.clipboard?.writeText(body).catch(() => {});
    setSent(true);
    window.open(MESSENGER, "_blank", "noopener");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-24 text-snow md:py-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/50 bg-terracotta/10 px-4 py-2 text-sm text-beige">
            <Siren className="h-4 w-4 text-terracotta" /> Plumbing emergency? Call right now.
          </span>
          <h2 className="mt-8 text-5xl font-medium leading-[0.95] md:text-7xl">
            Need a Plumber? <em className="text-terracotta">Let's Get It Fixed.</em>
          </h2>
          <p className="mt-6 max-w-md text-snow/65">Serving local residential and plumbing customers. Call, message, or send the details and we'll get back to you.</p>
          <a href={PHONE_HREF} className="mt-10 block font-display text-4xl text-beige transition hover:text-terracotta md:text-5xl">{PHONE_DISPLAY}</a>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="btn-primary text-lg"><Phone className="h-5 w-5" /> Call Now</a>
            <a href={MESSENGER} target="_blank" rel="noopener noreferrer" className="btn-ghost"><MessageCircle className="h-5 w-5" /> Message Us on Facebook</a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-snow/10 bg-snow/[0.03] p-6 backdrop-blur md:p-10">
            <p className="eyebrow mb-6 text-terracotta">Request service</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" aria-label="Name" className={field} />
              <input required name="phone" type="tel" placeholder="Phone" aria-label="Phone" className={field} />
              <input name="email" type="email" placeholder="Email" aria-label="Email" className={`${field} sm:col-span-2`} />
              <select required name="issue" aria-label="Plumbing issue" defaultValue="" className={`${field} sm:col-span-2`}>
                <option value="" disabled className="text-charcoal">Plumbing issue</option>
                {["Emergency", "Clogged drain", "Leak", "Water heater", "Sewer / drain", "Fixture repair", "Other"].map((o) => <option key={o} className="text-charcoal">{o}</option>)}
              </select>
              <textarea name="message" rows={4} placeholder="Tell us what's happening" aria-label="Message" className={`${field} sm:col-span-2 resize-none`} />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full justify-center">
              {sent ? <><Check className="h-4 w-4" /> Details copied — paste in Messenger</> : "Send Request"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

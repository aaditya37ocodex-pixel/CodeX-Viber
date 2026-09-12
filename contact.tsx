"use client";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal.tsx";
import { WhatsAppGlyph } from "./brand-mark.tsx";
import { Button, buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";
import { WHATSAPP_DISPLAY, whatsappUrl } from "./whatsapp.ts";

const EMAIL = "aaditya37codex@gmail.com";
const TYPES = ["Website Development", "AI Agents", "Robotics", "Coding & Software", "Presentation Design", "Creative Editor Studio", "Not sure yet"];
const fieldClass = "mt-1.5 h-11 w-full rounded-xl bg-bg px-3 text-sm text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.1)] outline-none placeholder:text-subtle focus:shadow-[0_0_0_1px_rgba(59,158,255,0.6)]";

function emailUrl(name: string, email: string, type: string, details: string) {
  const subject = `CodeX Viber Project Enquiry — ${type}`;
  const body = `Hi Aaditya,\n\nI’d like to discuss a CodeX Viber project.\n\nName: ${name}\nEmail: ${email}\nProject: ${type}\n\nDetails:\n${details}\n\nThank you.`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email.";
    if (!type) next.type = "Select a project type.";
    if (details.length < 12) next.details = "Add a little more about the idea.";
    setErrors(next);
    if (Object.keys(next).length) return;
    window.location.href = emailUrl(name, email, type, details);
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="h-full rounded-[1.75rem] p-7 panel sm:p-9">
              <p className="eyebrow section-kicker">Start something</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Have an idea? <span className="text-gradient">Let's build it.</span></h2>
              <p className="mt-4 text-sm leading-6 text-muted">Tell us what you want to create. Email is best for a project brief; WhatsApp is fastest for a quick conversation.</p>
              <div className="mt-8 space-y-3">
                <a href={`mailto:${EMAIL}?subject=CodeX%20Viber%20Project%20Enquiry`} className="contact-link"><Mail className="size-5 text-accent" /><span><b className="block text-sm text-fg">Email</b><span className="text-sm text-muted">{EMAIL}</span></span></a>
                <a href={`tel:+919201109621`} className="contact-link"><Phone className="size-5 text-accent" /><span><b className="block text-sm text-fg">Phone</b><span className="text-sm text-muted">{WHATSAPP_DISPLAY}</span></span></a>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="contact-link"><WhatsAppGlyph className="size-5 text-whatsapp" /><span><b className="block text-sm text-fg">WhatsApp</b><span className="text-sm text-muted">Chat directly with Aaditya</span></span></a>
              </div>
              <div className="mt-8 rounded-2xl border border-accent/15 bg-accent/5 p-4"><p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent">Aaditya · Founder & Developer</p><p className="mt-2 text-sm leading-6 text-muted">CodeX Viber combines engineering, AI, robotics and creative production in one focused studio.</p></div>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="rounded-[1.75rem] p-7 panel sm:p-9">
              {sent ? (
                <div className="flex min-h-[26rem] flex-col items-start justify-center gap-4"><CheckCircle2 className="size-9 text-whatsapp" /><h3 className="text-2xl font-semibold">Your email draft is ready.</h3><p className="max-w-md text-sm leading-6 text-muted">Your email app should have opened with the project details. If it didn't, use the Email button on this page to contact Aaditya directly.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "whatsapp" }))}><WhatsAppGlyph className="size-4" /> Continue on WhatsApp</a></div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                  <div><label htmlFor="name" className="text-sm text-muted">Name</label><input id="name" name="name" autoComplete="name" className={fieldClass} placeholder="Your name" />{errors.name && <p className="mt-1 text-xs text-danger">{errors.name}</p>}</div>
                  <div><label htmlFor="email" className="text-sm text-muted">Email</label><input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />{errors.email && <p className="mt-1 text-xs text-danger">{errors.email}</p>}</div>
                  <div className="sm:col-span-2"><label htmlFor="type" className="text-sm text-muted">Project Type</label><select id="type" name="type" defaultValue="" className={fieldClass}><option value="">Select a type</option>{TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select>{errors.type && <p className="mt-1 text-xs text-danger">{errors.type}</p>}</div>
                  <div className="sm:col-span-2"><label htmlFor="details" className="text-sm text-muted">Project Details</label><textarea id="details" name="details" rows={7} className={cn(fieldClass, "h-auto min-h-40 py-3")} placeholder="What should we build? Tell us the idea, features, deadline, or anything useful." />{errors.details && <p className="mt-1 text-xs text-danger">{errors.details}</p>}</div>
                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:col-span-2"><p className="text-xs text-subtle">Submitting opens your email app — no form data is stored here.</p><Button type="submit" variant="accent">Email Aaditya <Mail className="size-4" /></Button></div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

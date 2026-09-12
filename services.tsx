import { Bot, Code2, Film, Image as ImageIcon, Layers3, Monitor, Palette, Presentation, Rocket, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "./reveal.tsx";
import { cn } from "./utils.ts";

const SERVICES = [
  { num: "01", title: "Website Development", copy: "Modern, responsive websites and web experiences designed around your brand and goals.", icon: Monitor, tags: ["Responsive", "Modern UI", "SEO-ready"] },
  { num: "02", title: "AI Agent Development", copy: "Useful AI assistants, workflows and automations that connect intelligence to real tasks.", icon: Bot, tags: ["Agents", "Automation", "AI UX"] },
  { num: "03", title: "Robotics & Automation", copy: "Robotics concepts, programming, control logic and smart systems that connect hardware with software.", icon: Workflow, tags: ["Control", "Sensors", "Smart systems"] },
  { num: "04", title: "Coding & Software", copy: "Custom apps, tools and software solutions built around the way a real workflow works.", icon: Code2, tags: ["Web apps", "Software", "Custom"] },
  { num: "05", title: "Presentation Design", copy: "Professional PPTs, pitch decks and presentation experiences with strong visual storytelling.", icon: Presentation, tags: ["PPT", "Pitch decks", "Visuals"] },
  { num: "06", title: "Creative Editor Studio", copy: "A complete creative desk for video, photo, posters, branding, thumbnails and social content.", icon: Palette, tags: ["Video", "Photo", "Branding"] },
] as const;

const CREATIVE = [
  [Film, "Video Editing"], [ImageIcon, "Photo Editing"], [Palette, "Poster & Banner Making"], [Sparkles, "Logo & Brand Designing"], [Rocket, "Social Posts & Reels"], [ImageIcon, "Thumbnail Designing"], [Presentation, "PPT Designing"], [Layers3, "Business & Visiting Cards"],
] as const;

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow section-kicker">What we build</p>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">One studio. <span className="text-gradient">Many ways to create.</span></h2>
            <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">AI + coding + web + robotics + creative design — brought together under one technology-focused brand.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.num} delayMs={i * 60}>
                <article className={cn("group relative h-full overflow-hidden rounded-2xl p-6 panel service-card", i === 5 && "border-accent/30")}>
                  <div className="service-glow" />
                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-xs text-subtle">{service.num}</span>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-bg text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08)] group-hover:shadow-glow">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="relative mt-9 text-xl font-medium">{service.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-muted">{service.copy}</p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-bg/60 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-subtle">{tag}</span>)}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-5 rounded-2xl border border-accent-2/25 bg-linear-to-br from-accent-2/10 via-bg-elevated to-accent/5 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow"><Sparkles className="size-3.5 text-accent-2" /> Creative Editor Studio</p>
                <h3 className="mt-3 text-2xl font-semibold">Make the idea look as good as it works.</h3>
                <p className="mt-2 text-sm leading-6 text-muted">From a thumbnail to a complete brand kit, creative production stays inside the same CodeX Viber system.</p>
              </div>
              <div className="grid w-full gap-2 sm:grid-cols-2 lg:max-w-xl lg:grid-cols-3">
                {CREATIVE.map(([Icon, label]) => <div key={label} className="flex items-center gap-2 rounded-xl border border-border/80 bg-bg/55 px-3 py-3 text-xs text-muted"><Icon className="size-4 shrink-0 text-accent" />{label}</div>)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

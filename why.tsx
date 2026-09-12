import { Compass, Cpu, Layers, Rocket } from "lucide-react";
import { Reveal } from "./reveal.tsx";

const FEATURES = [
  {
    icon: Compass,
    title: "Creative Thinking",
    copy: "Every brief starts with the idea, not a template. We find the shape that makes the product memorable.",
  },
  {
    icon: Cpu,
    title: "Smart Technology",
    copy: "Web, AI, and robotics share one stack of craft — systems that are intelligent without being noisy.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    copy: "Built to grow. Clean structure, modern platforms, and room for agents, automation, and new surfaces.",
  },
  {
    icon: Layers,
    title: "Custom Solutions",
    copy: "No generic packages. The work is scoped to your workflow, audience, and the outcome you actually need.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow section-kicker">Difference</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Why CodeX Viber</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delayMs={i * 70}>
                <article className="h-full rounded-2xl p-6 panel transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(139,108,255,0.28)]">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-bg text-accent shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./reveal.tsx";

const STEPS = [
  { num: "01", title: "Discover", copy: "Map the idea, audience, and constraints." },
  { num: "02", title: "Design", copy: "Shape the experience and visual system." },
  { num: "03", title: "Build", copy: "Engineer the site, agent, or product." },
  { num: "04", title: "Test", copy: "Review, refine, and harden the result." },
  { num: "05", title: "Launch", copy: "Ship, support, and iterate in the wild." },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow section-kicker">Method</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">How a project moves.</h2>
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delayMs={i * 80}>
              <li className="relative h-full rounded-2xl p-5 panel">
                {i < STEPS.length - 1 ? (
                  <span className="pointer-events-none absolute right-[-0.6rem] top-8 hidden h-px w-4 bg-accent/50 lg:block" />
                ) : null}
                <p className="font-mono text-xs text-accent">{step.num}</p>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

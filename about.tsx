import { Reveal } from "./reveal.tsx";
import { CxMark, Wordmark } from "./brand-mark.tsx";

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow section-kicker">Studio</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Technology Meets Creativity.</h2>
          <p className="mt-4 max-w-xl text-muted">
            CodeX Viber combines coding, design, artificial intelligence, and robotics to transform
            ideas into useful digital experiences. The studio is built for people who want more than
            a template — they want a system that thinks, moves, and ships.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            From the first sketch to a live product, every layer is considered: how it looks, how it
            behaves, and how it scales.
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <article className="rounded-2xl p-6 panel">
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center overflow-hidden rounded-2xl bg-bg">
                <img
                  src="/logo.jpg"
                  alt="CodeX Viber logo"
                  className="h-full w-full object-cover"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="text-lg font-medium">Aaditya</p>
                <p className="text-sm text-muted">Founder & Developer</p>
                <Wordmark className="mt-1 block text-sm" />
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Aaditya founded CodeX Viber to put engineering and design in the same room. One
              builder, one standard: ideas become working technology.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-bg/60 px-3 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <CxMark className="h-8 w-10 shrink-0" />
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-subtle">
                Ideas → Code → Impact
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

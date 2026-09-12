import { ArrowRight, Bot, Code2, Cpu, ExternalLink, Globe2, Layers3, Presentation } from "lucide-react";
import { CxMark, WhatsAppGlyph } from "./brand-mark.tsx";
import { buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";
import { whatsappUrl } from "./whatsapp.ts";

const IMG = "https://raw.githubusercontent.com/aaditya37ocodex-pixel/CodeX-Viber/main";

const STACK = [
  { icon: Code2, label: "Coding" },
  { icon: Bot, label: "AI Agents" },
  { icon: Cpu, label: "Robotics" },
  { icon: Globe2, label: "Web" },
  { icon: Presentation, label: "PPT" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-[4.5rem]">
      <div className="pointer-events-none absolute inset-0 grid-floor" />
      <div className="hero-orb left-[-9rem] top-20 size-[30rem] bg-accent/18" />
      <div className="hero-orb right-[-10rem] top-24 size-[30rem] bg-accent-2/20" />
      <div className="hero-orb bottom-[-10rem] left-1/3 size-[24rem] bg-cyan/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent-bright">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            CX SYSTEM · ONLINE
          </div>
          <h1 className="mt-6 max-w-3xl text-[2.65rem] font-semibold tracking-[-0.055em] sm:text-5xl lg:text-[4.45rem]">
            Build what <span className="text-gradient">doesn't exist yet.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            CodeX Viber turns ambitious ideas into working technology — from high-impact websites and software to AI agents, robotics systems, and creative digital experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className={cn(buttonVariants({ variant: "accent", size: "lg" }), "pr-4")}>Start a Project <ArrowRight className="size-4" /></a>
            <a href="#projects" className={buttonVariants({ variant: "outline", size: "lg" })}>Explore Our Work <ExternalLink className="size-4" /></a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "pr-4")}><WhatsAppGlyph className="size-4" /> Chat on WhatsApp</a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {STACK.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/70 px-3 py-2 text-xs text-muted backdrop-blur">
                <Icon className="size-3.5 text-accent" /> {label}
              </span>
            ))}
          </div>
          <div className="mt-9 flex items-center gap-3 border-t border-border/70 pt-5">
            <div className="flex size-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-bg">
              <CxMark className="h-10 w-12" />
            </div>
            <div>
              <p className="text-sm font-medium">Aaditya</p>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-subtle">Founder & Developer · CodeX Viber</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="pointer-events-none absolute -inset-8 sm:-inset-10">
            <div className="orbit" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
          </div>
          <div className="hero-core relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b16] p-3 shadow-[0_30px_100px_-35px_rgba(59,158,255,0.65)]">
            <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10">
              <img src={`${IMG}/hero-arm.jpg`} alt="Robotic arm inside a futuristic technology lab" className="h-[26rem] w-full object-cover sm:h-[31rem]" width={900} height={900} />
              <div className="absolute inset-0 bg-linear-to-t from-[#050812] via-[#050812]/30 to-[#050812]/5" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="glass rounded-full px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-accent-bright">Technology Core</span>
                <span className="glass rounded-full px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted">v1.0 / ONLINE</span>
              </div>
              <div className="absolute left-4 top-1/2 grid -translate-y-1/2 gap-2 sm:left-6">
                {[{icon: Bot,label:"AI Agent"},{icon: Cpu,label:"Robotics"},{icon: Code2,label:"Coding"}].map(({icon:Icon,label}) => (
                  <div key={label} className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-fg"><Icon className="size-3.5 text-accent" />{label}</div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#070b16]/80 p-4 backdrop-blur-xl sm:p-5">
                <div className="flex items-center gap-3">
                  <img src={`${IMG}/codex-viber-original.jpg`} alt="CodeX Viber" className="h-12 w-16 rounded-lg object-cover" width={160} height={120} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Ideas → Code → Impact</p>
                    <p className="mt-0.5 text-xs text-muted">AI · Web · Robotics · Creative</p>
                  </div>
                  <Layers3 className="ml-auto hidden size-5 text-accent sm:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Cpu, Radio, Settings2, Waypoints } from "lucide-react";
import { Reveal } from "./reveal.tsx";
import { buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";

const IMG = "https://raw.githubusercontent.com/aaditya37ocodex-pixel/CodeX-Viber/main";

const HIGHLIGHTS = [
  { icon: Settings2, label: "Automation" },
  { icon: Cpu, label: "Robotics Programming" },
  { icon: Radio, label: "Smart Systems" },
  { icon: Waypoints, label: "AI + Robotics" },
];

function RobotArm() {
  return (
    <svg viewBox="0 0 220 180" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="arm-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e8eef8" />
          <stop offset="1" stopColor="#8aa0c2" />
        </linearGradient>
        <linearGradient id="arm-blue" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#3b9eff" />
          <stop offset="1" stopColor="#8b6cff" />
        </linearGradient>
      </defs>
      <rect x="18" y="148" width="88" height="14" rx="3" fill="url(#arm-metal)" />
      <rect x="36" y="138" width="52" height="12" rx="2" fill="#1a2744" stroke="#3b9eff" strokeWidth="0.8" />
      <g className="arm-shoulder">
        <rect x="54" y="78" width="14" height="64" rx="4" fill="url(#arm-metal)" />
        <circle cx="60" cy="118" r="9" fill="#0b1020" stroke="url(#arm-blue)" strokeWidth="2" />
        <g className="arm-elbow">
          <rect x="74" y="50" width="52" height="12" rx="4" fill="url(#arm-metal)" transform="rotate(-28 74 56)" />
          <circle cx="118" cy="58" r="8" fill="#0b1020" stroke="#8b6cff" strokeWidth="2" />
          <rect x="126" y="24" width="44" height="10" rx="4" fill="url(#arm-metal)" transform="rotate(-38 126 29)" />
          <g>
            <rect className="arm-grip-l" x="162" y="14" width="22" height="5" rx="2" fill="url(#arm-blue)" />
            <rect className="arm-grip-r" x="162" y="26" width="22" height="5" rx="2" fill="url(#arm-blue)" />
          </g>
          <circle cx="168" cy="28" r="5" fill="#f3f6fb" />
        </g>
      </g>
      <circle cx="184" cy="18" r="10" fill="none" stroke="#3b9eff" strokeDasharray="3 4" className="icon-orbit" />
    </svg>
  );
}

export function RoboticsLab() {
  return (
    <section id="robotics" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-[1.75rem] panel lg:grid lg:grid-cols-2">
          <div className="relative min-h-80">
            <img src={`${IMG}/lab-arm.jpg`} alt="Industrial robotic arm in a dark laboratory" className="absolute inset-0 h-full w-full object-cover" width={960} height={720} />
            <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/20 to-bg/30" />
            <span className="absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-accent/70" />
            <span className="absolute right-5 top-5 h-8 w-8 border-r-2 border-t-2 border-accent/70" />
            <span className="absolute bottom-5 left-5 h-8 w-8 border-b-2 border-l-2 border-accent/70" />
            <span className="absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-accent/70" />
            <p className="absolute left-8 top-8 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent">Systems online</p>
            <div className="absolute bottom-8 right-8 h-28 w-36 overflow-hidden rounded-xl glass">
              <RobotArm />
            </div>
          </div>
          <div className="p-7 sm:p-10">
            <Reveal>
              <p className="eyebrow section-kicker">Hardware + software</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Robotics Lab</h2>
              <p className="mt-3 text-muted">Motion, sensors, and code in one loop. CodeX Viber prototypes smart systems that don’t just look technical — they run.</p>
            </Reveal>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3 rounded-xl bg-bg/50 px-3 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                    <Icon className="size-4 shrink-0 text-accent" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </li>
                );
              })}
            </ul>
            <a href="#contact" className={cn(buttonVariants({ variant: "accent" }), "mt-8")}>Explore Robotics</a>
          </div>
        </div>
      </div>
    </section>
  );
}

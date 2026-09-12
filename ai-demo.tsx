"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Reveal } from "./reveal.tsx";
import { WhatsAppGlyph } from "./brand-mark.tsx";
import { Button, buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";
import { founderMessage, whatsappUrl } from "./whatsapp.ts";

type Msg = { id: number; role: "bot" | "user"; text: string };

const STARTERS = [
  "What can CodeX Viber build for me?",
  "How do your AI agents work?",
  "Do you take robotics projects?",
  "How do we start?",
];

function replyFor(input: string): string {
  const q = input.toLowerCase();
  if (/what can|build for me|services|offer/.test(q)) {
    return "CodeX Viber builds websites, presentation systems, AI agents, robotics prototypes, and custom software. Tell me the idea — we turn it into a product you can launch.";
  }
  if (/ai|agent|assistant|chatbot/.test(q)) {
    return "AI agents here are custom assistants wired to a real workflow — answering, routing, and automating. This panel is a demo. Aaditya designs the live version around your data and tools.";
  }
  if (/robot|automation|arm|hardware/.test(q)) {
    return "Yes. The Robotics Lab covers automation, robotics programming, and smart systems. We prototype control logic and connect it to software so the machine actually does the job.";
  }
  if (/website|web|site/.test(q)) {
    return "We design and engineer modern, responsive sites — from founder brands to product marketing. Fast, structured, and built so the offer is obvious on the first screen.";
  }
  if (/presentation|deck|pitch|slides/.test(q)) {
    return "Presentation design is a core service. We build decks that hold a room: hierarchy, visual system, and a story that makes a complex idea land.";
  }
  if (/code|software|app|develop/.test(q)) {
    return "Custom software and web apps are built around how you actually work — not a generic template. Typed, maintainable, and ready to grow.";
  }
  if (/price|cost|charge|quote|budget/.test(q)) {
    return "Every build is scoped to the idea. Share a short brief with Aaditya on WhatsApp and you will get a clear next step — no generic packages.";
  }
  if (/start|begin|contact|aaditya|talk|whatsapp/.test(q)) {
    return "Start with a conversation. Use Talk to Aaditya — it opens WhatsApp with a project note. Discover → Design → Build → Test → Launch.";
  }
  if (/who|founder|about/.test(q)) {
    return "Aaditya founded CodeX Viber to combine coding, design, AI, and robotics. One studio, one builder, ideas shipped as working technology.";
  }
  return "This is a demo assistant for CodeX Viber. I can talk through websites, AI agents, robotics, presentations, and software. For a real brief, talk to Aaditya on WhatsApp.";
}

export function AiDemo() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, role: "bot", text: "I am the CodeX Viber demo assistant. Ask what we can build — or tap a prompt below. For a live project, talk to Aaditya." },
  ]);
  const [value, setValue] = useState("");
  const [typing, setTyping] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    idRef.current += 1;
    const user: Msg = { id: idRef.current, role: "user", text: trimmed };
    setMessages((m) => [...m, user]);
    setValue("");
    setTyping(true);
    const delay = 700 + Math.min(trimmed.length * 12, 900);
    window.setTimeout(() => {
      idRef.current += 1;
      setMessages((m) => [...m, { id: idRef.current, role: "bot", text: replyFor(trimmed) }]);
      setTyping(false);
    }, delay);
  }

  return (
    <section id="ai" className="relative py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="eyebrow section-kicker"><Sparkles className="size-3.5 text-accent" /> Live demo</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Meet Your AI Assistant</h2>
          <p className="mt-3 max-w-md text-muted">A preview of how CodeX Viber thinks. Ask about websites, agents, robotics, or software — then take the real conversation to Aaditya.</p>
          <a href={whatsappUrl(founderMessage())} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "whatsapp" }), "mt-6 pr-4")}>
            <WhatsAppGlyph className="size-4" /> Talk to Aaditya
          </a>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="overflow-hidden rounded-2xl panel">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex size-2.5"><span className="absolute inset-0 rounded-full bg-accent opacity-60" /><span className="relative size-2.5 rounded-full bg-accent" /></span>
                <p className="text-sm font-medium">CX Assistant</p>
              </div>
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-subtle">Demo</p>
            </div>
            <div ref={scroller} className="flex h-80 flex-col gap-3 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                  <p className={cn("max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed", msg.role === "user" ? "rounded-br-md bg-accent text-bg" : "rounded-bl-md bg-surface-2 text-fg")}>
                    {msg.text}
                  </p>
                </div>
              ))}
              {typing ? (
                <div className="flex justify-start">
                  <p className="rounded-2xl rounded-bl-md bg-surface-2 px-3.5 py-2.5 font-mono text-xs text-muted">thinking…</p>
                </div>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
              {STARTERS.map((s) => (
                <button key={s} type="button" onClick={() => send(s)} className="rounded-full bg-bg px-3 py-1.5 text-left text-xs text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-[color,background-color] duration-150 hover:text-fg">{s}</button>
              ))}
            </div>
            <form className="flex gap-2 border-t border-border p-3" onSubmit={(e) => { e.preventDefault(); send(value); }}>
              <label htmlFor="ai-input" className="sr-only">Ask the demo assistant</label>
              <input id="ai-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Ask what CodeX Viber can build…" className="h-11 min-h-11 flex-1 rounded-xl bg-bg px-3 text-sm text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] outline-none placeholder:text-subtle focus:shadow-[0_0_0_1px_rgba(59,158,255,0.55)]" />
              <Button type="submit" variant="accent" size="md" aria-label="Send message" className="px-3"><ArrowUp className="size-4" /></Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

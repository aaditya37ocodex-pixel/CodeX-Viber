"use client";
import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FullLogo, WhatsAppGlyph } from "./brand-mark.tsx";
import { buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";
import { whatsappUrl } from "./whatsapp.ts";

const EMAIL = "aaditya37codex@gmail.com";
const NAV = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#ai", label: "AI" },
  { href: "#robotics", label: "Robotics" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass-strong border-b border-border/70" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-h-11 items-center gap-2.5" aria-label="CodeX Viber home">
          <FullLogo className="h-10 w-[8.5rem] rounded-md object-contain sm:h-11 sm:w-[9.5rem]" />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link rounded-lg px-3 py-2 text-sm text-muted">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a href={`mailto:${EMAIL}?subject=CodeX%20Viber%20Project%20Enquiry`} className={cn(buttonVariants({ variant: "ghost", size: "md" }), "px-3")} aria-label="Email Aaditya">
            <Mail className="size-4" />
            Email
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "whatsapp", size: "md" }), "pr-3.5")}>
            <WhatsAppGlyph className="size-4" />
            WhatsApp
          </a>
          <a href="#contact" className={cn(buttonVariants({ variant: "accent", size: "md" }), "pr-3.5")}>Start a Project</a>
        </div>

        <button type="button" className="inline-flex size-11 items-center justify-center rounded-lg text-fg hover:bg-fg/6 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border/70 px-4 py-4 glass-strong lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base text-fg hover:bg-fg/6">{item.label}</a>
            ))}
          </nav>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <a href={`mailto:${EMAIL}?subject=CodeX%20Viber%20Project%20Enquiry`} onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}><Mail className="size-4" /> Email Aaditya</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "w-full")}><WhatsAppGlyph className="size-4" /> Chat on WhatsApp</a>
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className={cn(buttonVariants({ variant: "accent", size: "lg" }), "mt-2 w-full")}>Start a Project</a>
        </div>
      ) : null}
    </header>
  );
}

import { CxMark, FullLogo, WhatsAppGlyph, Wordmark } from "./brand-mark.tsx";
import { buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";
import { WHATSAPP_DISPLAY, whatsappUrl } from "./whatsapp.ts";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border pb-28 pt-14 lg:pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <FullLogo className="h-10 w-14 rounded-lg" />
            <Wordmark className="text-lg" />
          </a>
          <a href="mailto:aaditya37codex@gmail.com?subject=CodeX%20Viber%20Project%20Enquiry" className="mt-4 inline-flex items-center rounded-lg border border-border bg-bg/60 px-3 py-2 text-xs text-muted hover:text-fg">Email Aaditya</a>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Ideas → Code → Impact
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            CodeX Viber turns ideas into technology — websites, AI agents, robotics, and custom
            software built by Aaditya.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-fg">Explore</p>
          <ul className="mt-3 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-fg">Talk to us</p>
          <p className="mt-3 text-sm text-muted">Aaditya · Founder & Developer</p>
          <a href={`tel:+${"919201109621"}`} className="mt-1 block text-sm text-fg hover:text-accent">
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "whatsapp", size: "md" }), "mt-4 pr-3.5")}
          >
            <WhatsAppGlyph className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-5 text-xs text-subtle">
        © {new Date().getFullYear()} CodeX Viber. Build · Automate · Innovate.
      </div>
    </footer>
  );
}

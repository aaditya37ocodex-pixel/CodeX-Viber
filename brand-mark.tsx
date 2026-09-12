import { cn } from "./utils.ts";

const IMG = "https://raw.githubusercontent.com/aaditya37ocodex-pixel/CodeX-Viber/main";

export function CxMark({ className }: { className?: string }) {
  return (
    <img src={`${IMG}/codex-viber-original.jpg`} alt="" className={cn("object-cover object-center", className)} aria-hidden="true" />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-semibold tracking-tight text-fg", className)}>
      CodeX<span className="text-gradient">Viber</span>
    </span>
  );
}

export function FullLogo({ className }: { className?: string }) {
  return (
    <img src={`${IMG}/codex-viber-original.jpg`} alt="CodeX Viber — Build · Automate · Innovate" className={cn("object-contain", className)} />
  );
}

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2 6.49 2 12.02c0 1.76.46 3.48 1.34 5L2 22l5.1-1.34a10 10 0 0 0 4.94 1.26h.04c5.54 0 10.04-4.49 10.04-10.02 0-2.67-1.04-5.18-2.93-7.07Zm-7.01 15.4h-.03a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.03.8.81-2.95-.2-.3a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.27 8.25Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.13-.16.24-.63.8-.77.97-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.37.11-.49.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.59 4.11 3.63.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

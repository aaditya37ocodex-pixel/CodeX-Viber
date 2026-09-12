import { WhatsAppGlyph } from "./brand-mark.tsx";
import { whatsappUrl } from "./whatsapp.ts";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with CodeX Viber"
      className="wa-pulse fixed z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-fg shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--color-whatsapp)_80%,transparent)] transition-[transform,background-color] duration-150 hover:bg-whatsapp-bright active:scale-[0.96] max-lg:bottom-5 max-lg:right-4 lg:bottom-7 lg:right-5"
    >
      <WhatsAppGlyph className="size-7" />
    </a>
  );
}

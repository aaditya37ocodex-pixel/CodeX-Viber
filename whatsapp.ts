export const WHATSAPP_E164 = "919201109621";
export const WHATSAPP_DISPLAY = "+91 9201109621";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi CodeX Viber, I’m interested in your services. I’d like to discuss a project.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}

export function similarProjectMessage(project: string) {
  return `Hi CodeX Viber, I’d like to discuss a similar project: ${project}.`;
}

export function founderMessage() {
  return "Hi Aaditya, I’d like to talk about a CodeX Viber project.";
}

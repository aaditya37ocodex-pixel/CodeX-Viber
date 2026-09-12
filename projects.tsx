import { Reveal } from "./reveal.tsx";
import { WhatsAppGlyph } from "./brand-mark.tsx";
import { buttonVariants } from "./button.tsx";
import { cn } from "./utils.ts";
import { similarProjectMessage, whatsappUrl } from "./whatsapp.ts";

const PROJECTS = [
  { id: "web", title: "Business Websites", blurb: "Fast, conversion-ready sites with a premium visual system.", image: "/project-web.jpg", alt: "Laptop showing a dark modern business website", tags: ["Web", "Responsive", "SEO"], featured: true },
  { id: "ai", title: "AI Agent Interfaces", blurb: "Chat surfaces and assistants that actually do the work.", image: "/project-ai.jpg", alt: "Abstract AI interface panels with neural connections", tags: ["Agents", "Automation"], featured: false },
  { id: "deck", title: "Presentation Designs", blurb: "Decks that make a complex idea land in one sitting.", image: "/contact.jpg", alt: "Large conference display with a geometric presentation layout", tags: ["Pitch", "Visual system"], featured: false },
  { id: "robot", title: "Robotics Projects", blurb: "From concept and control logic to smart mechanical systems.", image: "/lab-arm.jpg", alt: "Industrial robotic arm in a dark research lab", tags: ["Control", "Automation"], featured: false },
  { id: "editor", title: "Creative Editor Studio", blurb: "Visual content that gives every digital idea a stronger identity.", image: "/contact.jpg", alt: "Creative presentation and visual design workspace", tags: ["Video", "Branding", "Social"], featured: false },
  { id: "code", title: "Coding & Software Projects", blurb: "Web apps and custom software built around a real workflow.", image: "/project-code.jpg", alt: "Ultrawide monitor with a dark code editor", tags: ["Web apps", "Custom"], featured: false },
] as const;

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow section-kicker">Portfolio</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Things We Build</h2>
          <p className="mt-3 max-w-2xl text-muted">A snapshot of the work CodeX Viber can create — explore the services and visual work below, then start a conversation for a similar project.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 60} className={project.featured ? "lg:col-span-2" : ""}>
              <article className={cn("group overflow-hidden rounded-2xl panel", project.featured ? "lg:grid lg:grid-cols-2" : "flex flex-col")}>
                <div className={cn("relative overflow-hidden", project.featured ? "min-h-64" : "h-48")}>
                  <img src={project.image} alt={project.alt} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" width={960} height={540} />
                  <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-70" />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <a href={whatsappUrl(similarProjectMessage(project.title))} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "whatsapp", size: "md" }), "pr-3.5")}>
                      <WhatsAppGlyph className="size-4" />
                      Discuss Similar Project
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

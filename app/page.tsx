import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { WhatsAppFloat } from "../whatsapp-float";
import { Hero } from "../hero";
import { Services } from "../services";
import { Projects } from "../projects";
import { AiDemo } from "../ai-demo";
import { RoboticsLab } from "../robotics";
import { About } from "../about";
import { WhyUs } from "../why";
import { Process } from "../process";
import { Contact } from "../contact";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CodeX Viber",
  slogan: "Ideas → Code → Impact",
  description: "CodeX Viber turns ideas into smart digital solutions. Websites, presentations, AI agents, robotics, and custom software.",
  telephone: "+919201109621",
  email: "aaditya37codex@gmail.com",
  founder: { "@type": "Person", name: "Aaditya", jobTitle: "Founder & Developer" },
  areaServed: "IN",
};

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <AiDemo />
        <RoboticsLab />
        <About />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}

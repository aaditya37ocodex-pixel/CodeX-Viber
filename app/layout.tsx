import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "CodeX Viber — Ideas → Code → Impact",
  description: "CodeX Viber turns ambitious ideas into working technology — websites, AI agents, robotics, software and creative digital experiences.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

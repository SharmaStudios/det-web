import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "DETRIOT | ULTRA-SPEC GAME HOSTING",
  description: "Next-generation game infrastructure for the elite. Powered by high-frequency hardware and an immersive global network.",
  icons: {
    icon: "https://panel.detriot.cloud/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden selection:bg-primary/20">
        <div className="noise-bg" />
        <Cursor />
        {children}
      </body>
    </html>
  );
}

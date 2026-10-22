import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageProgress from "@/components/layout/PageProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jatinkushwah.netlify.app"),
  title: "Jatin Kushwah — Data Analyst & Developer",
  description: "Portfolio of Jatin Kushwah: Data Analyst and aspiring software/backend developer working across analytics, visualization, and software development.",
  keywords: ["Jatin Kushwah", "Data Analyst", "Power BI", "Python", "FastAPI", "Next.js", "Portfolio"],
  openGraph: { title: "Jatin Kushwah — Data Analyst & Developer", description: "I turn data into decisions—and ideas into systems.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "Jatin Kushwah — Data Analyst & Developer", description: "I turn data into decisions—and ideas into systems." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body><PageProgress /><Navbar />{children}<Footer /></body>
    </html>
  );
}

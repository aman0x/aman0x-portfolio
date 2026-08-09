import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Singh Chandel | aman0x",
  description: "VP Technology with 11+ years experience in full-stack development, AI/ML, and building scalable products. Currently at Cloudastra.",
  keywords: ["Aman Singh Chandel", "aman0x", "Full Stack Developer", "VP Technology", "React", "Python", "Django", "AI/ML"],
  authors: [{ name: "Aman Singh Chandel" }],
  openGraph: {
    title: "Aman Singh Chandel | aman0x",
    description: "VP Technology with 11+ years experience in full-stack development",
    url: "https://aman0x.com",
    siteName: "aman0x",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Singh Chandel | aman0x",
    description: "VP Technology with 11+ years experience in full-stack development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  );
}

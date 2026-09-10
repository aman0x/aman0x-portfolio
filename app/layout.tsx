import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Engineering leader with 11+ years building and scaling products from zero. Two tenures as VP Technology, teams to 40+. Full-stack, data platforms and AI/ML — Python, Django, React, Kubernetes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aman0x.com"),
  title: "Aman Singh Chandel | aman0x",
  description: DESCRIPTION,
  keywords: [
    "Aman Singh Chandel", "aman0x", "Engineering Leader", "VP Technology",
    "Full Stack Engineer", "Data Platform", "MLOps", "React", "Next.js",
    "Python", "Django", "Kubernetes", "MLflow", "Delhi", "India",
  ],
  authors: [{ name: "Aman Singh Chandel", url: "https://aman0x.com" }],
  creator: "Aman Singh Chandel",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aman Singh Chandel — Engineering Leader",
    description: DESCRIPTION,
    url: "https://aman0x.com",
    siteName: "aman0x",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Singh Chandel — Engineering Leader",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

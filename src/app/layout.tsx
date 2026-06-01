import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import "katex/dist/katex.min.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ranjan — AI & Decision Intelligence",
    default: "Ranjan — AI & Decision Intelligence",
  },
  description:
    "Data Science Manager and AI/ML Leader with 12+ years of experience specializing in LLM pipelines, causal inference, and production ML systems. Expertise in building scalable decision intelligence platforms and leading technical teams.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "AI/ML",
    "LLM",
    "Causal Inference",
    "Decision Intelligence",
    "Production ML",
    "Data Engineering",
  ],
  authors: [{ name: "Ranjan Mishra" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rjmishra.github.io",
    siteName: "Ranjan — AI & Decision Intelligence",
    title: "Ranjan — AI & Decision Intelligence",
    description:
      "Data Science Manager and AI/ML Leader with 12+ years of experience specializing in LLM pipelines, causal inference, and production ML systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjan — AI & Decision Intelligence",
    description:
      "Data Science Manager and AI/ML Leader with 12+ years of experience specializing in LLM pipelines, causal inference, and production ML systems.",
    creator: "@rjmishra",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ranjan Mishra",
  jobTitle: "Data Science Manager | AI/ML Leader",
  url: "https://rjmishra.github.io",
  sameAs: [
    "https://linkedin.com/in/rjmishra",
    "https://github.com/rjmishra",
    "https://twitter.com/ranjan",
  ],
  knowsAbout: [
    "Machine Learning",
    "Data Science",
    "LLM Pipelines",
    "Causal Inference",
    "Production ML Systems",
    "Decision Intelligence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <link rel="canonical" href="https://rjmishra.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="">
        <Navigation />
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

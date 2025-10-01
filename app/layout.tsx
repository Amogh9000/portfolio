import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/components/ui/navbar";
import { Loader } from "@/components/ui/loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amogh-portfolio.vercel.app"),
  title: {
    default: "Amogh Manjunath — Portfolio",
    template: "%s — Amogh Manjunath",
  },
  description: "Portfolio of Amogh Manjunath — AI/ML Engineer & Developer",
  openGraph: {
    title: "Amogh Manjunath — Portfolio",
    description: "AI/ML projects, experience, and skills.",
    type: "website",
    url: "https://amogh-portfolio.vercel.app",
  },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: "Amogh Manjunath — Portfolio", description: "AI/ML projects, experience, and skills." },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <SmoothScrollProvider>
          <Loader />
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

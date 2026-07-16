import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { Navigation } from "@/components/layout/Navigation";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tam-hoang-tran.example.com"),
  title: "Tam Hoang Tran | Project Management, Operations and AI",
  description:
    "International Project Engineering student focused on project management, operations, AI-supported workflows and digital product development.",
  openGraph: {
    title: "Tam Hoang Tran | Project Management, Operations and AI",
    description:
      "International Project Engineering student focused on project management, operations, AI-supported workflows and digital product development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <MotionProvider>
          <Loader />
          <Navigation />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

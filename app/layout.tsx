import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ReduxProvider } from "@/src/lib/providers/ReduxProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TSES - Learning Management System",
    template: "%s | TSES LMS",
  },
  description:
    "A modern Learning Management System for course creation, enrollment tracking, and student progress management. Built with Next.js, Redux Toolkit, and TypeScript.",
  keywords: [
    "Learning Management System",
    "LMS",
    "Online Courses",
    "Education Platform",
    "Course Management",
    "E-Learning",
    "TSES",
  ],
  authors: [
    {
      name: "TSES Team",
      url: "https://tsesltd.vercel.app/",
    },
  ],
  creator: "TSES",
  publisher: "TSES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tsesltd.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TSES - Learning Management System",
    description:
      "Modern LMS platform for course management, student enrollment, and progress tracking.",
    url: "https://tsesltd.vercel.app/",
    siteName: "TSES LMS",

    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

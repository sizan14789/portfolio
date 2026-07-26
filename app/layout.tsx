import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/ui/header/Header";
import Footer from "@/ui/footer/Footer";
import AppContext from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sizan",
  description: "Portfolio page for Md. Sizan Molla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased duration-200`}
    >
      <AppContext>
        <body className="min-h-screen flex flex-col min-w-svw bg-(--background) text-(--foreground) font-sans">
          <Header />
          {children}
          <Footer />
        </body>
      </AppContext>
    </html>
  );
}

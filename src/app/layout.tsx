import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Innoverse Bangladesh",
  description:
    "The Flagship Event of The Ministry of Information and Communication Technology of Bangladesh with the collaboration of Whiteboard Initiatives and a2i",
};

const ApacheFont = localFont({ src: "../fonts/AldotheApache.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ApacheFont.className}`}>
        <Navbar />
        <main className="min-h-[60vh] pt-20">{children}</main>
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}

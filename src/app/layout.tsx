import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Innoverse Bangladesh",
  description:
    "The Flagship Event of The Ministry of Information and Communication Technology of Bangladesh with the collaboration of Whiteboard Initiatives and a2i",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[60vh] pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

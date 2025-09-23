import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

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
        {children}
      </body>
    </html>
  );
}

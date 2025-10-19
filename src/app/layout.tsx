import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Innoverse Bangladesh",
  description:
    "The Flagship Event of The Ministry of Information and Communication Technology of Bangladesh with the collaboration of Whiteboard Initiatives and a2i",
  keywords: [
    "Innoverse",
    "ICT Ministry Bangladesh",
    "Whiteboard Initiatives",
    "Innovation",
    "Technology",
  ],
  authors: [{ name: "Whiteboard Initiatives" }],
  openGraph: {
    title: "Innoverse Bangladesh",
    description:
      "The Flagship Event of The Ministry of Information and Communication Technology of Bangladesh with the collaboration of Whiteboard Initiatives and a2i",
    url: "https://www.innoverse.net",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/bua2b1x6j/innoverse-images/innoverse-logo.webp?updatedAt=1760892122477",
        width: 1200,
        height: 630,
        alt: "Innoverse Bangladesh",
      },
    ],
  },
};

const ApacheFont = localFont({ src: "../fonts/AldotheApache.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/bua2b1x6j/innoverse-images/innoverse-logo.webp?updatedAt=1760892122477"
        />
        <link
          rel="apple-touch-icon"
          href="https://ik.imagekit.io/bua2b1x6j/innoverse-images/innoverse-logo.webp?updatedAt=1760892122477"
        />
        {/* ✅ Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TMSQ98WV');`}
        </Script>
      </head>
      <body className={`${ApacheFont.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMSQ98WV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <main className="min-h-[60vh] pt-20">{children}</main>
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}

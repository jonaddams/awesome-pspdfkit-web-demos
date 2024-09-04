import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import Header from "./global-components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "PSPDFKit Web Samples",
  description: "PSPDFKit Web Samples",
};

const indivisibleFont = localFont({ src: "./assets/Indivisible-23242797.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={indivisibleFont.className}>
        <Header />
        {children}
        {/* Load the PSPDFKit library by CDN */}
        <Script src={process.env.NEXT_PUBLIC_PSPDFKIT_SRC} strategy="beforeInteractive" />
      </body>
    </html>
  );
}

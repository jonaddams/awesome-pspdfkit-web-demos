"use client";
import ReactDOM from "react-dom";
import { useEffect } from "react";

import Script from "next/script";

export default function PSPDFKitLib() {
  // CDN URL for PSPDFKit for Web
  const cdnUrl = process.env.NEXT_PUBLIC_PSPDFKIT_CDN_URL || "";
  console.log("cdnUrl ", cdnUrl);
  const src = process.env.NEXT_PUBLIC_PSPDFKIT_SRC || "";
  console.log("src ", src);
  ReactDOM.preconnect(cdnUrl);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).PSPDFKit) {
      const PSPDFKit = (window as any).PSPDFKit;
    }
  });

  return <Script src={src} strategy="beforeInteractive" />;
}

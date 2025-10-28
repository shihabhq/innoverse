"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import "@/types/gtm"; // Import the global type declaration

export default function GTMRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      const url =
        pathname +
        (searchParams.toString() ? `?${searchParams.toString()}` : "");

      // Determine page type based on pathname
      let pageType = "other";
      if (pathname === "/") pageType = "home";
      else if (pathname.startsWith("/competitions")) pageType = "competition";
      else if (pathname.startsWith("/experiences")) pageType = "experience";
      else if (pathname === "/register") pageType = "registration";
      else if (pathname === "/success") pageType = "success";

      // Push page view event to GTM
      window.dataLayer.push({
        event: "page_view",
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
        page_type: pageType,
      });

      // Optional: Log for debugging
      console.log("GTM Page View:", { url, pageType });
    }
  }, [pathname, searchParams]);

  return null;
}

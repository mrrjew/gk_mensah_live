"use client";

import Navbar from "@/components/Navbar";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import ReduxProvider from "@/store/providers";
import { usePathname } from "next/navigation";
import React from "react";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [hideDefaultLayout, setHideDefaultLayout] = React.useState(false);

  React.useEffect(() => {
    const isPathAddListing = path.split("/").includes("login") || path.split("/").includes("signup");
    setHideDefaultLayout(isPathAddListing);
  }, [path]);

  return (
    <ReactQueryClientProvider>
      <ReduxProvider>
        {!hideDefaultLayout && <Navbar/>}
        <section
          className={`flex-1 ${hideDefaultLayout ? "mt-0" : "mt-[64px]"}`}
        >
          {children}
        </section>
      </ReduxProvider>
    </ReactQueryClientProvider>
  );
}

"use client";

import { Hero } from "@/components/Hero";
import { SectionServices } from "@/components/SectionServices";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Hero />
      {/* <SectionServices /> */}
    </>
  );
}

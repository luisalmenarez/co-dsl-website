"use client";
import { Logo } from "@/components/shared/Logo";
import { useState } from "react";
import { Menu } from "../ui/Menu";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className="fixed w-full left-0 top-0 z-50">
      <div className="container mx-auto flex items-start justify-between p-7 lg:py-8 lg:px-0">
        <Logo />
        <section className="relative">
          <Menu isActive={isActive} setIsActive={setIsActive} />
        </section>
      </div>
    </header>
  );
};

"use client";

import { Logo } from "@/components/shared/Logo";
import { ItemMenu } from "@/components/ui/ItemMenu";
import { useState } from "react";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className="fixed w-full left-0 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-0">
        <section>
          <Logo />
        </section>
        <section>
          {/* <ul className="hidden md:flex items-center gap-x-8">
            <ItemMenu text="Inicio" href="/" />
            <ItemMenu text="Nosotros" href="/" />
            <ItemMenu text="Servicios" href="/" />
            <ItemMenu text="Contacto" href="/" />
          </ul> */}
          {/* <button className="relative md:hidden">
            <span className="absolute right-0 -top-4 w-8 h-0.5 bg-white" />
            <span className="absolute right-0 -top-2 w-8 h-0.5 bg-white" />
            <span className="absolute right-0 -top-0 w-8 h-0.5 bg-white" />
          </button> */}

          <Button isActive={isActive} setIsActive={setIsActive} />
        </section>
      </div>
    </header>
  );
};

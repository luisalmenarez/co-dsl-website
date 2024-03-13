import { cn } from "@/lib/utils";
import Image from "next/image";

export const ItemSlider = () => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full h-full after:left after:bottom-0"
      )}>
      <article className="relative w-full h-full">
        <Image
          src={"/images/hero1.jpg"}
          alt="Image"
          fill
          className="object-cover"
        />
      </article>
      <article className="space-y-4 absolute left-[10%] top-[40%] w-[500px] max-w-[80%] z-10">
        <p className={cn("uppercase tracking-[10px] text-white")}>
          ¿Qué somos?
        </p>
      </article>
    </li>
  );
};

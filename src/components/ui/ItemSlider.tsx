import { cn } from "@/lib/utils";
import Image from "next/image";

interface ItemSliderProps {
  itemActive: number;
  id: number;
  image: string;
  brand: string;
  name: string;
  desc: string;
}

export const ItemSlider = ({
  itemActive,
  id,
  image,
  brand,
  name,
  desc,
}: ItemSliderProps) => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left after:bottom-0 after:bg-slider transition-all duration-500",
        itemActive === id ? "opacity-100 z-10" : "opacity-0"
      )}
    >
      <article className="relative w-full h-full">
        <Image src={image} alt="Image" fill className="object-cover" />
      </article>
      <article className="space-y-4 absolute left-[10%] top-[30%] w-[500px] max-w-[80%] z-10">
        <p
          className={cn(
            "uppercase tracking-[10px] text-white font-semibold text-3xl"
          )}
        >
          {brand}
        </p>
        <h2 className={"text-5xl lg:6xl m-0 text-white font-bold"}>{name}</h2>
        <p className="text-gray-200 translate">{desc}</p>
      </article>
    </li>
  );
};

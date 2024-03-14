import { cn } from "@/lib/utils";
import Image from "next/image";

interface SliderThumbailProps {
  itemActive: number;
  id: number;
  image: string;
  onClick: () => void;
}

export const SliderThumbnail = ({
  itemActive,
  id,
  image,

  onClick,
}: SliderThumbailProps) => {
  return (
    <li
      role="button"
      onClick={onClick}
      className={cn(
        "h-[250px] shrink-0 transition-all duration-300 overflow-hidden relative after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150",
        itemActive === id
          ? "w-[200px] brightness-150"
          : "w-[80px] brightness-50"
      )}
    >
      <div className="relative w-full h-full rounded-lg">
        <Image
          src={image}
          alt="Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div
        className={cn(
          "absolute top-auto right-3 bottom-5 left-3 z-10 translate-y-8 blur-xl "
        )}
      ></div>
    </li>
  );
};

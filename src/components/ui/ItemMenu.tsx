import Link from "next/link";
import { cn } from "@/lib/utils";

interface ItemMenuProps {
  className?: string;
  text: string;
  href: string;
}

export const ItemMenu = ({ className, text, href }: ItemMenuProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "relative text-white transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-primary before:rounded-full before:transition-all before:duration-300 hover:before:w-full",
          className
        )}>
        {text}
      </Link>
    </li>
  );
};

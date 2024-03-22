import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className="uppercase font-black text-white flex items-center text-2xl"
    >
      <span className="bg-primary text-black size-8 flex items-center justify-center rounded mr-px">
        CO
      </span>
      -DSL
    </Link>
  );
};

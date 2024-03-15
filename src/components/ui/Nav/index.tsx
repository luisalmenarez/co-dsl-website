import styles from "./style.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => {
    return {
      opacity: 1,
      transition: { delay: 0.5 + i * 0.1 },
    };
  },
  exit: {
    opacity: 0,
  },
};

interface Link {
  href: string;
  title: string;
}

const Links: Link[] = [
  { href: "/", title: "Projects" },
  { href: "/", title: "Agency" },
  { href: "/", title: "Expertise" },
  { href: "/", title: "Careers" },
  { href: "/", title: "Contact" },
];

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <Link href={link.href}>{link.title}</Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

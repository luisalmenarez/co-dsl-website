import styles from "./style.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { perspective, slideIn, hoverItems } from "@/app/utils/anim";
import { Links, FooterLink } from "@/app/db/data";
import { useState } from "react";

interface NavProps {
  isActive: boolean;
  setIsActive: (index: boolean) => void;
}

export const Nav: React.FC<NavProps> = ({ isActive, setIsActive }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  return (
    <>
      {isOverlayVisible && (
        <div
          className={styles.overlay}
          onClick={() => {
            setIsActive(false);
            setIsOverlayVisible(false);
          }}
        />
      )}
      <nav className={styles.nav}>
        <div className={styles.body}>
          {Links.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link href={href}>
                    <motion.p
                      variants={hoverItems}
                      whileHover="initial"
                      animate="enter"
                    >
                      {title}
                    </motion.p>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
        <footer className={styles.footer}>
          {FooterLink.map((link, i) => {
            return (
              <Link
                href={link.href}
                key={`f_${i}`}
                className="relative before:absolute before:left-0 before:-bottom-0 before:w-0 before:h-0.5 before:bg-black before:rounded-full before:transition-all before:duration-500 hover:before:w-2/5"
              >
                <motion.p
                  variants={slideIn}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {link.title}
                </motion.p>
              </Link>
            );
          })}
        </footer>
      </nav>
    </>
  );
};

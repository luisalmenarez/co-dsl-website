import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/ui/Nav";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./style.module.css";

interface ButtonProps {
  isActive: boolean;
  setIsActive: (index: boolean) => void;
}

const variants = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "-5px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const Menu: React.FC<ButtonProps> = ({ isActive, setIsActive }) => {
  return (
    <>
      <motion.article
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.article>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

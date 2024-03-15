import { motion } from "framer-motion";
import styles from "./style.module.css";

interface ButtonProps {
  isActive: boolean;
  setIsActive: (index: boolean) => void;
}

export const Button: React.FC<ButtonProps> = ({ isActive, setIsActive }) => {
  return (
    <button onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.section
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Menu" />
        </div>
        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.section>
    </button>
  );
};

interface PerspectiveTextProps {
  label: string;
}

const PerspectiveText: React.FC<PerspectiveTextProps> = ({ label }) => {
  return (
    <div className={styles.perspectiveText}>
      <p> {label} </p>
      <p> {label} </p>
    </div>
  );
};

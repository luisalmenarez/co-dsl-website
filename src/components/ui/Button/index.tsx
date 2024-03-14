import { motion } from "framer-motion";
import styles from "./style.module.css";

interface ButtonProps {
  isActive: boolean;
  setIsActive: (index: boolean) => void;
}

export const Button: React.FC<ButtonProps> = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <div className={styles.el}>
        <p>Menu</p>
      </div>
      <div className={styles.el}>
        <p>Close</p>
      </div>
    </div>
  );
};

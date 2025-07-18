import { ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, className }) => {
  return (
    <button className={clsx(styles.button, color && styles[color], className)}>
      {children}
    </button>
  );
};

export default Button;

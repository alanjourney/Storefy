import { ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, color && styles[color], className)}
    >
      {children}
    </button>
  );
};

export default Button;

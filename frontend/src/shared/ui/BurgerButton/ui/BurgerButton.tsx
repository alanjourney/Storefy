import styles from "./BurgerButton.module.scss";
import clsx from "clsx";

interface BurgerButtonProps {
  className: string;
  onClick: () => void;
  isOpen: boolean;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  className,
  onClick,
  isOpen,
}) => {
  return (
    <button onClick={onClick} className={clsx(styles.burgerButton, className)}>
      <div
        className={clsx(styles.burgerButtonIcon, isOpen && styles.open)}
      ></div>
    </button>
  );
};

export default BurgerButton;

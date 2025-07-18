import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import styles from "./Input.module.scss";

interface InputProps {
  type?: string;
  className?: string;
  title?: string;
  value: string;
  setValue: (val: string) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  title,
  type,
  value,
  setValue,
}) => {
  const id = uuidv4();

  return (
    <div className={clsx(styles.inputWrapper, className)}>
      <label className={styles.label} htmlFor={id}>
        {title}:
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={styles.input}
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;

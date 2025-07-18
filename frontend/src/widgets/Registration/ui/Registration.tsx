import { useDispatch } from "react-redux";
import styles from "./Registration.module.scss";
import { setAuthView } from "app/redux/slices/authSlice";
import Input from "shared/ui/Input";
import Button from "shared/ui/Button";

const Registration = () => {
  const dispatch = useDispatch();
  const handleAuth = (view: string) => dispatch(setAuthView(view));

  return (
    <div className={styles.registration}>
      <div className={styles.registrationDescriptionWrapper}>
        <p className={styles.registrationDescription}>
          <span>Store</span> anything, <span>access</span> it anywhere
        </p>
      </div>
      <h1 className={styles.registrationTitle}>Registration</h1>
      <Input title="email" type="email" className={styles.registrationInput} />
      <Input
        title="password"
        type="password"
        className={styles.registrationInput}
      />
      <Input
        title="Confirm your password"
        type="password"
        className={styles.registrationInput}
      />
      <Button className={styles.registrationButtonPosition} color="black">
        Gotcha!
      </Button>

      <p className={styles.registrationBack}>
        Already have Storefy?{" "}
        <button
          onClick={() => {
            handleAuth("greetings");
          }}
        >
          back
        </button>
      </p>
    </div>
  );
};

export default Registration;

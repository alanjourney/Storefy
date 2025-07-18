import { useDispatch } from "react-redux";
import styles from "./Greetings.module.scss";
import Button from "shared/ui/Button";
import { setAuthView } from "app/redux/slices/authSlice";

const Greetings = () => {
  const dispatch = useDispatch();
  const handleAuth = (view: string) => dispatch(setAuthView(view));

  return (
    <div className={styles.greetings}>
      <div className={styles.greetingsDescriptionWrapper}>
        <p className={styles.greetingsDescription}>
          <span>Easy</span> and <span>secure</span> access to your content
        </p>
      </div>

      <h1 className={styles.greetingsTitle}>Storefy Personal Cloud Storage</h1>
      <p className={styles.greetingsSubtitle}>
        Save you photos and files to Storefy and access them from any device,
        anywhere
      </p>
      <div className={styles.greetingsButtonList}>
        <Button onClick={() => handleAuth("registration")} color="black">
          Get Started for Free
        </Button>
        <Button color="white">Plans and Pricing</Button>
      </div>
      <p className={styles.greetingsLogin}>
        Already have Storefy?{" "}
        <button onClick={() => handleAuth("login")}>Login</button>
      </p>
    </div>
  );
};

export default Greetings;

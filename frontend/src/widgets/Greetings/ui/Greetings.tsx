import { Dispatch, SetStateAction } from "react";
import styles from "./Greetings.module.scss";
import Button from "shared/ui/Button";

interface GreetingsProps {
  setAuthView: Dispatch<SetStateAction<string>>;
}

const Greetings: React.FC<GreetingsProps> = () => {
  return (
    <div className={styles.greetings}>
      <div className={styles.greetingsDescriptionWrapper}>
        <p className={styles.greetingsDescription}>
          <span>Easy</span> and <span>secure</span> access to your content
        </p>
      </div>

      <h1 className={styles.greetingsTitle}>
        Storefy Personal <br /> Cloud Storage
      </h1>
      <p className={styles.greetingsSubtitle}>
        Save you photos and files to Storefy and access <br /> them from any
        device, anywhere
      </p>
      <div className={styles.greetingsButtonList}>
        <Button color="black">Get Started for Free</Button>
        <Button color="white">Plans and Pricing</Button>
      </div>
      <p className={styles.greetingsLogin}>
        Already have Storefy? <button>Login</button>
      </p>
    </div>
  );
};

export default Greetings;

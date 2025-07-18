import { useDispatch } from "react-redux";
import styles from "./Registration.module.scss";
import { setAuthView } from "app/redux/slices/authSlice";

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
      <button
        onClick={() => {
          handleAuth("greetings");
        }}
      >
        back
      </button>
    </div>
  );
};

export default Registration;

import { useDispatch } from "react-redux";
import styles from "./Login.module.scss";
import { setAuthView } from "app/redux/slices/authSlice";
import Input from "shared/ui/Input";
import Button from "shared/ui/Button";

const Login = () => {
  const dispatch = useDispatch();
  const handleAuth = (view: string) => dispatch(setAuthView(view));

  return (
    <div className={styles.login}>
      <div className={styles.loginDescriptionWrapper}>
        <p className={styles.loginDescription}>
          <span>Store</span> anything, <span>access</span> it anywhere
        </p>
      </div>
      <h1 className={styles.loginTitle}>Login</h1>
      <Input title="email" type="email" className={styles.loginInput} />
      <Input title="password" type="password" className={styles.loginInput} />
      <Button className={styles.loginButtonPosition} color="black">
        Gotcha!
      </Button>

      <p className={styles.loginBack}>
        Don't have Storefy?{" "}
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

export default Login;

import Registration from "widgets/Registration";
import styles from "./AuthPage.module.scss";
import Greetings from "widgets/Greetings";
import Login from "widgets/Login";
import { useSelector } from "react-redux";
import { RootState } from "app/redux/store";

const AuthPage = () => {
  const view = useSelector((state: RootState) => state.auth.view);

  return (
    <div className={styles.authPage}>
      <div className={styles.authPageLeftSide}>
        {view === "greetings" && <Greetings />}
        {view === "registration" && <Registration />}
        {view === "login" && <Login />}
      </div>
      <div className={styles.authPageRightSide}>111</div>
    </div>
  );
};

export default AuthPage;

import Registration from "widgets/Registration";
import styles from "./AuthPage.module.scss";
import Greetings from "widgets/Greetings";
import { useState } from "react";
import Login from "widgets/Login";

const AuthPage = () => {
  const [authView, setAuthView] = useState("greetings");

  return (
    <div className={styles.authPage}>
      <div className={styles.authPageLeftSide}>
        {authView === "greetings" && <Greetings setAuthView={setAuthView} />}
        {authView === "registration" && <Registration />}
        {authView === "login" && <Login />}
      </div>
      <div className={styles.authPageRightSide}>111</div>
    </div>
  );
};

export default AuthPage;

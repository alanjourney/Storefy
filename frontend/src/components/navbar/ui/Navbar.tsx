import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={""} alt="logo" />
      <div className={styles.navbar__header}>Storefy</div>
      <div className={styles.navbar__login}>Login</div>
      <div className={styles.navbar__register}>Register</div>
    </div>
  );
};

export default Navbar;

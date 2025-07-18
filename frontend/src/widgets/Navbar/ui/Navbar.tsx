import { useState } from "react";
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/ui/AppLink";
import BurgerButton from "shared/ui/BurgerButton";
import Button from "shared/ui/Button";

const navItems = [
  { label: "Plans and Pricing", to: "" },
  { label: "About Us", to: "" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const renderNavItem = ({ label, to }: { label: string; to: string }) => (
    <div
      key={label}
      className={clsx(styles.navbarLinkWrapper, {
        [styles.open]: isMenuOpen,
      })}
    >
      <AppLink
        to={to}
        className={clsx(styles.navbarLink, {
          [styles.linkOpen]: isMenuOpen,
        })}
      >
        {label}
      </AppLink>
    </div>
  );

  const renderNavButton = (label: string, color: "white" | "black") => (
    <Button
      key={label}
      color={color}
      className={clsx(styles.navbarButton, {
        [styles.navbarButtonOpen]: isMenuOpen,
      })}
    >
      {label}
    </Button>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>Storefy</div>

      {navItems.map(renderNavItem)}

      <div
        className={clsx(styles.navbarLinkWrapper, styles.navbarButtonList, {
          [styles.open]: isMenuOpen,
        })}
      >
        {renderNavButton("Login", "white")}
        {renderNavButton("Get Started", "black")}
      </div>

      <BurgerButton
        isOpen={isMenuOpen}
        onClick={toggleMenu}
        className={styles.navbarBurgerPosition}
      />
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import styles from "./AppLink.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

interface AppLinkProps {
  to: string;
  children: ReactNode;
  className: string;
}

const AppLink: React.FC<AppLinkProps> = ({ to, children, className }) => {
  return (
    <Link to={to} className={clsx(styles.appLink, className)}>
      {children}
    </Link>
  );
};

export default AppLink;

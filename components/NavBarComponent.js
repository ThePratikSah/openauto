import styles from "../styles/Home.module.css";
import { Logo } from "./LogoComponent";
import { Menu } from "./MenuComponent";

// nav component
export function NavBar() {
  return (
    <nav className={styles.nav}>
        <Logo />
        <Menu />
      </nav>
  );
}
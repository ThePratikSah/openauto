import styles from "../styles/Home.module.css";
import { Hero } from './HeroComponent';
import { IconComponent } from './IconComponent';
import { MetaHead } from './MetaHeadComponent';
import { NavBar } from './NavBarComponent';
// head component
export function HeaderComponent() {
  return (
    <div className={styles.headContainer}>
      <MetaHead />
      <NavBar />
      <Hero />
      <IconComponent />
    </div>
  );
}
import styles from "../styles/Home.module.css";
import { FormComponent } from "./FormComponent";
import { HeroImageComponent } from "./HeroImageComponent";

// hero section
export function Hero() {
  return (
    <div className={styles.hero}>
      <FormComponent />
      <HeroImageComponent />
    </div>
  );
}

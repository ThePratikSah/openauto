import styles from "../styles/Home.module.css";
import { CustomForm } from "./CustomForm";

// left hero component
export function FormComponent() {
  return (
    <div className={styles.formComponent}>
      <h1>Vehicle Maintenance From The Comfort of Your Home</h1>
      <p>
        Open Auto Soothes the hassle of maintaining your vehicle and helps
        you deal with unexpected repairs worry-free.
      </p>
      <CustomForm />
    </div>
  );
}
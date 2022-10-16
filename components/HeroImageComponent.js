import styles from "../styles/Home.module.css";

// right hero component
export function HeroImageComponent() {
  return (
    <div className={styles.imageComp}>
      <img
        className={styles.image}
        src={"/assets/Pickup_Illustration.png"}
        alt={"Hero Image"}
      />
    </div>
  );
}
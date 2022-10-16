import styles from "../styles/Home.module.css";

// icon section
export function IconComponent() {
  return (
    <div className={styles.icons}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src="/assets/icons/fb.svg" alt="fb" />
        <img className={styles.icon} src="/assets/icons/ig.svg" alt="fb" />
        <img className={styles.icon} src="/assets/icons/in.svg" alt="fb" />
        <img className={styles.icon} src="/assets/icons/yt.svg" alt="fb" />
        <img className={styles.icon} src="/assets/icons/tw.svg" alt="fb" />
      </div>
    </div>
  );
}
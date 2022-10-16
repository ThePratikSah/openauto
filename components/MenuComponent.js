import styles from "../styles/Home.module.css";

// menu component
export function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.phone}>
        <img
          className={styles.phoneIcon}
          src={"/assets/icons/Phone.svg"}
          alt="Open Auto"
        />
        <span>+769 586 4558</span>
      </div>
      <div className={styles.email}>
        <img
          className={styles.emailIcon}
          src={"/assets/icons/email.svg"}
          alt="Open Auto"
        />
        <span>service@openauto.ca</span>
      </div>

      <button className={styles.outlinedButton}>
        Download the mobile app
      </button>
    </div>
  );
}
import styles from "../styles/Home.module.css";

// footer menu
export function FooterMenu() {
  return (
    <div className={styles.market_menu}>
      <div className={styles.market_phone}>
        <img
          className={styles.phoneIcon}
          src={"/assets/icons/Phone.svg"}
          alt="Open Auto"
        />
        <span>+769 586 4558</span>
      </div>
      <div className={styles.market_email}>
        <img
          className={styles.emailIcon}
          src={"/assets/icons/email.svg"}
          alt="Open Auto"
        />
        <span>service@openauto.ca</span>
      </div>
    </div>
  );
}
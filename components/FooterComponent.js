import styles from "../styles/Home.module.css";
import { FooterMenu } from "./FooterMenu";
import { Logo } from "./LogoComponent";

// footer component
export function FooterComponent() {
  return (
    <div className={styles.footContainer}>
      <div className={styles.topComponent}>
        <div className={styles.leftComp}>
          <img className={styles.phoneImage} src="/assets/pickup_service.png" alt="Pickup Service" />
        </div>
        <div className={styles.rightComp}>
          <div className={styles.rightCompChild}>
            <h1 className={styles.focusedText}>Focused on <br /> Time Saving</h1>
            <p className={styles.paraText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              impedit amet nostrum similique asperiores, labore suscipit
              laudantium aperiam dolores totam earum magni ipsa ad sunt culpa
              minima possimus quaerat temporibus?
              impedit nostrum similique asperiores, labore suscipit
              laudantium aperiam dolores totam earum magni ipsa ad sunt culpa
            </p>
            <button className={styles.downloadButton}>Download the mobile app</button>
          </div>
        </div>
        <div className={styles.rightComponent}></div>
      </div>
      <div className={styles.bottomComponent}>
        <div className={styles.market}>
          <Logo />
          <FooterMenu />
        </div>
        <div className={styles.iconComponentFooter}>
          <div className={styles.copyright}>
            <p>Open Auto @ all rights reserved</p>
          </div>
          <div className={styles.footer_options}>
            <span>Privacy Policy</span>
            <span>Terms of use</span>
            <span>Cookie Policy</span>
          </div>
          <div className={styles.iconFooter}>
            <div className={styles.footer_icons}>
              <div className={styles.footer_iconContainer}>
                <img
                  className={styles.icon}
                  src="/assets/icons/fb.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/ig.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/in.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/yt.svg"
                  alt="fb"
                />
                <img
                  className={styles.icon}
                  src="/assets/icons/tw.svg"
                  alt="fb"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
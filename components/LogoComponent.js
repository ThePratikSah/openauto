import Image from "next/image";
import styles from "../styles/Home.module.css";

// logo component
export function Logo() {
  return (
    <div className={styles.market_logo}>
      <Image
        src={"/assets/openauto.svg"}
        alt="Open Auto"
        width={250}
        height={40}
      ></Image>
    </div>
  );
}
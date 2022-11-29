import Image from "next/image";
import styles from "./introduce.module.scss";

export const Introduce = () => (
  <div className={styles.introduce}>
    <div className={styles.text}>
      <h1>Artur Romanchev</h1>
      <h2>Software Engineer at Businessolver</h2>
      <p>Frontend Developer, Software Engineer, Blockchain Developer.</p>
    </div>
    <Image width="140" height="140" alt="My photo" src="/portfolio-img.jpg" />
  </div>
);

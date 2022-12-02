import Link from "next/link";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "../../assets/Icons";
import styles from "./footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.social}>
      <li>
        <Link
          aria-label="Github profile"
          href="https://github.com/aromanchev"
          target="_blank"
        >
          <GithubIcon />
        </Link>
      </li>

      <li>
        <Link
          aria-label="Linkedin profile"
          href="https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%83%D1%80-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%87%D0%B5%D0%B2-3a2287189/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
      </li>
      <li>
        <Link
          aria-label="Telegram profile"
          href="https://t.me/aromanchevv"
          target="_blank"
        >
          <TelegramIcon />
        </Link>
      </li>
    </ul>
    <p className={styles.copyRight}>
      © Artur Romanchev {new Date().getFullYear()}
    </p>
  </footer>
);

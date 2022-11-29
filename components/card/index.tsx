import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "../../assets/Icons";
import styles from "./card.module.scss";

interface Card extends React.HTMLAttributes<HTMLDivElement> {
  month?: string;
  year: string;
  description: string;
  stack: string;
  href?: string;
  src?: string;
  alt?: string;
}

export const Card = ({
  href,
  title,
  year,
  month,
  description,
  stack,
  src,
  alt,
}: Card) => (
  <div className={styles.card}>
    <div className={styles.date}>
      <p>{year}</p>
      {month ? <p className={styles.month}>{month}</p> : null}
    </div>
    <div className={styles.info}>
      {src && alt ? <Image width="40" height="40" alt={alt} src={src} /> : null}
      {href ? (
        <Link className={styles.title} href={href} target="_blank">
          {title}
          <LinkIcon />
        </Link>
      ) : (
        <p className={styles.title}>{title}</p>
      )}
      <p className={styles.text}>{description}</p>
      <p>{stack}</p>
    </div>
  </div>
);

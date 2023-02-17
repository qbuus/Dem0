import styles from "./ArticleContent.module.css";
import Link from "next/link";
import { urlFor } from "../../LIB/client";

const ArticleContent = ({ content }) => {
  const { slug, title, images, name, maintext } = content;

  return (
    <div className={styles.card}>
      <div className={styles.cardRow}>
        <Link href={`/articles/${slug.current}`}>
          <div className={styles.cardTop}>
            <img
              src={urlFor(images[0])}
              alt={`Picture of ${name}`}
              height={146}
              width={220}
            />
          </div>
        </Link>
        <div className={styles.cardBottom}>
          <Link href={`/articles/${slug.current}`}>
            <div className={styles.BottomInfo}>
              <h2>{title}</h2>
              <p className={styles.additionalInfo}>{maintext}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;

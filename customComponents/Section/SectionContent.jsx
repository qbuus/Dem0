import React from "react";
import styles from "./SectionContent.module.css";
import Link from "next/link";
import { urlFor } from "../../LIB/client";

const SectionContent = ({ content }) => {
  const { slug, name, price, images, title1, alt } = content;

  return (
    <div className={styles.card}>
      <div className={styles.cardRow}>
        <Link href={`/products/${slug.current}`}>
          <div className={styles.cardTop}>
            <img
              src={urlFor(images[0])}
              alt={`${alt}`}
              height={146}
              width={220}
            />
          </div>
        </Link>
        <div className={styles.cardBottom}>
          <Link href={`/products/${slug.current}`}>
            <div className={styles.BottomInfo}>
              <h2>{name}</h2>
              <p className={styles.additionalInfo}>{title1}</p>
              <p className={styles.price}>{price}$</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;

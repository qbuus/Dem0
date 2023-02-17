import styles from "./MayLike.module.css";
import Link from "next/link";
import { urlFor } from "../../LIB/client";

const MayLike = ({ content }) => {
  return (
    <div className={styles.MayLikeContainer}>
      <h1>Chosen for you</h1>
      <div className={styles.cardContainer}>
        {content.map((value) => (
          <Link
            key={value._id}
            href={
              value.price
                ? `/products/${value.slug.current}`
                : `/articles/${value.slug.current}`
            }
          >
            <div>
              <img
                src={urlFor(value.images[0])}
                alt={`image of ${value.name}`}
              />
              <h2>{value.name}</h2>
              {value.price ? <p>{value.price}$</p> : <p>{value.subject}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MayLike;

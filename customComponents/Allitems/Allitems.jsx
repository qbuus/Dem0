import styles from "./Allitems.module.css";
import Link from "next/link";
import { urlFor } from "../../LIB/client";

const Allitems = ({ content }) => {
  return (
    <div className={styles.ItemsContainer}>
      {content.map((item) => (
        <Link
          href={
            item.price
              ? `/products/${item.slug.current}`
              : `/articles/${item.slug.current}`
          }
          key={item._id}
        >
          <div className={styles.ItemsCard}>
            <img src={urlFor(item.images[0])} alt={`image of ${item.name}`} />
            <div className={styles.ItemsDesc}>
              <h2>{item.name}</h2>
              {item.price ? <p>{item.price}$</p> : <p>{item.subject}</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Allitems;

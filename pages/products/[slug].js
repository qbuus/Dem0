import React, { useState } from "react";
import { client, urlFor } from "../../LIB/client";
import styles from "./[slug].module.css";
import { BsCart } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../../pagecontext/PageState";
import MayLike from "../../customComponents/Maylike/Maylike";
import Head from "next/head";

const ProductPage = ({ product, filtered }) => {
  const {
    price,
    detailsmain,
    title2,
    details1,
    details2,
    images,
    alt,
    title1,
    fats,
    carbs,
    protein,
  } = product;
  const [imageIndex, setImageIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <Head>
        <title>Check one of our best products ever</title>
        <meta
          name="description"
          content="Check out one of our best products. It is so popular that we often run out of ingredients. Hurry up!"
        />
      </Head>

      <div className={styles.ProductContainer}>
        <div className={styles.Product}>
          <div className={styles.ProductImages}>
            <img
              src={urlFor(images && images[imageIndex])}
              alt={alt}
              className={styles.ProductImage}
            />
            <div className={styles.ImageAdditional}>
              {images.map((image, index) => (
                <img
                  src={urlFor(image)}
                  alt={`small images of ${alt}`}
                  key={index}
                  onMouseEnter={() => setImageIndex(index)}
                  className={
                    index === imageIndex
                      ? `${styles.small} ${styles.active}`
                      : `${styles.small}`
                  }
                />
              ))}
            </div>
          </div>
          <div className={styles.ProductDescription}>
            <div className={styles.DescriptionRow}>
              <div className={styles.ProductAction}>
                <div>
                  <button onClick={() => onAdd(product, qty)}>
                    Add to cart
                    <div>
                      <BsCart />
                    </div>
                  </button>
                </div>
                <div className={styles.ProductCount}>
                  <div onClick={decQty}>
                    <AiOutlineMinus />
                  </div>
                  <div>
                    <p>{qty}</p>
                  </div>
                  <div onClick={incQty}>
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className={styles.price}>
                  Price: <span>{price}$</span>
                </div>
              </div>
              <div className={styles.Nutrition}>
                <h2>Per 100g of serving [g]</h2>
                <div className={styles.NutritionFacts}>
                  <div>
                    <p>Fats</p>
                    <span>{fats}</span>
                  </div>
                  <div>
                    <p>Carbs</p>
                    <span>{carbs}</span>
                  </div>
                  <div>
                    <p>Protein</p>
                    <span>{protein}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.DetailedInfo}>
              <p>{detailsmain}</p>
              <div>
                <h2>{title1}</h2>
                <p>{details1}</p>
              </div>
              <div>
                <h2>{title2}</h2>
                <p>{details2}</p>
              </div>
            </div>
          </div>
          <MayLike content={filtered} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "product" && slug.current == '${slug.toLowerCase()}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  const filtered = products.filter(
    (product) => product.slug.current.toLowerCase() !== slug
  );

  return {
    props: { product, filtered },
  };
}

export default ProductPage;

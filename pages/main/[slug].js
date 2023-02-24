import { urlFor, client } from "../../LIB/client";
import MayLike from "../../customComponents/Maylike/Maylike";
import styles from "./[slug].module.css";
import { BsCart } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useStateContext } from "../../pagecontext/PageState";
import Head from "next/head";

const RecipeBookPage = ({ banner, filtered }) => {
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <Head>
        <title>Our newest recipe book</title>
        <meta
          name="description"
          content="Our newest recipe book to help you out in cooking adventure. Don't you know what to eat ? Here is the answer you were looking for"
        />
      </Head>
      <div className={styles.ProductContainer}>
        <div className={styles.Product}>
          <div className={styles.ProductImages}>
            <img
              src={urlFor(banner.images[0])}
              alt={`image of ${banner.name}`}
              className={styles.ProductImage}
            />
          </div>
          <div className={styles.ProductDescription}>
            <div className={styles.DescriptionRow}>
              <div className={styles.ProductAction}>
                <div>
                  <button onClick={() => onAdd(banner, qty)}>
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
                  Price: <span>{banner.price}$</span>
                </div>
              </div>
            </div>
            <div className={styles.DetailedInfo}>
              <h3>{banner.desc}</h3>
              <div>
                <h2>Blank pages ready to be filled</h2>
                <img
                  src={urlFor(banner.images[1])}
                  alt={`image of ${banner.name}`}
                />
                <p>{banner.desc2}</p>
              </div>
              <div>
                <h2>All kinds of recipes</h2>
                <img
                  src={urlFor(banner.images[2])}
                  alt={`image of ${banner.name}`}
                />
                <p>{banner.desc3}</p>
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
  const query = `*[_type == "banner"] {
    slug {
        current
    }
  }`;

  const banner = await client.fetch(query);

  const paths = banner.map((banner) => ({
    params: {
      slug: banner.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "banner" && slug.current == '${slug.toLowerCase()}'][0]`;
  const articlesQuery = `*[_type == "article"]`;
  const productsQuery = `*[_type == "product"]`;

  const banner = await client.fetch(query);
  const articles = await client.fetch(articlesQuery);
  const products = await client.fetch(productsQuery);

  const filtered = articles.concat(products);

  return {
    props: { banner, filtered },
  };
}

export default RecipeBookPage;

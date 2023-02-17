import { urlFor, client } from "../../LIB/client";
import { MdOutlineTopic, MdCalendarToday } from "react-icons/md";
import styles from "./[slug].module.css";
import MayLike from "../../customComponents/Maylike/Maylike";

const ArticlePage = ({ articles, article, filtered }) => {
  const {
    images,
    date,
    title,
    subject,
    maintext,
    subtitle,
    subtext,
    subtitle2,
    subtext2,
    subtitle3,
    subtext3,
  } = article;

  return (
    <div className={styles.ArticleContainer}>
      <div className={styles.ArticleInfo}>
        <div>
          <MdOutlineTopic />
          <p>{subject}</p>
        </div>
        <div>
          <MdCalendarToday />
          <p>{date}</p>
        </div>
      </div>
      <div className={styles.Article}>
        <div className={styles.ArticleHeader}>
          <img
            src={urlFor(images[0])}
            alt={`picture of ${title}`}
            className={styles.img}
          />
        </div>
        <h1>{title}</h1>
        <div className={styles.ArticleDescription}>
          <div>
            <p>{maintext}</p>
          </div>
          <div>
            <h2>{subtitle}</h2>
            <img
              src={urlFor(images[1])}
              alt={`picture of ${subtitle}`}
              className={styles.img}
            />
            <p>{subtext}</p>
          </div>
          <div>
            <h2>{subtitle2}</h2>
            <img
              src={urlFor(images[2])}
              alt={`picture of ${subtitle2}`}
              className={styles.img}
            />
            <p>{subtext2}</p>
          </div>
          <div>
            <h2>{subtitle3}</h2>
            <img
              src={urlFor(images[3])}
              alt={`picture of ${subtitle3}`}
              className={styles.img}
            />
            <p>{subtext3}</p>
          </div>
        </div>
        <MayLike content={filtered} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "article"] {
    slug {
      current
    }
  }
  `;

  const articles = await client.fetch(query);

  const paths = articles.map((article) => ({
    params: {
      slug: article.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "article" && slug.current == '${slug.toLowerCase()}'][0]`;
  const articlesQuery = `*[_type == "article"]`;

  const article = await client.fetch(query);
  const articles = await client.fetch(articlesQuery);
  const filtered = articles.filter((article) => article.slug.current !== slug);

  return {
    props: { articles, article, filtered },
  };
}

export default ArticlePage;

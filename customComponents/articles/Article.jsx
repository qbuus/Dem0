import { Fragment } from "react";
import styles from "./Article.module.css";
import ArticleContent from "./ArticleContent";

const Article = ({ content, title }) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <section className={styles.wrapperBox}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.sectionContent}>
            {content.map((content) => (
              <ArticleContent content={content} key={content._id} />
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Article;

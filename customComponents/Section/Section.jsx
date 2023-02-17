import { Fragment } from "react";
import styles from "./Section.module.css";
import SectionContent from "./SectionContent";

const Section = ({ content, title }) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <section className={styles.wrapperBox}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.sectionContent}>
            {content.map((content) => (
              <SectionContent content={content} key={content._id} />
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Section;

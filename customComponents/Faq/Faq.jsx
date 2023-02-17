import { useState } from "react";
import styles from "./Faq.module.css";
import { FaqData } from "./FaqData";

const FQ = () => {
  const [toggle, setToggle] = useState(null);

  const toggleInfoHandler = (index) => {
    setToggle((prev) => {
      return prev === index ? null : index;
    });
  };

  return (
    <div className={styles["Faq"]}>
      <h1 className={styles["Faq-title"]}>Frequently asked questions</h1>
      <section className={styles["Faq-container"]}>
        {FaqData.map((data, index) => (
          <div className={styles["faq-body"]} key={index}>
            <h2
              className={styles["body-heading"]}
              onClick={() => toggleInfoHandler(index)}
            >
              {data.title}
            </h2>
            <div>
              <p
                className={styles["body-text"]}
                style={{
                  display: toggle === index ? "block" : "none",
                }}
              >
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FQ;

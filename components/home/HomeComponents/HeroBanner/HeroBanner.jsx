import { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";
import Link from "next/link";
import { urlFor } from "../../../../LIB/client";
import { BiDownArrowAlt } from "react-icons/bi";

export const HeroBanner = ({ bannerData }) => {
  const data = bannerData[0];

  const [infoActive, setInfoActive] = useState(false);

  const infoClickHandler = () => {
    setInfoActive((infoActive) => !infoActive);
  };

  useEffect(() => {
    const data = window.localStorage.getItem("infobox");
    if (data !== null) setInfoActive(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("infobox", infoActive);
  }, [infoActive]);

  return (
    <div className={styles.HeroBanner}>
      <div>
        <Link href={`/main/${data.slug.current}`}>
          <img src={urlFor(data.images[0])} alt={`image of ${data.name}`} />
        </Link>
      </div>
      <div className={styles.desc}>
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <div>
          <div
            className={styles.icon}
            onClick={infoClickHandler}
            style={{
              border: infoActive
                ? "1px solid var(--color-text-primary)"
                : "none",
            }}
          >
            <BiDownArrowAlt />
            <p>more information</p>
          </div>
          <p
            style={{
              opacity: infoActive ? "1" : "0",
              display: infoActive ? "block" : "none",
            }}
          >
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

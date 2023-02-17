import { Fragment } from "react";
import { HeroBanner } from "./HomeComponents/HeroBanner/HeroBanner";
import Section from "../../customComponents/Section/Section";
import Article from "../../customComponents/articles/Article";

const HomePage = ({ products, bannerData, articlesData }) => {
  return (
    <Fragment>
      <HeroBanner bannerData={bannerData.length && bannerData} />
      <Section
        content={products.length && products}
        title={"Featured Products"}
      />
      <Article
        content={articlesData.length && articlesData}
        title={"Featured Articles"}
      />
    </Fragment>
  );
};

export default HomePage;

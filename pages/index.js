import HomePage from "../components/home/HomePage";
import { client } from "../LIB/client";

const index = ({ products, bannerData, articles, contactUs }) => {
  return (
    <HomePage
      products={products}
      bannerData={bannerData}
      articlesData={articles}
      contactUs={contactUs}
    />
  );
};

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';
  const articlesQuery = '*[_type == "article"]';

  const products = await client.fetch(query);
  const bannerData = await client.fetch(bannerQuery);
  const articles = await client.fetch(articlesQuery);

  return {
    props: { products, bannerData, articles },
  };
}

export default index;

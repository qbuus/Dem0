import HomePage from "../components/home/HomePage";
import { client } from "../LIB/client";
import Head from "next/head";

const index = ({ products, bannerData, articles, contactUs }) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Shop food read food related articles"
        />
      </Head>
      <HomePage
        products={products}
        bannerData={bannerData}
        articlesData={articles}
        contactUs={contactUs}
      />
    </div>
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

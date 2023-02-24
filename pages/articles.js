import { Fragment } from "react";
import { client } from "../LIB/client";
import Allitems from "../customComponents/Allitems/Allitems";
import Head from "next/head";

const products = ({ articles }) => {
  return (
    <Fragment>
      <Head>
        <title>Food Articles & Healthy Cooking Tips</title>
        <meta
          name="description"
          content="Read food related articles. Healthy lifestyle tips"
        />
      </Head>
      <Allitems content={articles} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const query = `*[_type == 'article']`;

  const articles = await client.fetch(query);

  return {
    props: { articles },
  };
}

export default products;

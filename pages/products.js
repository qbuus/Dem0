import { Fragment } from "react";
import { client } from "../LIB/client";
import Allitems from "../customComponents/Allitems/Allitems";
import Head from "next/head";

const products = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <title>Buy our best products</title>
        <meta
          name="description"
          content="Buy our finest products. All good are waiting for you. Do you want to eat something healthy and tasty at the same time ? Check it out"
        />
      </Head>
      <Allitems content={products} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const query = `*[_type == 'product']`;

  const products = await client.fetch(query);

  return {
    props: { products },
  };
}

export default products;

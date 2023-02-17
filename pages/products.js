import { Fragment } from "react";
import { client } from "../LIB/client";
import Allitems from "../customComponents/Allitems/Allitems";

const products = ({ products }) => {
  return (
    <Fragment>
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

import { Fragment } from "react";
import { client } from "../LIB/client";
import Allitems from "../customComponents/Allitems/Allitems";

const products = ({ articles }) => {
  return (
    <Fragment>
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

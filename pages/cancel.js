import { Fragment } from "react";
import CancelComponent from "../customComponents/Cancel/Cancel";
import Head from "next/head";

const Cancel = () => {
  return (
    <Fragment>
      <Head>
        <title>Purchase failed</title>
        <meta
          name="description"
          content="Your purchase failed, try buying it one more time"
        />
      </Head>
      <CancelComponent />
    </Fragment>
  );
};

export default Cancel;

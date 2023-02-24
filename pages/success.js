import { Fragment } from "react";
import SuccessComponent from "../customComponents/Success/Success";
import Head from "next/head";

const Success = () => {
  return (
    <Fragment>
      <Head>
        <title>Thank you for your purchase!</title>
        <meta
          name="description"
          content="Thank you for your purchase. All products will be delivred in the best possible way"
        />
      </Head>
      <SuccessComponent />
    </Fragment>
  );
};

export default Success;

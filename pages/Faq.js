import FQ from "../customComponents/Faq/Faq";
import React from "react";
import Head from "next/head";

const Faq = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Frequently asked questions</title>
        <meta
          name="description"
          content="Answer to everything you want to know. You have a question ? There is your asnwer"
        />
      </Head>
      <FQ />
    </React.Fragment>
  );
};

export default Faq;

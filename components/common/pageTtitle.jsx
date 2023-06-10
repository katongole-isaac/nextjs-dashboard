/**
 * Page Title Component - Used to set page title
 *
 */

import Head from "next/head";
import React from "react";

const PageTitle = ({ title, classes, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title> {title} </title>
      </Head>
      <div className={`py-1 ${classes}`}>
        <h3> {title} </h3>
        {children}
      </div>
    </React.Fragment>
  );
};

export default PageTitle;

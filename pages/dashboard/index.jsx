/**
 * Hone page for the App.
 *
 */

import React from "react";

import DashboardLayout from "@/components/dashboard/layout";
import PageTitle from "@/components/common/pageTtitle";


export default function Home({ children }) {
  return (
    <React.Fragment>
      <PageTitle title={"Dashboard"} />
    </React.Fragment>
  );
}

Home.getLayout = function(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

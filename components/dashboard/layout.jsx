/**
 * Dashboard Layout
 *
 */

import React from "react";
import Head from "next/head";

import Sidebar from "@/components/sidebar/sidebarNav";
import TopNav from "./topNav";

import styles from "./layout.module.css";

const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="mainDash d-flex vh-100 vw-75 p-0">
        <Sidebar />
        <div className={` ${styles.dashboardContainer}`}>
          <div className={`${styles.topNav} sticky-top shadow-sm `}>
            <TopNav />
          </div>
          <div className={`${styles.mainContainer} `}>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;

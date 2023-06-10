/**
 * NavBar Component
 *
 */

import React from "react";


import Menu from "./menu";

import SidebarHeader from "./sidebarHeader";

import styles from "../../styles/navbar.module.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className={` ${styles.drawer}`}>
        <SidebarHeader />
        <Menu />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

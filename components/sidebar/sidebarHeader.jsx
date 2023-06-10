/**
 * Sidebar Header Component
 *
 */

import Image from "next/image";

import { Card, CardBody } from "../common/card";

import Logo from "../../public/images/icons/icons8-logo.svg";

import styles from "../../styles/navbar.module.css";

const SidebarHeader = () => {
  return (
    <div className="navbar-heading p-2">
      <div className="navbar-brand">
        <Image src={Logo} alt="logo" />
      </div>
      <div className={styles.navbarCard}>
        <Card>
          <CardBody classes="py-2">
            <h5 className="mb-0"> Isaac</h5>
            <small className="d-inlin-block text-muted"> Production</small>
          </CardBody>
        </Card>
      </div>

      <hr className="mt-4" />
    </div>
  );
};

export default SidebarHeader;

/**
 * Menu Item -
 *
 */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import * as menuConfig from "./sidebar.config";

import styles from "../../styles/navbar.module.css";

const MenuItem = ({ label, icon, alt, href }) => {
  const router = useRouter();
  
  const { DefaultIconColor, ActiveIconColor } = menuConfig;

  const activeLink = router.pathname === href ? styles.active : "";

  if (activeLink) icon = icon.replace(DefaultIconColor, ActiveIconColor);

  const classes = ` ${styles.menuItem} ${activeLink} `;

  console.log(icon);
  return (
    <Link
      href={href}
      className={` ${classes} mt-1 `}
      style={{
        textDecoration: "none",
      }}
    >
      <Image width="24" height="24" src={icon} alt={alt} />

      <div className={`${styles.label}`}> {label}</div>
    </Link>
  );
};

export default MenuItem;

/**
 * Menu - Menu List
 *
 */

//  #6C757D

import menuConfig from './sidebar.config'

const  { DefaultIconColor: defaultIconColor } = menuConfig;

const menu = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: `https://img.icons8.com/material/24/${defaultIconColor}/bar-chart--v1.png`,
    alt: "bar-chart--v1",
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: `https://img.icons8.com/ios-glyphs/30/${defaultIconColor}/user-group-man-man.png`,
    alt: "user-group-icon",
  },
  {
    label: "Companies",
    href: "/dashboard/companies",
    icon: `https://img.icons8.com/ios-filled/50/${defaultIconColor}/company.png`,
    alt: "company-icon",
  },
  {
    label: "Account",
    href: "/dashboard/account",
    icon: `https://img.icons8.com/ios-filled/50/${defaultIconColor}/gender-neutral-user.png`,
    alt: "guest-male",
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: `https://img.icons8.com/ios-filled/50/${defaultIconColor}/settings.png`,
    alt: "settings-icon",
  },
  {
    label: "Login",
    href: "/auth/login",
    icon: `https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/${defaultIconColor}/external-power-personal-computer-tanah-basah-glyph-tanah-basah.png`,
    alt: "power-off-icon",
  },
  {
    label: "Register",
    href: "/auth/register",
    icon: `https://img.icons8.com/ios-filled/50/${defaultIconColor}/add-user-male.png`,
    alt: "add-user-icon",
  },
  {
    label: "Error",
    href: "/404",
    icon: `https://img.icons8.com/ios-filled/50/${defaultIconColor}/cancel.png`,
    alt: "error-icon",
  },
];

export default menu;

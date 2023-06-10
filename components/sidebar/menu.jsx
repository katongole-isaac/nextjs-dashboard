/**
 * Menu Component
 *
 */

import menu from "./menu-item-lists";

import MenuItem from './menuItem';

const Menu = () => {

  return (
    <nav>
      {menu.map((item) => (
        <MenuItem key={item.alt} {...item} />
      ))}
    </nav>
  );

};

export default Menu;


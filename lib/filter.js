/**
 * Filter logic
 *
 */

import _ from "lodash";

export const filter = (items, path, searchQuery) => {

  return  _.filter(items, (item) =>
    item[path].toLowerCase().includes(searchQuery, 0)
  );


};

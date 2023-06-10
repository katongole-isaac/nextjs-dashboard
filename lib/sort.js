/**
 * Sorting logic
 *
 */

import _ from "lodash";

export default function sort(items, path, order) {
  return _.orderBy(items, [path], [order]);
}

/**
 * Pagination logic
 *
 */

// totalCount
// pageSize
// currentPage

import _ from "lodash";

export const pages = (totalCount, pageSize) =>
  _.range(1, Math.ceil(totalCount / pageSize) + 1);

export const paginate = (items, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
};

export default {
  pages,
  paginate,
};

/**
 * Pagination
 *
 */

import { pages } from "../../lib/paginate";

const Pagination = ({ totalCount, pageSize, currentPage, onPageChange }) => {
  const pagesBtns = pages(totalCount, pageSize);
  return (
    <ul className="pagination">
      {pagesBtns.length > 1
        ? pagesBtns.map((page) => (
            <li
              key={page}
              className={`page-item clickable ${
                page === currentPage ? "active" : ""
              }`}
            >
              <span className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </span>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Pagination;

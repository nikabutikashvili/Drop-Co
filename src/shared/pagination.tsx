import React from "react";
import _ from "lodash";

export interface pagination {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange(number: number): void;
}
const Pagination = (props: pagination) => {
  console.log(props.currentPage);
  const pagesCount: number = Math.ceil(props.itemsCount / props.pageSize);
  const pages: Array<number> = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === props.currentPage ? "page-item active" : "page-item"
            }
          >
            <a onClick={() => props.onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

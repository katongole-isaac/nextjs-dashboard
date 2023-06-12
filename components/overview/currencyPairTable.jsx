/**
 * Currency Pair Table Component
 *
 *
 */

import React, { useState } from "react";

import TableHeader from "../common/table/tableHeader";
import TableNoResults from "../common/table/tableNoResults";
import TableBody from "../common/table/tableBody";

import sort from "@/lib/sort";
import { signalColors } from "./color";
import Pagination from "../common/pagination";
import { paginate } from "@/lib/paginate";
import SearchBox from "../common/searchBox";
import { filter } from "@/lib/filter";

const CurrencyPairTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");

  const [sortOptions, setSortOptions] = useState({
    path: "currencyPair",
    order: "asc",
  });

  const handleSort = (sort) => {
    setSortOptions(sort);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value.toLowerCase().trim());
    setCurrentPage(1);
  };

  const columns = [
    {
      title: "Currency Pair",
      path: "currencyPair",
    },
    {
      title: "Ask Price",
      path: "askPrice",
    },
    {
      title: "Bid Price",
      path: "bidPrice",
    },
    {
      title: "Base Volumne",
      path: "baseVolume",
    },
    {
      title: "Quote Volumne",
      path: "quoteVolume",
    },
    {
      title: "Change",
      path: "changeFromPrevious",
      content: ({ changeFromPrevious: value }) => {
        let color = value > 0 ? signalColors[1] : signalColors[0];
        return (
          <span
            className="p-1 border rounded text-white font-weight-bold"
            style={{ background: color }}
          >
            {value}
          </span>
        );
      },
    },
  ];

  const filterByCurrencyPair = () => {
    return filter(data, "currencyPair", searchQuery);
  };

  let sortTableData = sort(
    filterByCurrencyPair(),
    sortOptions.path,
    sortOptions.order
  );

  let tableData = paginate(sortTableData, pageSize, currentPage);

  return (
    <React.Fragment>
      <div className="">
        <SearchBox
          searchQuery={searchQuery}
          onChange={handleSearchQuery}
          placeHolder="search by currency pair..."
        />
      </div>
      <div className="pages d-flex justify-content-end align-items-center">
        <p className="font-weight-bold"> Pages: </p>
        <Pagination
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
      <div className="table-wrapper">
        <table className="table table-striped">
          <TableHeader
            columns={columns}
            sortOptions={sortOptions}
            onSort={handleSort}
          />
          {tableData.length === 0 ? (
            <TableNoResults msg="such currency pair " />
          ) : (
            <TableBody data={tableData} columns={columns} />
          )}
        </table>
      </div>
      <div className="d-flex align-items-center py-2">
        <span className="">Number of Pages:</span>
        <Pagination
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </React.Fragment>
  );
};

export default CurrencyPairTable;

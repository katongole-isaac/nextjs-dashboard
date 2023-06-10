/**
 * Customers Page
 *
 */
import React, { useState } from "react";

import PageTitle from "@/components/common/pageTtitle";
import DashboardLayout from "@/components/dashboard/layout";
import FullName from "@/components/common/table/fullName";
import Pagination from "@/components/common/pagination";
import Select from "@/components/common/select";
import SearchBox from "@/components/common/searchBox";
import TableHeader from "@/components/common/table/tableHeader";
import TableBody from "@/components/common/table/tableBody";
import TableNoResults from "@/components/common/table/tableNoResults";

import { paginate } from "../../lib/paginate";
import { filter } from "@/lib/filter";
import sort from "@/lib/sort";
import http from "@/services/httpService";

const apiEndpoint = "https://dummyjson.com/users";


const Customers = ({ data }) => {
  const rows = [5, 6, 7, 10]; // For pagination purposes.


  const [allUsers, setAllUsers] = useState(data.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const [sortOptions, setSortOptions] = useState({
    path: "firstName",
    order: "asc",
  });

  const columns = [
    {
      title: "",
      content: () => <input type="checkbox" />,
    },
    {
      title: "FullName",
      path: "firstName",
      content: (user) => (
        <FullName
          firstName={user.firstName}
          lastName={user.lastName}
          profileImage={user.image}
        />
      ),
    },
    { title: "Email", path: "email" },
    { title: "Phone", path: "phone" },
    { title: "CardNumber", path: "bank.cardNumber" },
    {
      title: "",
      content: (user) => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </button>
      ),
    },
  ];

  const handleDelete = async (id) => {
    const users = [...allUsers];

    setAllUsers(users.filter((user) => user.id !== id));

    try {
      await http.delete(`${apiEndpoint}/${id}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This user has already been deleted");

      setAllUsers(users);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectChange = ({ target }) => {
    setpageSize(target.value);
    setCurrentPage(1);
  };

  const handleSort = (path) => {
    if (path === "") return;

    if (path !== sortOptions.path)
      return setSortOptions((prev) => ({ ...prev, path }));

    setSortOptions((prev) => ({
      ...prev,
      order: prev.order === "asc" ? "desc" : "asc",
    }));
  };

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value.toLowerCase().trim());
    setCurrentPage(1);
  };

  const filterByFullName = () => {
    return [
      ...new Set([
        ...filter(allUsers, "firstName", searchQuery),
        ...filter(allUsers, "lastName", searchQuery),
      ]),
    ];
  };

  let filteredUsers = sort(
    filterByFullName(),
    sortOptions.path,
    sortOptions.order
  );

  let users = paginate(filteredUsers, pageSize, currentPage);

  return (
    <React.Fragment>
      <PageTitle title={"Customers"} classes="mb-4" />

      <SearchBox
        searchQuery={searchQuery}
        onChange={handleSearchQuery}
        placeHolder="search by fullname..."
      />
      <div className="d-flex justify-content-between align-items-center ">
        <p className="font-weight-bold">
          Showing {filteredUsers.length} users from the database
        </p>

        <button className="btn btn-sm btn-primary align-self-start ">
          <i className="fa fa-plus " aria-hidden="true"></i>
          <span className="font-weight-bold"> Add</span>
        </button>
      </div>
      <div className="table-wrapper">
        <table className="table table-striped">
          <TableHeader
            columns={columns}
            onSort={handleSort}
            sortOptions={sortOptions}
          />
          {users.length === 0 ? (
            <TableNoResults />
          ) : (
            <TableBody data={users} columns={columns} onDelete={handleDelete} />
          )}
        </table>
      </div>

      <div className="d-flex align-items-center justify-content-between  px-2">
        <div className="d-flex align-items-center">
          <span className="">Number of Pages:</span>
          <Pagination
            totalCount={filteredUsers.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>

        <div className="d-flex align-items-center">
          <span className="font-weight-bold">Rows:</span>
          <Select
            onChange={handleSelectChange}
            value={pageSize}
            options={rows}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Customers;

// For layout purposes.
Customers.getLayout = (page) => <DashboardLayout> {page} </DashboardLayout>;

export async function getStaticProps() {
  const { data } = await http.get(apiEndpoint);

  // throw new Error('Something wrong happened');

  return {
    props: { data },
  };
}

// Customers.

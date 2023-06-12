/**
 * Customers Page
 *
 */

import React, { useEffect, useRef, useState } from "react";

import PageTitle from "@/components/common/pageTtitle";
import DashboardLayout from "@/components/dashboard/layout";
import CompanyCard from "@/components/companies/companyCard";

import http from "@/services/httpService";
import defaultsUrls from "../../config/defaults.json";

const { companyInfoApiEndpoint } = defaultsUrls;

const Companies = ({ companiesData }) => {
  const [companies, setCompanies] = useState([]);

  const [draggableIndex, setDragIndex] = useState(null);

  const draggableRef = useRef();

  const dropZoneRef = useRef();

  const iconRef = useRef();

  useEffect(() => {
    setCompanies(companiesData["companies"]);
  }, [companiesData]);

  const handleStartDrag = function (e, index) {
    setDragIndex(index);

    draggableRef.current = e.target;

    e.dataTransfer.dropEffect = "move";

    setTimeout(() => {
      draggableRef.current.style.display = "none";
    });
  };

  const handleEndDrag = function (e) {
    draggableRef.current.style.display = "block";

    dropZoneRef.current = null;
  };

  const handleDrop = function (e, index) {
    e.preventDefault();

    dropZoneRef.current.style.background = "transparent";
    dropZoneRef.current.style.border = "none";

    if (draggableIndex === index) return;

    let swap;
    let companiesCopy = [...companies];

    swap = companiesCopy[draggableIndex];

    companiesCopy[draggableIndex] = companiesCopy[index];
    companiesCopy[index] = swap;

    setCompanies(companiesCopy);
  };

  const handleDragOver = function (e, index) {
    e.preventDefault();

    dropZoneRef.current = e.currentTarget;

    dropZoneRef.current.style.background = "rgba(0,0,0,0.1)";
    dropZoneRef.current.style.border = "2px dashed #eee";
  };

  const handleDragLeave = (e) => {
    dropZoneRef.current.style.background = "rgba(0,0,0,0.1)";
    dropZoneRef.current.style.border = "none";
  };

  return (
    <React.Fragment>
      <PageTitle
        title={"Companies"}
        classes="d-flex justify-content-between align-items-center "
      >
        <small className="font-weight-bold">
          <i
            className="fa fa-info-circle mr-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Tooltip on top"
            aria-hidden="true"
            ref={iconRef}
          ></i>
          <span>These cards are draggable</span>
        </small>
      </PageTitle>
      <div className="d-flex flex-wrap w-100">
        {companies.map((company, index) => (
          <CompanyCard
            key={company.id}
            index={index}
            {...company}
            draggableRef={draggableRef}
            dropZoneRef={dropZoneRef}
            handleStartDrag={handleStartDrag}
            handleEndDrag={handleEndDrag}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Companies;

// For layout purposes.

Companies.getLayout = (page) => <DashboardLayout> {page} </DashboardLayout>;

export async function getServerSideProps() {
  const { data: companiesData } = await http.get(companyInfoApiEndpoint);

  return {
    props: {
      companiesData,
    },
  };
}

/**
 * Hone page for the App.
 *
 */

import React from "react";

import _ from "lodash";

import DashboardLayout from "@/components/dashboard/layout";
import PageTitle from "@/components/common/pageTtitle";
import TopCard from "@/components/overview/topCard";
import BarGraph from "@/components/overview/barGraph";
import { Card, CardBody } from "@/components/common/card";
import PieChart from "@/components/overview/pieChart";
import CurrencyPairTable from "@/components/overview/currencyPairTable";

import http from "@/services/httpService";
import defaultsUrls from "../../config/defaults.json";

const { bitcoinApiEndpoint } = defaultsUrls;

export default function Home({ data }) {
  let currencyPairs = _(data).slice(1, 10).take(4).value();

  let topCards = [
    {
      id: "usd-dollar",
      icon: () => <i className="fa fa-usd" aria-hidden="true"></i>,
      iconBg: "#F04438",
      // currencyPair
    },

    {
      id: "Btc-currency",
      icon: () => <i className="fa fa-btc" aria-hidden="true"></i>,
      iconBg: "#F79009",
    },
    {
      id: "Euro-dollar",
      icon: () => <i className="fa fa-eur" aria-hidden="true"></i>,
      iconBg: "#10B981",
    },
    {
      id: "Japanese-jyp",
      icon: () => <i className="fa fa-jpy" aria-hidden="true"></i>,
      iconBg: "#6366F1",
    },
  ];

  topCards = topCards.map((card, idx) => ({ ...card, ...currencyPairs[idx] }));

  return (
    <React.Fragment>
      <PageTitle title={"Dashboard"} />

      <div className="d-flex flex-wrap">
        {topCards.map((card) => (
          <TopCard key={card.id} {...card} />
        ))}
      </div>

      <div className="container-fluid pt-4 px-0">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <Card classes="rounded-0">
              <CardBody>
                <div>
                  <p className="font-weight-bold">Trades</p>
                </div>
                <BarGraph data={data} />
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-4 py-4">
            <Card classes="rounded-0">
              <CardBody>
                <div>
                  <p className="font-weight-bold">Base Volumes</p>
                  <PieChart data={topCards} />
                </div>
              </CardBody>
            </Card>
          </div>

          <div className=" py-4 w-100  col-sm-12 ">
            <Card classes="rounded-0">
              <CardBody>
                <div>
                  <p className="font-weight-bold">
                    Forex Currency Pair Status [
                    {new Date(data[0].created).toLocaleTimeString()} ]
                  </p>
                  <CurrencyPairTable data={data} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Home.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export async function getServerSideProps() {
  const { data: result } = await http.get(bitcoinApiEndpoint);

  console.log(result);

  return {
    props: {
      data: result,
    },
  };
}
/**
 * Top Card Component
 *
 */

import React from "react";
import { Card, CardBody } from "../common/card";

import styles from "./styles.module.css";
import { signalColors } from "./color";

// const signalColors = ["#F04438", "#10B981"]; // red and green

const TopCard = (props) => {
  const {
    icon,
    iconBg,
    currencyPair,
    lastTradedPrice,
    askPrice,
    changeFromPrevious: previous,
  } = props;

  const isNegative = (value) => parseFloat(value) < 0;

  return (
    <React.Fragment>
      <Card style={{ width: "18rem" }} classes="rounded-0">
        <CardBody classes="pb-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="head-section ">
              <small className="font-weight-bold text-muted text-uppercase">
                {currencyPair}
              </small>
              <p
                className="mt-2 font-weight-bold"
                style={{ fontSize: "24px", letterSpacing: "1px" }}
              >
                ${askPrice}
              </p>
            </div>
            <div className={styles.circle} style={{ background: iconBg }}>
              {icon()}
            </div>
          </div>

          <div className="actions d-flex mb-2 align-items-center ">
            <div
              style={{
                color: isNegative(previous) ? signalColors[0] : signalColors[1],
              }}
            >
              <span
                style={{
                  fonteSize: "20px",
                }}
              >
                <i
                  className={`fa fa-long-arrow-${
                    isNegative(previous) ? "down" : "up"
                  } mr-1" aria-hidden="true`}
                ></i>
              </span>
              <span> {previous} </span>
            </div>
            <div> | </div>
            <div className=" d-flex align-items-center flex-column justify-content-center">
              <p
                className="position-relative"
                style={{
                  top: ".5em",
                }}
              >
                <span className="text-muted"> LastTradedPrice:</span>
                <span> {lastTradedPrice.substring(0, 5)}</span>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default TopCard;

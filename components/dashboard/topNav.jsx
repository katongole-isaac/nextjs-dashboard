/**
 * Dashboard top Nav
 *
 */
import React from "react";

import Image from "next/image";
import Input from "../common/input";

const TopNav = () => {
  return (
    <React.Fragment>
      <div
        className={` w-100 h-100  d-flex align-items-center justify-content-between px-2  top-nav `}
      >
        <div className="left-plane">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <Image
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-outlined/24/search--v1.png"
                  alt="search--v1"
                />
              </span>
              <Input placeholder="Search..." />
            </div>
          </div>
        </div>

        {/* Right Plane */}
        <div className="right-plane  h-100 d-flex align-items-center flexGap justify-content-around">
          <Image
            width="24"
            height="24"
            className="clickable"
            src="https://img.icons8.com/material-rounded/24/808080/appointment-reminders.png"
            alt="appointment-reminders"
          />
          <Image
            width="24"
            height="24"
            className="clickable"
            src="https://img.icons8.com/ios-glyphs/30/808080/user-group-man-woman.png"
            alt="user-group-man-woman"
          />
          <div className="circle clickable">
            <Image
              width="120"
              height="120"
              src="https://img.icons8.com/fluency/240/user-female-circle.png"
              alt="user-female-circle"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopNav;

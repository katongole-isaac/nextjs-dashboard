/**
 * Account Component
 *
 */

import React from "react";

import Form from "@/components/common/form";
import Profile from "@/components/account/profile";
import AccountForm from "@/components/account/accountForm";
import DashboardLayout from "@/components/dashboard/layout";
import PageTitle from "@/components/common/pageTtitle";

class Account extends Form {
  render() {
    return (
      <React.Fragment>
        <PageTitle  title={"My Account"} />
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <Profile />
            </div>
            <div className="col-md-8">
              <AccountForm />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;

Account.getLayout = function (page) {
  return <DashboardLayout> {page} </DashboardLayout>;
};

/**
 * Settings Page
 *
 */

import React from "react";

import SettingCard from "@/components/settings/cardSettings";
import PasswordCard from "@/components/settings/cardPassword";
import DashboardLayout from "@/components/dashboard/layout";
import PageTitle from "@/components/common/pageTtitle";

const Setting = () => {
  return (
    <React.Fragment>
      <PageTitle title={"Settings"} />
      <SettingCard />
      <PasswordCard />
     
    </React.Fragment>
  );
};

export default Setting;

Setting.getLayout = function (page) {
  return <DashboardLayout> {page} </DashboardLayout>;
};

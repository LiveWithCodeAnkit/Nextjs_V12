import React from "react";
import { Dashboard } from "@modules/dashboard";
import { Layout } from "@modules/layout";
import { AuthRestrict } from "@modules/layout/Layout";

const DashboardPage = () => {
  return (
    <Layout forbiddenWhen={AuthRestrict.LOGGED_OUT}>
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;

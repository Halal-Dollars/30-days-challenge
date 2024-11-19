import React from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const AdminLogin = dynamic(() => import("../components/AdminLogin"), {
  ssr: false,
});

const AdminDashboard = () => {
  return (
    <Layout>
      <AdminLogin />
    </Layout>
  );
};

export default AdminDashboard;

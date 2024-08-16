import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Admin from "../components/Admin";

export const getStaticProps: GetStaticProps = async () => {
  const feed = [
    {
      id: "1",
      title: "Prisma is the perfect ORM for Next.js",
      content:
        "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
      published: false,
      author: {
        name: "Nikolas Burk",
        email: "burk@prisma.io",
      },
    },
  ];
  return {
    props: { feed },
    revalidate: 10,
  };
};

const AdminDashboard = () => {
  return (
    <Layout>
      <Admin />
    </Layout>
  );
};

export default AdminDashboard;

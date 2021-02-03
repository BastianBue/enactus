import React from "react";

import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";

import "../css/styles.css";
import "../css/bootstrap.min.css";

function HomePage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default HomePage;

import React from "react";

import Layout from "../components/Layout/Layout";
import Gallery from "../components/Gallery/Gallery";

import "../css/styles.css";
import "../css/bootstrap.min.css";

function GalleryPage() {
  return (
    <Layout>
      <Gallery />
    </Layout>
  );
}

export default GalleryPage;

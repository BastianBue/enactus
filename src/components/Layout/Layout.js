import React, { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { addNavbarTogglers } from "../../js/sidebar";

function Layout(props) {
  useEffect(addNavbarTogglers, []);

  return (
    <div
      id='content'
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        minHeight: "100vh",
      }}>
      <div style={{ flexGrow: "1" }}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

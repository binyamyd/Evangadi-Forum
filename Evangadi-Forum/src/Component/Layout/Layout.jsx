import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Layout/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container_all">
      <Header />
      <main className="main_content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

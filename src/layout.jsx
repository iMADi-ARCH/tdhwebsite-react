import React from "react";
import Nav from "./components/shared/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="">{children}</main>
    </>
  );
};

export default Layout;

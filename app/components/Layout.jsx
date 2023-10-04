import React from "react";
import Header from "./Header";
import dynamic from "next/dynamic";
const DynamicFooter = dynamic(() => import("./Footer"), {
  ssr: false,
});
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <DynamicFooter />
    </>
  );
};

export default Layout;

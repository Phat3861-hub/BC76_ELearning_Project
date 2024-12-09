import React from "react";
import HeaderTemplate from "./components/HeaderTemplate/HeaderTemplate";
import FooterTemplate from "./components/FooterTemplate/FooterTemplate";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;

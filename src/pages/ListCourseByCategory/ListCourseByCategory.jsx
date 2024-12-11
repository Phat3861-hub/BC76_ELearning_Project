import React, { useEffect, useState } from "react";
import CategoryHeader from "./components/CategoryHeader";
import CategoryBanner from "./components/CategoryBanner";
import CategoryCarousel from "./components/CategoryCarousel";
import { useLocation, useParams } from "react-router-dom";
import { KhoaHocService } from "../../services/khoaHoc.service";
import ListJobByCategory from "./components/ListJobByCategory";
import CategoryCompany from "./components/CategoryCompany";

const ListCourseByCategory = () => {
  const location = useLocation();
  // Lấy `name` từ query string
  const query = new URLSearchParams(location.search);
  const maDanhMuc = query.get("maDanhMuc");
  const categoryMapping = {
    BackEnd: "Lập trình Backend",
    Design: "Thiết kế Web",
    DiDong: "Lập trình di động",
    FrontEnd: "Lập trình Front end",
    FullStack: "Lập trình Full Stack",
    TuDuy: "Tư duy lập trình",
  };
  const tenDanhMuc = categoryMapping[maDanhMuc];

  return (
    <>
      <CategoryHeader category={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryBanner category={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryCarousel />
      <ListJobByCategory maDanhMuc={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryCompany />
    </>
  );
};

export default ListCourseByCategory;

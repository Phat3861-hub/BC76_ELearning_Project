import React, { useEffect, useState } from "react";
import CategoryHeader from "./components/CategoryHeader";
import CategoryBanner from "./components/CategoryBanner";
import CategoryCarousel from "./components/CategoryCarousel";
import { useLocation, useParams } from "react-router-dom";
import { KhoaHocService } from "../../services/khoaHoc.service";
import ListJobByCategory from "./components/ListJobByCategory";
import CategoryCompany from "./components/CategoryCompany";
import NewPostCarousel from "./components/NewPostCarousel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { Input } from "antd";
import { div } from "framer-motion/client";
const ListCourseByCategory = () => {
  const location = useLocation();
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
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "", // Trường taiKhoan (email)
        matKhau: "", // Trường matKhau (password)
      },
      onSubmit: (values) => {
        nguoiDungService
          .signIn(values)
          .then((res) => {
            localStorage.setItem("userInfo", JSON.stringify(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống!"), // Kiểm tra bắt buộc
        matKhau: Yup.string().required("Vui lòng không bỏ trống!"), // Kiểm tra bắt buộc mật khẩu
      }),
    });
  return (
    <div>
      <CategoryHeader category={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryBanner category={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryCarousel />
      <ListJobByCategory maDanhMuc={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryCompany />
      <NewPostCarousel />
    </div>
  );
};

export default ListCourseByCategory;

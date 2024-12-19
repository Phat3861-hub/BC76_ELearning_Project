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
    <>
      <CategoryHeader category={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryBanner category={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryCarousel />
      <ListJobByCategory maDanhMuc={maDanhMuc} tenDanhMuc={tenDanhMuc} />
      <CategoryCompany />
      <NewPostCarousel />
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        {/* Input email */}
        <div>
          <label htmlFor="taiKhoan">Email</label>
          <Input
            name="taiKhoan" // Đảm bảo tên trường phải khớp với tên trong Formik
            value={values.taiKhoan} // Sử dụng giá trị từ Formik
            onBlur={handleBlur} // Xử lý sự kiện blur
            onChange={handleChange} // Xử lý sự kiện thay đổi
            placeholder="Vui lòng nhập email"
          />
          {errors.taiKhoan && touched.taiKhoan && (
            <p className="text-red-500">{errors.taiKhoan}</p> // Hiển thị lỗi nếu có
          )}
        </div>

        {/* Input password */}
        <div>
          <label htmlFor="matKhau">Mật khẩu</label>
          <Input
            name="matKhau" // Đảm bảo tên trường phải khớp với tên trong Formik
            value={values.matKhau} // Sử dụng giá trị từ Formik
            onBlur={handleBlur} // Xử lý sự kiện blur
            onChange={handleChange} // Xử lý sự kiện thay đổi
            placeholder="Vui lòng nhập mật khẩu"
            type="password" // Đảm bảo trường mật khẩu là type password
          />
          {errors.matKhau && touched.matKhau && (
            <p className="text-red-500">{errors.matKhau}</p> // Hiển thị lỗi nếu có
          )}
        </div>

        {/* Submit button */}
        <div>
          <button type="submit" className="py-2 px-4 border border-black">
            Cập nhật
          </button>
        </div>
      </form>
    </>
  );
};

export default ListCourseByCategory;

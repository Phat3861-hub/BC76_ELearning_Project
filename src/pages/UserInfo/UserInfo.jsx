import React from "react";

import { Avatar, Input, Tabs } from "antd";
import PersonalInfo from "./components/PersonalInfo";
import { UserOutlined } from "@ant-design/icons";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import PersonalCourseInfo from "./components/PersonalCourseInfo";
import "./UserInfo.scss";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <div className="text-lg font-semibold hover:text-yellow-300 duration-100">
        Thông tin cá nhân
      </div>
    ),
    children: <PersonalInfo />,
  },
  {
    key: "2",
    label: (
      <div className="text-lg font-semibold hover:text-yellow-300 duration-100">
        Khóa học của tôi
      </div>
    ),
    children: <PersonalCourseInfo />,
  },
];

const UserInfo = () => {
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

  const dataUser = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className="py-10">
      <div className="container ">
        <div className="space-y-5">
          <div className=" mr-10 space-y-5">
            <div className="flex items-center space-x-5">
              <Avatar size={100} className="bg-black">
                <h1 className="text-4xl">{dataUser.hoTen.charAt(0)}</h1>
              </Avatar>
              <div className="space-y-1">
                <p className="font-semibold text-lg">
                  Họ tên : {dataUser.hoTen}
                </p>
                <p>Email: {dataUser.email}</p>
                <p>Số điện thoại : {dataUser.soDT}</p>
              </div>
            </div>
          </div>
          <Tabs
            className="w-full "
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      </div>
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
    </div>
  );
};

export default UserInfo;

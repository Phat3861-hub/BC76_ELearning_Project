import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { nguoiDungService } from "../../services/nguoiDung.service";

const SignUp = () => {
  const navigate = useNavigate();

  const { handleBlur, handleChange, touched, errors, handleSubmit, values } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
        nguoiDungService
          .signUp(values)
          .then((res) => {
            console.log(res);
            message.success("Đăng ký thành công");
            navigate(pathDefault.signIn);
          })
          .catch((err) => {
            console.log(err);
            message.error(err.response.data);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống tài khoản!"),
        matKhau: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự.").required("Vui lòng không bỏ trống mật khẩu!"),
        hoTen: Yup.string().required("Vui lòng không bỏ trống họ tên!"),
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email!")
          .required("Vui lòng không bỏ trống email!"),
        soDT: Yup.string()
          .matches(/^\+?(84|0)[35789]\d{8}$/, "Số điện thoại không hợp lệ!")
          .required("Vui lòng không bỏ trống số điện thoại!"),
      }),
    });

  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center lg:items-start xl:bg-none bg-[url('/img/signin.jpg')] bg-no-repeat bg-cover">
        <div className="xl:w-1/2 w-full h-full flex flex-col justify-center items-center p-6">
          <div className="xl:mr-auto mb-3 xl:text-black text-white">
            <Link to={pathDefault.homePage} className="text-xl">
              <ArrowLeftOutlined className="mr-2" />
              Về trang chủ
            </Link>
          </div>

          <div className="w-full flex flex-col max-w-md p-10 bg-white rounded-md shadow-xl border">
            <div className="w-full flex flex-col mb-6 space-y-3">
              <img src="/img/logo-signin.png" alt="" className="h-20" />
              <h1 className="font-semibold text-3xl">Trang đăng ký</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <label htmlFor="taiKhoan" className="block text-sm font-medium">
                  Tài khoản
                </label>
                <Input
                  name="taiKhoan"
                  value={values.taiKhoan}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập tài khoản"
                  className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3"
                />
                {errors.taiKhoan && touched.taiKhoan && (
                  <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
                )}
              </div>

              <div>
                <label htmlFor="matKhau" className="block text-sm font-medium">
                  Mật khẩu
                </label>
                <Input
                  name="matKhau"
                  value={values.matKhau}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập mật khẩu"
                  type="password"
                  className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3"
                />
                {errors.matKhau && touched.matKhau && (
                  <p className="text-red-500 text-xs mt-1">{errors.matKhau}</p>
                )}
              </div>

              <div>
                <label htmlFor="hoTen" className="block text-sm font-medium">
                  Họ tên
                </label>
                <Input
                  name="hoTen"
                  value={values.hoTen}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập họ tên"
                  className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3"
                />
                {errors.hoTen && touched.hoTen && (
                  <p className="text-red-500 text-xs mt-1">{errors.hoTen}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập email"
                  className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="soDT" className="block text-sm font-medium">
                  Số điện thoại
                </label>
                <Input
                  name="soDT"
                  value={values.soDT}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập số điện thoại"
                  className="w-full mt-1 border border-gray-300 rounded-md py-2 px-3"
                />
                {errors.soDT && touched.soDT && (
                  <p className="text-red-500 text-xs mt-1">{errors.soDT}</p>
                )}
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full p-3 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden xl:block xl:w-1/2 min-h-screen">
          <img
            src="/img/signin.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, message } from "antd";
import useViewPort from "../../hook/useViewPort";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { useDispatch } from "react-redux";
import { handleUpdateUser } from "../../redux/slice/user.slice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            dispatch(handleUpdateUser(res.data));
            message.success("Đăng nhập thành công !");
            setTimeout(() => {
              navigate(pathDefault.homePage);
              window.location.reload();
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
            message.error(err.response.data);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống!"),
        matKhau: Yup.string().required("Vui lòng không bỏ trống!"),
      }),
    });

  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row items-center lg:items-start  xl:bg-none bg-[url('/img/signin.jpg')] bg-no-repeat bg-cover">
        <div className="xl:w-1/2 w-full h-full flex flex-col justify-center items-center p-6 ">
          <div className="xl:mr-auto mb-10 xl:text-black text-white">
            <Link to={pathDefault.homePage} className="text-xl">
              <ArrowLeftOutlined className="mr-2" />
              Về trang chủ
            </Link>
          </div>

          {/* Login form */}
          <div className=" w-full flex flex-col max-w-md p-10 bg-white rounded-md shadow-xl border">
            <div className="w-full flex flex-col mb-6 space-y-3">
              <img src="/img/logo-signin.png" alt="" className="h-20" />
              <h1 className="font-semibold text-3xl ">Trang đăng nhập</h1>
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Ghi nhớ đăng nhập</p>
                </div>
                <p className="text-sm font-medium underline cursor-pointer">
                  Quên mật khẩu ?
                </p>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full p-3 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Đăng nhập
                </button>
              </div>
              <div className="w-full text-center mt-4">
                <span>
                  Chưa có tài khoản?{" "}
                  <Link
                    to={pathDefault.signUp}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Đăng ký tại đây
                  </Link>
                </span>
              </div>
            </form>
          </div>

          {/* Sign up link */}
        </div>
        {/* Background image for smaller screens */}
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

export default SignIn;

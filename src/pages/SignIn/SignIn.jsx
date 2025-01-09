import React from "react";
import { NavLink, useNavigate } from "react-router";
import "./signIn.scss";
import * as Yup from "yup";
import { Button, Input, message } from "antd";
import { ButtonOutline } from "../../components/Button/buttonCustom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import InputCustom from "../../components/Input/InputCustom";
import { pathDefault } from "../../common/path";
import { handleUpdateUser } from "../../redux/slice/user.slice";
import { nguoiDungService } from "../../services/nguoiDung.service";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống"),
      matKhau: Yup.string().required("Mật khẩu không được để trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
      nguoiDungService
        .signIn(values)
        .then((res) => {
          console.log(res);
          localStorage.setItem("userInfo", JSON.stringify(res.data)); // [Object,Object]
          message.success("Đăng nhập thành công");
          dispatch(handleUpdateUser(res.data));
          setTimeout(() => {
            navigate(pathDefault.homePage);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          message.error(err.response.data);
        });
    },
  });

  return (
    <div className="signIn grid grid-cols-2 gap-10 py-10 h-screen bg-slate-400  font-semibold">
      <div className="flex flex-col space-y-6  justify-center items-center">
        <img src="./public/img/logo.png" className="w-3/4" alt="" />
        <img
          src="https://cybersoft.edu.vn/wp-content/uploads/2019/02/cybersoft.edu_.vn-hoc-lap-trinh.png"
          alt=""
        />
      </div>
      <div className=" m-10 px-5 py-8 space-y-10 bg-slate-100 rounded-2xl">
        <h2 className="text-5xl text-center">Đăng nhập</h2>
        <form action="" className="space-y-8" onSubmit={handleSubmit}>
          <InputCustom
            labelContent={"Tài Khoản"}
            placeholder="Tài khoản"
            className="h-11"
            name="taiKhoan"
            id="taiKhoan"
            value={values.taiKhoan}
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.taiKhoan}
            touched={touched.taiKhoan}
          />
          <InputCustom
            labelContent={"Mật khẩu"}
            placeholder="Mật khẩu"
            className="h-11"
            type="password"
            value={values.matKhau}
            id="matKhau"
            name="matKhau"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.matKhau}
            touched={touched.matKhau}
          />
          <Button
            htmlType="submit"
            size="large"
            variant="solid"
            className="bg-black text-white  hover:!border-black hover:!text-black w-full "
          >
            Đăng nhập
          </Button>
        </form>
        <p className="">
          Bạn chưa có tài khoản?{" "}
          <NavLink to={"/sign-up"} className="hover:text-red-400">
            Đăng kí ngay
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

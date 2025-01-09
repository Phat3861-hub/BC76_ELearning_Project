import React from "react";
import { NavLink, useNavigate } from "react-router";
import "./signUp.scss";
import * as Yup from "yup";
import InputCustom from "../../components/Input/InputCustom";
import { ButtonOutline } from "../../components/Button/buttonCustom";
import { useFormik } from "formik";
import { Button, message } from "antd";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { pathDefault } from "../../common/path";
import { useDispatch } from "react-redux";
import { handleUpdateUser } from "../../redux/slice/user.slice";

const SignUp = () => {
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
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản là bắt buộc"),
      matKhau: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu là bắt buộc"),
      hoTen: Yup.string().required("Họ tên là bắt buộc"),
      soDT: Yup.string()
        .matches(/^\d+$/, "Số điện thoại chỉ được chứa số")
        .required("Số điện thoại là bắt buộc"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email là bắt buộc"),
    }),
    onSubmit: (values) => {
      console.log(values);
      nguoiDungService
        .signUp(values)
        .then((res) => {
          console.log(res);
          localStorage.setItem("userInfo", JSON.stringify(res.data)); // [Object,Object]
          message.success("Đăng ký thành công");
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
    <div className="bg h-full flex justify-center items-center gap-10">
      <div className="bg-slate-200 px-5 py-10 space-y-7 rounded-md w-1/3 my-10">
        <h2 className="text-center text-4xl">Đăng ký tài khoản mới</h2>
        <form action="" onSubmit={handleSubmit} className="space-y-3">
          <InputCustom
            labelContent={"Họ tên"}
            value={values.hoTen}
            id="hoTen"
            name="hoTen"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.hoTen}
            touched={touched.hoTen}
            placeholder={"Vui lòng nhập họ tên"}
          />
          <InputCustom
            labelContent={"Tài khoản"}
            value={values.taiKhoan}
            id="taiKhoan"
            name="taiKhoan"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.taiKhoan}
            touched={touched.taiKhoan}
            placeholder={"Vui lòng nhập tài khoản"}
          />
          <InputCustom
            type="password"
            labelContent={"Mật khẩu"}
            value={values.matKhau}
            id="matKhau"
            name="matKhau"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.matKhau}
            touched={touched.matKhau}
            placeholder={"Vui lòng nhập mật khẩu"}
          />
          <InputCustom
            labelContent={"Email"}
            value={values.email}
            id="email"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            placeholder={"Vui lòng nhập email"}
          />

          <InputCustom
            labelContent={"Số Điện Thoại"}
            value={values.soDT}
            id="soDT"
            name="soDT"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.soDT}
            touched={touched.soDT}
            placeholder={"Vui lòng nhập số điện thoại"}
          />
          <Button
            htmlType="submit"
            className="w-2/5 bg-black text-white hover:!text-black hover:!border-black text-lg h-10"
          >
            Đăng ký
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

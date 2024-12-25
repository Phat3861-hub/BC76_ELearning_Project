import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup"; // Thêm Yup để kiểm tra
import InputCustom from "../../../components/Input/InputCustom";
import { Button, message } from "antd";
import { nguoiDungService } from "../../../services/nguoiDung.service";
import SelectCustom from "../../../components/Select/SelectCustom";

const FormAddUser = ({ handleCloseModal, layDanhSachNguoiDung }) => {
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
      maLoaiNguoiDung: "",
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
      maLoaiNguoiDung: Yup.string()
        .oneOf(["GV", "HV"], "Vui lòng chọn loại người dùng hợp lệ")
        .required("Loại người dùng là bắt buộc"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email là bắt buộc"),
    }),
    onSubmit: (values) => {
      console.log(values);
      nguoiDungService
        .themNguoiDung(values)
        .then((res) => {
          console.log(res);
          handleCloseModal();
          layDanhSachNguoiDung();
          message.success("Thêm người dùng thành công");
        })
        .catch((err) => {
          console.log(err);
          message.error("Thêm người dùng thất bại");
        });
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="space-y-3">
        <InputCustom
          value={values.taiKhoan}
          id="taiKhoan"
          name="taiKhoan"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.taiKhoan}
          touched={touched.taiKhoan}
          labelContent={"Tài khoản"}
          placeholder={"Vui lòng nhập tài khoản"}
        />

        <InputCustom
          type="password"
          value={values.matKhau}
          id="matKhau"
          name="matKhau"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.matKhau}
          touched={touched.matKhau}
          labelContent={"Mật khẩu"}
          placeholder={"Vui lòng nhập mật khẩu"}
        />

        <InputCustom
          value={values.hoTen}
          id="hoTen"
          name="hoTen"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.hoTen}
          touched={touched.hoTen}
          labelContent={"Họ và tên"}
          placeholder={"Vui lòng nhập họ tên"}
        />

        <InputCustom
          value={values.soDT}
          id="soDT"
          name="soDT"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.soDT}
          touched={touched.soDT}
          labelContent={"Số điện thoại"}
          placeholder={"Vui lòng nhập số điện thoại"}
        />

        <SelectCustom
          handleChange={(value, option) => {
            setFieldValue("maLoaiNguoiDung", value);
          }}
          options={[
            {
              value: "GV",
              label: "Giáo vụ",
            },
            {
              value: "HV",
              label: "Học viên",
            },
          ]}
          labelContent={"Chọn loại người dùng"}
        />

        <InputCustom
          type="email"
          value={values.email}
          id="email"
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
          labelContent={"Email"}
          placeholder={"Vui lòng nhập email"}
        />

        <Button
          htmlType="submit"
          size="large"
          variant="solid"
          className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500 "
        >
          Thêm người dùng
        </Button>
      </form>
    </div>
  );
};

export default FormAddUser;

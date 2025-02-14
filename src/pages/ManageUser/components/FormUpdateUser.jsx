import React, { useEffect, useState } from "react";
import { nguoiDungService } from "../../../services/nguoiDung.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, message } from "antd";
import SelectCustom from "../../../components/Select/SelectCustom";
const FormUpdateUser = ({ taiKhoanchon, layDanhSachNguoiDung }) => {
  const [isEditable, setIsEditable] = useState(false);
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
      taiKhoan: taiKhoanchon.taiKhoan || "",
      hoTen: taiKhoanchon.hoTen || "",
      soDT: taiKhoanchon.soDt || "",
      maLoaiNguoiDung: taiKhoanchon.maLoaiNguoiDung || "",
      maNhom: "GP01",
      email: taiKhoanchon.email || "",
      matKhau: taiKhoanchon.matKhau || "",
    },
    enableReinitialize: true, // Để cập nhật giá trị khi thay đổi initialValues
    onSubmit: (values) => {
      nguoiDungService
        .capNhatNguoiDung(values)
        .then((res) => {
          console.log(res);
          setIsEditable(false);
          layDanhSachNguoiDung();
          message.success("Cập nhật người dùng thành công");
        })
        .catch((err) => {
          console.log(err);
          message.error("Cập nhật người dùng thất bại");
        });
    },
    validationSchema: Yup.object({
      hoTen: Yup.string().required("Họ tên là bắt buộc."),
      soDT: Yup.string()
        .matches(/^\d{10}$/, "Số điện thoại không hợp lệ.")
        .required("Số điện thoại là bắt buộc."),
      matKhau: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự."),
      email: Yup.string()
        .email("Email không hợp lệ.")
        .required("Email là bắt buộc."),
    }),
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10 mb-5">
          <div>
            <label className="text-lg font-semibold" htmlFor="hoTen">
              Họ tên
            </label>
            <Input
              name="hoTen"
              value={values.hoTen}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEditable} // Chỉ được chỉnh sửa khi ở chế độ chỉnh sửa
            />
            {touched.hoTen && errors.hoTen && (
              <div className="text-red-500">{errors.hoTen}</div>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold" htmlFor="soDT">
              Số điện thoại
            </label>
            <Input
              name="soDT"
              value={values.soDT}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEditable}
            />
            {touched.soDT && errors.soDT && (
              <div className="text-red-500">{errors.soDT}</div>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold" htmlFor="taiKhoan">
              Tài khoản
            </label>
            <Input
              name="taiKhoan"
              value={values.taiKhoan}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled
            />
          </div>

          <div>
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEditable}
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold" htmlFor="taiKhoan">
              Mật khẩu
            </label>
            <Input
              name="matKhau"
              value={values.matKhau}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEditable}
            />
            {touched.matKhau && errors.matKhau && (
              <div className="text-red-500">{errors.matKhau}</div>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold" htmlFor="maLoaiNguoiDung">
              Loại người dùng
            </label>
            <SelectCustom
              value={values.maLoaiNguoiDung == "GV" ? "Giáo vụ" : "Học viên"}
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
              disabled={!isEditable}
            />
          </div>
        </div>
        <Button
          type="primary"
          className="py-2 px-4"
          onClick={() => {
            if (isEditable) {
              handleSubmit(); // Gửi form khi đang ở chế độ chỉnh sửa
            } else {
              setIsEditable(true); // Chuyển sang chế độ chỉnh sửa
            }
          }}
        >
          {isEditable ? "Lưu thông tin" : "Chỉnh sửa"}
        </Button>
      </form>
    </div>
  );
};

export default FormUpdateUser;

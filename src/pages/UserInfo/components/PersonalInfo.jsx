import { Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { nguoiDungService } from "../../../services/nguoiDung.service";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalInfo = () => {
  const [thongTinTaiKhoan, setThongTinTaiKhoan] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // Trạng thái chỉnh sửa

  // Lấy thông tin người dùng từ localStorage
  const dataUser = JSON.parse(localStorage.getItem("userInfo"));
  const layThongTinTaiKhoan = () => {
    nguoiDungService
      .thongTinTaiKhoan(dataUser?.taiKhoan)
      .then((res) => {
        console.log(res);
        setThongTinTaiKhoan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (dataUser?.taiKhoan) {
      layThongTinTaiKhoan();
    }
  }, [dataUser?.taiKhoan]);
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
      taiKhoan: thongTinTaiKhoan?.taiKhoan || "",
      matKhau: thongTinTaiKhoan?.matKhau || "",
      hoTen: thongTinTaiKhoan?.hoTen || "",
      soDT: thongTinTaiKhoan?.soDT || "",
      maLoaiNguoiDung: thongTinTaiKhoan?.maLoaiNguoiDung || "",
      maNhom: "GP01",
      email: thongTinTaiKhoan?.email || "",
    },
    enableReinitialize: true, // Để cập nhật giá trị khi thay đổi initialValues
    onSubmit: (values) => {
      const formattedValues = {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        hoTen: values.hoTen,
        soDT: values.soDT,
        maLoaiNguoiDung: values.maLoaiNguoiDung,
        maNhom: "GP01", // Giá trị mặc định
        email: values.email,
      };

      nguoiDungService
        .updateInfo(formattedValues)
        .then((res) => {
          console.log(res);
          // Lấy dữ liệu hiện tại từ localStorage
          const currentUserData =
            JSON.parse(localStorage.getItem("userInfo")) || {};

          // Tạo dữ liệu mới bằng cách giữ nguyên cấu trúc và cập nhật trường bị thay đổi
          const updatedData = {
            ...currentUserData,
            hoTen: values.hoTen,
            email: values.email,
            soDT: values.soDT,
            matKhau: values.matKhau, // Nếu bạn muốn cập nhật mật khẩu
          };

          // Cập nhật lại localStorage với dữ liệu mới
          localStorage.setItem("userInfo", JSON.stringify(updatedData));
          setIsEditable(false); // Quay về chế độ chỉ xem sau khi cập nhật thành công
        })
        .catch((err) => {
          console.log(err);
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
    <div className="p-10">
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
            <label className="text-lg font-semibold" htmlFor="matKhau">
              Mật khẩu
            </label>
            <Input.Password
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
              Mã loại người dùng
            </label>
            <Input
              name="maLoaiNguoiDung"
              value={values.maLoaiNguoiDung}
              disabled // Luôn là read-only
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

export default PersonalInfo;

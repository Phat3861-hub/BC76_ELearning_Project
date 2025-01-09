import { Button, Input, message, Select } from "antd";
import React, { useState } from "react";
import InputCustom from "../../../components/Input/InputCustom";
import * as Yup from "yup"; // Thêm Yup để kiểm tra
import SelectCustom from "../../../components/Select/SelectCustom";
import { useFormik } from "formik";
import { DatePicker } from "antd";
import { useSelector } from "react-redux";
import { label } from "framer-motion/client";
import { KhoaHocService } from "../../../services/khoaHoc.service";
import dayjs from "dayjs";

const FormUpdateCourse = ({
  handleCloseModal,
  layDanhSachKhoaHoc,
  layDataKhoaHoc,
}) => {
  const user = useSelector((state) => state.userSlice);

  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true, // Để cập nhật giá trị khi thay đổi initialValues

    initialValues: {
      maKhoaHoc: layDataKhoaHoc.maKhoaHoc || "",
      biDanh: layDataKhoaHoc.biDanh || "",
      tenKhoaHoc: layDataKhoaHoc.tenKhoaHoc || "",
      moTa: layDataKhoaHoc.moTa || "",
      luotXem: layDataKhoaHoc.luotXem || 0,
      danhGia: layDataKhoaHoc.danhGia || 0,
      hinhAnh: layDataKhoaHoc.hinhAnh || "",
      maNhom: "GP01",
      ngayTao: layDataKhoaHoc.ngayTao || "",
      maDanhMucKhoaHoc: layDataKhoaHoc.danhMucKhoaHoc || "",
      taiKhoanNguoiTao: `${user.user.taiKhoan}`,
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string().required("Vui lòng không để trống"),
      biDanh: Yup.string().required("Vui lòng không để trống"),
      tenKhoaHoc: Yup.string().required("Vui lòng không để trống"),
      // maNhom: Yup.string().required("Vui lòng không để trống"),
      ngayTao: Yup.string().required("Vui lòng không để trống"),
      maDanhMucKhoaHoc: Yup.string().required("Vui lòng không để trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
      KhoaHocService.suaKhoaHoc(values)
        .then((res) => {
          console.log(res);
          layDanhSachKhoaHoc();
          handleCloseModal();
          message.success("Sửa khóa học thành công");
        })
        .catch((err) => {
          console.log(err);
          message.error(err.response.data);
        });
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="space-y-3">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label
              className="font-medium mb-2 inline-block"
              htmlFor="Mã khóa học"
            >
              Mã khóa học
            </label>
            <Input
              value={values.maKhoaHoc}
              onChange={values.handleChange}
              onBlur={values.handleBlur}
              name="maKhoaHoc"
              disabled
            />
          </div>
          <InputCustom
            value={values.biDanh}
            id="biDanh"
            name="biDanh"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.biDanh}
            touched={touched.biDanh}
            labelContent={"Bí danh"}
            placeholder={"Vui lòng nhập Bí danh"}
          />
        </div>
        <InputCustom
          value={values.tenKhoaHoc}
          id="tenKhoaHoc"
          name="tenKhoaHoc"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.tenKhoaHoc}
          touched={touched.tenKhoaHoc}
          labelContent={"Tên khóa học"}
          placeholder={"Vui lòng nhập tên khóa học"}
        />
        <div className="grid grid-cols-2 gap-5">
          <InputCustom
            value={values.luotXem}
            id="luotXem"
            name="luotXem"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.luotXem}
            touched={touched.luotXem}
            labelContent={"Lượt xem"}
            placeholder={"Vui lòng nhập lượt xem"}
            type="number"
          />
          <InputCustom
            value={values.danhGia}
            id="danhGia"
            name="danhGia"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.danhGia}
            touched={touched.danhGia}
            labelContent={"Đánh giá"}
            placeholder={"Vui lòng nhập đánh giá"}
            type="number"
          />

          <div>
            <div>
              <label className="font-medium mb-2 inline-block">Ngày tạo</label>
            </div>
            <DatePicker
              value={dayjs(values.ngayTao)}
              format={"DD-MM-YYYY"}
              disabled
              className="h-auto w-full"
              //   onChange={(day, daystring) => {
              //     setFieldValue("ngayTao", daystring);
              //   }}
            />
            {touched.ngayTao && errors.ngayTao ? (
              <p className="text-red-500 mt-2">{errors.ngayTao}</p>
            ) : null}
          </div>

          <SelectCustom
            value={values.maDanhMucKhoaHoc.tenDanhMucKhoaHoc}
            handleChange={(value, option) => {
              setFieldValue("maDanhMucKhoaHoc", value);
            }}
            options={[
              {
                label: "Lập trình Backend",
                value: "BackEnd",
              },
              {
                label: "Thiết kế Web",
                value: "Design",
              },
              {
                label: "Lập trình di động",
                value: "DiDong",
              },
              {
                label: "Lập trình Front end",
                value: "FrontEnd",
              },
              {
                label: "Lập trình Full Stack",
                value: "FullStack",
              },
              {
                label: "Tư duy lập trình",
                value: "TuDuy",
              },
            ]}
            labelContent={"Chọn mã loại khóa học"}
          />
        </div>
        <InputCustom
          value={values.hinhAnh}
          id="hinhAnh"
          name="hinhAnh"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.hinhAnh}
          touched={touched.hinhAnh}
          labelContent={"Hình ảnh"}
          placeholder={"Vui lòng nhập hình ảnh"}
        />
        <div>
          <label className="font-medium mb-2 inline-block">Mô tả</label>
          <Input.TextArea
            value={values.moTa}
            name="moTa"
            id="moTa"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <Button
          htmlType="submit"
          size="large"
          variant="solid"
          className="bg-yellow-500 text-white hover:!text-yellow-500 hover:!border-yellow-500 "
        >
          Sửa
        </Button>
      </form>
    </div>
  );
};

export default FormUpdateCourse;

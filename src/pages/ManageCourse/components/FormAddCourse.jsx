import { Button, Input, message } from "antd";
import React, { useState } from "react";
import InputCustom from "../../../components/Input/InputCustom";
import * as Yup from "yup"; // Thêm Yup để kiểm tra
import SelectCustom from "../../../components/Select/SelectCustom";
import { useFormik } from "formik";
import { DatePicker } from "antd";
import { useSelector } from "react-redux";
import { label } from "framer-motion/client";
import { KhoaHocService } from "../../../services/khoaHoc.service";

const FormAddCourse = ({ handleCloseModal, layDanhSachKhoaHoc }) => {
  const user = useSelector((state) => state.userSlice);
  console.log(user.user.taiKhoan);

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
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "GP01",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
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
      KhoaHocService.themKhoaHoc(values)
        .then((res) => {
          console.log(res);
          layDanhSachKhoaHoc();
          handleCloseModal();
          message.success("Thêm khóa học thành công");
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
          <InputCustom
            value={values.maKhoaHoc}
            id="maKhoaHoc"
            name="maKhoaHoc"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.maKhoaHoc}
            touched={touched.maKhoaHoc}
            labelContent={"Mã khóa học"}
            placeholder={"Vui lòng nhập mã khóa học"}
          />
          <InputCustom
            value={values.biDanh}
            id="biDanh"
            name="biDanh"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.biDanh}
            touched={touched.biDanh}
            labelContent={"Bí danh"}
            placeholder={"Vui lòng nhập bí danh"}
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
              format={"DD-MM-YYYY"}
              className="h-auto w-full"
              onChange={(day, daystring) => {
                setFieldValue("ngayTao", daystring);
              }}
            />
            {touched.ngayTao && errors.ngayTao ? (
              <p className="text-red-500 mt-2">{errors.ngayTao}</p>
            ) : null}
          </div>
          <div>
            <SelectCustom
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
            {touched.maDanhMucKhoaHoc && errors.maDanhMucKhoaHoc ? (
              <p className="text-red-500 mt-2">{errors.maDanhMucKhoaHoc}</p>
            ) : null}
          </div>
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
          placeholder={"Vui lòng chọn hình ảnh"}
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
          className="bg-green-500 text-white hover:!text-green-500 hover:!border-green-500 "
        >
          Thêm khóa học
        </Button>
      </form>
    </div>
  );
};

export default FormAddCourse;

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { KhoaHocService } from "../../../services/khoaHoc.service";
import InputCustom from "../../../components/Input/InputCustom";
import { Select, Button, message } from "antd";

const FormAddCourse = ({ handleCloseModal, layDanhSachKhoaHoc }) => {
  const dataLocal = localStorage.getItem("userInfo");
  const dataUser = JSON.parse(dataLocal);
  const [img, setImg] = useState(null); // Chỉnh sửa state img để lưu file trực tiếp

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file); // Lưu file vào state
      setFieldValue("hinhAnh", file.name); // Lưu tên file vào Formik
    } else {
      setImg(null);
      setFieldValue("hinhAnh", "");
    }
  };

  const uploadImg = (file, tenKhoaHoc, maNhom) => {
    const formData = new FormData();
    const fileExtension = file.name.split(".").pop();
    const newFileName = `${tenKhoaHoc}_${maNhom}.${fileExtension}`;

    formData.append("img", file, newFileName);
    formData.append("tenKhoaHoc", tenKhoaHoc);

    return KhoaHocService.uploadHinhAnh(formData);
  };

  // Danh sách danh mục khóa học
  const danhMucKhoaHoc = [
    { maDanhMuc: "BackEnd", tenDanhMuc: "Lập trình Backend" },
    { maDanhMuc: "Design", tenDanhMuc: "Thiết kế Web" },
    { maDanhMuc: "DiDong", tenDanhMuc: "Lập trình di động" },
    { maDanhMuc: "FrontEnd", tenDanhMuc: "Lập trình Front end" },
    { maDanhMuc: "FullStack", tenDanhMuc: "Lập trình Full Stack" },
    { maDanhMuc: "TuDuy", tenDanhMuc: "Tư duy lập trình" },
  ];
  useEffect(() => {
    return () => {
      if (img) {
        URL.revokeObjectURL(img);
      }
    };
  }, [img]);

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
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: dataUser.taiKhoan,
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string().required("Mã khóa học không được để trống"),
      tenKhoaHoc: Yup.string().required("Tên khóa học không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      maNhom: Yup.string().required("Mã nhóm không được để trống"),
      ngayTao: Yup.date().required("Ngày tạo không được để trống"),
      maDanhMucKhoaHoc: Yup.string().required(
        "Danh mục khóa học không được để trống"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      KhoaHocService.themKhoaHoc(values)
        .then((res) => {
          const { tenKhoaHoc, maNhom } = values;
          if (img) {
            return uploadImg(img, tenKhoaHoc, maNhom)
              .then(() => {
                message.success("Thêm khóa học và upload hình ảnh thành công");
              })
              .catch(() => {
                message.error(
                  "Thêm khóa học thành công nhưng upload hình ảnh thất bại"
                );
              });
          } else {
            message.success("Thêm khóa học thành công");
          }
        })
        .then(() => {
          resetForm(); // Reset form về trạng thái ban đầu
          setImg(null); // Xóa hình ảnh đã chọn
          handleCloseModal();
          layDanhSachKhoaHoc();
        })
        .catch((err) => {
          console.log(err);
          message.error("Thêm khóa học thất bại");
        });
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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

        <InputCustom
          value={values.moTa}
          id="moTa"
          name="moTa"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.moTa}
          touched={touched.moTa}
          labelContent={"Mô tả"}
          placeholder={"Vui lòng nhập mô tả khóa học"}
        />

        <div className="flex flex-col">
          <label htmlFor="maNhom" className="font-medium mb-1">
            Mã nhóm
          </label>
          <Select
            id="maNhom"
            value={values.maNhom}
            onChange={(value) => setFieldValue("maNhom", value)}
            options={[
              { value: "GP01", label: "GP01" },
              { value: "GP02", label: "GP02" },
              { value: "GP03", label: "GP03" },
              { value: "GP04", label: "GP04" },
              { value: "GP05", label: "GP05" },
            ]}
            placeholder="Chọn mã nhóm"
          />
          {errors.maNhom && touched.maNhom && (
            <div className="text-red-500 text-sm mt-1">{errors.maNhom}</div>
          )}
        </div>

        <InputCustom
          type="date"
          value={values.ngayTao}
          id="ngayTao"
          name="ngayTao"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.ngayTao}
          touched={touched.ngayTao}
          labelContent={"Ngày tạo"}
        />

        <div className="flex flex-col">
          <label htmlFor="maDanhMucKhoaHoc" className="font-medium mb-1">
            Mã danh mục khóa học
          </label>
          <Select
            id="maDanhMucKhoaHoc"
            value={values.maDanhMucKhoaHoc}
            onChange={(value) => setFieldValue("maDanhMucKhoaHoc", value)}
            options={danhMucKhoaHoc.map((danhMuc) => ({
              value: danhMuc.maDanhMuc,
              label: danhMuc.tenDanhMuc,
            }))}
            placeholder="Chọn mã danh mục"
          />
          {errors.maDanhMucKhoaHoc && touched.maDanhMucKhoaHoc && (
            <div className="text-red-500 text-sm mt-1">
              {errors.maDanhMucKhoaHoc}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="hinhAnh" className="font-medium mb-1">
            Upload hình ảnh
          </label>
          <input
            type="file"
            id="hinhAnh"
            name="hinhAnh"
            onChange={handleImg}
            className="border p-2 rounded"
          />
          {img && (
            <img
              src={URL.createObjectURL(img)} // Hiển thị ảnh
              alt="Thumbnail"
              className="mt-2 max-w-[150px] max-h-[150px] border rounded"
            />
          )}
          {values.hinhAnh && (
            <div className="text-green-500 text-sm mt-1">
              Đã chọn: {values.hinhAnh}
            </div>
          )}
          {errors.hinhAnh && touched.hinhAnh && (
            <div className="text-red-500 text-sm mt-1">{errors.hinhAnh}</div>
          )}
        </div>

        <Button
          htmlType="submit"
          size="large"
          variant="solid"
          className="col-span-2 bg-green-500 text-white hover:!text-green-500 hover:!border-green-500"
        >
          Thêm khóa học
        </Button>
      </form>
    </div>
  );
};

export default FormAddCourse;

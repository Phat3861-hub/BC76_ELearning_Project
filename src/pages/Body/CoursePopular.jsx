import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { KhoaHocService } from "../../services/khoaHoc.service";
const defaultImage = "/img/logo-title.png";
const CoursePopular = () => {
  const handleImageError = (e) => {
    e.target.src = defaultImage; // Set default image if the original one fails to load
  };
  const [list8Course, setList8Course] = useState([]);
  useEffect(() => {
    KhoaHocService.getDanhSachKhoaHoc()
      .then((res) => {
        console.log(res);
        setList8Course(res.data); // Giả sử API trả về dữ liệu trong `res.data`
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="py-10 bg-[#F2F3FE]" id="course-popular">
      <div className="container">
        <h2 className="text-center mb-10 text-4xl font-bold uppercase">
          Khám phá các khoá học của CyberSoft
        </h2>
        <div className="khoaHocDanhMuc grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {list8Course.slice(8, 16).map((khoaHoc) => (
            <div
              key={khoaHoc.maKhoaHoc}
              className="itemKhoaHocDanhMuc border p-4 rounded-lg space-y-3 flex flex-col justify-between h-full bg-white"
            >
              <div className="mb-2 border-black imageWrapper">
                <NavLink
                  to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                >
                  <img
                    src={khoaHoc.hinhAnh}
                    alt={khoaHoc.tenKhoaHoc}
                    className="w-full h-40 object-cover rounded"
                    onError={handleImageError} // Handle image error
                  />
                </NavLink>
              </div>
              <div className="space-y-3 flex-grow">
                <NavLink
                  to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                >
                  <h2 className="tenKhoaHoc text-lg font-semibold">
                    {khoaHoc.tenKhoaHoc}
                  </h2>
                  <p className="text-gray-700">Ngày tạo: {khoaHoc.ngayTao}</p>
                  <p className="text-gray-700">Lượt xem: {khoaHoc.luotXem}</p>
                  <p className="text-gray-700">
                    Người tạo: {khoaHoc.nguoiTao.hoTen} -{" "}
                    {khoaHoc.nguoiTao.tenLoaiNguoiDung}
                  </p>
                </NavLink>
              </div>
              <div className="mt-4">
                <NavLink
                  to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                  className="py-2 px-3 border border-black rounded-lg hover:bg-black hover:text-white duration-500 block text-center"
                >
                  Ghi Danh
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePopular;

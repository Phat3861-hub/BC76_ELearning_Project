import React, { useEffect, useState } from "react";
import { KhoaHocService } from "../../../services/khoaHoc.service";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";

const CourseRelate = ({ maDanhMuc }) => {
  const nextIcon = `<i class="fa-solid fa-angle-right"></i>`;
  const prevIcon = `<i class="fa-solid fa-angle-left"></i>`;
  const [listDanhSachKhoaHocTheoDanhMuc, setListDanhSachKhoaHocTheoDanhMuc] =
    useState([]);

  useEffect(() => {
    KhoaHocService.getDanhSachKhoaHocTheoDanhMuc(maDanhMuc)
      .then((res) => {
        setListDanhSachKhoaHocTheoDanhMuc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [maDanhMuc]);
  return (
    <div className="">
      <div className="container">
        <OwlCarousel
          className=" p-11"
          autoWidth={false}
          loop={false}
          nav={true}
          margin={20}
          smartSpeed={800}
          mouseDrag={true}
          navText={[prevIcon, nextIcon]}
          dots={false}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 4 },
          }}
        >
          {listDanhSachKhoaHocTheoDanhMuc.length > 0 ? (
            listDanhSachKhoaHocTheoDanhMuc.map((khoaHoc) => (
              <div
                key={khoaHoc.maKhoaHoc}
                className="itemKhoaHocDanhMuc border p-4 rounded-lg space-y-3 flex flex-col justify-between h-full"
              >
                <div className="mb-2 border-black imageWrapper">
                  <NavLink
                    to={`/course-detail/id?maKhoaHoc=${khoaHoc.maKhoaHoc}`}
                  >
                    <img
                      src={khoaHoc.hinhAnh}
                      alt={khoaHoc.tenKhoaHoc}
                      className="w-full h-40 object-cover rounded"
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
            ))
          ) : (
            <p>Không có khóa học liên quan.</p>
          )}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CourseRelate;
